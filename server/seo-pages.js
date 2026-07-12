const fs = require("fs");
const path = require("path");
const seoArticles = require("./data/seo-articles");
const { getInventoryCache } = require("./_inventory-cache");
const { fetchFeed } = require("./_diamond-utils");
const {
  databaseConfigured,
  getProductBySlug,
  listVisibleProducts,
  productSlug,
  seedManualProducts,
  seedSnapshotProducts,
  slugify,
} = require("./_product-store");

const SITE_URL = "https://www.thedonjewelersandjewelrynyc.com";
const BUSINESS_NAME = "The Don Jewelers & Jewelry";
const BRAND_ALIASES = ["The Don Jewelers", "The Don Jewelers and Jewelry", "Don Jewelers", "The Don Jewelers NYC", "The Don Jewelers & Jewelry NYC", "Don Jewelers NYC"];
const CONTACT_EMAIL = "thedonjewelersandjewelry@gmail.com";
const PHONE_DISPLAY = "(484) 761-2008";
const GOOGLE_BUSINESS_PROFILE_URL = "https://share.google/8uvOiIx224kLzQU3Y";
const OFFICIAL_SOCIAL_LINKS = [
  "https://www.instagram.com/los_thejeweler/",
  "https://www.facebook.com/TheDonJewelers",
  GOOGLE_BUSINESS_PROFILE_URL,
];
const LOCATION_TARGETS = ["NYC Diamond District", "Manhattan NY", "New York City", "Tri-State Area", "New York", "New Jersey", "Connecticut", "Lehigh Valley PA", "Easton PA", "Bethlehem PA", "Allentown PA", "Pennsylvania", "United States"];
const DEFAULT_IMAGE = `${SITE_URL}/don-logo.jpg`;
const ROOT = path.resolve(__dirname, "..");
const INDEX_HTML = path.join(ROOT, "index.html");
const SITEMAP_LIMIT = 45000;

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeXml(value) {
  return escapeHtml(value);
}

function absoluteUrl(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  if (/^https?:\/\//i.test(text)) return text;
  return `${SITE_URL}/${text.replace(/^\/+/, "")}`;
}

function money(centsOrPrice) {
  const amount = Number(centsOrPrice);
  if (!Number.isFinite(amount) || amount <= 0) return "";
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
}

function priceFromProduct(product) {
  if (product?.priceCents) return Number(product.priceCents) / 100;
  if (product?.price) return Number(product.price);
  if (product?.metadata?.price) return Number(product.metadata.price);
  return null;
}

function productPath(product) {
  return `/products/${productSlug(product)}`;
}

function categorySlug(category = "") {
  const normalized = String(category || "").trim();
  const map = {
    "Pendants & Charms": "pendants-charms",
    "Pendants / Charms": "pendants-charms",
    "Engagement Rings": "engagement-rings",
    "Wedding Bands": "wedding-bands",
    "Tennis Bracelets": "diamond-tennis-bracelets",
    Bracelets: "bracelets",
    Chains: "chains",
    Necklaces: "necklaces",
    Anklets: "anklets",
    Watches: "watches",
    "Men's Rings": "mens-rings",
    "Women's Rings": "womens-rings",
    "Men's Earrings": "mens-earrings",
    "Women's Earrings": "womens-earrings",
    "Custom Jewelry": "custom-jewelry",
  };
  return map[normalized] || slugify(normalized || "products");
}

const staticPageMeta = {
  "/": {
    title: "Custom Jeweler NYC | Engagement Rings & Diamond Jewelry | The Don Jewelers",
    description: "The Don Jewelers & Jewelry is a luxury private jeweler for custom engagement rings, diamond tennis chains, pendants, lab grown diamonds, natural diamonds, CAD design, and jewelry financing in NYC, Manhattan, the Diamond District, Lehigh Valley, Easton, Bethlehem, and Allentown.",
    label: "Home",
    priority: "1.0",
  },
  "/products": {
    title: "Diamond Jewelry Products | The Don Jewelers",
    description: "Shop diamond jewelry, engagement rings, wedding bands, tennis chains, tennis bracelets, pendants, earrings, watches, and custom jewelry from The Don Jewelers.",
    label: "Products",
    priority: "0.9",
  },
  "/select-diamond": {
    title: "Live Diamond Selection | Lab Grown & Certified Diamonds | The Don Jewelers",
    description: "Browse certified lab grown diamonds and diamond options by shape, carat, color, clarity, certificate, and price with private jeweler guidance from The Don Jewelers.",
    label: "Live Diamond Selection",
    priority: "0.8",
  },
  "/custom-orders": {
    title: "Start a Custom Jewelry Order | The Don Jewelers",
    description: "Start a custom jewelry project for engagement rings, diamond pendants, tennis chains, bracelets, wedding bands, grillz, and one-of-one luxury jewelry.",
    label: "Custom Orders",
    priority: "0.8",
  },
  "/start-custom-ring-design": {
    title: "Start Your Custom Ring Design | The Don Jewelers",
    description: "Request a custom engagement ring or custom ring design with stone shape, metal, ring size, budget, timeline, inspiration photos, and private jeweler follow-up.",
    label: "Start Your Custom Ring Design",
    priority: "0.95",
  },
  "/ring-size-guide": {
    title: "Ring Size Guide | Engagement Ring Sizing | The Don Jewelers",
    description: "Use The Don Jewelers ring size guide to plan engagement ring sizing, comfort fit, resizing questions, measuring tips, and final approval before custom ring production.",
    label: "Ring Size Guide",
    priority: "0.82",
  },
  "/diamond-shape-guide": {
    title: "Diamond Shape Guide | Oval Round Emerald Radiant Marquise",
    description: "Compare diamond shapes for engagement rings including round, oval, emerald, radiant, marquise, pear, cushion, princess, and Asscher diamonds.",
    label: "Diamond Shape Guide",
    priority: "0.84",
  },
  "/custom-engagement-rings": {
    title: "Custom Engagement Rings NYC | Private Jeweler | The Don Jewelers",
    description: "Design a custom engagement ring with The Don Jewelers, serving NYC, Manhattan, the Diamond District, Lehigh Valley, and nationwide clients with lab grown or natural diamonds.",
    label: "Custom Engagement Rings",
    priority: "0.9",
  },
  "/lab-diamond-rings": {
    title: "Lab Diamond Rings | Certified Lab Grown Diamond Rings | The Don Jewelers",
    description: "Shop and design lab diamond rings with certified stones, custom settings, CAD design, and private jeweler guidance from The Don Jewelers.",
    label: "Lab Diamond Rings",
    priority: "0.85",
  },
  "/natural-diamond-rings": {
    title: "Natural Diamond Rings | Private Diamond Jeweler | The Don Jewelers",
    description: "Source natural diamond rings with private jeweler guidance, certified diamonds, custom settings, and luxury engagement ring consultation.",
    label: "Natural Diamond Rings",
    priority: "0.85",
  },
  "/diamond-tennis-chains": {
    title: "Diamond Tennis Chains | Custom Tennis Chains | The Don Jewelers",
    description: "Shop diamond tennis chains and custom tennis chain options in lab grown or natural diamonds with luxury private jeweler guidance.",
    label: "Diamond Tennis Chains",
    priority: "0.85",
  },
  "/diamond-tennis-bracelets": {
    title: "Diamond Tennis Bracelets | Lab & Natural Diamond Bracelets | The Don Jewelers",
    description: "Shop diamond tennis bracelets, custom bracelet builds, and fine diamond jewelry with The Don Jewelers.",
    label: "Diamond Tennis Bracelets",
    priority: "0.85",
  },
  "/diamond-pendants": {
    title: "Diamond Pendants & Custom Diamond Charms | The Don Jewelers",
    description: "Design or shop diamond pendants, custom charms, initials, crosses, and one-of-one fine jewelry with The Don Jewelers.",
    label: "Diamond Pendants",
    priority: "0.85",
  },
  "/diamond-crosses": {
    title: "Diamond Cross Pendants | Custom Diamond Crosses | The Don Jewelers",
    description: "Shop and design diamond cross pendants in gold and diamond settings with private jeweler guidance from The Don Jewelers.",
    label: "Diamond Crosses",
    priority: "0.8",
  },
  "/custom-jewelry": {
    title: "Custom Jewelry NYC | Private Custom Jeweler | The Don Jewelers",
    description: "Create custom jewelry with a private jeweler, including engagement rings, pendants, tennis chains, bracelets, wedding bands, earrings, grillz, and CAD-designed pieces.",
    label: "Custom Jewelry",
    priority: "0.9",
  },
  "/jewelry-financing": {
    title: "Jewelry Financing | Engagement Ring & Diamond Jewelry Financing | The Don Jewelers",
    description: "Learn about jewelry financing options for engagement rings, diamond jewelry, custom pieces, tennis chains, pendants, watches, and luxury gifts.",
    label: "Jewelry Financing",
    priority: "0.8",
  },
  "/diamond-education": {
    title: "Diamond Education | Diamond Buying Guide | The Don Jewelers",
    description: "Learn diamond basics including cut, color, clarity, carat weight, lab diamonds, natural diamonds, certificates, and how to buy confidently.",
    label: "Diamond Education",
    priority: "0.8",
  },
  "/lab-diamonds-vs-natural-diamonds": {
    title: "Lab Diamonds vs Natural Diamonds | The Don Jewelers",
    description: "Compare lab grown diamonds and natural diamonds by appearance, price, origin, certification, value, and buying considerations.",
    label: "Lab Diamonds vs Natural Diamonds",
    priority: "0.8",
  },
  "/jewelry-care": {
    title: "Jewelry Care Guide | Clean & Protect Fine Jewelry | The Don Jewelers",
    description: "Learn how to care for diamond jewelry, gold jewelry, engagement rings, tennis bracelets, pendants, earrings, and custom pieces.",
    label: "Jewelry Care",
    priority: "0.75",
  },
  "/custom-cad-design": {
    title: "Custom CAD Jewelry Design | The Don Jewelers",
    description: "Use custom CAD jewelry design to plan engagement rings, pendants, initials, nameplates, grillz, chains, bracelets, and one-of-one diamond jewelry.",
    label: "Custom CAD Design",
    priority: "0.85",
  },
  "/nyc-diamond-district-jeweler": {
    title: "NYC Diamond District Jeweler | Private Jeweler | The Don Jewelers",
    description: "Work with The Don Jewelers for a calmer NYC Diamond District jewelry experience, including diamond sourcing, custom engagement rings, CAD design, and luxury private jeweler guidance.",
    label: "NYC Diamond District Jeweler",
    priority: "0.95",
  },
  "/private-jeweler": {
    title: "Private Jeweler NYC & Nationwide | The Don Jewelers",
    description: "Work one-on-one with a private jeweler for custom jewelry, engagement rings, diamond sourcing, tennis chains, pendants, watches, and luxury jewelry consultation.",
    label: "Private Jeweler",
    priority: "0.9",
  },
  "/appointment-only-jeweler": {
    title: "Appointment Only Jeweler | Private Jewelry Consultation | The Don Jewelers",
    description: "Schedule an appointment-only jewelry consultation for diamonds, engagement rings, custom jewelry, CAD design, tennis chains, pendants, and luxury gifts.",
    label: "Appointment Only Jeweler",
    priority: "0.85",
  },
  "/engagement-rings-allentown-pa": {
    title: "Engagement Rings Allentown PA | Custom Diamond Rings | The Don Jewelers",
    description: "Custom engagement rings for Allentown PA clients with lab grown diamonds, natural diamonds, CAD previews, private consultation, and nationwide shipping.",
    label: "Engagement Rings Allentown PA",
    priority: "0.9",
  },
  "/engagement-rings-lehigh-valley": {
    title: "Engagement Rings Lehigh Valley | Custom Diamond Rings | The Don Jewelers",
    description: "Engagement rings for Lehigh Valley clients comparing custom settings, lab diamonds, natural diamonds, wedding bands, financing, and private jeweler guidance.",
    label: "Engagement Rings Lehigh Valley",
    priority: "0.9",
  },
  "/custom-jewelry-nyc": {
    title: "Custom Jewelry NYC | Private Custom Jeweler | The Don Jewelers",
    description: "Custom jewelry in NYC for engagement rings, pendants, tennis chains, Cuban links, watches, CAD design, diamond sourcing, and private jeweler appointments.",
    label: "Custom Jewelry NYC",
    priority: "0.9",
  },
  "/custom-jeweler-new-jersey": {
    title: "Custom Jeweler New Jersey | Engagement Rings & Diamond Jewelry",
    description: "Custom jeweler serving New Jersey clients with engagement rings, diamond pendants, tennis bracelets, lab diamonds, natural diamonds, and shipped private orders.",
    label: "Custom Jeweler New Jersey",
    priority: "0.88",
  },
  "/diamond-jeweler-connecticut": {
    title: "Diamond Jeweler Connecticut | Custom Engagement Rings | The Don Jewelers",
    description: "Diamond jeweler serving Connecticut clients with custom engagement rings, diamond sourcing, tennis bracelets, pendants, CAD design, and insured shipping.",
    label: "Diamond Jeweler Connecticut",
    priority: "0.88",
  },
  "/tri-state-custom-jeweler": {
    title: "Tri-State Custom Jeweler | NY NJ CT PA | The Don Jewelers",
    description: "Tri-State custom jeweler serving New York, New Jersey, Connecticut, Pennsylvania, and nationwide clients with custom diamond jewelry and private consultation.",
    label: "Tri-State Custom Jeweler",
    priority: "0.9",
  },
  "/diamond-jeweler-pennsylvania": {
    title: "Diamond Jeweler Pennsylvania | Engagement Rings & Custom Jewelry",
    description: "Diamond jeweler serving Pennsylvania clients with engagement rings, lab diamonds, natural diamonds, custom pendants, tennis bracelets, and private jewelry quotes.",
    label: "Diamond Jeweler Pennsylvania",
    priority: "0.88",
  },
  "/free-engagement-ring-consultation": {
    title: "Free Engagement Ring Consultation | The Don Jewelers",
    description: "Free engagement ring consultation for clients comparing lab diamonds, natural diamonds, custom settings, budget, financing, CAD design, and private jeweler guidance.",
    label: "Free Engagement Ring Consultation",
    priority: "0.9",
  },
  "/lab-diamond-engagement-rings-allentown": {
    title: "Lab Diamond Engagement Rings Allentown | The Don Jewelers",
    description: "Lab diamond engagement rings for Allentown clients who want size, sparkle, certification, custom CAD settings, and private jeweler quote guidance.",
    label: "Lab Diamond Engagement Rings Allentown",
    priority: "0.88",
  },
  "/private-jeweler-allentown": {
    title: "Private Jeweler Allentown | Custom Jewelry & Engagement Rings",
    description: "Private jeweler serving Allentown clients with engagement rings, diamond sourcing, custom pendants, tennis bracelets, CAD design, and appointment-based consultation.",
    label: "Private Jeweler Allentown",
    priority: "0.86",
  },
  "/custom-engagement-rings-nyc": {
    title: "Custom Engagement Rings NYC | Private Diamond Jeweler",
    description: "Custom engagement rings in NYC with lab grown diamonds, natural diamonds, CAD design, private diamond sourcing, and appointment-only jeweler guidance.",
    label: "Custom Engagement Rings NYC",
    priority: "0.9",
  },
  "/engagement-rings-nyc": {
    title: "Engagement Rings NYC | Custom Diamond Rings | The Don Jewelers",
    description: "Engagement rings in NYC with private jeweler support for lab-grown diamonds, natural diamonds, custom settings, CAD design, ring sizing, appointment booking, and personalized quotes.",
    label: "Engagement Rings NYC",
    priority: "0.92",
  },
  "/engagement-rings-tri-state": {
    title: "Engagement Rings Tri-State Area | NY NJ CT PA | The Don Jewelers",
    description: "Custom engagement rings for Tri-State clients across New York, New Jersey, Connecticut, Pennsylvania, Allentown, and Lehigh Valley with diamond sourcing and private quote support.",
    label: "Engagement Rings Tri-State",
    priority: "0.9",
  },
  "/lab-diamond-engagement-rings-nyc": {
    title: "Lab Diamond Engagement Rings NYC | CVD Diamond Rings",
    description: "Lab diamond engagement rings for NYC and Diamond District clients comparing certified CVD diamonds, custom settings, ring size, metal, CAD design, and private jeweler sourcing.",
    label: "Lab Diamond Engagement Rings NYC",
    priority: "0.9",
  },
  "/custom-diamond-pendants-nyc": {
    title: "Custom Diamond Pendants NYC | Name Pendants & Crosses",
    description: "Custom diamond pendants in NYC including name pendants, initials, crosses, religious pendants, CAD pendant design, and lab or natural diamond options.",
    label: "Custom Diamond Pendants NYC",
    priority: "0.86",
  },
  "/custom-jewelry-allentown-pa": {
    title: "Custom Jewelry Allentown PA | Engagement Rings & Pendants",
    description: "Custom jewelry for Allentown PA clients including engagement rings, diamond pendants, tennis bracelets, chains, CAD design, lab diamonds, natural diamonds, and appointment-based quotes.",
    label: "Custom Jewelry Allentown PA",
    priority: "0.88",
  },
  "/custom-jewelry-lehigh-valley": {
    title: "Custom Jewelry Lehigh Valley | Private Jeweler | The Don Jewelers",
    description: "Private custom jeweler serving Lehigh Valley clients with engagement rings, diamond jewelry, pendants, tennis bracelets, CAD design, financing guidance, and insured shipping.",
    label: "Custom Jewelry Lehigh Valley",
    priority: "0.88",
  },
  "/tennis-bracelets-allentown-pa": {
    title: "Tennis Bracelets Allentown PA | Lab Diamond Bracelets",
    description: "Diamond tennis bracelets for Allentown PA and Lehigh Valley clients with custom carat weight, lab-grown diamond options, gold color, bracelet length, and private quote support.",
    label: "Tennis Bracelets Allentown PA",
    priority: "0.86",
  },
  "/cvd-lab-grown-diamond-jewelry": {
    title: "CVD Lab-Grown Diamond Jewelry | Rings Bracelets Earrings",
    description: "Shop and request CVD lab-grown diamond jewelry including engagement rings, tennis bracelets, earrings, pendants, and rings from the live supplier catalog.",
    label: "CVD Lab-Grown Diamond Jewelry",
    priority: "0.88",
  },
  "/diamond-rings-near-me": {
    title: "Diamond Rings Near Me | Engagement Rings & Private Jeweler",
    description: "Diamond rings near me search page for clients looking for engagement rings, lab diamonds, natural diamonds, custom settings, and private jeweler quotes.",
    label: "Diamond Rings Near Me",
    priority: "0.88",
  },
  "/engagement-rings-new-jersey": {
    title: "Engagement Rings New Jersey | Custom Diamond Rings | The Don Jewelers",
    description: "Engagement rings for New Jersey clients with custom settings, lab diamonds, natural diamonds, private consultation, financing options, and insured delivery.",
    label: "Engagement Rings New Jersey",
    priority: "0.88",
  },
  "/engagement-rings-connecticut": {
    title: "Engagement Rings Connecticut | Custom Diamond Rings | The Don Jewelers",
    description: "Engagement rings for Connecticut clients comparing lab diamonds, natural diamonds, CAD settings, private jeweler consultation, and nationwide shipping.",
    label: "Engagement Rings Connecticut",
    priority: "0.88",
  },
  "/the-don-jewelers": {
    title: "The Don Jewelers | Official Custom Jeweler & Engagement Rings",
    description: "Official page for The Don Jewelers, a private custom jeweler for engagement rings, diamond jewelry, tennis chains, pendants, CAD design, and jewelry consultation.",
    label: "The Don Jewelers",
    priority: "0.95",
  },
  "/the-don-jewelers-and-jewelry": {
    title: "The Don Jewelers & Jewelry | Official Business Profile",
    description: "Official business page for The Don Jewelers & Jewelry with verified contact details, Google Business Profile, private jeweler service areas, and custom jewelry consultation.",
    label: "The Don Jewelers & Jewelry",
    priority: "0.95",
  },
  "/don-jewelers-nyc": {
    title: "Don Jewelers NYC | The Don Jewelers & Jewelry",
    description: "Don Jewelers NYC search page for clients looking for The Don Jewelers & Jewelry, custom engagement rings, diamond sourcing, and private jewelry consultation.",
    label: "Don Jewelers NYC",
    priority: "0.9",
  },
  "/the-don-jewelers-engagement-rings": {
    title: "The Don Jewelers Engagement Rings | Custom Diamond Rings",
    description: "Engagement ring page for The Don Jewelers with lab diamonds, natural diamonds, custom settings, CAD design, private consultation, and proposal jewelry guidance.",
    label: "The Don Jewelers Engagement Rings",
    priority: "0.92",
  },
  "/diamond-pendants-allentown-pa": {
    title: "Diamond Pendants Allentown PA | Custom Pendants & Charms",
    description: "Diamond pendants for Allentown PA and Lehigh Valley clients including custom name pendants, initial pendants, cross pendants, religious charms, and CAD-designed pieces.",
    label: "Diamond Pendants Allentown PA",
    priority: "0.84",
  },
  "/custom-engagement-ring-process": {
    title: "Custom Engagement Ring Process | Diamond, CAD, Setting & Quote",
    description: "Learn the private custom engagement ring process from diamond selection and setting style to CAD design, ring size, basket, prongs, wedding band pairing, quote review, and appointment support.",
    label: "Custom Engagement Ring Process",
    priority: "0.9",
    sections: [
      ["Start with the right path", "Begin with a center diamond when carat, shape, color, clarity, or certificate matters most. Begin with a setting when the overall ring style, band, basket, metal, and wedding band fit are the priority."],
      ["Build the design around real constraints", "A strong custom ring plan includes diamond type, shape, carat target, setting style, metal, basket/head, prongs, band profile, ring size, wedding band plan, budget, and timeline."],
      ["Use CAD and quote review before commitment", "The Don Jewelers & Jewelry reviews the design request, confirms availability, checks fit and durability, and prepares a private quote before final production decisions."],
    ],
  },
  "/engagement-ring-cost-guide": {
    title: "Engagement Ring Cost Guide | Lab Diamond, Natural Diamond & Custom Rings",
    description: "Compare what affects engagement ring cost including diamond type, carat size, shape, certification, metal, setting, hidden halo, pave band, side stones, labor, CAD, and wedding band pairing.",
    label: "Engagement Ring Cost Guide",
    priority: "0.88",
    sections: [
      ["Main cost drivers", "The center diamond usually drives the largest cost difference. Carat size, lab-grown versus natural origin, color, clarity, cut quality, certificate, and shape all affect the final quote."],
      ["Setting and metal upgrades", "Platinum, 18K gold, hidden halo baskets, pave bands, cathedral shoulders, three-stone accents, engraving, and matching wedding bands can change the quote even when the same diamond is used."],
      ["Best next step", "Send the design details and ideal budget so the quote can be built around the look, durability, and payment path that make sense for the buyer."],
    ],
  },
  "/lab-diamond-buying-guide": {
    title: "Lab Diamond Buying Guide | CVD Engagement Rings & Jewelry",
    description: "Lab diamond buying guide for CVD engagement rings, tennis bracelets, pendants, earrings, certification, shape, carat, color, clarity, cut, budget, and private jeweler quote support.",
    label: "Lab Diamond Buying Guide",
    priority: "0.88",
    sections: [
      ["Compare by certificate and specs", "A serious lab diamond search should review certificate, growth method, carat, measurements, color, clarity, cut, polish, symmetry, fluorescence, image, video, and price."],
      ["Match the diamond to the setting", "Oval, round, radiant, emerald, cushion, pear, marquise, princess, Asscher, and heart shapes need different baskets, prong styles, and wedding band planning."],
      ["Use live inventory with a human review", "The site can surface live CVD inventory, but final purchase decisions should still confirm availability, certificate details, setting compatibility, and insured checkout path."],
    ],
  },
  "/private-jeweler-vs-retail-store": {
    title: "Private Jeweler vs Retail Jewelry Store | Custom Engagement Rings",
    description: "Compare a private jeweler with a retail jewelry store for custom engagement rings, diamond sourcing, CAD design, budget control, appointment support, and personalized jewelry quotes.",
    label: "Private Jeweler vs Retail Store",
    priority: "0.86",
    sections: [
      ["Private jeweler advantage", "A private jeweler can focus on the buyer's budget, exact style, diamond sourcing goals, CAD revisions, timeline, and custom details instead of pushing a limited showcase selection."],
      ["Retail store advantage", "A retail store can be convenient for quick browsing, standardized warranties, and seeing preset rings in person. The tradeoff is often less flexibility on custom build details."],
      ["Best fit for custom buyers", "For engagement rings, pendants, tennis bracelets, and one-of-one designs, appointment-based private quote review is usually the better path when the design matters more than buying a preset piece."],
    ],
  },
  "/blog": {
    title: "Jewelry Education Blog | The Don Jewelers",
    description: "Read diamond education, engagement ring guides, jewelry care tips, custom jewelry advice, and luxury buying guides from The Don Jewelers.",
    label: "Blog",
    priority: "0.7",
  },
};

const categoryPageMeta = {
  "engagement-rings": ["Engagement Rings | Custom Diamond Engagement Rings | The Don Jewelers", "Shop engagement rings and custom diamond engagement rings with lab grown or natural diamond options from The Don Jewelers.", "Engagement Rings", "0.9"],
  "wedding-bands": ["Wedding Bands | Diamond Wedding Rings | The Don Jewelers", "Shop wedding bands, diamond wedding rings, and custom bands for men and women from The Don Jewelers.", "Wedding Bands", "0.8"],
  chains: ["Gold Chains & Diamond Chains | The Don Jewelers", "Shop gold chains, diamond chains, Cuban chains, and tennis chains from The Don Jewelers.", "Chains", "0.8"],
  bracelets: ["Diamond Bracelets & Tennis Bracelets | The Don Jewelers", "Shop diamond bracelets, tennis bracelets, gold bracelets, and custom bracelet designs from The Don Jewelers.", "Bracelets", "0.8"],
  "pendants-charms": ["Diamond Pendants & Charms | The Don Jewelers", "Shop diamond pendants, custom charms, cross pendants, initials, and luxury pendant designs from The Don Jewelers.", "Pendants & Charms", "0.8"],
};

function pageMetaForPath(pathname) {
  const clean = `/${String(pathname || "").replace(/^\/+|\/+$/g, "")}`.replace(/\/$/, "") || "/";
  if (staticPageMeta[clean]) return { path: clean, ...staticPageMeta[clean] };
  const categoryMatch = clean.match(/^\/category\/([^/]+)$/);
  if (categoryMatch && categoryPageMeta[categoryMatch[1]]) {
    const [title, description, label, priority] = categoryPageMeta[categoryMatch[1]];
    return { path: clean, title, description, label, priority };
  }
  return null;
}

function categoryPath(category) {
  return `/category/${categorySlug(category)}`;
}

function categoryProductPath(product) {
  const slug = productSlug(product);
  const category = String(product?.category || "");
  if (/engagement rings/i.test(category)) return `/engagement-rings/${slug}`;
  if (/lab|cvd/i.test(`${product?.source || ""} ${product?.specs?.diamondType || ""} ${product?.metadata?.growthMethod || ""}`)) return `/diamonds/lab-grown/${slug}`;
  return productPath(product);
}

function productImage(product) {
  return absoluteUrl(product?.imageUrl || product?.image || product?.metadata?.imageUrl || "don-logo.jpg") || DEFAULT_IMAGE;
}

function specEntries(product) {
  const specs = product?.specs || {};
  const metadata = product?.metadata || {};
  const rows = [
    ["Metal", specs.metal || metadata.metal],
    ["Diamond Type", specs.diamondType || metadata.growthMethod || (/lgd/i.test(product?.source || "") ? "CVD Lab-Grown Diamond" : "")],
    ["Carat Weight", specs.caratWeight ? `${specs.caratWeight} CTW` : metadata.diamondWeight ? `${metadata.diamondWeight} CTW` : ""],
    ["Color", specs.color || metadata.color],
    ["Clarity", specs.clarity || metadata.clarity],
    ["Shape", specs.shape || metadata.shape],
    ["Size / Length", specs.size || metadata.size],
    ["Stock Number", specs.stockNumber || metadata.stockNumber || product?.externalId],
    ["Availability", product?.availability || specs.availability || metadata.availability],
  ];
  return rows.filter(([, value]) => value !== undefined && value !== null && String(value).trim() !== "");
}

function productAlt(product) {
  const values = Object.fromEntries(specEntries(product));
  return [
    product?.name,
    values["Carat Weight"] && String(values["Carat Weight"]).replace(/ CTW$/i, " carat"),
    values.Shape,
    /lab|cvd/i.test(values["Diamond Type"] || "") ? "lab-grown diamond" : "diamond jewelry",
    values.Color && `${values.Color} color`,
    values.Clarity && `${values.Clarity} clarity`,
    values["Stock Number"] && `stock ${values["Stock Number"]}`,
  ].filter(Boolean).join(" ") || product?.name || "The Don Jewelers diamond jewelry";
}

function productDescription(product) {
  const specs = Object.fromEntries(specEntries(product));
  const details = [
    specs["Carat Weight"],
    specs.Shape,
    specs["Diamond Type"],
    specs.Color && `${specs.Color} color`,
    specs.Clarity && `${specs.Clarity} clarity`,
    specs["Stock Number"] && `stock ${specs["Stock Number"]}`,
  ].filter(Boolean);
  const suffix = details.length ? `, ${details.join(", ")}` : "";
  const category = product?.category ? `${product.category} ` : "";
  const price = priceFromProduct(product);
  const priceText = price ? ` Pricing starts at ${money(price)} before final sizing, metal, and customization review.` : " Request current pricing, exact specifications, and availability before purchase.";
  return `Shop ${category}${product?.name || "diamond jewelry"}${suffix}, available from ${BUSINESS_NAME}. Request a private jeweler quote for metal, sizing, diamond quality, insured shipping, and appointment-based purchase support.${priceText}`;
}

function productTitle(product) {
  const specs = Object.fromEntries(specEntries(product));
  const parts = [
    specs["Carat Weight"] ? specs["Carat Weight"].replace(/ CTW$/i, " Carat") : "",
    specs.Shape,
    /lab|cvd/i.test(specs["Diamond Type"] || "") ? "Lab Diamond" : "",
    specs.Color,
    specs.Clarity,
    specs["Stock Number"],
  ].filter(Boolean);
  const base = parts.length ? `${product.name} ${parts.join(" ")}` : product.name;
  const category = product?.category && !String(base).toLowerCase().includes(String(product.category).toLowerCase())
    ? ` ${product.category}`
    : "";
  return `${base}${category} | The Don Jewelers`;
}

function merchantReturnPolicy() {
  return {
    "@type": "MerchantReturnPolicy",
    applicableCountry: "US",
    returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
    merchantReturnDays: 7,
    returnMethod: "https://schema.org/ReturnByMail",
    returnFees: "https://schema.org/ReturnFeesCustomerResponsibility",
    refundType: "https://schema.org/FullRefund",
    description: "Custom jewelry and made-to-order items are final sale unless defective, damaged, or the wrong item is received. Eligible claims must be made within 7 days. Customers pay return shipping unless the item is defective, damaged, or incorrect.",
  };
}

function shippingDetails() {
  return {
    "@type": "OfferShippingDetails",
    shippingDestination: {
      "@type": "DefinedRegion",
      addressCountry: "US",
    },
    shippingRate: {
      "@type": "MonetaryAmount",
      value: 0,
      currency: "USD",
    },
    deliveryTime: {
      "@type": "ShippingDeliveryTime",
      handlingTime: {
        "@type": "QuantitativeValue",
        minValue: 1,
        maxValue: 3,
        unitCode: "d",
      },
      transitTime: {
        "@type": "QuantitativeValue",
        minValue: 3,
        maxValue: 7,
        unitCode: "d",
      },
      businessDays: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "https://schema.org/Monday",
          "https://schema.org/Tuesday",
          "https://schema.org/Wednesday",
          "https://schema.org/Thursday",
          "https://schema.org/Friday",
        ],
      },
    },
  };
}

function merchantOfferDefaults() {
  return {
    shippingDetails: shippingDetails(),
    hasMerchantReturnPolicy: merchantReturnPolicy(),
  };
}

function productJsonLd(product, url) {
  const price = priceFromProduct(product);
  const specs = Object.fromEntries(specEntries(product));
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [productImage(product)],
    description: productDescription(product),
    sku: specs["Stock Number"] || product.externalId || product.id,
    brand: { "@type": "Brand", name: BUSINESS_NAME },
    category: product.category,
    url,
    itemCondition: "https://schema.org/NewCondition",
    additionalProperty: specEntries(product).map(([name, value]) => ({
      "@type": "PropertyValue",
      name,
      value: String(value),
    })),
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "USD",
      price: price || undefined,
      availability: product.available === false ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      ...merchantOfferDefaults(),
    },
  };
}

function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, item], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: absoluteUrl(item),
    })),
  };
}

function injectHead(template, { title, description, url, image, jsonLd, noindex = false }) {
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/?>/i, `<meta name="description" content="${escapeHtml(description)}" />`)
    .replace(/<meta name="robots" content="[^"]*"\s*\/?>/i, `<meta name="robots" content="${noindex ? "noindex,follow" : "index,follow,max-image-preview:large"}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${escapeHtml(url)}" />`);
  html = html
    .replace(/\s*<meta property="og:[^"]+" content="[^"]*"\s*\/?>/gi, "")
    .replace(/\s*<meta name="twitter:[^"]+" content="[^"]*"\s*\/?>/gi, "");
  const meta = `
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${escapeHtml(url)}" />
    <meta property="og:type" content="product" />
    <meta property="og:image" content="${escapeHtml(image)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${escapeHtml(image)}" />
    ${process.env.GOOGLE_SITE_VERIFICATION ? `<meta name="google-site-verification" content="${escapeHtml(process.env.GOOGLE_SITE_VERIFICATION)}" />` : ""}
    ${jsonLd.map((item) => `<script type="application/ld+json" data-server-jsonld="true">${JSON.stringify(item).replace(/</g, "\\u003c")}</script>`).join("\n")}
  `;
  return html.replace("</head>", `${meta}\n</head>`);
}

function renderShell(main, routePath) {
  return `
    <header class="site-header">
      <a class="brand brand-menu-button" href="/" aria-label="The Don Jewelers home">
        <span class="brand-mark" aria-hidden="true">TD</span>
        <span class="brand-copy"><strong>The Don Jewelers & Jewelry</strong><small>Luxury custom jewelry</small></span>
      </a>
      <nav class="nav-links" aria-label="Primary navigation">
        <a href="/">Home</a>
        <a href="/category/engagement-rings">Engagement Rings</a>
        <a href="/select-diamond">Live Diamonds</a>
        <a href="/category/bracelets">Bracelets</a>
        <a href="/category/pendants-charms">Pendants</a>
        <a href="/products">Products</a>
        <a href="/cart">Cart</a>
      </nav>
    </header>
    ${main}
    <footer class="site-footer">
      <p><strong>${BUSINESS_NAME}</strong></p>
      <p>Luxury private jeweler for custom jewelry, diamonds, and fine jewelry consultations.</p>
    </footer>
    <script>window.__SSR_ROUTE__=${JSON.stringify(routePath)};</script>
  `;
}

function productMain(product) {
  const price = priceFromProduct(product);
  const image = productImage(product);
  const specs = specEntries(product);
  const gallery = Array.isArray(product.gallery) ? product.gallery.map(absoluteUrl).filter(Boolean).slice(0, 3) : [];
  return `
    <main>
      <section class="product-detail-hero catalog-jewelry-detail supplier-product-hero">
        <div class="product-media-stack">
          <img src="${escapeHtml(image)}" alt="${escapeHtml(productAlt(product))}" loading="eager">
          ${gallery.map((url, index) => `<img src="${escapeHtml(url)}" alt="${escapeHtml(`${product.name} alternate view ${index + 1}`)}" loading="lazy">`).join("")}
        </div>
        <div>
          <p class="eyebrow">${escapeHtml(product.category || "Fine Jewelry")}</p>
          <h1>${escapeHtml(product.name)}</h1>
          <p class="product-detail-price">${price ? escapeHtml(money(price)) : "Request Pricing"}</p>
          <dl class="summary-list product-spec-list">
            ${specs.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("")}
          </dl>
          <div class="builder-actions">
            ${price && product.available !== false
              ? `<button class="button button-gold" type="button" data-buy-product="${escapeHtml(product.id)}">Buy Now / Checkout with Stripe - ${escapeHtml(money(price))}</button>`
              : `<a class="button button-gold" href="/request/product?product=${encodeURIComponent(product.name)}&category=${encodeURIComponent(product.category || "Product Inquiry")}">Request Pricing</a>`}
            <a class="button button-dark" href="/request/product?product=${encodeURIComponent(product.name)}&category=${encodeURIComponent(product.category || "Product Inquiry")}">Ask a Question</a>
            <a class="button button-light" href="/request/appointment">Book Appointment</a>
          </div>
        </div>
      </section>
      <section class="trust-block-section" aria-label="Product purchase trust">
        <article><strong>Private quote review</strong><p>Every product inquiry can be reviewed for exact diamond weight, gold weight, size, availability, and customization before purchase.</p></article>
        <article><strong>Secure checkout support</strong><p>Checkout-start and payment events are logged and emailed so customer purchase attempts do not disappear.</p></article>
        <article><strong>Insured shipping</strong><p>Jewelry orders can be handled with secure payment review, insured shipping, and appointment-based pickup or consultation where applicable.</p></article>
      </section>
    </main>
  `;
}

async function prepareProducts() {
  if (databaseConfigured()) await Promise.all([seedManualProducts(), seedSnapshotProducts()]);
}

async function productPage(req, res, slug) {
  await prepareProducts();
  const product = await getProductBySlug(slug);
  if (!product || product.hidden || product.available === false) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("Product not found");
    return;
  }
  const canonicalPath = productPath(product);
  const url = `${SITE_URL}${canonicalPath}`;
  const title = productTitle(product);
  const description = productDescription(product);
  const image = productImage(product);
  const jsonLd = [
    productJsonLd(product, url),
    breadcrumbJsonLd([
      ["Home", "/"],
      [product.category || "Products", categoryPath(product.category)],
      [product.name, canonicalPath],
    ]),
  ];
  const template = fs.readFileSync(INDEX_HTML, "utf8");
  const page = injectHead(template, { title, description, url, image, jsonLd })
    .replace(/<div id="app">[\s\S]*?<\/div>/i, `<div id="app">${renderShell(productMain(product), canonicalPath)}</div>`);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=3600");
  res.end(page);
}

function diamondTitle(diamond) {
  return `${[diamond.carat && `${diamond.carat} Carat`, diamond.shape, "Lab Diamond", diamond.color, diamond.clarity, diamond.lab || diamond.certificate].filter(Boolean).join(" ")} | The Don Jewelers`;
}

function diamondDescription(diamond) {
  return `Shop this certified ${diamond.carat || ""} ct ${diamond.shape || ""} lab-grown diamond${diamond.color ? `, ${diamond.color} color` : ""}${diamond.clarity ? `, ${diamond.clarity} clarity` : ""}${diamond.lab || diamond.certificate ? `, ${diamond.lab || diamond.certificate} certified` : ""}, available from ${BUSINESS_NAME}.`.replace(/\s+/g, " ").trim();
}

function diamondPath(diamond) {
  return `/diamonds/${encodeURIComponent(diamond.reportNumber || diamond.certificate || diamond.stockNumber || diamond.id)}`;
}

function diamondAlt(diamond) {
  return `${[diamond.carat && `${diamond.carat} carat`, diamond.shape, "lab-grown diamond", diamond.color && `${diamond.color} color`, diamond.clarity && `${diamond.clarity} clarity`, (diamond.lab || diamond.certificate) && `${diamond.lab || diamond.certificate} certified`].filter(Boolean).join(" ")}`;
}

function diamondJsonLd(diamond, url) {
  const price = Number(String(diamond.price || "").replace(/[^0-9.]/g, ""));
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: diamondTitle(diamond).replace(` | The Don Jewelers`, ""),
    image: [absoluteUrl(diamond.imageUrl || diamond.mediaUrl || "don-logo.jpg")],
    description: diamondDescription(diamond),
    sku: diamond.stockNumber || diamond.id,
    brand: { "@type": "Brand", name: BUSINESS_NAME },
    category: "Lab-Grown Diamond",
    url,
    itemCondition: "https://schema.org/NewCondition",
    aggregateRating: storeAggregateRating(),
    review: storeReview(),
    additionalProperty: [
      ["Carat", diamond.carat],
      ["Shape", diamond.shape],
      ["Color", diamond.color],
      ["Clarity", diamond.clarity],
      ["Cut", diamond.cut],
      ["Polish", diamond.polish],
      ["Symmetry", diamond.symmetry],
      ["Fluorescence", diamond.fluorescence],
      ["Lab", diamond.lab || diamond.certificate],
      ["Certificate Number", diamond.reportNumber || diamond.certificate],
      ["Growth Method", diamond.growthMethod || "CVD"],
    ].filter(([, value]) => value).map(([name, value]) => ({ "@type": "PropertyValue", name, value: String(value) })),
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "USD",
      price: Number.isFinite(price) && price > 0 ? price : undefined,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      ...merchantOfferDefaults(),
    },
  };
}

function diamondMain(diamond) {
  const price = Number(String(diamond.price || "").replace(/[^0-9.]/g, ""));
  const rows = [
    ["Stock Number", diamond.stockNumber],
    ["Certificate", diamond.reportNumber || diamond.certificate],
    ["Carat", diamond.carat],
    ["Shape", diamond.shape],
    ["Color", diamond.color],
    ["Clarity", diamond.clarity],
    ["Cut", diamond.cut],
    ["Polish", diamond.polish],
    ["Symmetry", diamond.symmetry],
    ["Lab", diamond.lab || diamond.certificate],
    ["Growth Method", diamond.growthMethod || "CVD"],
  ].filter(([, value]) => value);
  return `
    <main>
      <section class="product-detail-hero catalog-jewelry-detail supplier-product-hero">
        <div class="product-media-stack">
          ${diamond.imageUrl || diamond.mediaUrl ? `<img src="${escapeHtml(absoluteUrl(diamond.imageUrl || diamond.mediaUrl))}" alt="${escapeHtml(diamondAlt(diamond))}" loading="eager">` : `<div class="product-image-placeholder">Lab Diamond</div>`}
        </div>
        <div>
          <p class="eyebrow">Certified Lab-Grown Diamond</p>
          <h1>${escapeHtml(diamondTitle(diamond).replace(" | The Don Jewelers", ""))}</h1>
          <p class="product-detail-price">${price ? escapeHtml(money(price)) : "Request Pricing"}</p>
          <dl class="summary-list product-spec-list">${rows.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("")}</dl>
          <div class="builder-actions">
            <a class="button button-gold" href="/request/product?product=${encodeURIComponent(diamondTitle(diamond))}&category=Live%20Diamond%20Selection">Request / Buy This Diamond</a>
            ${diamond.reportUrl ? `<a class="button button-light" href="${escapeHtml(diamond.reportUrl)}" target="_blank" rel="noopener noreferrer">View Certificate</a>` : ""}
          </div>
        </div>
      </section>
    </main>
  `;
}

async function cachedLooseDiamonds() {
  if (!databaseConfigured()) return [];
  const keys = ["certified:1", "certified-color:1"];
  const payloads = await Promise.all(keys.map((key) => getInventoryCache(key, { allowStale: true }).catch(() => null)));
  return payloads.flatMap((item) => item?.payload?.diamonds || []);
}

async function findDiamond(identifier) {
  const clean = decodeURIComponent(String(identifier || "")).toLowerCase();
  let diamonds = await cachedLooseDiamonds();
  if (!diamonds.length) {
    const results = await Promise.allSettled([fetchFeed("certified", 1), fetchFeed("certified-color", 1)]);
    diamonds = results.flatMap((result) => result.status === "fulfilled" ? result.value.diamonds : []);
  }
  return diamonds.find((diamond) => [diamond.reportNumber, diamond.certificate, diamond.stockNumber, diamond.id]
    .filter(Boolean)
    .some((value) => String(value).toLowerCase() === clean || slugify(value) === clean)) || null;
}

async function diamondPage(req, res, certNumber) {
  const diamond = await findDiamond(certNumber);
  if (!diamond) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("Diamond not found");
    return;
  }
  const pathName = diamondPath(diamond);
  const url = `${SITE_URL}${pathName}`;
  const title = diamondTitle(diamond);
  const description = diamondDescription(diamond);
  const image = absoluteUrl(diamond.imageUrl || diamond.mediaUrl || "don-logo.jpg");
  const jsonLd = [
    diamondJsonLd(diamond, url),
    breadcrumbJsonLd([
      ["Home", "/"],
      ["Lab-Grown Diamonds", "/select-diamond"],
      [title.replace(" | The Don Jewelers", ""), pathName],
    ]),
  ];
  const template = fs.readFileSync(INDEX_HTML, "utf8");
  const page = injectHead(template, { title, description, url, image, jsonLd })
    .replace(/<div id="app">[\s\S]*?<\/div>/i, `<div id="app">${renderShell(diamondMain(diamond), pathName)}</div>`);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=3600");
  res.end(page);
}

function pageMain(meta) {
  const ctas = moneyPageCtas(meta.path);
  const supporting = moneyPageSupport(meta);
  return `
    <main>
      <section class="product-detail-hero catalog-jewelry-detail supplier-product-hero">
        <div>
          <p class="eyebrow">${escapeHtml(BUSINESS_NAME)}</p>
          <h1>${escapeHtml(meta.label)}</h1>
          <p>${escapeHtml(meta.description)}</p>
          <div class="builder-actions">
            ${ctas.map((cta, index) => `<a class="button ${index === 0 ? "button-gold" : index === 1 ? "button-dark" : "button-light"}" href="${escapeHtml(cta.href)}">${escapeHtml(cta.label)}</a>`).join("")}
          </div>
        </div>
      </section>
      <section class="trust-block-section" aria-label="${escapeHtml(meta.label)} trust and next steps">
        ${supporting.map((item) => `<article><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.body)}</p></article>`).join("")}
      </section>
      ${meta.path === "/blog" ? `
        <section class="seo-guide-section" aria-label="Jewelry education articles">
          <div class="section-heading"><p class="eyebrow">Original Buying Guides</p><h2>Plan the ring, diamond, and appointment with confidence</h2></div>
          <div class="trust-block-section">
            ${seoArticles.map((article) => `<article><img src="/${escapeHtml(article.image)}" alt="${escapeHtml(article.title)}" loading="lazy" decoding="async" width="640" height="420"><strong><a href="/blog/${escapeHtml(article.slug)}">${escapeHtml(article.title)}</a></strong><p>${escapeHtml(article.description)}</p></article>`).join("")}
          </div>
        </section>` : ""}
      ${Array.isArray(meta.sections) && meta.sections.length ? `
        <section class="seo-guide-section" aria-label="${escapeHtml(meta.label)} guide">
          <div class="section-heading">
            <p class="eyebrow">Buying Guide</p>
            <h2>${escapeHtml(meta.label)}: what to compare before you buy</h2>
          </div>
          <div class="trust-block-section">
            ${meta.sections.map(([title, body]) => `<article><strong>${escapeHtml(title)}</strong><p>${escapeHtml(body)}</p></article>`).join("")}
          </div>
          <div class="builder-actions">
            <a class="button button-gold" href="/request/appointment">Book a Private Appointment</a>
            <a class="button button-dark" href="/start-custom-ring-design">Start Custom Ring Design</a>
            <a class="button button-light" href="/search?q=engagement%20ring">Search Rings & Diamonds</a>
          </div>
        </section>
      ` : ""}
    </main>
  `;
}

function moneyPageCtas(pathname = "") {
  const pathText = String(pathname || "");
  if (/pendant|tennis|bracelet|chain|jewelry|private|appointment|custom|don-jewelers/i.test(pathText)) {
    return [
      { href: "/request/appointment", label: "Book Appointment" },
      { href: "/custom-orders", label: "Request Custom Quote" },
      { href: "/products", label: "Browse Jewelry" },
    ];
  }
  if (/financing/i.test(pathText)) {
    return [
      { href: "/request/appointment", label: "Book Financing Consultation" },
      { href: "/products", label: "Browse Jewelry" },
      { href: "/start-custom-ring-design", label: "Start Ring Design" },
    ];
  }
  if (/ring|engagement|diamond/i.test(pathText)) {
    return [
      { href: "/start-custom-ring-design", label: "Start Custom Ring Design" },
      { href: "/request/appointment", label: "Book Appointment" },
      { href: "/select-diamond", label: "View Live Diamonds" },
    ];
  }
  return [
    { href: "/request/appointment", label: "Book Appointment" },
    { href: "/start-custom-ring-design", label: "Start Custom Ring Design" },
    { href: "/products", label: "Browse Jewelry" },
  ];
}

function moneyPageSupport(meta) {
  const label = meta?.label || "Jewelry";
  return [
    {
      title: "Quote-first buying path",
      body: `${label} visitors can request a private quote, book an appointment, or send design details before committing to final specs.`,
    },
    {
      title: "Verified local signals",
      body: "The official Google Business Profile, consistent phone number, service-area schema, and review links reinforce local trust for NYC, Allentown, the Tri-State area, and nationwide clients.",
    },
    {
      title: "Lead-safe forms",
      body: "Appointment, quote, custom design, product inquiry, and checkout-start requests are routed through the website lead email system for business notification and customer confirmation.",
    },
    {
      title: "Competitive buying tools",
      body: "Visitors can compare education pages, live CVD diamond inventory, product search, custom quote forms, Google profile trust signals, and appointment options from one website.",
    },
  ];
}

function pageJsonLd(meta, url) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: meta.label,
    headline: meta.title.replace(" | The Don Jewelers", ""),
    description: meta.description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: BUSINESS_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_NAME,
      alternateName: BRAND_ALIASES,
      url: SITE_URL,
      logo: `${SITE_URL}/don-logo.jpg`,
    },
  };
}

function articleJsonLd(article, url) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: absoluteUrl(article.image),
    datePublished: article.published,
    dateModified: article.updated,
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: BUSINESS_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: BUSINESS_NAME, url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/don-logo.jpg` } },
  };
}

function articleMain(article) {
  return `
    <main>
      <section class="page-hero">
        <div class="page-hero-copy"><p class="eyebrow">Jewelry Education</p><h1>${escapeHtml(article.title)}</h1><p>${escapeHtml(article.description)}</p></div>
      </section>
      <article class="seo-guide-section resource-article">
        <img class="resource-feature-image" src="/${escapeHtml(article.image)}" alt="${escapeHtml(article.title)} by The Don Jewelers & Jewelry" loading="eager" decoding="async" fetchpriority="high" width="1200" height="800">
        ${article.sections.map(([heading, body]) => `<section><h2>${escapeHtml(heading)}</h2><p>${escapeHtml(body)}</p></section>`).join("")}
        <div class="builder-actions">
          <a class="button button-gold" href="/request/appointment">Book a Private Appointment</a>
          <a class="button button-dark" href="/start-custom-ring-design">Start Custom Ring Design</a>
          <a class="button button-light" href="/blog">More Jewelry Guides</a>
        </div>
      </article>
    </main>`;
}

function articlePage(req, res, slug) {
  const article = seoArticles.find((item) => item.slug === String(slug || ""));
  if (!article) return notFoundPage(req, res);
  const pathname = `/blog/${article.slug}`;
  const url = `${SITE_URL}${pathname}`;
  const template = fs.readFileSync(INDEX_HTML, "utf8");
  const page = injectHead(template, {
    title: `${article.title} | The Don Jewelers`,
    description: article.description,
    url,
    image: absoluteUrl(article.image),
    jsonLd: [articleJsonLd(article, url), breadcrumbJsonLd([["Home", "/"], ["Blog", "/blog"], [article.title, pathname]])],
  }).replace(/<div id="app">[\s\S]*?<\/div>/i, `<div id="app">${renderShell(articleMain(article), pathname)}</div>`);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=600, stale-while-revalidate=86400");
  res.end(page);
}

function notFoundPage(req, res) {
  const template = fs.readFileSync(INDEX_HTML, "utf8");
  const body = `<main><section class="page-hero"><div class="page-hero-copy"><p class="eyebrow">404</p><h1>Page not found</h1><p>The page may have moved or the address may be incorrect.</p><div class="builder-actions"><a class="button button-gold" href="/products">Browse Jewelry</a><a class="button button-dark" href="/start-custom-ring-design">Start Custom Ring Design</a><a class="button button-light" href="/">Return Home</a></div></div></section></main>`;
  const page = injectHead(template, {
    title: `Page Not Found | ${BUSINESS_NAME}`,
    description: "The requested page could not be found.",
    url: `${SITE_URL}/404`,
    image: DEFAULT_IMAGE,
    jsonLd: [],
    noindex: true,
  }).replace(/<div id="app">[\s\S]*?<\/div>/i, `<div id="app">${renderShell(body, "/404")}</div>`);
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(page);
}

function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "JewelryStore"],
    "@id": `${SITE_URL}/#jewelry-store`,
    name: BUSINESS_NAME,
    alternateName: BRAND_ALIASES,
    url: SITE_URL,
    logo: `${SITE_URL}/don-logo.jpg`,
    image: DEFAULT_IMAGE,
    email: CONTACT_EMAIL,
    telephone: PHONE_DISPLAY,
    sameAs: OFFICIAL_SOCIAL_LINKS,
    hasMap: GOOGLE_BUSINESS_PROFILE_URL,
    priceRange: "$$$",
    description: "Appointment-only private jeweler for custom engagement rings, diamond jewelry, CAD design, diamond sourcing, and nationwide jewelry consultation.",
    areaServed: LOCATION_TARGETS.map((name) => ({ "@type": "Place", name })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressRegion: "NY",
      addressCountry: "US",
    },
    contactPoint: [{
      "@type": "ContactPoint",
      telephone: PHONE_DISPLAY,
      email: CONTACT_EMAIL,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["en"],
    }],
  };
}

function staticPage(req, res, pathname) {
  const meta = pageMetaForPath(pathname);
  if (!meta) {
    res.statusCode = 404;
    res.end("Page not found");
    return;
  }
  const url = `${SITE_URL}${meta.path === "/" ? "/" : meta.path}`;
  const jsonLd = [
    pageJsonLd(meta, url),
    localBusinessJsonLd(),
    breadcrumbJsonLd([
      ["Home", "/"],
      ...(meta.path === "/" ? [] : [[meta.label, meta.path]]),
    ]),
  ];
  const template = fs.readFileSync(INDEX_HTML, "utf8");
  const page = injectHead(template, {
    title: meta.title,
    description: meta.description,
    url,
    image: DEFAULT_IMAGE,
    jsonLd,
  }).replace(/<div id="app">[\s\S]*?<\/div>/i, `<div id="app">${renderShell(pageMain(meta), meta.path)}</div>`);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=3600");
  res.end(page);
}

function xmlUrl(loc, lastmod, changefreq = "weekly", priority = "0.7") {
  return `  <url><loc>${escapeXml(loc)}</loc>${lastmod ? `<lastmod>${escapeXml(new Date(lastmod).toISOString())}</lastmod>` : ""}<changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
}

async function sitemap(req, res) {
  await prepareProducts();
  const products = (await listVisibleProducts()).filter((product) => product.available !== false && !product.hidden);
  const diamonds = await cachedLooseDiamonds();
  const basePaths = [
    ["/", "weekly", "1.0"],
    ["/products", "daily", "0.9"],
    ["/select-diamond", "daily", "0.8"],
    ["/custom-orders", "monthly", "0.8"],
    ["/start-custom-ring-design", "monthly", "0.95"],
    ["/ring-size-guide", "monthly", "0.82"],
    ["/diamond-shape-guide", "monthly", "0.84"],
    ["/category/engagement-rings", "weekly", "0.9"],
    ["/category/wedding-bands", "weekly", "0.8"],
    ["/category/chains", "weekly", "0.8"],
    ["/category/bracelets", "weekly", "0.8"],
    ["/category/pendants-charms", "weekly", "0.8"],
    ["/custom-engagement-rings", "monthly", "0.9"],
    ["/lab-diamond-rings", "monthly", "0.85"],
    ["/natural-diamond-rings", "monthly", "0.85"],
    ["/diamond-tennis-chains", "monthly", "0.85"],
    ["/diamond-tennis-bracelets", "monthly", "0.85"],
    ["/diamond-pendants", "monthly", "0.85"],
    ["/diamond-crosses", "monthly", "0.8"],
    ["/custom-jewelry", "monthly", "0.9"],
    ["/jewelry-financing", "monthly", "0.8"],
    ["/diamond-education", "monthly", "0.8"],
    ["/lab-diamonds-vs-natural-diamonds", "monthly", "0.8"],
    ["/jewelry-care", "monthly", "0.75"],
    ["/custom-cad-design", "monthly", "0.85"],
    ["/nyc-diamond-district-jeweler", "monthly", "0.95"],
    ["/private-jeweler", "monthly", "0.9"],
    ["/appointment-only-jeweler", "monthly", "0.85"],
    ["/engagement-rings-allentown-pa", "monthly", "0.9"],
    ["/engagement-rings-lehigh-valley", "monthly", "0.9"],
    ["/custom-jewelry-nyc", "monthly", "0.9"],
    ["/custom-jeweler-new-jersey", "monthly", "0.88"],
    ["/diamond-jeweler-connecticut", "monthly", "0.88"],
    ["/tri-state-custom-jeweler", "monthly", "0.9"],
    ["/diamond-jeweler-pennsylvania", "monthly", "0.88"],
    ["/free-engagement-ring-consultation", "monthly", "0.9"],
    ["/lab-diamond-engagement-rings-allentown", "monthly", "0.88"],
    ["/private-jeweler-allentown", "monthly", "0.86"],
    ["/custom-engagement-rings-nyc", "monthly", "0.9"],
    ["/engagement-rings-nyc", "monthly", "0.92"],
    ["/engagement-rings-tri-state", "monthly", "0.9"],
    ["/lab-diamond-engagement-rings-nyc", "monthly", "0.9"],
    ["/custom-diamond-pendants-nyc", "monthly", "0.86"],
    ["/custom-jewelry-allentown-pa", "monthly", "0.88"],
    ["/custom-jewelry-lehigh-valley", "monthly", "0.88"],
    ["/tennis-bracelets-allentown-pa", "monthly", "0.86"],
    ["/cvd-lab-grown-diamond-jewelry", "daily", "0.88"],
    ["/diamond-rings-near-me", "monthly", "0.88"],
    ["/engagement-rings-new-jersey", "monthly", "0.88"],
    ["/engagement-rings-connecticut", "monthly", "0.88"],
    ["/the-don-jewelers", "monthly", "0.95"],
    ["/the-don-jewelers-and-jewelry", "monthly", "0.95"],
    ["/don-jewelers-nyc", "monthly", "0.9"],
    ["/the-don-jewelers-engagement-rings", "monthly", "0.92"],
    ["/diamond-pendants-allentown-pa", "monthly", "0.84"],
    ["/custom-engagement-ring-process", "monthly", "0.9"],
    ["/engagement-ring-cost-guide", "monthly", "0.88"],
    ["/lab-diamond-buying-guide", "monthly", "0.88"],
    ["/private-jeweler-vs-retail-store", "monthly", "0.86"],
    ["/blog", "weekly", "0.7"],
  ];
  const urls = [
    ...basePaths.map(([pagePath, changefreq, priority]) => xmlUrl(`${SITE_URL}${pagePath}`, null, changefreq, priority)),
    ...products.slice(0, SITEMAP_LIMIT).map((product) => xmlUrl(`${SITE_URL}${productPath(product)}`, product.updatedAt || product.sourceUpdatedAt, "daily", "0.75")),
    ...diamonds.slice(0, 4000).map((diamond) => xmlUrl(`${SITE_URL}${diamondPath(diamond)}`, null, "daily", "0.65")),
    ...seoArticles.map((article) => xmlUrl(`${SITE_URL}/blog/${article.slug}`, article.updated, "monthly", "0.78")),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=3600");
  res.end(xml);
}

function robots(req, res) {
  const body = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /api/
Disallow: /checkout
Disallow: /checkout-success
Disallow: /checkout-cancel
Disallow: /account
Disallow: /cart?*

Sitemap: ${SITE_URL}/sitemap.xml
`;
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=3600");
  res.end(body);
}

module.exports = async function handler(req, res) {
  const url = new URL(req.url, "http://localhost");
  const action = url.searchParams.get("action") || "";
  if (action === "product") return productPage(req, res, url.searchParams.get("slug") || "");
  if (action === "diamond") return diamondPage(req, res, url.searchParams.get("cert") || "");
  if (action === "article") return articlePage(req, res, url.searchParams.get("slug") || "");
  if (action === "not-found") return notFoundPage(req, res);
  if (action === "page") return staticPage(req, res, url.searchParams.get("path") || "/");
  if (action === "sitemap") return sitemap(req, res);
  if (action === "robots") return robots(req, res);
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end("SEO route not found");
};

module.exports.productPath = productPath;
module.exports.categoryProductPath = categoryProductPath;
