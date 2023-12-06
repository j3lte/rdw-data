import { render } from "https://deno.land/x/eta@v1.14.2/mod.ts";
import { emptyDir } from "https://deno.land/x/dnt@0.34.0/mod.ts";

import { DataResult, ResponseData, WithSodaVersion } from "./util/interfaces.ts";
import { fixTitle, mapColumns, updateText } from "./util/mod.ts";

const runCmd = async (cmd: string[]) => {
  const cmdFirst = cmd.shift() as string;
  const p = new Deno.Command(cmdFirst, { stdout: "piped", stderr: "piped", args: cmd });
  const { code, stdout, stderr } = await p.output();

  return {
    output: new TextDecoder().decode(stdout),
    error: new TextDecoder().decode(stderr),
    code,
  };
};

const thisDir = new URL(".", import.meta.url).pathname;
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

export const getLatestVersion = async () => {
  const mod = "https://deno.land/x/soda/mod.ts";
  const { output, code } = await runCmd([
    "deno",
    "info",
    mod,
    "--json",
    "--quiet",
    "--reload",
  ]);
  if (code !== 0) {
    console.log("Error fetching latest version");
    return null;
  }
  const info = JSON.parse(output) as {
    redirects?: Record<string, string>;
  };
  if (info.redirects?.[mod]) {
    const version = info.redirects[mod].split("@")[1].replace("/mod.ts", "");
    console.log(`Latest SodaQuery version: ${version}`);
    return version;
  }
  console.error("Error fetching latest version");
  return null;
};

const updateReadme = async (data: DataResult[], sodaVersion: string): Promise<void> => {
  const filePath = new URL(import.meta.url).pathname;
  const dirPath = filePath.split("/").slice(0, -1).join("/");
  const readmePath = `${dirPath}/../README.md`;

  const readme = await Deno.readTextFile(readmePath);

  const dataOverview = `| Provider | Name | Category |\n` +
    `| --- | --- | --- |\n` +
    data.map((item) => {
      return `| \`${item.name}\` | [${item.full_name}](${item.link}) | ${item.category} |`;
    }).join("\n");

  const list = data.map((item) => {
    const columns = item.columns.map((col) => {
      console.log(col);
      return `| \`${col.big_name}\` | ${col.name} | ${col.datatype} |`;
    }).join("\n");

    return `<details><summary>${item.name}</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
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
  const resultData = (await getData(url)).sort((a, b) => a.name.localeCompare(b.name));
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

run();
