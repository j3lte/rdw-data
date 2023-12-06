import { SpecifierMappings } from "https://deno.land/x/dnt@0.39.0/transform.ts";
import { build, emptyDir } from "../dev_deps.ts";
import { getLatestVersion } from "./fetch-databases.ts";

const cleanupTypes = async (dir: string) => {
  for await (const dirEntry of Deno.readDir(dir)) {
    const entryPath = `${dir}/${dirEntry.name}`;
    if (dirEntry.isDirectory) {
      await cleanupTypes(entryPath);
    } else {
      const file = await Deno.readTextFile(entryPath);
      const newFile = file.replaceAll('.js"', '"');
      await Deno.writeTextFile(entryPath, newFile);
    }
  }
};

await emptyDir("./npm");

const latestVersion = await getLatestVersion();

if (!latestVersion) {
  console.log("Error fetching latest version, aborting");
  Deno.exit(1);
}

const mappings: SpecifierMappings = {};
mappings[`https://deno.land/x/soda@${latestVersion}/mod.ts`] = {
  name: "soda-query",
  version: `^${latestVersion}`,
};

console.log("Building npm package");
console.log(mappings);

await build({
  entryPoints: ["./src/mod.ts"],
  outDir: "./npm",
  mappings,
  declaration: "separate",
  skipSourceOutput: true,
  // scriptModule: false,
  shims: {},
  test: false,
  typeCheck: false,
  compilerOptions: {
    importHelpers: true,
    target: "ES2021",
    lib: ["ESNext"],
  },
  package: {
    // package.json properties
    name: "rdw-data",
    version: Deno.args[0] || "1.0.0",
    description: "Get RDW data from the RDW Open Data API",
    license: "MIT",
    publishConfiig: {
      access: "public",
    },
    keywords: [
      "soda",
      "socrata",
      "open data",
      "api",
      "rdw",
      "kenteken",
      "parking",
      "voertuig",
      "deno",
      "typescript",
    ],
    author: {
      name: "J.W. Lagendijk",
      email: "jwlagendijk@gmail.com",
    },
    repository: {
      type: "git",
      url: "git+https://github.com/j3lte/rdw-data.git",
    },
    bugs: {
      url: "https://github.com/j3lte/rdw-data/issues",
    },
  },
  async postBuild(): Promise<void> {
    // steps to run after building and before running the tests
    await Deno.copyFile("./LICENSE", "npm/LICENSE");
    await Deno.copyFile("./README.md", "npm/README.md");
    await cleanupTypes("./npm/types");
  },
});
