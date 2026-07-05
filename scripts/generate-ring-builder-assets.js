const fs = require("fs");
const path = require("path");

const roots = ["assets/ring-builder", "public/assets/ring-builder"];
const shapes = ["round", "oval", "emerald", "radiant", "cushion", "pear", "marquise", "princess", "asscher", "heart"];
const settings = ["solitaire", "hidden-halo", "halo", "three-stone", "pave", "cathedral", "vintage", "custom"];
const metals = ["14k-white", "14k-yellow", "14k-rose", "18k-white", "18k-yellow", "platinum"];
const heads = ["four-prong", "six-prong", "eagle-claw", "bezel", "hidden-halo-basket"];
const bands = ["plain", "pave", "cathedral", "split-shank", "twisted", "floral-inspired", "three-stone-side-accents"];
const sizes = ["4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"];

const labels = {
  "setting-first": "Start With Setting",
  "diamond-first": "Start With Diamond",
  "lab-grown": "Lab-Grown",
  natural: "Natural",
  "14k-white": "14K White",
  "14k-yellow": "14K Yellow",
  "14k-rose": "14K Rose",
  "18k-white": "18K White",
  "18k-yellow": "18K Yellow",
  platinum: "Platinum",
  "four-prong": "4-Prong",
  "six-prong": "6-Prong",
  "eagle-claw": "Eagle Claw",
  "hidden-halo-basket": "Hidden Halo",
  "split-shank": "Split Shank",
  "floral-inspired": "Floral",
  "three-stone-side-accents": "Three Stone",
};

function title(id) {
  return labels[id] || id.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

function ensure(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function metalColors(id) {
  if (id.includes("yellow")) return ["#fff2b8", "#d59a2d", "#7b4b10"];
  if (id.includes("rose")) return ["#ffe0d2", "#c98769", "#773b2f"];
  if (id === "platinum") return ["#ffffff", "#d8dde3", "#6f7780"];
  return ["#ffffff", "#cfd5dc", "#6f7883"];
}

function diamondShape(id, cx = 260, cy = 128, s = 1) {
  const rx = 46 * s;
  const ry = 46 * s;
  const shapesMap = {
    round: `<circle cx="${cx}" cy="${cy}" r="${rx}"/>`,
    oval: `<ellipse cx="${cx}" cy="${cy}" rx="${rx * .75}" ry="${ry * 1.12}"/>`,
    emerald: `<rect x="${cx - rx * .8}" y="${cy - ry}" width="${rx * 1.6}" height="${ry * 2}" rx="${8 * s}"/>`,
    radiant: `<polygon points="${cx},${cy - ry} ${cx + rx * .86},${cy - ry * .62} ${cx + rx * .86},${cy + ry * .62} ${cx},${cy + ry} ${cx - rx * .86},${cy + ry * .62} ${cx - rx * .86},${cy - ry * .62}"/>`,
    cushion: `<rect x="${cx - rx}" y="${cy - ry}" width="${rx * 2}" height="${ry * 2}" rx="${18 * s}"/>`,
    pear: `<path d="M${cx} ${cy - ry * 1.18} C${cx + rx} ${cy - ry * .25} ${cx + rx * .7} ${cy + ry} ${cx} ${cy + ry * 1.1} C${cx - rx * .7} ${cy + ry} ${cx - rx} ${cy - ry * .25} ${cx} ${cy - ry * 1.18}Z"/>`,
    marquise: `<path d="M${cx - rx * 1.25} ${cy} C${cx - rx * .4} ${cy - ry * 1.18} ${cx + rx * .4} ${cy - ry * 1.18} ${cx + rx * 1.25} ${cy} C${cx + rx * .4} ${cy + ry * 1.18} ${cx - rx * .4} ${cy + ry * 1.18} ${cx - rx * 1.25} ${cy}Z"/>`,
    princess: `<rect x="${cx - rx * .86}" y="${cy - ry * .86}" width="${rx * 1.72}" height="${ry * 1.72}" rx="${4 * s}" transform="rotate(45 ${cx} ${cy})"/>`,
    asscher: `<rect x="${cx - rx * .92}" y="${cy - ry * .92}" width="${rx * 1.84}" height="${ry * 1.84}" rx="${8 * s}"/><rect x="${cx - rx * .54}" y="${cy - ry * .54}" width="${rx * 1.08}" height="${ry * 1.08}" rx="${3 * s}" fill="none" stroke="#fff" stroke-opacity=".48" stroke-width="${2 * s}"/>`,
    heart: `<path d="M${cx} ${cy + ry} C${cx - rx * 1.42} ${cy - ry * .05} ${cx - rx * .82} ${cy - ry * 1.14} ${cx} ${cy - ry * .42} C${cx + rx * .82} ${cy - ry * 1.14} ${cx + rx * 1.42} ${cy - ry * .05} ${cx} ${cy + ry}Z"/>`,
  };
  return shapesMap[id] || shapesMap.round;
}

function svgCard({ id, category, label, shape = "round", metal = "14k-yellow", setting = "solitaire", band = "plain", head = "four-prong", size = "" }) {
  const [light, mid, dark] = metalColors(metal);
  const isMetal = category === "metal";
  const isSize = category === "ring-size";
  const y = isSize ? 134 : 128;
  const bandStroke = band.includes("split") ? 18 : band.includes("pave") || setting === "pave" ? 12 : 15;
  const diamonds = Array.from({ length: band.includes("pave") || setting === "pave" || band.includes("three") ? 12 : 0 }, (_, i) => {
    const x = 155 + i * 19;
    return `<circle cx="${x}" cy="191" r="4.5" fill="url(#diamond)" stroke="#edf7ff" stroke-width="1"/>`;
  }).join("");
  const prongs = head === "six-prong" ? 6 : 4;
  const prongDots = Array.from({ length: prongs }, (_, i) => {
    const a = (i / prongs) * Math.PI * 2 - Math.PI / 2;
    return `<circle cx="${260 + Math.cos(a) * 50}" cy="${y + Math.sin(a) * 46}" r="${head === "eagle-claw" ? 4 : 5.5}" fill="${light}" stroke="${dark}" stroke-width="1.5"/>`;
  }).join("");
  const sizeMarkup = isSize ? `<circle cx="260" cy="133" r="62" fill="none" stroke="url(#metal)" stroke-width="8"/><text x="260" y="145" text-anchor="middle" fill="#fffdfa" font-family="Arial, sans-serif" font-size="48">${size}</text>` : "";
  const metalMarkup = isMetal ? `<ellipse cx="260" cy="135" rx="112" ry="44" fill="none" stroke="url(#metal)" stroke-width="24"/><ellipse cx="260" cy="135" rx="112" ry="44" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="4"/>` : "";
  const ringMarkup = !isSize && !isMetal ? `
    <path d="M90 205 C170 250 350 250 430 205" fill="none" stroke="url(#metal)" stroke-width="${bandStroke}" stroke-linecap="round"/>
    ${band === "split-shank" ? `<path d="M110 190 C178 153 218 154 242 142 M410 190 C342 153 302 154 278 142" fill="none" stroke="url(#metal)" stroke-width="12" stroke-linecap="round"/>` : ""}
    ${band === "twisted" ? `<path d="M92 218 C190 160 330 250 428 192" fill="none" stroke="url(#metal)" stroke-width="10" stroke-linecap="round"/>` : ""}
    ${diamonds}
    ${setting === "halo" ? Array.from({ length: 16 }, (_, i) => {
      const a = i / 16 * Math.PI * 2;
      return `<circle cx="${260 + Math.cos(a) * 60}" cy="${y + Math.sin(a) * 55}" r="4.5" fill="url(#diamond)" stroke="#edf7ff" stroke-width="1"/>`;
    }).join("") : ""}
    ${(setting === "hidden-halo" || head === "hidden-halo-basket") ? `<path d="M214 185 C240 198 280 198 306 185" fill="none" stroke="url(#diamond)" stroke-width="8" stroke-linecap="round"/>` : ""}
    ${setting === "three-stone" || band === "three-stone-side-accents" ? `<circle cx="190" cy="143" r="25" fill="url(#diamond)" stroke="#edf7ff" stroke-width="2"/><circle cx="330" cy="143" r="25" fill="url(#diamond)" stroke="#edf7ff" stroke-width="2"/>` : ""}
    ${setting === "vintage" || band === "floral-inspired" ? `<path d="M137 195 q18 -22 36 0 q-18 20 -36 0Z M347 195 q18 -22 36 0 q-18 20 -36 0Z" fill="#fff8d6" opacity=".45" stroke="${light}"/>` : ""}
    ${head === "bezel" ? `<g fill="url(#diamond)" stroke="url(#metal)" stroke-width="14">${diamondShape(shape, 260, y, .78)}</g>` : `<g fill="url(#diamond)" stroke="#f8fcff" stroke-width="3">${diamondShape(shape, 260, y, .78)}</g>${prongDots}`}
  ` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 320" role="img" aria-label="${label}">
  <defs>
    <radialGradient id="bg" cx="50%" cy="42%" r="70%"><stop offset="0" stop-color="#211a12"/><stop offset=".52" stop-color="#080706"/><stop offset="1" stop-color="#020202"/></radialGradient>
    <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${light}"/><stop offset=".38" stop-color="${mid}"/><stop offset=".7" stop-color="${light}"/><stop offset="1" stop-color="${dark}"/></linearGradient>
    <radialGradient id="diamond" cx=".35" cy=".22" r=".78"><stop offset="0" stop-color="#fff"/><stop offset=".35" stop-color="#f3fbff"/><stop offset=".72" stop-color="#b7d0e5"/><stop offset="1" stop-color="#738da4"/></radialGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="12" stdDeviation="10" flood-color="#000" flood-opacity=".45"/></filter>
  </defs>
  <rect width="520" height="320" rx="18" fill="url(#bg)"/>
  <g filter="url(#shadow)">${sizeMarkup}${metalMarkup}${ringMarkup}</g>
  <text x="260" y="288" text-anchor="middle" fill="#f1d781" font-family="Arial, sans-serif" font-size="22" font-weight="700" letter-spacing="2">${label.toUpperCase()}</text>
</svg>
`;
}

function writeAll(relative, content) {
  const cleanContent = content.replace(/[ \t]+$/gm, "");
  for (const root of ["assets/ring-builder", "public/assets/ring-builder"]) {
    const out = path.join(root, relative);
    ensure(path.dirname(out));
    fs.writeFileSync(out, cleanContent);
  }
}

const groups = [
  ["thumbnails/start-path", ["setting-first", "diamond-first"], (id) => ({ id, category: "start-path", label: title(id), setting: id === "setting-first" ? "cathedral" : "solitaire", shape: id === "diamond-first" ? "oval" : "round" })],
  ["thumbnails/diamond-type", ["lab-grown", "natural"], (id) => ({ id, category: "diamond-type", label: title(id), metal: id === "natural" ? "18k-yellow" : "14k-white", shape: id === "natural" ? "emerald" : "round" })],
  ["thumbnails/diamond-shape", shapes, (id) => ({ id, category: "diamond-shape", label: title(id), shape: id })],
  ["thumbnails/setting-style", settings, (id) => ({ id, category: "setting-style", label: title(id), setting: id, band: id === "pave" ? "pave" : "plain" })],
  ["thumbnails/metal", metals, (id) => ({ id, category: "metal", label: title(id), metal: id })],
  ["thumbnails/head-basket", heads, (id) => ({ id, category: "head-basket", label: title(id), head: id, setting: id.includes("hidden") ? "hidden-halo" : "solitaire" })],
  ["thumbnails/band-style", bands, (id) => ({ id, category: "band-style", label: title(id), band: id, setting: id === "three-stone-side-accents" ? "three-stone" : "solitaire" })],
  ["thumbnails/ring-size", sizes, (id) => ({ id, category: "ring-size", label: `Size ${id}`, size: id })],
];

for (const [dir, ids, map] of groups) {
  for (const id of ids) {
    writeAll(`${dir}/${id}.svg`, svgCard(map(id)));
  }
}

for (const shape of shapes) {
  writeAll(`previews/${shape}.svg`, svgCard({ id: shape, category: "preview", label: `${title(shape)} Preview`, shape, setting: "solitaire", metal: "14k-yellow", band: "pave" }));
  for (const setting of ["solitaire", "halo", "hidden-halo", "three-stone"]) {
    writeAll(`previews/${shape}--${setting}.svg`, svgCard({ id: `${shape}-${setting}`, category: "preview", label: `${title(shape)} ${title(setting)}`, shape, setting, metal: "14k-yellow", band: setting === "three-stone" ? "three-stone-side-accents" : "pave" }));
  }
}
