// Sync the `version` field in deno.json to the version passed by the publish
// workflow, so `deno publish` (JSR) and the npm build ship the right version.

const version = (Deno.args[0] ?? "").replace(/^v/, "").trim();

if (!/^\d+\.\d+\.\d+/.test(version)) {
  console.error(`Invalid version: "${Deno.args[0] ?? ""}"`);
  Deno.exit(1);
}

const path = new URL("../deno.json", import.meta.url);
const config = JSON.parse(await Deno.readTextFile(path));

config.version = version;

await Deno.writeTextFile(path, `${JSON.stringify(config, null, 2)}\n`);

console.log(`Set deno.json version to ${version}`);
