const fs = require("fs");
const path = require("path");
const seo = require("../server/seo-pages");

function response() {
  return {
    headers: {},
    statusCode: 200,
    body: "",
    setHeader(name, value) { this.headers[String(name).toLowerCase()] = value; },
    end(value = "") { this.body += value; },
  };
}

(async () => {
  const res = response();
  await seo({ url: "/api/index?route=seo&action=page&path=/", method: "GET", headers: {} }, res);
  if (res.statusCode !== 200) throw new Error(`Homepage renderer returned ${res.statusCode}`);
  if ((res.body.match(/<h1\b/gi) || []).length !== 1) throw new Error("Generated homepage must contain exactly one H1");
  if (!/application\/ld\+json/i.test(res.body)) throw new Error("Generated homepage must contain structured data");
  const html = `${res.body.replace(/\r\n?/g, "\n").replace(/[ \t]+$/gm, "").trim()}\n`;
  fs.writeFileSync(path.resolve(__dirname, "../index.html"), html, "utf8");
  console.log(`Generated server-rendered homepage (${Buffer.byteLength(html)} bytes).`);
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
