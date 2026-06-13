import { build, emptyDir } from "@deno/dnt";

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

console.log("Building npm package");

// Providers import soda via the bare "soda" specifier. For Deno/JSR that maps
// to jsr:@j3lte/soda (deno.json). For the npm build we hand dnt a dedicated
// import map that resolves "soda" to npm:soda-query (the npm build of the same
// library) so dnt emits soda-query as a normal external npm dependency.
// (dnt 0.42 cannot remap a jsr specifier onto a different npm package — it
// panics — but resolving straight to an npm: specifier works cleanly.)
await build({
  entryPoints: ["./src/mod.ts"],
  outDir: "./npm",
  importMap: "./scripts/dnt-import-map.json",
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
