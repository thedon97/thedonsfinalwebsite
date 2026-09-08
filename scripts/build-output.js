const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const output = path.join(root, "dist");
const textFiles = new Set([".css", ".html", ".js", ".json", ".svg", ".txt", ".webmanifest"]);
const publishedFiles = new Set([".avif", ".css", ".html", ".js", ".json", ".svg", ".txt", ".webmanifest", ".webp"]);
const topLevelScripts = new Set(["bootstrap.min.js", "customer-products.js", "main.min.js"]);

function walk(directory) {
  const files = [];
  const pending = [directory];
  while (pending.length) {
    const current = pending.pop();
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) pending.push(fullPath);
      else files.push(fullPath);
    }
  }
  return files;
}

function optimizedRelative(sourcePath) {
  const parsed = path.parse(sourcePath);
  return path.join(parsed.dir, `${parsed.name}-catalog.webp`);
}

const imageMap = new Map();
for (const base of [root, path.join(root, "public")]) {
  for (const fullPath of walk(base)) {
    if (!/\.(?:png|jpe?g)$/i.test(fullPath)) continue;
    const relative = path.relative(base, fullPath).replaceAll("\\", "/");
    const optimized = optimizedRelative(fullPath);
    if (fs.existsSync(optimized)) {
      imageMap.set(relative, path.relative(base, optimized).replaceAll("\\", "/"));
    }
  }
}

function optimizeReferences(content) {
  let optimized = content;
  for (const [original, replacement] of imageMap) {
    optimized = optimized.replaceAll(original, replacement);
  }
  return optimized;
}

function publish(sourcePath, relativePath) {
  const extension = path.extname(sourcePath).toLowerCase();
  if (!publishedFiles.has(extension)) return;
  if (/\.(?:png|jpe?g)$/i.test(sourcePath)) return;
  const destination = path.join(output, relativePath);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  if (textFiles.has(extension)) {
    fs.writeFileSync(destination, optimizeReferences(fs.readFileSync(sourcePath, "utf8")), "utf8");
  } else {
    fs.copyFileSync(sourcePath, destination);
  }
}

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

for (const sourcePath of fs.readdirSync(root, { withFileTypes: true })) {
  if (!sourcePath.isFile()) continue;
  const extension = path.extname(sourcePath.name).toLowerCase();
  const isTopLevelAsset = [".avif", ".css", ".html", ".svg", ".txt", ".webp"].includes(extension);
  if (isTopLevelAsset || topLevelScripts.has(sourcePath.name)) publish(path.join(root, sourcePath.name), sourcePath.name);
}

const publicRoot = path.join(root, "public");
if (fs.existsSync(publicRoot)) {
  for (const sourcePath of walk(publicRoot)) {
    publish(sourcePath, path.relative(publicRoot, sourcePath));
  }
}

const assetRoot = path.join(root, "assets");
if (fs.existsSync(assetRoot)) {
  for (const sourcePath of walk(assetRoot)) {
    publish(sourcePath, path.relative(root, sourcePath));
  }
}

const files = walk(output);
const bytes = files.reduce((total, file) => total + fs.statSync(file).size, 0);
console.log(`Published ${files.length} optimized static files (${(bytes / 1024 / 1024).toFixed(2)} MB).`);
