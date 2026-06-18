import { render } from "eta";
import { emptyDir } from "@deno/dnt";

import type { DataResult, ResponseData, WithSodaVersion } from "./util/interfaces.ts";
import { fixTitle, mapColumns, updateText } from "./util/mod.ts";

// import.meta.dirname is the OS-native dir (e.g. C:\...\scripts on Windows),
// unlike new URL(".", import.meta.url).pathname which yields an unreadable
// /C:/... path on Windows. Keep the trailing slash the path concatenations expect.
const thisDir = `${import.meta.dirname}/`;
const url =
  "https://opendata.rdw.nl/api/catalog/v1?domains=opendata.rdw.nl&limit=1000&offset=0&only=datasets&order=updatedAt DESC&show_unsupported_data_federated_assets=false&show_visibility=true&visibility=open";

const outputFolder = `${thisDir}../src/providers/`;
const rootFolder = `${thisDir}../src/`;

const getData = async (url: string) => {
  const response = await fetch(url).then((res) => res.json()) as ResponseData;
  const resultData: Array<DataResult> = [];

  response.results.forEach((result) => {
    const description = (result.resource.description || "")
      .trim()
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    const data: DataResult = {
      name: fixTitle(result.resource.name),
      full_name: (result.resource.name || "").trim(),
      description,
      metadata_updated_at: (result.resource.metadata_updated_at || "").trim(),
      publication_date: (result.resource.publication_date || "").trim(),
      license: (result.metadata.license || "Unknown").trim(),
      // RDW's own, more specific license declaration (e.g. "Creative Commons 0
      // (CC0)") lives in classification.domain_metadata under Licentie_Licentie.
      license_detail: (result.classification.domain_metadata
        ?.find((m) => m.key === "Licentie_Licentie")?.value || "Unknown").trim(),
      tags: (result.classification.domain_tags ?? []).map((t) => t.trim()).filter((t) =>
        t.length > 0
      ),
      category: (result.classification.domain_category ?? "Unknown").trim(),
      domain: (result.metadata.domain || "").trim(),
      link: (result.link || "").trim(),
      permalink: (result.permalink || "").trim(),
      id: result.resource.id.trim(),
      owner: (result.owner?.display_name ?? "Unknown").trim(),
      creator: (result.creator?.display_name ?? "Unknown").trim(),
      columns: mapColumns(result),
    };

    resultData.push(data);
  });

  console.log(`Found ${resultData.length} datasets.`);

  return resultData;
};

const renderRemplate = (template: string, item: WithSodaVersion) =>
  (render(template, {
    item,
  }, {
    async: true,
    cache: true,
    rmWhitespace: false,
    autoEscape: false,
    autoTrim: false,
  }) as Promise<string>).then((result) => {
    const fixed = result
      .replace(/^(^\/\/\s?\n)/g, "//\n")
      .replace(/^(\/\/\s?\r\n){2,}/g, "//\r\n");

    // replace multiple lines that only have a * with a single line
    const fixed2 = fixed.replace(/(^\s+\*\s?[r\|\n]){1,3}/gm, "$1");

    return fixed2;
  });

const renderAndWrite = async (template: string, item: WithSodaVersion) => {
  const rendered = await renderRemplate(template, item);
  return Deno.writeTextFile(`${outputFolder}/${item.name}.ts`, rendered);
};

// soda is pinned via the import map in deno.json (jsr:@j3lte/soda@^x.y.z).
// Derive the version from there so the generator, README and npm build all
// stay in sync with the single source of truth.
export const getLatestVersion = async (): Promise<string | null> => {
  const denoJsonPath = new URL("../deno.json", import.meta.url);
  const denoJson = JSON.parse(await Deno.readTextFile(denoJsonPath)) as {
    imports?: Record<string, string>;
  };
  const spec = denoJson.imports?.soda ?? "";
  const version = spec.match(/(\d+\.\d+\.\d+)/)?.[1] ?? null;
  if (!version) {
    console.error("Could not determine soda version from deno.json imports");
    return null;
  }
  console.log(`SodaQuery version (from deno.json): ${version}`);
  return version;
};

const updateReadme = async (data: DataResult[], sodaVersion: string): Promise<void> => {
  const readmePath = `${thisDir}../README.md`;

  const readme = await Deno.readTextFile(readmePath);

  const dataOverview = `| Provider | Name | Category |\n` +
    `| --- | --- | --- |\n` +
    data.map((item) => {
      return `| \`${item.name}\` | [${item.full_name}](${item.link}) | ${item.category} |`;
    }).join("\n");

  const list = data.map((item) => {
    const columns = item.columns.map((col) => {
      return `| \`${col.big_name}\` | \`${col.field_name}\` | ${col.name} | ${col.datatype} |`;
    }).join("\n");

    return `<details><summary>${item.name}</summary>

### API

Documentation can be found [here](https://jsr.io/@j3lte/rdw-data/doc/~/${item.name})

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
${columns}

**Link:** ${item.link}
</details>
`;
  }).join("\n");

  const res = [
    `## API`,
    `These are auto generated providers and use \`soda-query@${sodaVersion}\`.`,
    `### Overview`,
    dataOverview,
    `### Details`,
    list,
  ].join("\n\n");

  const updatedReadme = updateText(
    "FUNCTIONS",
    readme,
    res,
  );

  await Deno.writeTextFile(
    readmePath,
    updatedReadme,
  );
};

const run = async ({ dryRun }: { dryRun?: boolean } = {}) => {
  const lastSodaVersion = await getLatestVersion();
  if (!lastSodaVersion) {
    console.log("Error fetching latest version, aborting");
    return;
  }
  // De-collide provider names: distinct datasets can collapse to the same name
  // via fixTitle() (e.g. two "Gebieden"). Previously the duplicates were dropped,
  // losing data. Instead, when a name occurs more than once, suffix every colliding
  // entry with an incrementing index (Gebieden1, Gebieden2, ...) so each dataset
  // keeps its own provider file and a unique `export { Name }` in mod.ts (avoids
  // TS2300 duplicate identifier). full_name is left untouched as the real title.
  // Sort by name, then by the dataset id as a stable tiebreaker. The API returns
  // results in `updatedAt DESC` order, so datasets that collapse to the same name
  // (e.g. two "Locaties") would otherwise keep whatever relative order the last
  // update happened to produce — flipping their 1/2 suffixes between runs. Sorting
  // on the unique id pins the suffix assignment deterministically.
  const fetched = (await getData(url))
    .sort((a, b) => a.name.localeCompare(b.name) || a.id.localeCompare(b.id));

  const nameCounts = new Map<string, number>();
  for (const item of fetched) {
    nameCounts.set(item.name, (nameCounts.get(item.name) ?? 0) + 1);
  }

  const nameIndex = new Map<string, number>();
  const resultData = fetched.map((item) => {
    if ((nameCounts.get(item.name) ?? 0) <= 1) {
      return item;
    }
    const index = (nameIndex.get(item.name) ?? 0) + 1;
    nameIndex.set(item.name, index);
    const newName = `${item.name}${index}`;
    console.warn(`Renaming duplicate provider name: ${item.name} -> ${newName}`);
    return { ...item, name: newName };
  });
  const providerTemplate = await Deno.readTextFile(`${thisDir}/templates/provider.ts.ejs`);
  const modTemplate = await Deno.readTextFile(`${thisDir}/templates/mod.ts.ejs`);

  if (dryRun) {
    console.log("Dry run, not writing files");
  }

  if (resultData.length === 0) {
    console.log("No results found, aborting");
    return;
  }

  if (!dryRun) {
    console.log(`Make dir: ${outputFolder}`);
    await Deno.mkdir(outputFolder, { recursive: true });

    console.log(`Empty dir: ${outputFolder}`);
    await emptyDir(outputFolder);

    console.log(`Render functions`);
    const modRendered = await (render(modTemplate, {
      items: resultData,
      sodaVersion: lastSodaVersion,
    }, {
      async: true,
      cache: true,
      rmWhitespace: false,
      autoEscape: false,
      autoTrim: false,
    }) as Promise<string>);

    console.log(`Write info.json`);
    await Deno.writeTextFile(
      `${rootFolder}/info.json`,
      JSON.stringify(
        {
          sodaVersion: lastSodaVersion,
          functions: resultData,
        },
        null,
        2,
      ),
    );

    console.log(`Write mod.ts`);
    await Deno.writeTextFile(`${outputFolder}/mod.ts`, modRendered);

    console.log(`Update README.md`);
    await updateReadme(resultData, lastSodaVersion);
  }

  await Promise.all(
    resultData.map((item) => {
      if (dryRun) {
        return renderRemplate(providerTemplate, { ...item, sodaVersion: lastSodaVersion });
      } else {
        return renderAndWrite(providerTemplate, { ...item, sodaVersion: lastSodaVersion });
      }
    }),
  );
};

// Only fetch + regenerate when run directly (e.g. `deno task fetch`).
// build-npm.ts imports getLatestVersion from this module and must NOT trigger
// a network refetch / provider regeneration as a side effect of importing.
if (import.meta.main) {
  run();
}
