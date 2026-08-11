const path = require("path");
const sharp = require("sharp");

const root = path.resolve(__dirname, "..");
const source = path.join(root, "queen-aurelia-oval-marquise-ring.jpeg");
const widths = [480, 768, 1200];

Promise.all(widths.flatMap((width) => [
  sharp(source).resize({ width, withoutEnlargement: true }).webp({ quality: 78, effort: 5 }).toFile(path.join(root, `queen-aurelia-hero-${width}.webp`)),
  sharp(source).resize({ width, withoutEnlargement: true }).avif({ quality: 52, effort: 5 }).toFile(path.join(root, `queen-aurelia-hero-${width}.avif`)),
])).then(() => {
  console.log(`Generated ${widths.length * 2} responsive hero images.`);
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
