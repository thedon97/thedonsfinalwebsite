const path = require("path");
const fs = require("fs");
const sharp = require("sharp");
const manualCatalog = require("../server/data/manual-products.json");
const customerCatalog = require("../server/data/customer-products-20260819.json");

const root = path.resolve(__dirname, "..");
const source = path.join(root, "queen-aurelia-oval-marquise-ring.jpeg");
const widths = [480, 768, 1200];

function catalogOutputName(name) {
  const parsed = path.parse(name);
  return `${parsed.name}-catalog.webp`;
}

async function build() {
  fs.writeFileSync(
    path.join(root, "customer-products.js"),
    `window.__CUSTOMER_PRODUCTS__=${JSON.stringify(customerCatalog.items)};\n`,
    "utf8",
  );
  await Promise.all(widths.flatMap((width) => [
    sharp(source).resize({ width, withoutEnlargement: true }).webp({ quality: 78, effort: 5 }).toFile(path.join(root, `queen-aurelia-hero-${width}.webp`)),
    sharp(source).resize({ width, withoutEnlargement: true }).avif({ quality: 52, effort: 5 }).toFile(path.join(root, `queen-aurelia-hero-${width}.avif`)),
  ]));

  const images = [...new Set([...manualCatalog.items, ...customerCatalog.items].map((item) => item.image).filter(Boolean))]
    .filter((name) => fs.existsSync(path.join(root, name)));
  for (let index = 0; index < images.length; index += 8) {
    await Promise.all(images.slice(index, index + 8).map((name) => sharp(path.join(root, name))
      .resize({ width: 720, height: 720, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 74, effort: 4 })
      .toFile(path.join(root, path.dirname(name), catalogOutputName(path.basename(name))))));
  }
  console.log(`Generated the customer catalog, ${widths.length * 2} responsive hero images, and ${images.length} catalog images.`);
}

build().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
