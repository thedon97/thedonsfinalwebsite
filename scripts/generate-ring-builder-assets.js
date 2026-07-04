const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..", "public", "assets", "ring-builder");
const folders = ["bands", "metals", "heads", "stones", "settings", "side-stones", "wedding-bands", "details", "fallbacks"];
folders.forEach((folder) => fs.mkdirSync(path.join(root, folder), { recursive: true }));

const gold = "#d6aa4f";
const white = "#f4f4f2";
const rose = "#d99678";
const platinum = "#d9dde1";
const dark = "#090807";
const diamond = "#eaf8ff";
const accent = "#fff7db";

function svg(body, defs = "") {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 620" role="img">
  <defs>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <linearGradient id="shine" x1="0" x2="1">
      <stop offset="0" stop-color="#fff" stop-opacity=".9"/>
      <stop offset=".3" stop-color="currentColor" stop-opacity=".9"/>
      <stop offset=".7" stop-color="#7b672e" stop-opacity=".85"/>
      <stop offset="1" stop-color="#fff" stop-opacity=".92"/>
    </linearGradient>
    <radialGradient id="diamond" cx="50%" cy="40%" r="60%">
      <stop offset="0" stop-color="#fff"/>
      <stop offset=".55" stop-color="${diamond}"/>
      <stop offset="1" stop-color="#89a9bf"/>
    </radialGradient>
    ${defs}
  </defs>
  <rect width="900" height="620" fill="none"/>
  ${body}
</svg>`;
}

function save(folder, file, body, defs = "") {
  fs.writeFileSync(path.join(root, folder, file), svg(body, defs));
}

function bandPath(y = 398, spread = 220) {
  return `M ${450 - spread} ${y} C 310 495, 590 495, ${450 + spread} ${y}`;
}

function metalBand(stroke = gold, width = 30, extra = "") {
  return `<g color="${stroke}" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="${bandPath(398, 232)}" stroke="url(#shine)" stroke-width="${width}"/>
    <path d="${bandPath(398, 232)}" stroke="#fff" stroke-opacity=".35" stroke-width="${Math.max(2, width * .16)}"/>
    ${extra}
  </g>`;
}

save("fallbacks", "missing.svg", `<rect x="125" y="90" width="650" height="430" rx="34" fill="${dark}" stroke="${gold}" stroke-width="6"/><circle cx="450" cy="310" r="120" fill="none" stroke="${gold}" stroke-width="24"/><path d="M365 310h170M450 225v170" stroke="${accent}" stroke-width="14" stroke-linecap="round"/>`);
save("fallbacks", "base-ring.svg", `<ellipse cx="450" cy="420" rx="238" ry="92" fill="none" stroke="#1f1a13" stroke-width="18" opacity=".72"/><ellipse cx="450" cy="430" rx="280" ry="48" fill="#000" opacity=".18"/>`);

save("metals", "14k-yellow.svg", metalBand(gold, 34));
save("metals", "14k-white.svg", metalBand(white, 34));
save("metals", "14k-rose.svg", metalBand(rose, 34));
save("metals", "18k-yellow.svg", metalBand("#e8bc62", 36));
save("metals", "18k-white.svg", metalBand("#f7f6ef", 36));
save("metals", "18k-rose.svg", metalBand("#e4a082", 36));
save("metals", "platinum.svg", metalBand(platinum, 38));

const bandDecor = {
  "classic-plain": "",
  "thin-pave": Array.from({ length: 18 }, (_, i) => `<circle cx="${255 + i * 23}" cy="${396 + Math.sin(i / 2) * 18}" r="7" fill="url(#diamond)" stroke="#fff" stroke-width="2"/>`).join(""),
  "french-pave": Array.from({ length: 16 }, (_, i) => `<path d="M${270 + i * 24} ${386 + Math.sin(i / 2) * 16} l9 14 l-18 0z" fill="url(#diamond)" stroke="#fff" stroke-width="1.8"/>`).join(""),
  "marquise-side": Array.from({ length: 10 }, (_, i) => `<ellipse cx="${303 + i * 32}" cy="${395 + Math.sin(i / 2) * 18}" rx="16" ry="7" fill="url(#diamond)" stroke="#fff" stroke-width="2" transform="rotate(${i % 2 ? -18 : 18} ${303 + i * 32} ${395 + Math.sin(i / 2) * 18})"/>`).join(""),
  "leaf-inspired": Array.from({ length: 12 }, (_, i) => `<path d="M${282 + i * 28} ${394 + Math.sin(i / 2) * 18} c16 -16 30 -10 34 4 c-16 14 -29 11 -34 -4z" fill="none" stroke="${gold}" stroke-width="4"/><circle cx="${292 + i * 28}" cy="${393 + Math.sin(i / 2) * 18}" r="4" fill="url(#diamond)"/>`).join(""),
  "floral-engraved": Array.from({ length: 9 }, (_, i) => `<g transform="translate(${310 + i * 32} ${394 + Math.sin(i / 2) * 15})"><circle r="5" fill="url(#diamond)"/><path d="M0 -15c8 8 8 22 0 30M-15 0c8 -8 22 -8 30 0" stroke="${accent}" stroke-width="3" fill="none"/></g>`).join(""),
  "criss-cross": `<path d="M235 420 C345 335, 555 335, 665 420" stroke="${gold}" stroke-width="18" fill="none" stroke-linecap="round"/><path d="M235 376 C345 461, 555 461, 665 376" stroke="${gold}" stroke-width="18" fill="none" stroke-linecap="round"/>`,
  "split-shank": `<path d="M230 380 C315 445, 390 452, 450 405 C510 452, 585 445, 670 380" stroke="${gold}" stroke-width="20" fill="none" stroke-linecap="round"/><path d="M235 430 C330 375, 390 372, 450 405 C510 372, 570 375, 665 430" stroke="${gold}" stroke-width="20" fill="none" stroke-linecap="round"/>`,
  "cathedral": `<path d="M230 410 C335 485, 395 350, 450 348 C505 350, 565 485, 670 410" stroke="${gold}" stroke-width="24" fill="none" stroke-linecap="round"/>`,
  "milgrain-vintage": Array.from({ length: 46 }, (_, i) => `<circle cx="${230 + i * 9.6}" cy="${398 + Math.sin(i / 6) * 23}" r="3" fill="${accent}"/>`).join("") + `<path d="M310 380 C345 360, 375 360, 410 383 M490 383 C525 360,555 360,590 380" stroke="${accent}" stroke-width="4" fill="none"/>`,
  "twisted-infinity": `<path d="M230 398 C315 330, 385 470, 450 398 C515 326, 585 470, 670 398" stroke="${gold}" stroke-width="20" fill="none" stroke-linecap="round"/><path d="M230 398 C315 470, 385 326, 450 398 C515 470, 585 326, 670 398" stroke="#f8df9c" stroke-width="12" fill="none" stroke-linecap="round"/>`,
  "wedding-set-band": Array.from({ length: 20 }, (_, i) => `<circle cx="${238 + i * 22}" cy="${454 + Math.sin(i / 3) * 10}" r="6" fill="url(#diamond)" stroke="#fff" stroke-width="2"/>`).join("") + `<path d="M220 454 C315 505, 585 505, 680 454" stroke="${gold}" stroke-width="20" fill="none" stroke-linecap="round"/>`,
};

Object.entries(bandDecor).forEach(([id, decor]) => save("bands", `${id}.svg`, metalBand(gold, id === "classic-plain" ? 34 : 24, decor)));

const heads = {
  "four-prong": `<circle cx="450" cy="238" r="94" fill="none" stroke="${gold}" stroke-width="14"/><g fill="${gold}"><circle cx="372" cy="160" r="15"/><circle cx="528" cy="160" r="15"/><circle cx="372" cy="316" r="15"/><circle cx="528" cy="316" r="15"/></g>`,
  "six-prong": `<circle cx="450" cy="238" r="94" fill="none" stroke="${gold}" stroke-width="14"/><g fill="${gold}">${[0,60,120,180,240,300].map((a)=>`<circle cx="${450+105*Math.cos(a*Math.PI/180)}" cy="${238+105*Math.sin(a*Math.PI/180)}" r="13"/>`).join("")}</g>`,
  "hidden-halo": `<circle cx="450" cy="238" r="104" fill="none" stroke="${gold}" stroke-width="10"/><circle cx="450" cy="340" r="42" fill="none" stroke="${accent}" stroke-width="10"/><g fill="url(#diamond)">${[0,45,90,135,180,225,270,315].map((a)=>`<circle cx="${450+42*Math.cos(a*Math.PI/180)}" cy="${340+42*Math.sin(a*Math.PI/180)}" r="6"/>`).join("")}</g>`,
  "cathedral-head": `<path d="M340 390 C395 268, 405 214, 450 165 C495 214, 505 268, 560 390" stroke="${gold}" stroke-width="18" fill="none" stroke-linecap="round"/><circle cx="450" cy="238" r="94" fill="none" stroke="${gold}" stroke-width="12"/>`,
  "bezel-head": `<circle cx="450" cy="238" r="110" fill="none" stroke="${gold}" stroke-width="28"/><circle cx="450" cy="238" r="86" fill="none" stroke="${accent}" stroke-width="5"/>`,
  "tulip-head": `<path d="M450 332 C390 285,380 225,420 178 C440 210,460 210,480 178 C520 225,510 285,450 332z" fill="none" stroke="${gold}" stroke-width="15" stroke-linejoin="round"/>`,
};
Object.entries(heads).forEach(([id, body]) => save("heads", `${id}.svg`, body));

const stones = {
  round: `<circle cx="450" cy="238" r="78" fill="url(#diamond)" stroke="#fff" stroke-width="6"/><path d="M372 238h156M450 160v156M395 183l110 110M505 183l-110 110" stroke="#9db8c7" stroke-width="3" opacity=".8"/>`,
  oval: `<ellipse cx="450" cy="238" rx="70" ry="96" fill="url(#diamond)" stroke="#fff" stroke-width="6"/><path d="M380 238h140M450 145v186M405 170l90 136M495 170l-90 136" stroke="#9db8c7" stroke-width="3" opacity=".8"/>`,
  emerald: `<path d="M390 158h120l50 50v60l-50 50H390l-50-50v-60z" fill="url(#diamond)" stroke="#fff" stroke-width="6"/><path d="M390 190h120M390 286h120M372 208v60M528 208v60" stroke="#9db8c7" stroke-width="4" opacity=".8"/>`,
  radiant: `<rect x="372" y="160" width="156" height="156" rx="18" fill="url(#diamond)" stroke="#fff" stroke-width="6"/><path d="M372 238h156M450 160v156M390 178l120 120M510 178L390 298" stroke="#9db8c7" stroke-width="3" opacity=".8"/>`,
  marquise: `<path d="M450 132 C535 178,535 298,450 344 C365 298,365 178,450 132z" fill="url(#diamond)" stroke="#fff" stroke-width="6"/><path d="M450 132v212M378 238h144M405 174l90 128M495 174l-90 128" stroke="#9db8c7" stroke-width="3" opacity=".8"/>`,
  pear: `<path d="M450 130 C540 224,510 330,450 340 C390 330,360 224,450 130z" fill="url(#diamond)" stroke="#fff" stroke-width="6"/><path d="M450 130v210M385 235h130M410 180l80 135M490 180l-80 135" stroke="#9db8c7" stroke-width="3" opacity=".8"/>`,
  cushion: `<rect x="370" y="158" width="160" height="160" rx="44" fill="url(#diamond)" stroke="#fff" stroke-width="6"/><path d="M370 238h160M450 158v160M395 185l110 106M505 185L395 291" stroke="#9db8c7" stroke-width="3" opacity=".8"/>`,
  princess: `<rect x="372" y="160" width="156" height="156" fill="url(#diamond)" stroke="#fff" stroke-width="6"/><path d="M372 238h156M450 160v156M372 160l156 156M528 160L372 316" stroke="#9db8c7" stroke-width="3" opacity=".8"/>`,
};
Object.entries(stones).forEach(([id, body]) => save("stones", `${id}.svg`, body));

const sideStones = {
  none: "",
  "pave-shoulders": `<g fill="url(#diamond)" stroke="#fff" stroke-width="2">${Array.from({ length: 14 }, (_, i) => `<circle cx="${285 + i * 25}" cy="${374 + Math.sin(i / 2) * 16}" r="7"/>`).join("")}</g>`,
  "marquise-leaves": `<g fill="url(#diamond)" stroke="#fff" stroke-width="2">${Array.from({ length: 8 }, (_, i) => `<ellipse cx="${320 + i * 38}" cy="${370 + Math.sin(i / 2) * 18}" rx="17" ry="7" transform="rotate(${i % 2 ? -25 : 25} ${320 + i * 38} ${370 + Math.sin(i / 2) * 18})"/>`).join("")}</g>`,
  "round-cluster": `<g fill="url(#diamond)" stroke="#fff" stroke-width="2"><circle cx="335" cy="250" r="28"/><circle cx="565" cy="250" r="28"/><circle cx="310" cy="300" r="18"/><circle cx="590" cy="300" r="18"/></g>`,
  "tapered-baguette": `<g fill="url(#diamond)" stroke="#fff" stroke-width="2"><path d="M320 232h58l18 34h-76z"/><path d="M580 232h-58l-18 34h76z"/></g>`,
};
Object.entries(sideStones).forEach(([id, body]) => save("side-stones", `${id}.svg`, body || `<g opacity=".01"><circle cx="1" cy="1" r="1"/></g>`));

save("details", "none.svg", `<g opacity=".01"><circle cx="1" cy="1" r="1"/></g>`);
save("details", "script-engraving.svg", `<path d="M315 430 C355 414, 382 448, 420 426 S490 410, 528 428 S590 444, 622 424" fill="none" stroke="${accent}" stroke-width="7" stroke-linecap="round"/><circle cx="450" cy="430" r="5" fill="${accent}"/>`);
save("details", "floral-engraving.svg", Array.from({ length: 6 }, (_, i) => `<g transform="translate(${330 + i * 48} ${424 + Math.sin(i) * 10})"><circle r="5" fill="${accent}"/><path d="M0 -18c10 8 10 28 0 36M-18 0c8 -10 28 -10 36 0" stroke="${accent}" stroke-width="3" fill="none"/></g>`).join(""));
save("details", "hidden-birthstone.svg", `<circle cx="450" cy="365" r="24" fill="#4dc0ff" stroke="#fff" stroke-width="5" filter="url(#glow)"/>`);

save("settings", "solitaire.svg", `<circle cx="450" cy="238" r="104" fill="none" stroke="${gold}" stroke-width="10"/>`);
save("settings", "halo.svg", `<circle cx="450" cy="238" r="122" fill="none" stroke="${gold}" stroke-width="10"/><g fill="url(#diamond)">${[0,30,60,90,120,150,180,210,240,270,300,330].map((a)=>`<circle cx="${450+116*Math.cos(a*Math.PI/180)}" cy="${238+116*Math.sin(a*Math.PI/180)}" r="7"/>`).join("")}</g>`);
save("settings", "three-stone.svg", `<circle cx="330" cy="250" r="42" fill="url(#diamond)" stroke="#fff" stroke-width="4"/><circle cx="570" cy="250" r="42" fill="url(#diamond)" stroke="#fff" stroke-width="4"/>`);
save("settings", "floral-garden.svg", `<g stroke="${accent}" stroke-width="4" fill="none">${[0,60,120,180,240,300].map((a)=>`<path d="M450 238 c${35*Math.cos(a*Math.PI/180)} ${35*Math.sin(a*Math.PI/180)}, ${70*Math.cos(a*Math.PI/180)} ${70*Math.sin(a*Math.PI/180)}, ${98*Math.cos(a*Math.PI/180)} ${98*Math.sin(a*Math.PI/180)}"/>`).join("")}</g>`);

save("wedding-bands", "none.svg", `<g opacity=".01"><circle cx="1" cy="1" r="1"/></g>`);
save("wedding-bands", "plain-contour.svg", `<path d="M232 475 C330 535, 570 535, 668 475" stroke="${gold}" stroke-width="20" fill="none" stroke-linecap="round"/><path d="M315 492 C390 462, 510 462, 585 492" stroke="#fff" stroke-opacity=".28" stroke-width="4" fill="none"/>`);
save("wedding-bands", "pave-contour.svg", `<path d="M232 475 C330 535, 570 535, 668 475" stroke="${gold}" stroke-width="20" fill="none" stroke-linecap="round"/><g fill="url(#diamond)" stroke="#fff" stroke-width="2">${Array.from({ length: 18 }, (_, i) => `<circle cx="${256 + i * 23}" cy="${474 + Math.sin(i / 2) * 18}" r="6"/>`).join("")}</g>`);

console.log(`Generated ring builder SVG assets in ${root}`);
