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
  "https://www.facebook.com/profile.php?id=100089172553878",
  GOOGLE_BUSINESS_PROFILE_URL,
];
const LOCATION_TARGETS = ["NYC Diamond District", "Manhattan NY", "New York City", "Tri-State Area", "New York", "New Jersey", "Connecticut", "Lehigh Valley PA", "Easton PA", "Bethlehem PA", "Allentown PA", "Pennsylvania", "United States"];
const DEFAULT_IMAGE = `${SITE_URL}/don-logo.jpg`;
const ROOT = path.resolve(__dirname, "..");
const INDEX_HTML = path.join(__dirname, "template.html");
const SITEMAP_LIMIT = 45000;
// Keep the sitemap selective so crawl demand is focused on the strongest,
// stable inventory instead of hundreds of near-similar supplier URLs.
const LIVE_VENDOR_SITEMAP_LIMIT = 40;

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
    title: "Custom Jeweler NYC & Engagement Rings | The Don Jewelers",
    description: "Design custom engagement rings and diamond jewelry with a private NYC jeweler. GIA and IGI options, financing, insured shipping, and personal service.",
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
    title: "Custom Engagement Rings NYC | GIA & IGI Diamonds",
    description: "Design a custom engagement ring with a private NYC jeweler. Compare GIA or IGI, lab-grown or natural diamonds, CAD design, financing, and insured shipping.",
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
    title: "Jewelry Financing with Affirm, Klarna & Afterpay | The Don Jewelers",
    description: "Explore eligible jewelry financing and Buy Now, Pay Later options through Affirm, Klarna, and Afterpay at secure Stripe Checkout. Learn approval, payment, return, and THEDON15 promotion details.",
    label: "Jewelry Financing",
    priority: "0.8",
    sections: [
      ["$500 first custom-order credit", "New customers can receive a $500 credit on a first eligible custom jewelry order of $2,500 or more. Mention the offer in the custom design request so eligibility can be confirmed during quote review. Promotions cannot stack."],
      ["15% off with THEDON15", "Enter THEDON15 in the promotion-code field at secure Stripe Checkout for 15% off eligible items in the current order. Choose either THEDON15 or the $500 first custom-order credit; promotions cannot stack."],
      ["How Buy Now, Pay Later works", "Add an eligible item to cart and continue to secure Stripe Checkout. If an eligible provider is available for the order and customer, select it, review the provider's payment schedule and disclosures, then submit an application. Approval is handled by the provider, not The Don Jewelers."],
      ["Affirm", "Affirm may offer pay-over-time plans for eligible purchases. Available terms, interest or APR, required down payment, and total cost are shown by Affirm before acceptance. Eligibility and approval vary by customer and order."],
      ["Klarna", "Klarna may offer installment or pay-later choices for eligible purchases. The available schedule, any fees or interest, and the first payment timing appear before acceptance. Klarna makes the approval decision."],
      ["Afterpay", "Afterpay may divide an eligible purchase into scheduled installments. The exact schedule, initial payment, spending limit, and late-fee rules are provided by Afterpay before acceptance. Approval is not guaranteed."],
      ["Eligibility and approval", "Provider availability can vary by order amount, location, currency, device, customer history, and Stripe eligibility. Financing logos explain possible options; they do not promise that every provider will appear or approve every application."],
      ["Payments, returns, and custom orders", "Payments are managed through the selected financing provider. Refunds and canceled orders follow the store return policy and the provider's processing timeline. Custom or made-to-order work may require deposits and may have different cancellation limits, so review the order details before payment."],
      ["Questions before applying", "Call (484) 761-2008 or book a private consultation for help choosing an item or understanding the checkout path. The Don Jewelers can explain the purchase process but does not make credit decisions or change a provider's terms."],
    ],
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
  "/engagement-ring-consultation-easton-bethlehem": {
    title: "Engagement Ring Consultation Easton & Bethlehem PA | The Don Jewelers",
    description: "Book a private engagement ring consultation for Easton and Bethlehem PA clients comparing lab or natural diamonds, custom settings, CAD design, ring size, wedding-band fit, budget, and proposal timing.",
    label: "Engagement Ring Consultation Easton & Bethlehem",
    priority: "0.92",
    sections: [
      ["Prepare before the appointment", "Bring your proposal timing, budget range, preferred diamond origin and shape, ring size if known, and a few inspiration photos. You do not need every specification decided before speaking with a jeweler."],
      ["Compare the full ring, not only the diamond", "Review center-stone proportions, setting height, basket, prongs, band width, metal, wedding-band fit, daily wear, and production timing as one complete design."],
      ["Appointment-only service", "Easton and Bethlehem clients should confirm the consultation format and appointment details directly before traveling. Remote planning and nationwide service may be available where appropriate."],
    ],
  },
  "/custom-jewelry-project-gallery": {
    title: "Custom Jewelry Project Gallery | Rings, Pendants & Diamond Pieces",
    description: "Explore original jewelry work and design inspiration from The Don Jewelers, including engagement rings, custom pendants, diamond initials, bracelets, and one-of-one pieces.",
    label: "Custom Jewelry Project Gallery",
    priority: "0.88",
    sections: [
      ["Start with owned inspiration", "Use these finished pieces and design directions to explain proportion, stone layout, metal color, engraving, and overall style. Every new commission is reviewed as its own project."],
      ["From idea to specifications", "A useful custom request includes the jewelry type, metal, diamond or gemstone preference, dimensions, ring size or chain length, budget, timeline, and inspiration files."],
      ["Review before production", "Custom work should move through specification and approval steps before final production. Exact pricing, availability, CAD needs, and timing are confirmed personally."],
    ],
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
  "/service-areas": { title: "Private Jeweler Service Areas | NY PA NJ CT Ohio", description: "Explore private jeweler service areas across New York, Pennsylvania, New Jersey, Connecticut, Ohio, Florida, the Tri-State region, and nationwide.", label: "Service Areas", priority: "0.86" },
  "/custom-jeweler-syracuse-ny": { title: "Custom Jeweler Syracuse NY | Engagement Rings & Diamonds", description: "Private custom jewelry service for Syracuse and Central New York clients seeking engagement rings, certified diamonds, CAD design, pendants, and earrings.", label: "Custom Jeweler Syracuse NY", priority: "0.84" },
  "/custom-jeweler-floral-park-ny": { title: "Custom Jeweler Floral Park NY | Engagement Rings", description: "Custom engagement rings and fine jewelry for Floral Park, Queens, Nassau County, and western Long Island with private consultation and diamond sourcing.", label: "Custom Jeweler Floral Park NY", priority: "0.84" },
  "/custom-jeweler-long-island-ny": { title: "Custom Jeweler Long Island NY | Lab & Natural Diamonds", description: "Private jeweler service for Long Island clients comparing custom engagement rings, diamonds, wedding bands, pendants, earrings, and insured delivery.", label: "Custom Jeweler Long Island NY", priority: "0.86" },
  "/custom-jeweler-new-york-state": { title: "Custom Jeweler New York State | Private Diamond Jeweler", description: "Private custom jewelry and diamond sourcing across New York State, including NYC, Long Island, Syracuse, and Central New York.", label: "Custom Jeweler New York State", priority: "0.86" },
  "/custom-jeweler-philadelphia-pa": { title: "Custom Jeweler Philadelphia PA | Engagement Rings", description: "Custom engagement rings, certified diamonds, pendants, tennis bracelets, earrings, and CAD design for Philadelphia-area clients.", label: "Custom Jeweler Philadelphia PA", priority: "0.84" },
  "/custom-jeweler-pennsylvania": { title: "Custom Jeweler Pennsylvania | Statewide Private Jeweler", description: "Statewide private jeweler service from Allentown and the Lehigh Valley to Philadelphia, Harrisburg, Scranton, Pittsburgh, and surrounding Pennsylvania communities.", label: "Custom Jeweler Pennsylvania", priority: "0.88" },
  "/custom-jewelry-pennsylvania": { title: "Custom Jewelry Pennsylvania | Private Design & Certified Diamonds", description: "Design custom jewelry in Pennsylvania with private consultation, CAD planning, GIA or IGI certified diamonds, insured nationwide shipping, and clear quote support.", label: "Custom Jewelry Pennsylvania", priority: "0.9" },
  "/jewelry-store-easton-pa": { title: "Jewelry Store Easton PA | Private Jeweler & Custom Jewelry", description: "A private jewelry-store alternative for Easton PA clients seeking engagement rings, custom jewelry, certified diamonds, appointments, and insured delivery.", label: "Jewelry Store Easton PA", priority: "0.9" },
  "/engagement-rings-easton-pa": { title: "Engagement Rings Easton PA | Custom Lab & Natural Diamond Rings", description: "Shop or design engagement rings for Easton PA with lab-grown or natural diamonds, CAD settings, ring-sizing guidance, financing options, and private consultation.", label: "Engagement Rings Easton PA", priority: "0.92" },
  "/diamond-jewelry-pennsylvania": { title: "Diamond Jewelry Pennsylvania | Rings, Pendants & Tennis Jewelry", description: "Diamond jewelry for Pennsylvania clients including engagement rings, pendants, earrings, tennis bracelets, certified stones, custom design, and insured shipping.", label: "Diamond Jewelry Pennsylvania", priority: "0.9" },
  "/diamond-district-custom-jewelry-nyc": { title: "Diamond District Custom Jewelry NYC | Private Jeweler", description: "Create Diamond District custom jewelry in NYC with one-to-one design guidance, CAD approval, certified diamond sourcing, secure checkout, and nationwide service.", label: "Diamond District Custom Jewelry NYC", priority: "0.94" },
  "/custom-jeweler-northern-new-jersey": { title: "Custom Jeweler Northern New Jersey | Engagement Rings", description: "Private custom jewelry service for Northern New Jersey clients seeking engagement rings, certified diamonds, pendants, earrings, and CAD design.", label: "Custom Jeweler Northern New Jersey", priority: "0.84" },
  "/custom-jeweler-ohio": { title: "Custom Jeweler Ohio | Engagement Rings & Lab Diamonds", description: "Remote private jeweler service for Ohio clients seeking custom engagement rings, CVD lab-grown diamonds, natural diamonds, pendants, and insured shipping.", label: "Custom Jeweler Ohio", priority: "0.82" },
  "/blog": {
    title: "Jewelry Education Blog | The Don Jewelers",
    description: "Read diamond education, engagement ring guides, jewelry care tips, custom jewelry advice, and luxury buying guides from The Don Jewelers.",
    label: "Blog",
    priority: "0.7",
  },
};

const categoryPageMeta = {
  "engagement-rings": ["Engagement Rings | Custom Diamond Engagement Rings | The Don Jewelers", "Shop engagement rings and custom diamond engagement rings with lab grown or natural diamond options from The Don Jewelers.", "Engagement Rings", "0.9"],
  "cvd-lab-grown-diamond-jewelry": ["CVD Lab-Grown Diamond Jewelry | The Don Jewelers", "Shop CVD lab-grown diamond jewelry including engagement rings, earrings, pendants, bracelets, and custom designs from The Don Jewelers.", "CVD Lab-Grown Diamond Jewelry", "0.88"],
  "mens-earrings": ["Men's Diamond Earrings | The Don Jewelers", "Shop men's diamond earrings, lab-grown diamond studs, and custom earring designs from The Don Jewelers.", "Men's Earrings", "0.82"],
  "womens-earrings": ["Women's Diamond Earrings | The Don Jewelers", "Shop women's diamond earrings, lab-grown diamond studs, and custom earring designs from The Don Jewelers.", "Women's Earrings", "0.82"],
  "wedding-bands": ["Wedding Bands | Diamond Wedding Rings | The Don Jewelers", "Shop wedding bands, diamond wedding rings, and custom bands for men and women from The Don Jewelers.", "Wedding Bands", "0.8"],
  chains: ["Gold Chains & Diamond Chains | The Don Jewelers", "Shop gold chains, diamond chains, Cuban chains, and tennis chains from The Don Jewelers.", "Chains", "0.8"],
  bracelets: ["Diamond Bracelets & Tennis Bracelets | The Don Jewelers", "Shop diamond bracelets, tennis bracelets, gold bracelets, and custom bracelet designs from The Don Jewelers.", "Bracelets", "0.8"],
  "pendants-charms": ["Diamond Pendants & Charms | The Don Jewelers", "Shop diamond pendants, custom charms, cross pendants, initials, and luxury pendant designs from The Don Jewelers.", "Pendants & Charms", "0.8"],
};

function pageMetaForPath(pathname) {
  const clean = `/${String(pathname || "").replace(/^\/+|\/+$/g, "")}`.replace(/\/$/, "") || "/";
  if (staticPageMeta[clean]) {
    const meta = { path: clean, ...staticPageMeta[clean] };
    const expanded = prioritySeoSections(meta);
    return expanded.length && !meta.sections ? { ...meta, sections: expanded } : meta;
  }
  const categoryMatch = clean.match(/^\/category\/([^/]+)$/);
  if (categoryMatch && categoryPageMeta[categoryMatch[1]]) {
    const [title, description, label, priority] = categoryPageMeta[categoryMatch[1]];
    return { path: clean, title, description, label, priority };
  }
  return null;
}

function prioritySeoSections(meta) {
  const path = String(meta?.path || "");
  const priorityPaths = [
    "/custom-jewelry-nyc", "/nyc-diamond-district-jeweler", "/custom-engagement-rings-nyc",
    "/diamond-pendants", "/diamond-tennis-chains", "/cvd-lab-grown-diamond-jewelry",
    "/natural-diamond-jewelry", "/engagement-ring-consultation-easton-bethlehem",
    "/engagement-rings-lehigh-valley", "/diamond-jeweler-pennsylvania", "/custom-jeweler-pennsylvania",
    "/custom-jewelry-pennsylvania", "/jewelry-store-easton-pa", "/engagement-rings-easton-pa",
    "/diamond-jewelry-pennsylvania", "/diamond-district-custom-jewelry-nyc",
  ];
  if (!priorityPaths.includes(path)) return [];
  const label = meta.label;
  const isNyc = /nyc|diamond-district/i.test(path);
  const isPa = /easton|bethlehem|lehigh|pennsylvania/i.test(path);
  const isRing = /engagement/i.test(path);
  const isPendant = /pendant/i.test(path);
  const isTennis = /tennis-chain/i.test(path);
  const isLab = /cvd|lab-grown/i.test(path);
  const isNatural = /natural-diamond/i.test(path);
  const productFocus = isRing ? "custom engagement rings" : isPendant ? "custom diamond pendants" : isTennis ? "diamond tennis chains" : isLab ? "CVD lab-grown diamond jewelry" : isNatural ? "natural diamond jewelry" : "custom jewelry and certified diamonds";
  const audience = isNyc ? "NYC, Manhattan, and Diamond District clients" : isPa ? "Easton, Bethlehem, Lehigh Valley, and Pennsylvania clients" : "local, tri-state, and nationwide clients";
  return [
    [`Why buyers choose ${label}`, `${label} should offer more than a product grid. The Don Jewelers & Jewelry provides a private, quote-first buying path for ${audience} seeking ${productFocus}. Clients can compare design direction, diamond type, certification, metal, size, budget, and timing before approving an order. The goal is a clear one-to-one experience with direct access to the jeweler, not a rushed showroom transaction or a generic mass-produced recommendation.`],
    ["Diamond sourcing and certification", `Diamond options can include GIA and IGI certified stones when appropriate for the project, along with detailed consideration of shape, carat weight, cut, color, clarity, measurements, fluorescence, growth method, and report number. Lab-grown and natural diamonds serve different priorities, so the best choice depends on budget, rarity preference, desired size, and the design itself. Certification details are reviewed before a client approves a center stone or major diamond purchase.`],
    ["Custom design, CAD, and approval", `A custom project begins with inspiration, dimensions, budget, lifestyle, and the intended occasion. From there, the design can move through stone sourcing, metal selection, CAD direction, proportions, setting height, prong style, engraving, and production planning. Clients receive the relevant design and quote information before final approval. This process is especially useful when an off-the-shelf piece does not provide the shape, scale, symbolism, fit, or finish the buyer wants.`],
    ["Materials, construction, and craftsmanship", `${productFocus} may be quoted in 14K or 18K yellow gold, white gold, or rose gold, with platinum considered for appropriate designs. Construction choices affect appearance, durability, comfort, maintenance, and price. The Don Jewelers explains practical tradeoffs such as hollow versus solid construction, stone-setting style, chain width, clasp choice, ring profile, or pendant bail size so the finished piece is built for the way the client expects to wear it.`],
    ["Pricing, financing, and a clear next step", `Final pricing depends on live diamond and precious-metal costs, specifications, labor, complexity, certification, and timing. Eligible customers may see Buy Now, Pay Later options through Affirm, Klarna, or Afterpay in secure Stripe Checkout, subject to provider approval and displayed terms. New clients may also qualify for the published $500 first custom-order credit on an eligible order of $2,500 or more. Promotions cannot stack, and eligibility is confirmed during quote review.`],
    ["Private service for local and nationwide clients", `${audience} can begin through the website, a phone consultation, or a private appointment. Clients outside the immediate area can share inspiration and specifications by phone, email, Zoom, FaceTime, or video chat. Finished orders can be arranged for insured nationwide shipping when appropriate. The website does not represent every service-area page as a separate storefront; it explains how clients in that market can work directly with The Don Jewelers.`],
    ["Trust, policies, and after-purchase support", `Before purchase, clients can review payment, shipping, return, custom-order, warranty, privacy, and terms pages directly on the website. Custom and made-to-order pieces can have different cancellation or return limitations because work, sourcing, or production may begin after approval. Secure checkout, written specifications, diamond-report details, insured shipping options, and craftsmanship support make the order path easier to understand before money changes hands.`],
    [`How to start a ${productFocus} request`, `Start by choosing the closest product or design path, then share the desired style, diamond preference, metal, approximate size, budget, timeline, and inspiration. For engagement rings, include ring size and proposal timing when known. For pendants or chains, include dimensions, length, width, and weight preference. The Don Jewelers reviews the request, identifies missing specifications, and follows up with the clearest available next step: a quote, sourcing options, a private consultation, or a custom CAD direction.`],
  ];
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
  const source = product?.imageUrl || product?.image || product?.metadata?.imageUrl || "don-logo.jpg";
  const optimized = !/^https?:\/\//i.test(String(source)) && /\.(?:png|jpe?g)$/i.test(String(source))
    ? String(source).replace(/^\//, "").replace(/\.(?:png|jpe?g)$/i, "-catalog.webp")
    : source;
  return absoluteUrl(optimized) || DEFAULT_IMAGE;
}

function specEntries(product) {
  const specs = product?.specs || {};
  const metadata = product?.metadata || {};
  const rows = [
    ["Jewelry Type", specs.jewelryType || metadata.jewelryType],
    ["Metal", specs.metal || metadata.metal],
    ["Diamond Type", specs.diamondType || metadata.growthMethod || (/lgd/i.test(product?.source || "") ? "CVD Lab-Grown Diamond" : "")],
    ["Carat Weight", specs.caratWeight ? `${specs.caratWeight} CTW` : metadata.diamondWeight ? `${metadata.diamondWeight} CTW` : ""],
    ["Diamond Pieces", specs.diamondPieces || metadata.diamondPieces],
    ["Color", specs.color || metadata.color],
    ["Clarity", specs.clarity || metadata.clarity],
    ["Shape", specs.shape || metadata.shape],
    ["Gross Weight", specs.grossWeight ? `${specs.grossWeight} g` : metadata.grossWeight ? `${metadata.grossWeight} g` : ""],
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

function productSeoCopy(product) {
  const specs = Object.fromEntries(specEntries(product));
  const description = String(product?.description || product?.metadata?.remarks || "").trim();
  const stock = specs["Stock Number"];
  const detailText = [
    specs["Jewelry Type"] && `jewelry type: ${specs["Jewelry Type"]}`,
    specs.Metal && `metal: ${specs.Metal}`,
    specs["Carat Weight"] && `diamond weight: ${specs["Carat Weight"]}`,
    specs["Diamond Pieces"] && `diamond pieces: ${specs["Diamond Pieces"]}`,
    specs.Shape && `shape: ${specs.Shape}`,
    specs.Color && `color: ${specs.Color}`,
    specs.Clarity && `clarity: ${specs.Clarity}`,
    specs["Gross Weight"] && `gross weight: ${specs["Gross Weight"]}`,
    specs["Size / Length"] && `size or length: ${specs["Size / Length"]}`,
  ].filter(Boolean).join("; ");
  const stockText = stock ? ` This listing is tied to stock ${stock} so The Don Jewelers can verify the exact item, availability, and checkout details before fulfillment.` : "";
  return [description, detailText ? `Specifications include ${detailText}.` : "", stockText].filter(Boolean).join(" ");
}

function productSitemapDiversityKey(product) {
  const specs = Object.fromEntries(specEntries(product));
  return [
    product?.source || "",
    product?.category || "",
    product?.name || "",
    specs["Jewelry Type"] || "",
    specs.Metal || "",
    specs.Shape || "",
    specs.Color || "",
    specs.Clarity || "",
    specs["Carat Weight"] || "",
    specs["Size / Length"] || "",
  ].map((value) => slugify(value)).join("|");
}

function productSitemapScore(product) {
  const specs = Object.fromEntries(specEntries(product));
  const price = priceFromProduct(product) || 0;
  let score = 0;
  if (product.source === "manual") score += 1000;
  if (product.imageUrl || product.image) score += 40;
  if (Array.isArray(product.gallery) && product.gallery.length) score += 20;
  if (product.description || product?.metadata?.remarks) score += 20;
  if (specs["Stock Number"]) score += 15;
  if (specs["Carat Weight"]) score += 15;
  if (specs.Metal) score += 10;
  if (specs.Color) score += 8;
  if (specs.Clarity) score += 8;
  if (price > 0) score += Math.min(60, Math.round(price / 100));
  return score;
}

function sitemapProducts(products) {
  const manual = products.filter((product) => product.source === "manual");
  const live = products
    .filter((product) => product.source !== "manual")
    .sort((a, b) => productSitemapScore(b) - productSitemapScore(a));
  const seen = new Set();
  const diverseLive = [];
  for (const product of live) {
    const key = productSitemapDiversityKey(product);
    if (seen.has(key)) continue;
    seen.add(key);
    diverseLive.push(product);
    if (diverseLive.length >= LIVE_VENDOR_SITEMAP_LIMIT) break;
  }
  return [...manual, ...diverseLive].slice(0, SITEMAP_LIMIT);
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

function injectHead(template, { title, description, url, image, imageAlt = title, jsonLd, noindex = false, ogType = "website" }) {
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
    <meta property="og:type" content="${escapeHtml(ogType)}" />
    <meta property="og:site_name" content="${escapeHtml(BUSINESS_NAME)}" />
    <meta property="og:image" content="${escapeHtml(image)}" />
    <meta property="og:image:alt" content="${escapeHtml(imageAlt)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${escapeHtml(image)}" />
    <meta name="twitter:image:alt" content="${escapeHtml(imageAlt)}" />
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
        <span class="header-menu-cue"><strong>More options</strong><small>Click here</small></span>
      </a>
      <nav class="nav-links" aria-label="Primary navigation">
        <a href="/products">Fine Jewelry</a>
        <a href="/category/engagement-rings">Engagement Rings</a>
        <a href="/select-diamond">Live Diamonds</a>
        <a class="nav-highlight" href="/start-custom-ring-design">Custom Design</a>
      </nav>
      <form class="global-search global-search-header" role="search" action="/search" method="get" aria-label="Search jewelry, diamonds, and pages">
        <input name="q" type="search" placeholder="Search all jewelry & diamonds" aria-label="Search every product, diamond, category, and page">
        <button type="submit">Search</button>
      </form>
    </header>
    <aside class="financing-announcement" aria-label="Jewelry financing options">
      <span class="financing-pulse" aria-hidden="true"></span>
      <strong><span class="finance-desktop-copy">$500 first custom-order credit</span><span class="finance-mobile-copy">$500 custom-order credit</span></strong>
      <span class="finance-desktop-copy">New clients: $500 off an eligible custom order of $2,500+. Or use THEDON15 at checkout. Promotions cannot stack.</span>
      <span class="finance-mobile-copy">Eligible $2,500+ orders · Financing available · Terms apply</span>
      <span class="bnpl-logos" aria-label="Eligible financing providers"><span class="bnpl-logo affirm-logo">affirm</span><span class="bnpl-logo klarna-logo">Klarna.</span><span class="bnpl-logo afterpay-logo">Afterpay</span></span>
      <a href="/jewelry-financing">Explore financing</a>
    </aside>
    <details class="mobile-store-menu">
      <summary>Shop and design options</summary>
      <nav aria-label="Mobile storefront navigation">
        <a href="/category/engagement-rings">Engagement Rings</a><a href="/products">Fine Jewelry</a><a href="/select-diamond">Live Diamonds</a><a href="/start-custom-ring-design">Start Custom Design</a><a href="/request/appointment">Book an Appointment</a><a href="/jewelry-financing">Financing</a>
      </nav>
      <form role="search" action="/search" method="get"><label for="mobile-site-search">Search jewelry and diamonds</label><div><input id="mobile-site-search" name="q" type="search" placeholder="What are you looking for?"><button type="submit">Search</button></div></form>
    </details>
    ${main}
    <a class="sticky-appointment-cta" href="/request/appointment" aria-label="Book a private jewelry appointment"><span>Book Appointment</span><small>Private jeweler consultation</small></a>
    <footer class="site-footer">
      <div><p><strong>${BUSINESS_NAME}</strong></p><p>Luxury private jeweler for custom jewelry, certified diamonds, and fine jewelry consultations nationwide.</p></div>
      <div class="footer-contact"><strong>Speak with a private jeweler</strong><a href="tel:+14847612008">Call or text ${PHONE_DISPLAY}</a><a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a><span>Appointment-only service and insured nationwide shipping.</span></div>
      <nav class="footer-navigation" aria-label="Footer navigation"><div class="footer-link-group"><strong>Shop</strong><a href="/products">Fine Jewelry</a><a href="/category/engagement-rings">Engagement Rings</a><a href="/select-diamond">Live Diamonds</a></div><div class="footer-link-group"><strong>Services</strong><a href="/start-custom-ring-design">Custom Design</a><a href="/request/appointment">Appointments</a><a href="/jewelry-financing">Financing</a></div><div class="footer-link-group"><strong>Buyer protection</strong><a href="/shipping-policy">Shipping</a><a href="/warranty-policy">Warranty</a><a href="/refund-return-policy">Returns</a></div><div class="footer-link-group"><strong>Learn</strong><a href="/diamond-education">Diamond Education</a><a href="/custom-jewelry-project-gallery">Project Gallery</a><a href="/blog">Journal</a></div></nav>
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
          <p>${escapeHtml(productSeoCopy(product))}</p>
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
  const retiredProductRedirects = {
    "red-ruby-diamond-halo-necklace-lgd-marquise-arc": "/products",
  };
  const retiredDestination = retiredProductRedirects[String(slug || "")];
  if (retiredDestination) {
    res.statusCode = 301;
    res.setHeader("Location", retiredDestination);
    res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=86400");
    res.end();
    return;
  }
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
  const page = injectHead(template, { title, description, url, image, imageAlt: productAlt(product), jsonLd, ogType: "product" })
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
  if (meta.path === "/") return homeMain();
  const ctas = moneyPageCtas(meta.path);
  const supporting = moneyPageSupport(meta);
  return `
    <main>
      <section class="product-detail-hero catalog-jewelry-detail supplier-product-hero">
        <div>
          <p class="eyebrow">${escapeHtml(BUSINESS_NAME)}</p>
          <h1>${escapeHtml(meta.label)}</h1>
          <p>${escapeHtml(meta.description)}</p>
          ${meta.path === "/jewelry-financing" ? `
            <div class="financing-provider-panel" aria-label="Eligible Buy Now, Pay Later providers">
              <span class="promo-code-chip">15% OFF · THEDON15</span>
              <div class="bnpl-logos"><span class="bnpl-logo affirm-logo">affirm</span><span class="bnpl-logo klarna-logo">Klarna.</span><span class="bnpl-logo afterpay-logo">Afterpay</span></div>
              <p>Subject to provider eligibility and approval. Terms are displayed before acceptance in secure Stripe Checkout.</p>
            </div>` : ""}
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
      ${meta.path === "/custom-jewelry-project-gallery" ? `
        <section class="seo-guide-section" aria-label="Original custom jewelry projects">
          <div class="section-heading"><p class="eyebrow">Owned Work & Design Inspiration</p><h2>Custom pieces built around personal specifications</h2></div>
          <div class="project-gallery-grid">
            ${[
              ["queen-aurelia-oval-marquise-ring.jpeg", "Oval and marquise custom engagement ring"],
              ["custom-dejaun-diamond-name-pendant.jpeg", "Custom diamond name pendant"],
              ["custom-st-diamond-initial-pendant-front.jpeg", "Custom diamond initial pendant"],
              ["yellow-gold-diamond-cuban-link-bracelet.jpeg", "Yellow gold diamond Cuban link bracelet"],
              ["gemstone-leaf-wedding-band-set.jpeg", "Gemstone leaf wedding band set"],
              ["medusa-diamond-signet-ring.jpeg", "Custom diamond signet ring"],
            ].map(([image, alt]) => `<figure><img src="/${image}" alt="${escapeHtml(alt)} by The Don Jewelers & Jewelry" loading="lazy" decoding="async" width="720" height="720"><figcaption>${escapeHtml(alt)}</figcaption></figure>`).join("")}
          </div>
          <div class="builder-actions"><a class="button button-gold" href="/custom-orders">Request a Custom Project</a><a class="button button-dark" href="/request/appointment">Book Appointment</a></div>
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
  if (/financing/i.test(pathText)) {
    return [
      { href: "/products", label: "Shop Eligible Jewelry" },
      { href: "/request/appointment", label: "Ask About Financing" },
      { href: "tel:+14847612008", label: "Call (484) 761-2008" },
    ];
  }
  if (/pendant|tennis|bracelet|chain|jewelry|private|appointment|custom|don-jewelers/i.test(pathText)) {
    return [
      { href: "/request/appointment", label: "Book Appointment" },
      { href: "/custom-orders", label: "Request Custom Quote" },
      { href: "/products", label: "Browse Jewelry" },
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

function homeMain() {
  return `
    <main>
      <section class="hero">
        <a class="hero-media" href="/products/queen-aurelia-oval-marquise-ring" aria-label="View the Queen Aurelia engagement ring">
          <picture><source type="image/webp" srcset="/queen-aurelia-hero-480.webp 480w, /queen-aurelia-hero-768.webp 768w, /queen-aurelia-hero-1200.webp 1200w" sizes="100vw"><img src="/queen-aurelia-oval-marquise-ring.jpeg" loading="eager" fetchpriority="high" decoding="sync" width="899" height="1600" alt="Queen Aurelia oval and marquise custom engagement ring by The Don Jewelers"></picture>
        </a>
        <div class="hero-content">
          <p class="eyebrow">Private jeweler · NYC Diamond District access</p>
          <h1>Luxury custom jewelry. Made personal.</h1>
          <p>Designed for you and built to last, with custom engagement rings, GIA and IGI certified diamond options, and one-to-one guidance from design through insured delivery.</p>
          <div class="hero-actions">
            <a class="button button-gold" href="/start-custom-ring-design">Start Your Custom Design</a>
            <a class="button button-ghost" href="/select-diamond">View Live Diamonds</a>
          </div>
          <div class="hero-trust-strip" aria-label="Why clients choose The Don Jewelers">
            <span><strong>GIA & IGI</strong> certified options</span>
            <span><strong>Insured</strong> nationwide shipping</span>
            <span><strong>Financing</strong> for eligible buyers</span>
            <span><strong>Lifetime</strong> craftsmanship support</span>
          </div>
          <a class="hero-review-preview" href="#google-reviews-title" aria-label="Read verified Google reviews">
            <span class="review-stars" aria-hidden="true">★★★★★</span>
            <span><strong>“Carlos is a 10/10 guy.”</strong><small>Matthew Haddad · Verified on Google</small></span>
            <em>Read reviews →</em>
          </a>
          <div class="hero-assurance-links"><a href="/shipping-policy">Insured shipping</a><a href="/warranty-policy">Craftsmanship support</a><a href="/refund-return-policy">Return policy</a><span>Secure Stripe checkout</span></div>
        </div>
      </section>
      <section class="home-category-section" aria-labelledby="home-category-title">
        <div class="home-category-heading"><p class="eyebrow">Shop the collection</p><h2 id="home-category-title">Find your piece</h2></div>
        <nav class="home-category-carousel" aria-label="Featured jewelry categories">
          <a href="/category/engagement-rings"><strong>Engagement Rings</strong><small>Premade and custom</small></a>
          <a href="/products"><strong>Fine Jewelry</strong><small>Shop all products</small></a>
          <a href="/select-diamond"><strong>Live Diamonds</strong><small>Certified stones</small></a>
          <a href="/cvd-lab-grown-diamond-jewelry"><strong>CVD Lab Jewelry</strong><small>Modern diamond pieces</small></a>
          <a href="/category/mens-earrings"><strong>Men's Earrings</strong><small>Studs and custom</small></a>
          <a href="/category/womens-earrings"><strong>Women's Earrings</strong><small>Classic and custom</small></a>
        </nav>
      </section>
      <section class="section google-reviews-section" aria-labelledby="google-reviews-title">
        <div class="section-heading review-summary-heading"><div><p class="eyebrow">Verified Google review</p><h2 id="google-reviews-title">A custom ring and a client story</h2><p>Photos from Catlin Rogers's featured five-star review are presented first, followed by direct links to both business profiles.</p></div><div class="google-profile-actions"><a class="button button-light" href="https://share.google/8uvOiIx224kLzQU3Y" target="_blank" rel="noopener noreferrer">View Google profile</a><a class="button button-light" href="https://share.google/z4jwjnAfyaquvfGCz" target="_blank" rel="noopener noreferrer">View second profile</a></div></div>
        <article class="google-review-feature"><div class="review-feature-media"><p class="review-featured-label">Featured client story</p><div class="review-photo-gallery"><a href="/catlin-rogers-review-ring.png" target="_blank" rel="noopener"><img src="/catlin-rogers-review-ring.png" alt="Catlin Rogers wearing her custom red gemstone engagement ring" width="320" height="320" loading="lazy" decoding="async"></a><a href="/catlin-rogers-review-proposal.png" target="_blank" rel="noopener"><img src="/catlin-rogers-review-proposal.png" alt="Catlin Rogers celebrating her engagement" width="320" height="320" loading="lazy" decoding="async"></a></div></div><div class="review-feature-copy"><p class="review-stars" aria-label="5 out of 5 stars">★★★★★</p><blockquote>“The entire process was smooth, professional, and personalized. They listened to exactly what we wanted and brought our vision to life beautifully. The craftsmanship is absolutely stunning.”</blockquote><p><strong>Catlin Rogers</strong><span>Verified on Google · Lehigh Valley, Pennsylvania</span></p></div></article>
      </section>
      <section class="trust-block-section" aria-label="Private jeweler services">
        <article><strong>Custom engagement rings</strong><p>Plan the diamond, setting, metal, ring size, CAD design, budget, and timeline directly with a private jeweler.</p><a href="/custom-engagement-rings">Explore custom engagement rings</a></article>
        <article><strong>Certified diamond sourcing</strong><p>Compare GIA and IGI certified lab-grown or natural diamonds by shape, measurements, cut, color, clarity, and price.</p><a href="/select-diamond">Select a live diamond</a></article>
        <article><strong>Private service nationwide</strong><p>Work by appointment or remote consultation with secure Stripe checkout, eligible financing, and insured nationwide shipping.</p><a href="/request/appointment">Book a private appointment</a></article>
      </section>
      <section class="seo-guide-section" aria-labelledby="home-buying-path">
        <div class="section-heading"><p class="eyebrow">A clearer way to buy</p><h2 id="home-buying-path">Why choose The Don Jewelers?</h2></div>
        <div class="trust-block-section">
          <article><strong>Personal guidance</strong><p>Work one-to-one from the first idea through diamond approval, CAD review, production, checkout, and delivery.</p></article>
          <article><strong>Clear specifications</strong><p>Review the diamond report, metal, dimensions, setting details, pricing, and order terms before approving custom work.</p></article>
          <article><strong>Built around your next step</strong><p>Browse fine jewelry, choose a live diamond, start a custom ring, or book a consultation without navigating an overloaded menu.</p></article>
        </div>
      </section>
      <section class="seo-guide-section authority-proof" aria-labelledby="home-authority-proof">
        <div class="section-heading"><p class="eyebrow">Experience you can verify</p><h2 id="home-authority-proof">Real projects, clear guidance, documented buyer protection</h2><p>Review completed work, diamond education, and the policies that apply before payment.</p></div>
        <div class="trust-block-section">
          <article><strong>Original project gallery</strong><p>See custom jewelry examples and details behind one-of-one client work.</p><a href="/custom-jewelry-project-gallery">View custom projects</a></article>
          <article><strong>Diamond education</strong><p>Compare certification, cut, color, clarity, lab-grown and natural diamond options.</p><a href="/diamond-education">Read diamond guides</a></article>
          <article><strong>Transparent policies</strong><p>Review shipping, warranty, returns, financing and custom-order approval terms.</p><a href="/custom-order-policy">Review buyer protections</a></article>
        </div>
      </section>
    </main>`;
}

function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: BUSINESS_NAME,
    alternateName: BRAND_ALIASES,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

function faqJsonLd(sections = []) {
  const questions = sections.filter((item) => Array.isArray(item) && item[0] && item[1]);
  if (!questions.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(([name, answer]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
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
    imageAlt: `${article.title} by ${BUSINESS_NAME}`,
    ogType: "article",
    jsonLd: [articleJsonLd(article, url), websiteJsonLd(), breadcrumbJsonLd([["Home", "/"], ["Blog", "/blog"], [article.title, pathname]])],
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
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "20:00",
    }],
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
    websiteJsonLd(),
    localBusinessJsonLd(),
    breadcrumbJsonLd([
      ["Home", "/"],
      ...(meta.path === "/" ? [] : [[meta.label, meta.path]]),
    ]),
    ...(faqJsonLd(meta.sections) ? [faqJsonLd(meta.sections)] : []),
  ];
  const template = fs.readFileSync(INDEX_HTML, "utf8");
  const page = injectHead(template, {
    title: meta.title,
    description: meta.description,
    url,
    image: DEFAULT_IMAGE,
    imageAlt: `${meta.label} by ${BUSINESS_NAME}`,
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
    ["/engagement-ring-consultation-easton-bethlehem", "monthly", "0.92"],
    ["/custom-jewelry-project-gallery", "monthly", "0.88"],
    ["/the-don-jewelers", "monthly", "0.95"],
    ["/the-don-jewelers-and-jewelry", "monthly", "0.95"],
    ["/don-jewelers-nyc", "monthly", "0.9"],
    ["/the-don-jewelers-engagement-rings", "monthly", "0.92"],
    ["/diamond-pendants-allentown-pa", "monthly", "0.84"],
    ["/custom-engagement-ring-process", "monthly", "0.9"],
    ["/engagement-ring-cost-guide", "monthly", "0.88"],
    ["/lab-diamond-buying-guide", "monthly", "0.88"],
    ["/private-jeweler-vs-retail-store", "monthly", "0.86"],
    ["/service-areas", "monthly", "0.86"],
    ["/custom-jeweler-syracuse-ny", "monthly", "0.84"],
    ["/custom-jeweler-floral-park-ny", "monthly", "0.84"],
    ["/custom-jeweler-long-island-ny", "monthly", "0.86"],
    ["/custom-jeweler-new-york-state", "monthly", "0.86"],
    ["/custom-jeweler-philadelphia-pa", "monthly", "0.84"],
    ["/custom-jeweler-pennsylvania", "monthly", "0.88"],
    ["/custom-jewelry-pennsylvania", "monthly", "0.9"],
    ["/jewelry-store-easton-pa", "monthly", "0.9"],
    ["/engagement-rings-easton-pa", "monthly", "0.92"],
    ["/diamond-jewelry-pennsylvania", "monthly", "0.9"],
    ["/diamond-district-custom-jewelry-nyc", "monthly", "0.94"],
    ["/custom-jeweler-northern-new-jersey", "monthly", "0.84"],
    ["/custom-jeweler-ohio", "monthly", "0.82"],
    ["/blog", "weekly", "0.7"],
  ];
  const urls = [
    ...basePaths.map(([pagePath, changefreq, priority]) => xmlUrl(`${SITE_URL}${pagePath}`, null, changefreq, priority)),
    ...sitemapProducts(products).map((product) => xmlUrl(`${SITE_URL}${productPath(product)}`, product.updatedAt || product.sourceUpdatedAt, product.source === "manual" ? "weekly" : "daily", product.source === "manual" ? "0.8" : "0.68")),
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
