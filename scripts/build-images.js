const path = require("path");
const fs = require("fs");
const sharp = require("sharp");
const manualCatalog = require("../server/data/manual-products.json");
const customerCatalog = require("../server/data/customer-products-20260819.json");
const customCollectionCatalog = require("../server/data/custom-collection-products.json");

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

  const catalogImages = [...manualCatalog.items, ...customerCatalog.items, ...customCollectionCatalog.items]
    .flatMap((item) => {
      const image = String(item.image || "");
      if (!/-catalog\.webp$/i.test(image)) return [image];
      const stem = image.replace(/-catalog\.webp$/i, "");
      return [`${stem}.png`, `${stem}.jpeg`, `${stem}.jpg`];
    });
  const staticImageRoots = [root, path.join(root, "public")];
  const discoveredImages = [];
  for (const directory of staticImageRoots) {
    const pending = [directory];
    while (pending.length) {
      const current = pending.pop();
      for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
        const fullPath = path.join(current, entry.name);
        if (entry.isDirectory()) {
          if (!/[\\/](?:dist|node_modules|\.git)(?:[\\/]|$)/i.test(fullPath)) pending.push(fullPath);
          continue;
        }
        if (!/\.(?:png|jpe?g)$/i.test(entry.name) || /-catalog\.webp$/i.test(entry.name)) continue;
        discoveredImages.push(path.relative(root, fullPath));
      }
    }
  }
  const images = [...new Set([...catalogImages, ...discoveredImages].filter(Boolean))]
    .filter((name) => fs.existsSync(path.join(root, name)));
  for (let index = 0; index < images.length; index += 8) {
    await Promise.all(images.slice(index, index + 8).map(async (name) => {
      const floralRender = /^IMG_97/i.test(path.basename(name));
      const size = floralRender ? 1200 : 720;
      const inputPath = path.join(root, name);
      const outputPath = path.join(root, path.dirname(name), catalogOutputName(path.basename(name)));
      const outputExists = fs.existsSync(outputPath);
      if (outputExists && fs.statSync(outputPath).mtimeMs >= fs.statSync(inputPath).mtimeMs) return;
      await sharp(inputPath)
        .resize({ width: size, height: size, fit: "inside", withoutEnlargement: true })
        .webp({ quality: floralRender ? 82 : 74, effort: 4 })
        .toFile(outputPath);
    }));
  }
  console.log(`Generated the customer catalog, ${widths.length * 2} responsive hero images, and ${images.length} catalog images.`);
}

build().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
