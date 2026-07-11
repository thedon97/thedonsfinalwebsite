const fs = require("fs");
const vm = require("vm");

const required = ["main.js", "server/seo-pages.js", "server/site-config.js", "server/send-request.js", "server/create-checkout-session.js"];
for (const file of required) {
  const source = fs.readFileSync(file, "utf8");
  new vm.Script(source, { filename: file });
}
const options = fs.readFileSync("src/data/ringBuilderOptions.ts", "utf8");
if (!options.includes("id:") || !options.includes("assetPath:") || !options.includes("priceModifier:")) {
  throw new Error("Ring builder option model is missing required typed fields.");
}
console.log(`Validated ${required.length} JavaScript modules and the ring-builder option model.`);
