const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const contactEmail = "thedonjewelersandjewelry@gmail.com";
const phoneDisplay = "(484) 761-2008";
const phoneHref = "tel:+14847612008";
const businessName = "The Don Jewelers & Jewelry";
const serviceArea = "Pennsylvania, New Jersey, New York, and nationwide shipping";
const stripePaymentLink = "https://buy.stripe.com/14A5kEeX9aYgfrKfCw5kk00";
const asset = (name) => `./${name}`;
const fallbackImage = "don-logo.jpg";
const imageSafety = `loading="lazy" decoding="async" fetchpriority="low" onerror="this.onerror=null;this.src='${asset(fallbackImage)}';"`;
const instagramHandle = "@los_thejeweler";

const baseCarats = [
  ["1 carat", 1900],
  ["1.5 carat", 2160],
  ["2 carat", 2420],
  ["2.5 carat", 2680],
  ["3 carat", 2940],
  ["3.5 carat", 3200],
  ["4 carat", 3460],
  ["4.5 carat", 3720],
  ["5 carat", 3980],
  ["5.5 carat", 4240],
  ["6 carat", 4500],
];
const lunaCarats = [
  ["1 carat", 2200],
  ["1.5 carat", 2460],
  ["2 carat", 2720],
  ["2.5 carat", 2980],
  ["3 carat", 3240],
  ["3.5 carat", 3500],
  ["4 carat", 3760],
  ["4.5 carat", 4020],
  ["5 carat", 4280],
  ["5.5 carat", 4540],
  ["6 carat", 4800],
];
const ovalCarats = [
  ["1 carat", 1600],
  ["1.5 carat", 1860],
  ["2 carat", 2120],
  ["2.5 carat", 2380],
  ["3 carat", 2640],
  ["3.5 carat", 2900],
  ["4 carat", 3160],
  ["4.5 carat", 3420],
  ["5 carat", 3680],
  ["5.5 carat", 3940],
  ["6 carat", 4200],
];
const mensWeddingBandDiamondWeights = [
  ["6mm / approx. 1.50 ctw", 2800],
  ["8mm / approx. 2.50 ctw", 3950],
  ["10mm / approx. 4.00 ctw", 5650],
  ["12mm / approx. 5.50 ctw", 7250],
  ["14mm / approx. 7.00 ctw", 9250],
];
const mensWeddingBandCertifiedCarats = ovalCarats.map(([label, price]) => [`IGI certified ${label}`, price + 1200]);
const mensWeddingBandMetals = ["14K Yellow Gold", "14K White Gold", "14K Rose Gold", "18K Yellow Gold", "18K White Gold", "18K Rose Gold", "Platinum"];
const mensWeddingBandSurcharges = {
  "18K Yellow Gold": 375,
  "18K White Gold": 375,
  "18K Rose Gold": 375,
  Platinum: 850,
};
const tennisBraceletPointers = [
  ["10 pointers / approx. 5.5 carats", 1499],
  ["15 pointers", 2399],
  ["20 pointers", 3299],
  ["25 pointers", 4199],
  ["30 pointers", 5099],
  ["35 pointers", 5999],
  ["40 pointers", 6899],
];
const earringCarats = [
  ["1 carat", 650],
  ["1.5 carat", 925],
  ["2 carat", 1300],
  ["2.5 carat", 1675],
  ["3 carat", 2050],
  ["3.5 carat", 2425],
  ["4 carat", 2800],
  ["4.5 carat", 3175],
  ["5 carat", 3550],
  ["5.5 carat", 3925],
  ["6 carat", 4300],
];
const premiumStudEarringCarats = [
  ["1 carat", 1075],
  ["1.5 carat", 1325],
  ["2 carat", 1575],
  ["2.5 carat", 1825],
  ["3 carat", 2075],
  ["3.5 carat", 2325],
  ["4 carat", 2575],
  ["4.5 carat", 2825],
  ["5 carat", 3075],
  ["5.5 carat", 3325],
  ["6 carat", 3575],
];
const monarchRingCarats = [
  ["1 carat", 1950],
  ["1.5 carat", 2325],
  ["2 carat", 2700],
  ["2.5 carat", 3075],
  ["3 carat", 3450],
  ["3.5 carat", 3825],
  ["4 carat", 4200],
  ["4.5 carat", 4575],
  ["5 carat", 4950],
  ["5.5 carat", 5325],
  ["6 carat", 5700],
];
const queenAureliaCarats = [
  ["1 carat", 2600],
  ["1.5 carat", 3000],
  ["2 carats", 3400],
  ["2.5 carats", 3800],
  ["3 carats", 4200],
  ["3.5 carats", 4600],
  ["4 carats", 5000],
  ["4.5 carats", 5400],
  ["5 carats", 5800],
  ["5.5 carats", 6200],
  ["6 carats", 6600],
];
const ringSizes = ["3", "3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13"];
const metals = ["14K Yellow Gold", "14K White Gold", "14K Rose Gold", "18K Yellow Gold", "18K White Gold", "18K Rose Gold", "Platinum"];
const braceletMetals = ["14K Yellow Gold", "14K White Gold", "14K Rose Gold", "18K Yellow Gold", "18K White Gold", "18K Rose Gold", "Platinum", "Silver"];
const braceletGoldMetals = ["14K Yellow Gold", "14K White Gold", "14K Rose Gold", "18K Yellow Gold", "18K White Gold", "18K Rose Gold"];
const pendantMetals = ["14K Yellow Gold", "14K White Gold", "14K Rose Gold", "18K Yellow Gold", "18K White Gold", "18K Rose Gold", "Platinum", "Silver"];
const pendantGoldPlatinumMetals = ["14K Yellow Gold", "14K White Gold", "14K Rose Gold", "18K Yellow Gold", "18K White Gold", "18K Rose Gold", "Platinum"];
const shapes = ["Round", "Cushion", "Emerald", "Asscher", "Oval", "Pear", "Marquise", "Radiant", "Custom Shape"];
const engagementRingMetalSurcharges = {
  "18K Yellow Gold": 375,
  "18K White Gold": 375,
  "18K Rose Gold": 375,
  Platinum: 625,
};
const diamondTypeOptions = ["Natural Diamond", "Lab-Grown Diamond"];
const quoteMetals = ["14K White Gold", "14K Yellow Gold", "14K Rose Gold", "18K White Gold", "18K Yellow Gold", "18K Rose Gold", "Platinum"];
const quoteCategories = ["Custom Engagement Ring Request", "Custom Tennis Bracelet Request", "Custom Pendant Request", "Custom Chain Request", "Custom Grillz Request", "Custom CAD Project Request", "General Contact Form", "Product Inquiry Form", "Request Custom Design Form"];
const quoteQualityOptions = ["VVS", "VS", "SI", "DE Color", "Natural diamond quote", "Lab-grown diamond quote", "Not sure yet"];
const importedDiamondQualityOptions = ["VVS", "VS"];
const handcraftedNotice = "Due to the handcrafted nature of fine jewelry, final gold weight, diamond weight, stone count, and specifications may vary slightly. Contact us to request exact weight and specifications before purchase.";

const premiumStudMetalSurcharges = {
  "18K Yellow Gold": 375,
  "18K White Gold": 375,
  "18K Rose Gold": 375,
  Platinum: 625,
};

const premiumStudProducts = [
  ["asscher-diamond-stud-earrings", "Asscher Diamond Stud Earrings", "asscher-stud-earrings-product-black.png", "Asscher cut diamond screw-back stud earrings", "Asscher"],
  ["cushion-diamond-stud-earrings", "Cushion Diamond Stud Earrings", "cushion-stud-earrings-product-black.png", "Cushion cut diamond screw-back stud earrings", "Cushion"],
  ["emerald-diamond-stud-earrings", "Emerald Diamond Stud Earrings", "emerald-stud-earrings-product-black.png", "Emerald cut diamond screw-back stud earrings", "Emerald"],
  ["oval-diamond-stud-earrings", "Oval Diamond Stud Earrings", "oval-stud-earrings-product-black.png", "Oval cut diamond screw-back stud earrings", "Oval"],
  ["pear-diamond-stud-earrings", "Pear Diamond Stud Earrings", "pear-stud-earrings-product-black.png", "Pear shape diamond screw-back stud earrings", "Pear"],
  ["round-brilliant-diamond-stud-earrings", "Round Brilliant Diamond Stud Earrings", "round-stud-earrings-product-black.png", "Round brilliant diamond screw-back stud earrings", "Round"],
].map(([id, name, image, alt, shape]) => ({
  id,
  category: "Women's Earrings",
  secondaryCategories: ["Men's Earrings"],
  name,
  price: 1075,
  estimate: 1075,
  priceLabel: "Starting at $1,075 for 1 carat",
  image,
  alt,
  lede: `${name} with screw-back posts, starting at $1,075 for 1 carat total weight. Select total carat weight from 1 to 6 carats, diamond quality, and metal. Final pricing updates by carat weight and metal, with natural diamonds available by request.`,
  cta: `Message Us for Custom ${shape} Stud Earrings`,
  metalSurcharges: premiumStudMetalSurcharges,
  badges: ["Diamond Studs", "Screw Backs", "Starting at $1,075", "Made to Order"],
  buttons: ["Add to Cart", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
  fields: [
    ["Total Diamond Weight", premiumStudEarringCarats],
    ["Diamond Shape", [shape]],
    ["Diamond Type", ["Lab-Grown Diamond", "Natural Diamond"]],
    ["Diamond Color", ["D", "E", "F"]],
    ["Clarity", ["VVS", "VS"]],
    ["Metal", metals],
    ["Back Type", ["Screw back"]],
    ["Specification Note", ["Weight varies. Request weight details."]],
  ],
}));

const ringMetalOptions = ["14K Yellow Gold", "14K White Gold", "14K Rose Gold", "18K Yellow Gold", "18K White Gold", "18K Rose Gold", "Platinum"];
const ringQuoteFields = (stoneShape, styleOptions = ["Custom ring"]) => [
  ["Metal", ringMetalOptions],
  ["Ring Size", ringSizes],
  ["Stone Shape", Array.isArray(stoneShape) ? stoneShape : [stoneShape]],
  ["Diamond Type", ["Lab-Grown Diamond", "Natural Diamond", "Not sure yet"]],
  ["Diamond Color", ["D", "E", "F", "Custom color request"]],
  ["Clarity", ["VVS", "VS", "SI by request"]],
  ["Setting Style", styleOptions],
  ["Specification Note", ["Final pricing varies by gold, diamond type, carat weight, stone quality, and customization."]],
];
const emeraldRadianceMetals = [
  ["14K Yellow Gold", 1400],
  ["14K White Gold", 1400],
  ["14K Rose Gold", 1400],
  ["18K Yellow Gold", 1800],
  ["18K White Gold", 1800],
  ["18K Rose Gold", 1800],
];
const bandMetalOptions = ["14K Yellow Gold", "14K White Gold", "14K Rose Gold", "18K Yellow Gold", "18K White Gold", "18K Rose Gold"];
const bandMetalOptionsWithSilver = ["Silver", ...bandMetalOptions];
const mensBandFields = (diamondLayout, finishOptions) => [
  ["Metal", bandMetalOptions],
  ["Ring Size", ringSizes],
  ["Band Width", ["6mm", "7mm", "8mm", "10mm", "Custom width"]],
  ["Diamond Layout", diamondLayout],
  ["Diamond Type", ["Lab-Grown Diamond", "Natural Diamond", "Not sure yet"]],
  ["Diamond Color", ["D", "E", "F", "Custom color request"]],
  ["Clarity", ["VVS", "VS", "SI by request"]],
  ["Finish", finishOptions],
  ["Specification Note", ["Request final pricing by exact gold weight, diamond weight, ring size, width, and finish."]],
];
const mensBandMetalSurcharges = {
  "18K Yellow Gold": 375,
  "18K White Gold": 375,
  "18K Rose Gold": 375,
};
const anchorPendantMetalSurcharges = {
  "18K Yellow Gold": 425,
  "18K White Gold": 425,
  "18K Rose Gold": 425,
};
const ankletLengthOptions = ["8.5 inches", "9 inches", "9.5 inches", "10 inches", "10.5 inches", "Custom Size - Message Request"];
const ankletProducts = [
  {
    id: "celeste-bezel-diamond-station-anklet",
    category: "Anklets",
    name: "Celeste Bezel Diamond Station Anklet",
    price: 965,
    estimate: 965,
    priceLabel: "Starting at $965 in 14K gold",
    image: "bracelet-01.png",
    alt: "Gold bezel-set lab diamond station anklet on a black background",
    lede: "Made-to-order 14K lab-grown diamond station anklet with five bezel-set diamond stations and an estimated 0.35 to 0.50 CTW, depending on final size and customization.",
    cta: "Request Celeste Anklet Quote",
    badges: ["Anklets", "Lab Diamonds", "14K Gold", "Made to Order"],
    buttons: ["Add to Cart", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Metal", [["14K Yellow Gold", 965], ["14K White Gold", 965], ["14K Rose Gold", 965], ["18K Yellow Gold", 1300], ["18K White Gold", 1300], ["18K Rose Gold", 1300]]], ["Anklet Length", ankletLengthOptions], ["Diamond Type", ["Lab-Grown Diamond"]], ["Estimated Diamond Weight", ["Approx. 0.35 to 0.50 CTW"]], ["Specification Note", ["Weight varies. Request weight details."]]],
  },
  {
    id: "lumiere-pearl-paperclip-anklet",
    category: "Anklets",
    name: "Lumiere Pearl Paperclip Anklet",
    price: 1100,
    estimate: 1100,
    priceLabel: "Starting at $1,100 in 14K gold",
    image: "bracelet-04.png",
    alt: "Gold paperclip anklet with pearl stations on a black satin background",
    lede: "Made-to-order pearl paperclip anklet in 14K gold with luminous pearl stations and adjustable chain detail.",
    cta: "Request Pearl Anklet Quote",
    badges: ["Anklets", "Pearls", "14K Gold", "Made to Order"],
    buttons: ["Add to Cart", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Metal", [["14K Yellow Gold", 1100], ["14K White Gold", 1100], ["14K Rose Gold", 1100], ["18K Yellow Gold", 1500], ["18K White Gold", 1500], ["18K Rose Gold", 1500]]], ["Anklet Length", ankletLengthOptions], ["Pearl Detail", ["Pearl stations"]], ["Production", ["Made to Order"]], ["Specification Note", ["Weight varies. Request weight details."]]],
  },
  {
    id: "fleur-diamond-cluster-station-anklet",
    category: "Anklets",
    name: "Fleur Diamond Cluster Station Anklet",
    price: 1000,
    estimate: 1000,
    priceLabel: "Starting at $1,000 in 14K gold",
    image: "bracelet-05.png",
    alt: "Gold lab diamond flower cluster station anklet on black satin",
    lede: "Made-to-order 14K lab-grown diamond cluster station anklet with floral diamond stations and an estimated 0.55 to 0.75 CTW, depending on anklet length and final stone layout.",
    cta: "Request Fleur Anklet Quote",
    badges: ["Anklets", "Lab Diamonds", "Cluster Detail", "Made to Order"],
    buttons: ["Add to Cart", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Metal", [["14K Yellow Gold", 1000], ["14K White Gold", 1000], ["14K Rose Gold", 1000], ["18K Yellow Gold", 1350], ["18K White Gold", 1350], ["18K Rose Gold", 1350]]], ["Anklet Length", ankletLengthOptions], ["Diamond Type", ["Lab-Grown Diamond"]], ["Estimated Diamond Weight", ["Approx. 0.55 to 0.75 CTW"]], ["Specification Note", ["Weight varies. Request weight details."]]],
  },
];
const uploadedMensBandProducts = [
  {
    id: "marquise-crown-diamond-engagement-ring",
    category: "Engagement Rings",
    name: "Marquise Crown Diamond Engagement Ring",
    price: 2200,
    estimate: 2200,
    image: "mens-band-black-01.png",
    alt: "Yellow gold marquise diamond engagement ring with side diamonds",
    lede: "Select a diamond size, stone shape, diamond color, clarity, metal, and exact ring size. Your luxury engagement ring summary updates instantly.",
    cta: "Request Marquise Crown Ring Quote",
    badges: ["Engagement Ring", "Marquise Center", "14K or 18K Gold", "Made to Order"],
    buttons: ["Add to Cart", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [
      ["Diamond Size", lunaCarats],
      ["Stone Shape", shapes],
      ["Diamond Color", ["D", "E", "F", "Custom color request"]],
      ["Clarity", ["VVS", "VS"]],
      ["Metal", metals],
      ["Ring Size", ringSizes],
    ],
  },
  {
    id: "atlas-brushed-diamond-mens-band",
    category: "Wedding Bands",
    secondaryCategories: ["Men's Rings"],
    name: "Atlas Brushed Diamond Men's Band",
    price: 1800,
    estimate: 1800,
    priceLabel: "Starting at $1,800 in 14K gold",
    image: "mens-band-black-02.png",
    alt: "Yellow gold brushed men's wedding band with diamond channel",
    lede: "A yellow gold men's wedding band with a brushed center, polished rails, and a round diamond channel. Built by width, ring size, gold karat, and diamond quality.",
    cta: "Request Atlas Men's Band Quote",
    metalSurcharges: mensBandMetalSurcharges,
    badges: ["Men's Ring", "Wedding Band", "14K or 18K Gold", "Request Pricing"],
    buttons: ["Request Pricing", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: mensBandFields(["Round diamond center channel", "Half diamond channel", "Full diamond channel", "Custom diamond layout"], ["Brushed center", "Polished rails", "Satin center", "Custom finish"]),
  },
  {
    id: "imperial-scroll-diamond-mens-band",
    category: "Wedding Bands",
    secondaryCategories: ["Men's Rings"],
    name: "Imperial Scroll Diamond Men's Band",
    price: 1825,
    estimate: 1825,
    priceLabel: "Starting at $1,825 in 14K gold",
    image: "mens-band-black-03.png",
    alt: "Yellow gold engraved men's wedding band with floral diamond accents",
    lede: "A carved yellow gold men's band with black scroll engraving, floral detail, and diamond accents. Final pricing depends on width, gold weight, engraving, and stone layout.",
    cta: "Request Imperial Scroll Band Quote",
    metalSurcharges: mensBandMetalSurcharges,
    badges: ["Men's Ring", "Wedding Band", "Engraved", "14K or 18K Gold"],
    buttons: ["Request Pricing", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: mensBandFields(["Floral diamond accents", "Diamond flower stations", "No diamonds", "Custom diamond accents"], ["Black enamel scroll", "Engraved gold", "Polished edges", "Custom engraving"]),
  },
  {
    id: "sterling-flora-engraved-mens-band",
    category: "Wedding Bands",
    secondaryCategories: ["Men's Rings"],
    name: "Sterling Fleur Engraved Men's Band",
    price: 800,
    estimate: 800,
    priceLabel: "Starting at $800 in silver",
    image: "mens-band-black-04.png",
    alt: "Silver engraved men's wedding band with floral detail",
    lede: "A silver floral engraved men's wedding band with milgrain edges and refined bright-cut detail, quoted by size, width, and engraving depth.",
    cta: "Request Sterling Fleur Band Quote",
    badges: ["Men's Ring", "Wedding Band", "Engraved", "Silver"],
    buttons: ["Request Pricing", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Metal", ["Silver"]], ["Ring Size", ringSizes], ["Band Width", ["6mm", "7mm", "8mm", "10mm", "Custom width"]], ["Diamond Layout", ["Floral diamond accents", "No diamonds", "Custom diamond stations"]], ["Diamond Type", ["Lab-Grown Diamond", "Natural Diamond", "Not sure yet"]], ["Diamond Color", ["D", "E", "F", "Custom color request"]], ["Clarity", ["VVS", "VS", "SI by request"]], ["Finish", ["Floral engraving", "Milgrain edges", "High polish interior", "Custom engraving"]], ["Specification Note", ["Request final pricing by exact silver weight, diamond weight, ring size, width, and finish."]]],
  },
  {
    id: "regent-three-row-diamond-mens-band",
    category: "Wedding Bands",
    secondaryCategories: ["Men's Rings"],
    name: "Regent Three-Row Diamond Men's Band",
    price: 2800,
    estimate: 2800,
    priceLabel: "Starting at $2,800 in 14K gold",
    image: "mens-band-black-05.png",
    alt: "Two-tone men's diamond wedding band with three diamond rows",
    lede: "A bold two-tone men's wedding band with princess-cut center diamonds and round diamond rows, custom quoted by width, carat weight, metal, and ring size.",
    cta: "Request Regent Diamond Band Quote",
    badges: ["Men's Ring", "Wedding Band", "Two-Tone", "Request Pricing"],
    buttons: ["Request Pricing", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: mensBandFields(["Princess-cut center row", "Round diamond outer rows", "Three-row diamond setting", "Custom row layout"], ["Two-tone polished", "White gold center", "Yellow gold rails", "Custom two-tone finish"]),
  },
  {
    id: "aureate-floral-diamond-mens-band",
    category: "Wedding Bands",
    secondaryCategories: ["Men's Rings"],
    name: "Oriette Fleur Diamond Men's Band",
    price: 1850,
    estimate: 1850,
    priceLabel: "Starting at $1,850 in 14K gold",
    image: "mens-band-black-06.png",
    alt: "Yellow gold floral engraved men's wedding band with diamond accents",
    lede: "A yellow gold floral engraved men's band with bead borders and diamond accents, made to order in 14K or 18K gold.",
    cta: "Request Oriette Fleur Band Quote",
    metalSurcharges: mensBandMetalSurcharges,
    badges: ["Men's Ring", "Wedding Band", "Floral Engraving", "14K or 18K Gold"],
    buttons: ["Request Pricing", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: mensBandFields(["Diamond floral stations", "Scattered diamond accents", "No diamonds", "Custom diamond accents"], ["Floral engraving", "Beaded edges", "High polish interior", "Custom finish"]),
  },
  {
    id: "titan-brushed-diamond-edge-mens-band",
    category: "Wedding Bands",
    secondaryCategories: ["Men's Rings"],
    name: "Titan Brushed Diamond Edge Men's Band",
    price: 1850,
    estimate: 1850,
    priceLabel: "Starting at $1,850 in 14K white gold",
    image: "mens-band-black-07.png",
    alt: "White gold brushed men's wedding band with diamond edges",
    lede: "A wide white gold men's band with a brushed center and diamond-set edges, quoted by width, ring size, diamond weight, and gold karat.",
    cta: "Request Titan Diamond Edge Band Quote",
    metalSurcharges: mensBandMetalSurcharges,
    badges: ["Men's Ring", "Wedding Band", "Diamond Edges", "14K or 18K Gold"],
    buttons: ["Request Pricing", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: mensBandFields(["Diamond edges", "Single diamond edge", "Double diamond edge", "Custom diamond edge layout"], ["Brushed center", "Polished bevels", "Satin center", "Custom finish"]),
  },
];
const uploadedRingProducts = [
  {
    id: "rose-three-stone-diamond-engagement-ring",
    category: "Engagement Rings",
    name: "Rose Three-Stone Diamond Engagement Ring",
    price: 2200,
    estimate: 2200,
    image: "ring-product-black-01.png",
    alt: "Rose gold three-stone diamond engagement ring on black stone",
    lede: "Select a diamond size, stone shape, diamond color, clarity, metal, and exact ring size. Your luxury engagement ring summary updates instantly.",
    cta: "Request Rose Three-Stone Ring Quote",
    badges: ["Engagement Ring", "Three-Stone", "Made to Order"],
    buttons: ["Add to Cart", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Diamond Size", lunaCarats], ["Stone Shape", shapes], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Ring Size", ringSizes]],
  },
  {
    id: "emerald-radiance-gold-ring",
    category: "Women's Rings",
    name: "Emerald Radiance Gold Ring",
    price: 1400,
    estimate: 1400,
    priceLabel: "Starting at $1,400",
    image: "ring-product-black-02.png",
    alt: "Emerald cut green gemstone ring in yellow gold with diamond band",
    lede: "A green emerald-cut center stone ring with a diamond pave band, available in 14K or 18K gold options. Starting at $1,400 before final stone and gold selections.",
    cta: "Request Emerald Radiance Ring Quote",
    badges: ["Women's Ring", "Emerald Style", "Starting at $1,400"],
    buttons: ["Add to Cart", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [
      ["Metal", emeraldRadianceMetals],
      ["Ring Size", ringSizes],
      ["Center Stone", ["Emerald", "Green gemstone", "Custom gemstone"]],
      ["Stone Shape", ["Emerald cut"]],
      ["Diamond Quality", ["VVS", "VS"]],
      ["Diamond Color", ["D", "E", "F"]],
      ["Setting Style", ["Pave band", "Four-prong emerald setting"]],
    ],
  },
  {
    id: "petite-diamond-half-eternity-band",
    category: "Women's Rings",
    name: "Petite Diamond Half Eternity Band",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Request Pricing",
    image: "ring-product-black-03.png",
    alt: "White gold petite round diamond half eternity band",
    lede: "A slim half eternity band with round diamonds across the top, made to order by ring size, metal, and diamond quality.",
    cta: "Request Petite Eternity Band Quote",
    badges: ["Women's Ring", "Diamond Band", "Made to Order"],
    buttons: ["Request Pricing", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: ringQuoteFields("Round", ["Half eternity", "Stacking band"]),
  },
  {
    id: "fleur-marquise-diamond-wrap-ring",
    category: "Women's Rings",
    name: "Fleur Marquise Diamond Wrap Ring",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Request Pricing",
    image: "ring-product-black-04.png",
    alt: "White gold flower wrap ring with marquise diamonds",
    lede: "A floral diamond wrap ring with marquise-petal flower stations and pave detail, quoted by metal, ring size, and diamond layout.",
    cta: "Request Fleur Wrap Ring Quote",
    badges: ["Women's Ring", "Flower Design", "Marquise Diamonds"],
    buttons: ["Request Pricing", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: ringQuoteFields("Marquise", ["Open wrap ring", "Flower design", "Pave band"]),
  },
  {
    id: "princess-solitaire-diamond-engagement-ring",
    category: "Engagement Rings",
    name: "Classic Princess Diamond Engagement Ring",
    price: 1600,
    estimate: 1600,
    image: "ring-product-black-05.png",
    alt: "White gold princess cut diamond solitaire engagement ring",
    lede: "Select a diamond size, princess stone shape, diamond color, clarity, metal, and exact ring size. Your luxury engagement ring summary updates instantly.",
    cta: "Request Classic Princess Ring Quote",
    badges: ["Engagement Ring", "Princess Cut", "Solitaire"],
    buttons: ["Add to Cart", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Diamond Size", ovalCarats], ["Stone Shape", ["Princess"]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Ring Size", ringSizes]],
  },
  {
    id: "marquise-leaf-diamond-ring",
    category: "Women's Rings",
    name: "Marquise Leaf Diamond Ring",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Request Pricing",
    image: "ring-product-black-06.png",
    alt: "White gold leaf ring with marquise diamond leaf shapes",
    lede: "A leaf-inspired diamond ring with marquise shapes and pave detail, made to order in your selected metal and ring size.",
    cta: "Request Marquise Leaf Ring Quote",
    badges: ["Women's Ring", "Leaf Design", "Diamond Accent"],
    buttons: ["Request Pricing", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: ringQuoteFields("Marquise", ["Leaf design", "Pave band"]),
  },
  {
    id: "royal-duo-diamond-band-set",
    category: "Men's Rings",
    name: "Royal Duo Diamond Band Set",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Request Pricing",
    image: "ring-product-black-07.png",
    alt: "Yellow gold diamond band pair with polished and diamond-set bands",
    lede: "A bold yellow gold diamond band set with polished and diamond-set options, quoted by width, ring size, gold karat, and diamond layout.",
    cta: "Request Royal Duo Band Quote",
    badges: ["Men's Ring", "Diamond Band", "Made to Order"],
    buttons: ["Request Pricing", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: ringQuoteFields("Round", ["Wide band", "Diamond rows", "Pair or single ring"]),
  },
  {
    id: "azure-marquise-diamond-cluster-ring",
    category: "Women's Rings",
    name: "Azure Marquise Diamond Cluster Ring",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Request Pricing",
    image: "ring-product-black-09.png",
    alt: "Blue marquise center stone ring with diamond cluster halo",
    lede: "A statement marquise blue center stone ring framed with diamond clusters, quoted by center stone, diamond quality, and metal.",
    cta: "Request Azure Marquise Ring Quote",
    badges: ["Women's Ring", "Marquise Center", "Statement Ring"],
    buttons: ["Request Pricing", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: ringQuoteFields("Marquise", ["Cluster halo", "Statement ring"]),
  },
  {
    id: "radiant-cut-diamond-eternity-band",
    category: "Women's Rings",
    name: "Radiant Cut Diamond Eternity Band",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Request Pricing",
    image: "ring-product-black-10.png",
    alt: "Radiant cut diamond eternity band in white gold",
    lede: "A radiant-cut diamond eternity band built to order by ring size, metal, total carat weight, and diamond quality.",
    cta: "Request Radiant Eternity Band Quote",
    badges: ["Women's Ring", "Eternity Band", "Radiant Cut"],
    buttons: ["Request Pricing", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: ringQuoteFields("Radiant", ["Full eternity", "Shared-prong setting"]),
  },
  {
    id: "oval-diamond-eternity-band",
    category: "Women's Rings",
    name: "Oval Diamond Eternity Band",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Request Pricing",
    image: "ring-product-black-11.png",
    alt: "Oval diamond eternity band in white gold",
    lede: "An oval diamond eternity band with continuous stones, quoted by metal, ring size, diamond quality, and total carat weight.",
    cta: "Request Oval Eternity Band Quote",
    badges: ["Women's Ring", "Eternity Band", "Oval Diamonds"],
    buttons: ["Request Pricing", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: ringQuoteFields("Oval", ["Full eternity", "Shared-prong setting"]),
  },
  {
    id: "emerald-cut-diamond-eternity-band",
    category: "Women's Rings",
    name: "Emerald Cut Diamond Eternity Band",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Request Pricing",
    image: "ring-product-black-12.png",
    alt: "Emerald cut diamond eternity band in white gold",
    lede: "An emerald-cut diamond eternity band with step-cut stones, made to order by ring size, metal, and diamond specification.",
    cta: "Request Emerald Eternity Band Quote",
    badges: ["Women's Ring", "Eternity Band", "Emerald Cut"],
    buttons: ["Request Pricing", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: ringQuoteFields("Emerald", ["Full eternity", "Shared-prong setting"]),
  },
  {
    id: "pear-diamond-open-bypass-ring",
    category: "Women's Rings",
    name: "Pear Diamond Open Bypass Ring",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Request Pricing",
    image: "ring-product-black-13.png",
    alt: "Open bypass diamond ring with pear and round halo details",
    lede: "An open bypass ring with pear and round diamond halo stations, quoted by ring size, metal, and diamond layout.",
    cta: "Request Pear Bypass Ring Quote",
    badges: ["Women's Ring", "Bypass Design", "Pear Diamond"],
    buttons: ["Request Pricing", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: ringQuoteFields(["Pear", "Round"], ["Open bypass", "Halo detail", "Pave band"]),
  },
  {
    id: "emerald-halo-diamond-ring",
    category: "Women's Rings",
    name: "Emerald Halo Diamond Ring",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Request Pricing",
    image: "ring-product-black-14.png",
    alt: "Emerald center stone ring with diamond halo and pave band",
    lede: "An emerald center ring with a diamond halo and pave band, available by custom quote in your selected metal and ring size.",
    cta: "Request Emerald Halo Ring Quote",
    badges: ["Women's Ring", "Emerald Halo", "Pave Band"],
    buttons: ["Request Pricing", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: ringQuoteFields("Emerald", ["Halo setting", "Pave band"]),
  },
];

const products = [
  ...ankletProducts,
  ...uploadedMensBandProducts,
  ...uploadedRingProducts,
  {
    id: "queen-aurelia-oval-marquise-ring",
    category: "Engagement Rings",
    name: "Queen Aurelia Oval Marquise Ring",
    price: 2600,
    estimate: 2600,
    image: "queen-aurelia-oval-marquise-ring.jpeg",
    alt: "Oval center diamond engagement ring with marquise side stones and carved band details",
    lede: "A regal oval center diamond engagement ring with marquise side stones set along a carved band, designed with a crown-like basket and elegant side detail for a princess or queen.",
    cta: "Message Us for Custom Queen Aurelia Design",
    fields: [
      ["Diamond Size", queenAureliaCarats],
      ["Center Stone Shape", ["Oval", "Marquise"]],
      ["Side Stone Shape", ["Marquise side stones"]],
      ["Band Detail", ["Carved marquise-side band"]],
      ["Diamond Color", ["D", "E", "F"]],
      ["Clarity", ["VVS", "VS"]],
      ["Metal", metals],
      ["Ring Size", ringSizes],
    ],
  },
  {
    id: "luna-solitaire",
    category: "Engagement Rings",
    name: "Radiant Cut Diamond Ring with Tapered Baguettes",
    price: 2200,
    estimate: 2200,
    image: "engagement-ring-feature.jpg",
    alt: "Radiant diamond engagement ring on hand",
    lede: "Select a diamond size, stone shape, diamond color, clarity, metal, and exact ring size. Your luxury engagement ring summary updates instantly.",
    cta: "Message Us for Custom Design / Custom Stone Size",
    fields: [
      ["Diamond Size", lunaCarats],
      ["Stone Shape", shapes],
      ["Diamond Color", ["D", "E", "F"]],
      ["Clarity", ["VVS", "VS"]],
      ["Metal", metals],
      ["Ring Size", ringSizes],
    ],
  },
  {
    id: "wedding-band",
    category: "Wedding Bands",
    name: "Classic Plain Wedding Band",
    price: 1800,
    estimate: 1900,
    image: "gold-engagement-rings.png",
    alt: "Gold wedding bands in a black jewelry box",
    lede: "Choose your band metal and exact ring size for a clean classic plain wedding band request.",
    cta: "Message Us for Custom Band Design",
    fields: [["Metal", metals], ["Ring Size", ringSizes]],
  },
  {
    id: "mens-royal-filigree-princess-channel-wedding-band",
    category: "Wedding Bands",
    name: "Royal Filigree Princess Channel Men's Wedding Band",
    price: 2300,
    estimate: 2300,
    priceLabel: "Starting at $2,300 in 14K gold",
    image: "mens-royal-filigree-princess-channel-wedding-band.jpg",
    alt: "Yellow gold men's wedding band with engraved filigree and princess channel diamonds",
    lede: "A made-to-order men's wedding band with royal filigree engraving, beaded borders, and lab-grown princess channel diamonds. Pricing starts at $2,300 in 14K gold and varies by ring size, metal, diamond weight, and modifications.",
    cta: "Message Us for Men's Wedding Band Quote",
    metalSurcharges: mensWeddingBandSurcharges,
    badges: ["Men's Wedding Band", "Lab-Grown Diamonds", "14K Starting Price", "Made to Order"],
    buttons: ["Add to Cart", "Request Exact Weight & Specifications", "Request Custom Order", "Financing Available"],
    notice: handcraftedNotice,
    fields: [["Diamond Weight", mensWeddingBandDiamondWeights], ["Metal", mensWeddingBandMetals], ["Ring Size", ringSizes], ["Diamond Cut", ["Princess cut channel diamonds"]], ["Certification", ["IGI certified lab-grown diamonds when available"]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Modification Note", ["Pricing varies depending on selected size and any modifications"]], ["Production", ["Made to Order"]]],
  },
  {
    id: "mens-white-gold-asscher-channel-wedding-band",
    category: "Wedding Bands",
    name: "White Gold Asscher Channel Men's Wedding Band",
    price: 2800,
    estimate: 2800,
    priceLabel: "Starting at $2,800 in 14K gold",
    image: "mens-white-gold-asscher-channel-wedding-band.jpg",
    alt: "White gold men's wedding band with Asscher channel diamonds and satin finish",
    lede: "A made-to-order men's white gold wedding band with satin-finish shoulders and lab-grown Asscher-style channel diamonds. Pricing starts at $2,800 in 14K gold and varies by size, metal, diamond weight, and modifications.",
    cta: "Message Us for Asscher Channel Band Quote",
    metalSurcharges: mensWeddingBandSurcharges,
    badges: ["Men's Wedding Band", "Lab-Grown Diamonds", "Asscher Style", "Made to Order"],
    buttons: ["Add to Cart", "Request Exact Weight & Specifications", "Request Custom Order", "Financing Available"],
    notice: handcraftedNotice,
    fields: [["Diamond Weight", mensWeddingBandDiamondWeights], ["Metal", mensWeddingBandMetals], ["Ring Size", ringSizes], ["Diamond Cut", ["Asscher style channel diamonds", "Emerald cut channel diamonds by request"]], ["Certification", ["IGI certified lab-grown diamonds when available"]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Modification Note", ["Pricing varies depending on selected size and any modifications"]], ["Production", ["Made to Order"]]],
  },
  {
    id: "mens-pear-cut-filigree-diamond-wedding-band",
    category: "Wedding Bands",
    name: "Imperial Pear Cut Filigree Men's Wedding Band",
    price: 2800,
    estimate: 2800,
    priceLabel: "Starting at $2,800 in 14K gold",
    image: "mens-pear-cut-filigree-diamond-wedding-band.jpg",
    alt: "Yellow gold men's filigree wedding band with pear cut diamond center",
    lede: "A made-to-order men's filigree wedding band with a pear-shaped IGI certified lab-grown center diamond. The diamond-size pricing follows the classic oval/marquise scaling and starts at $2,800 in 14K gold.",
    cta: "Message Us for Pear Cut Men's Band Quote",
    metalSurcharges: mensWeddingBandSurcharges,
    badges: ["Men's Wedding Band", "IGI Certified", "Pear Shape", "Lab-Grown Diamond", "Made to Order"],
    buttons: ["Add to Cart", "Request Exact Weight & Specifications", "Request Custom Order", "Financing Available"],
    notice: handcraftedNotice,
    fields: [["Certified IGI Diamond Size", mensWeddingBandCertifiedCarats], ["Metal", mensWeddingBandMetals], ["Ring Size", ringSizes], ["Diamond Cut", ["Pear shape"]], ["Diamond Type", ["Lab-Grown Diamond"]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Modification Note", ["Pricing varies depending on selected size and any modifications"]], ["Production", ["Made to Order"]]],
  },
  {
    id: "mens-asscher-cut-filigree-diamond-wedding-band",
    category: "Wedding Bands",
    name: "Sovereign Asscher Cut Filigree Men's Wedding Band",
    price: 2800,
    estimate: 2800,
    priceLabel: "Starting at $2,800 in 14K gold",
    image: "mens-asscher-cut-filigree-diamond-wedding-band.jpg",
    alt: "Yellow gold men's filigree wedding band with Asscher cut diamond center",
    lede: "A made-to-order men's filigree wedding band with an Asscher-cut IGI certified lab-grown center diamond. The diamond-size pricing follows the classic oval/marquise scaling and starts at $2,800 in 14K gold.",
    cta: "Message Us for Asscher Cut Men's Band Quote",
    metalSurcharges: mensWeddingBandSurcharges,
    badges: ["Men's Wedding Band", "IGI Certified", "Asscher Cut", "Lab-Grown Diamond", "Made to Order"],
    buttons: ["Add to Cart", "Request Exact Weight & Specifications", "Request Custom Order", "Financing Available"],
    notice: handcraftedNotice,
    fields: [["Certified IGI Diamond Size", mensWeddingBandCertifiedCarats], ["Metal", mensWeddingBandMetals], ["Ring Size", ringSizes], ["Diamond Cut", ["Asscher cut"]], ["Diamond Type", ["Lab-Grown Diamond"]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Modification Note", ["Pricing varies depending on selected size and any modifications"]], ["Production", ["Made to Order"]]],
  },
  {
    id: "mens-engraved-satin-filigree-wedding-band",
    category: "Wedding Bands",
    name: "Regal Satin Filigree Men's Wedding Band",
    price: 2800,
    estimate: 2800,
    priceLabel: "Starting at $2,800 in 14K gold",
    image: "mens-engraved-satin-filigree-wedding-band.jpg",
    alt: "Yellow gold men's wedding band with satin center and engraved filigree edges",
    lede: "A made-to-order men's wedding band with satin center texture, high-polish borders, and carved filigree detail. Pricing starts at $2,800 in 14K gold and varies by metal, ring size, width, and modifications.",
    cta: "Message Us for Satin Filigree Band Quote",
    metalSurcharges: mensWeddingBandSurcharges,
    badges: ["Men's Wedding Band", "14K Starting Price", "Made to Order", "Customizable"],
    buttons: ["Add to Cart", "Request Exact Weight & Specifications", "Request Custom Order", "Financing Available"],
    notice: handcraftedNotice,
    fields: [["Band Build", [["Standard filigree build", 2800], ["Heavier custom build", 3950], ["Wide custom build", 5650]]], ["Metal", mensWeddingBandMetals], ["Ring Size", ringSizes], ["Finish", ["Satin center", "High polish", "Custom finish"]], ["Diamond Option", ["No diamonds", "Add lab-grown diamonds by request"]], ["Modification Note", ["Pricing varies depending on selected size and any modifications"]], ["Production", ["Made to Order"]]],
  },
  {
    id: "mens-round-diamond-filigree-wedding-band",
    category: "Wedding Bands",
    name: "Round Diamond Filigree Men's Wedding Band",
    price: 2800,
    estimate: 2800,
    priceLabel: "Starting at $2,800 in 14K gold",
    image: "mens-round-diamond-filigree-wedding-band.jpg",
    alt: "Yellow gold men's wedding band with round diamonds and engraved filigree detail",
    lede: "A made-to-order men's wedding band with engraved filigree work, beaded borders, and lab-grown round diamonds. Pricing starts at $2,800 in 14K gold and varies by selected size, diamond weight, metal, and modifications.",
    cta: "Message Us for Round Diamond Men's Band Quote",
    metalSurcharges: mensWeddingBandSurcharges,
    badges: ["Men's Wedding Band", "Lab-Grown Diamonds", "Round Diamonds", "Made to Order"],
    buttons: ["Add to Cart", "Request Exact Weight & Specifications", "Request Custom Order", "Financing Available"],
    notice: handcraftedNotice,
    fields: [["Diamond Weight", mensWeddingBandDiamondWeights], ["Metal", mensWeddingBandMetals], ["Ring Size", ringSizes], ["Diamond Cut", ["Round"]], ["Certification", ["IGI certified lab-grown diamonds when available"]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Modification Note", ["Pricing varies depending on selected size and any modifications"]], ["Production", ["Made to Order"]]],
  },
  {
    id: "ready-engagement-ring-4662",
    category: "Engagement Rings",
    name: "Classic Oval Engagement Ring",
    price: 1600,
    estimate: 1600,
    image: "ready-made-engagement-ring-4662.jpg",
    alt: "Ready-made diamond engagement ring",
    lede: "Select a diamond size, oval stone shape, diamond color, clarity, metal, and exact ring size. Your luxury engagement ring summary updates instantly.",
    cta: "Message Us for Custom Design / Custom Stone Size",
    fields: [["Diamond Size", ovalCarats], ["Stone Shape", ["Oval"]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Ring Size", ringSizes]],
  },
  {
    id: "classic-marquise-engagement-ring",
    category: "Engagement Rings",
    name: "Classic Marquise Engagement Ring",
    price: 1600,
    estimate: 1600,
    image: "classic-marquise-engagement-ring.jpeg",
    alt: "Classic marquise diamond engagement ring in jewelry box",
    lede: "Select a diamond size, marquise stone shape, diamond color, clarity, metal, and exact ring size. Your luxury engagement ring summary updates instantly.",
    cta: "Message Us for Custom Design / Custom Stone Size",
    fields: [["Diamond Size", ovalCarats], ["Stone Shape", ["Marquise"]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Ring Size", ringSizes]],
  },
  {
    id: "gold-halo-engagement-ring",
    category: "Engagement Rings",
    name: "Eternal Marquise Halo Ring",
    price: 1900,
    estimate: 1900,
    image: "gold-halo-engagement-ring.jpeg",
    alt: "Gold diamond halo engagement ring with diamond band",
    lede: "Select a diamond size, stone shape, diamond color, clarity, metal, and exact ring size. Your luxury engagement ring summary updates instantly.",
    cta: "Message Us for Custom Design / Custom Stone Size",
    fields: [["Diamond Size", baseCarats], ["Stone Shape", ["Marquise", "Oval", "Round"]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Ring Size", ringSizes]],
  },
  {
    id: "pink-oval-engagement-ring",
    category: "Engagement Rings",
    name: "Monarch Pink\u2122 Diamond Ring",
    price: 1950,
    estimate: 1950,
    image: "pink-oval-engagement-ring.jpeg",
    alt: "Pink oval center stone engagement ring in black jewelry box",
    lede: "Select a diamond size, oval stone shape, diamond color, clarity, metal, and exact ring size. Your luxury engagement ring summary updates instantly.",
    cta: "Message Us for Custom Design / Custom Stone Size",
    fields: [["Diamond Size", monarchRingCarats], ["Stone Shape", ["Oval"]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Ring Size", ringSizes]],
  },
  {
    id: "yellow-oval-diamond-ring",
    category: "Engagement Rings",
    name: "Monarch Canary Oval Ring",
    price: 1950,
    estimate: 1950,
    image: "yellow-oval-diamond-ring.jpeg",
    alt: "Yellow oval diamond engagement ring with pave diamond band",
    lede: "Select a diamond size, oval stone shape, diamond color, clarity, metal, and exact ring size. Your luxury engagement ring summary updates instantly.",
    cta: "Message Us for Custom Design / Custom Stone Size",
    fields: [["Diamond Size", monarchRingCarats], ["Stone Shape", ["Oval"]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Ring Size", ringSizes]],
  },
  {
    id: "radiant-solitaire-engagement-ring",
    category: "Engagement Rings",
    name: "The Classic Radiant Ring",
    price: 2200,
    estimate: 2200,
    image: "radiant-solitaire-engagement-ring.jpeg",
    alt: "Radiant cut diamond solitaire engagement ring on a gold band",
    lede: "Select a diamond size, radiant stone shape, diamond color, clarity, metal, and exact ring size. Your luxury engagement ring summary updates instantly.",
    cta: "Message Us for Custom Design / Custom Stone Size",
    fields: [["Diamond Size", lunaCarats], ["Stone Shape", ["Radiant"]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Ring Size", ringSizes]],
  },
  {
    id: "emerald-accent-engagement-ring",
    category: "Engagement Rings",
    name: "Infinity Eclipse Ring",
    price: 1900,
    estimate: 1900,
    image: "emerald-accent-engagement-ring.jpeg",
    alt: "Round diamond engagement ring with green emerald accent stones",
    lede: "Select a diamond size, stone shape, diamond color, clarity, metal, and exact ring size. Your luxury engagement ring summary updates instantly.",
    cta: "Message Us for Custom Design / Custom Stone Size",
    fields: [["Diamond Size", baseCarats], ["Stone Shape", ["Round", "Oval", "Radiant"]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Ring Size", ringSizes]],
  },
  {
    id: "imperial-bloom-engagement-ring",
    category: "Engagement Rings",
    name: "Imperial Bloom Engagement Ring",
    price: 1900,
    estimate: 1900,
    image: "imperial-bloom-engagement-ring.jpeg",
    alt: "Oval diamond engagement ring with floral diamond accents on a gold band",
    lede: "Select a diamond size, oval stone shape, diamond color, clarity, metal, and exact ring size. Your luxury engagement ring summary updates instantly.",
    cta: "Message Us for Custom Design / Custom Stone Size",
    fields: [["Diamond Size", baseCarats], ["Stone Shape", ["Oval"]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Ring Size", ringSizes]],
  },
  {
    id: "celeste-halo",
    category: "Women's Earrings",
    secondaryCategories: ["Men's Earrings"],
    name: "Princess Diamond Studs",
    price: 650,
    estimate: 650,
    image: "princess-diamond-earrings.png",
    alt: "Princess cut diamond earrings held with a white glove",
    lede: "Select total diamond weight, diamond color, clarity, metal, and earring type for a premium earring quote.",
    cta: "Message Us for Custom Earrings",
    metalSurcharges: {
      "18K Yellow Gold": 325,
      "18K White Gold": 325,
      "18K Rose Gold": 325,
      Platinum: 600,
    },
    fields: [["Total Diamond Weight", earringCarats], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Type of Earring", ["Stud"]]],
  },
  {
    id: "round-diamond-studs",
    category: "Women's Earrings",
    secondaryCategories: ["Men's Earrings"],
    name: "Round Diamond Stud Earrings",
    price: 650,
    estimate: 650,
    image: "round-diamond-studs.jpeg",
    alt: "Round diamond stud earrings",
    lede: "Select total diamond weight, diamond color, clarity, metal, and stud setting for a custom round diamond earring quote.",
    cta: "Message Us for Custom Round Diamond Studs",
    metalSurcharges: {
      "18K Yellow Gold": 325,
      "18K White Gold": 325,
      "18K Rose Gold": 325,
      Platinum: 600,
    },
    fields: [["Total Diamond Weight", earringCarats], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Type of Earring", ["Stud"]]],
  },
  {
    id: "round-martini-diamond-studs",
    category: "Women's Earrings",
    secondaryCategories: ["Men's Earrings"],
    name: "Round Martini Set Diamond Studs",
    price: 650,
    estimate: 650,
    image: "round-martini-diamond-studs.jpg",
    alt: "Round martini set diamond stud earrings",
    lede: "Select total diamond weight, diamond color, clarity, and metal for a custom round martini set diamond stud quote.",
    cta: "Message Us for Custom Martini Set Diamond Studs",
    metalSurcharges: {
      "18K Yellow Gold": 325,
      "18K White Gold": 325,
      "18K Rose Gold": 325,
      Platinum: 600,
    },
    fields: [["Total Diamond Weight", earringCarats], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Type of Earring", ["Stud"]]],
  },
  {
    id: "yellow-canary-diamond-studs",
    category: "Women's Earrings",
    name: "Yellow Canary Diamond Studs",
    price: 950,
    estimate: 950,
    priceLabel: "Starting at $950",
    image: "yellow-canary-diamond-studs.jpeg",
    alt: "Yellow canary diamond stud earrings",
    lede: "Select total diamond weight, diamond color, clarity, and metal for a custom round colored diamond stud quote.",
    cta: "Message Us for Custom Yellow Canary Diamond Studs",
    metalSurcharges: {
      "18K Yellow Gold": 325,
      "18K White Gold": 325,
      "18K Rose Gold": 325,
      Platinum: 600,
    },
    fields: [["Total Diamond Weight", earringCarats], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Type of Earring", ["Stud"]]],
  },
  {
    id: "pink-monarch-diamond-studs",
    category: "Women's Earrings",
    name: "Pink Monarch Diamond Studs",
    price: 950,
    estimate: 950,
    priceLabel: "Starting at $950",
    image: "pink-monarch-diamond-studs.jpeg",
    alt: "Pink monarch diamond stud earrings",
    lede: "Select total diamond weight, diamond color, clarity, and metal for a custom round colored diamond stud quote.",
    cta: "Message Us for Custom Pink Monarch Diamond Studs",
    metalSurcharges: {
      "18K Yellow Gold": 325,
      "18K White Gold": 325,
      "18K Rose Gold": 325,
      Platinum: 600,
    },
    fields: [["Total Diamond Weight", earringCarats], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Type of Earring", ["Stud"]]],
  },
  {
    id: "blue-monarch-diamond-studs",
    category: "Women's Earrings",
    name: "Blue Monarch Diamond Studs",
    price: 950,
    estimate: 950,
    priceLabel: "Starting at $950",
    image: "blue-monarch-diamond-studs.jpeg",
    alt: "Blue monarch diamond stud earrings",
    lede: "Select total diamond weight, diamond color, clarity, and metal for a custom round colored diamond stud quote.",
    cta: "Message Us for Custom Blue Monarch Diamond Studs",
    metalSurcharges: {
      "18K Yellow Gold": 325,
      "18K White Gold": 325,
      "18K Rose Gold": 325,
      Platinum: 600,
    },
    fields: [["Total Diamond Weight", earringCarats], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Type of Earring", ["Stud"]]],
  },
  ...premiumStudProducts,
  {
    id: "marquise-arc",
    category: "Necklaces",
    name: "Red Ruby Diamond Halo Necklace",
    price: 1250,
    estimate: 1250,
    image: "red-diamond-necklace.png",
    alt: "Red ruby diamond halo necklace pendant on a jewelry glove",
    lede: "One-size ruby diamond halo necklace with a 7-carat ruby, approximately 1 carat of diamonds around the halo and bail, and a 14K chain included.",
    cta: "Message Us for Custom Necklace Design",
    metalSurcharges: {
      "18K Yellow Gold": 375,
      "18K White Gold": 375,
      "18K Rose Gold": 375,
      Platinum: 600,
    },
    fields: [
      ["Metal", ["14K Yellow Gold", "14K White Gold", "14K Rose Gold", "18K Yellow Gold", "18K White Gold", "18K Rose Gold", "Platinum"]],
      ["Ruby Size", ["7-carat ruby"]],
      ["Diamond Halo", ["Approx. 1 carat of diamonds in halo and bail"]],
      ["Diamond Color", ["D", "E", "F"]],
      ["Clarity", ["VVS", "VS"]],
      ["Necklace Style", ["Ruby diamond halo pendant necklace"]],
      ["Chain Included", ["14K chain included"]],
    ],
  },
  {
    id: "silver-cross-chain",
    category: "Chains",
    name: "Silver Cross + Chain",
    price: 925,
    estimate: 1245,
    image: "silver-cross-chain.png",
    alt: "Silver cross pendant and chain with blue stones",
    lede: "Choose chain size, stone type, diamond color, clarity, and chain style for this Silver Cross + Chain request.",
    cta: "Message Us for Custom Chain Design",
    extraCta: "Contact and Make a Special Request",
    fields: [["Chain Size", ["18 in", "20 in", "22 in", "24 in", "26 in", "30 in"]], ["Metal", ["Silver"]], ["Stone Type", ["Emerald", "Ruby", "Sapphire", "Diamond", "Aquamarine", "Tourmaline", "Topaz", "Amethyst", "Peridot"]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Chain Style", ["Rope", "Cuban", "Tennis", "Box", "Figaro", "Mooncut", "Franco"]]],
  },
  {
    id: "thirty-pointer-diamond-cross",
    category: "Pendants / Charms",
    name: "30-Pointer Diamond Cross",
    price: 1375,
    estimate: 1375,
    image: "thirty-pointer-diamond-cross.jpeg",
    alt: "Diamond cross pendant charm",
    lede: "Made to order diamond cross pendant with 11 stones, all 30-pointers, an iced-out bail, approximately 4.87 grams of gold, and approximately 2.3 carats of VVS diamonds.",
    cta: "Message Us for Custom Pendant / Charm Design",
    metalSurcharges: {
      "18K Yellow Gold": 375,
      "18K White Gold": 375,
      "18K Rose Gold": 375,
      Platinum: 625,
      Silver: 0,
    },
    fields: [["Diamond Size", [["30 pointers", 1375]]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", pendantMetals], ["Pendant Style", ["Iced-Out Bail Cross"]], ["Production", ["Made to Order"]]],
  },
  {
    id: "ever-band",
    category: "Bracelets",
    name: "Build Your Own Diamond Tennis Bracelet",
    price: 1499,
    estimate: 1499,
    image: "diamond-bracelet.png",
    alt: "Diamond tennis bracelet displayed on a white glove",
    lede: "Build a custom lab-grown diamond tennis bracelet by selecting pointer size, bracelet length, metal type, gold color, diamond type, and tennis bracelet style.",
    cta: "Message Us for Custom Bracelet Design",
    badges: ["Customizable", "Made to Order", "Financing Available", "Lab Diamonds"],
    buttons: ["Add to Cart", "Build Your Bracelet", "Request Custom Quote", "Financing Available"],
    fields: [["Diamond Size", tennisBraceletPointers], ["Bracelet Size", ["6.5 inches", "7 inches", "7.5 inches", "8 inches", "Custom Size - Message Request"]], ["Metal", braceletMetals], ["Diamond Type", ["Lab Diamonds", "Natural Diamonds by request"]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Bracelet Style", ["Tennis"]]],
  },
  {
    id: "lab-diamond-tennis-bracelet-8-1ct",
    category: "Bracelets",
    name: "8.1 CT Lab Diamond Tennis Bracelet",
    price: 3400,
    estimate: 3400,
    priceLabel: "Starting at $3,400 in 14K gold",
    image: "diamond-bracelet.png",
    alt: "Lab-grown diamond tennis bracelet",
    lede: "Build a 7-inch lab-grown diamond tennis bracelet in 14K gold with approximately 8.1 carats, 18-pointer diamonds, and approximately 11 grams of gold. Gold grams and final pricing may vary depending on selected gold, exact length, and customization.",
    cta: "Build Your Diamond Tennis Bracelet",
    metalSurcharges: {
      "18K Yellow Gold": 550,
      "18K White Gold": 550,
      "18K Rose Gold": 550,
    },
    badges: ["Lab Diamonds", "14K Gold", "Made to Order", "Financing Available"],
    buttons: ["Add to Cart", "Build Your Bracelet", "Request Custom Quote", "Financing Available"],
    fields: [["Diamond Size", [["18 pointers / approx. 8.1 carats", 3400], ["10 pointers / custom quote", 2600], ["15 pointers / custom quote", 3100], ["20 pointers / custom quote", 3900], ["25 pointers / custom quote", 4700]]], ["Bracelet Length", ["7 inches", "6.5 inches", "7.5 inches", "8 inches", "Custom size"]], ["Estimated Gold Weight", ["Approx. 11 grams", "12 grams", "13 grams", "Custom gram weight"]], ["Metal", braceletGoldMetals], ["Diamond Type", ["Lab-grown diamonds"]], ["Diamond Quality", ["VVS", "VS"]], ["Specification Note", ["Gold grams may increase and pricing may vary depending on selected gold, exact length, and customization."]]],
  },
  {
    id: "celeste-bezel-diamond-station-bracelet",
    category: "Bracelets",
    name: "Celeste Bezel Diamond Station Bracelet",
    price: 965,
    estimate: 965,
    priceLabel: "Starting at $965 in 14K gold",
    image: "bracelet-01.png",
    alt: "Gold bezel-set lab diamond station bracelet on a black background",
    lede: "Made-to-order 14K lab-grown diamond station bracelet with five bezel-set diamond stations and an estimated 0.35 to 0.50 CTW, depending on final size and customization. Platinum is available by custom quote.",
    cta: "Request Celeste Bracelet Quote",
    badges: ["Bracelets", "Lab Diamonds", "14K Gold", "Made to Order"],
    buttons: ["Add to Cart", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Metal", [["14K Yellow Gold", 965], ["14K White Gold", 965], ["14K Rose Gold", 965], ["18K Yellow Gold", 1300], ["18K White Gold", 1300], ["18K Rose Gold", 1300]]], ["Bracelet Length", ["6.5 inches", "7 inches", "7.5 inches", "8 inches", "Custom Size - Message Request"]], ["Diamond Type", ["Lab-Grown Diamond"]], ["Estimated Diamond Weight", ["Approx. 0.35 to 0.50 CTW"]], ["Platinum Option", ["Available by custom quote"]], ["Specification Note", ["Weight varies. Request weight details."]]],
  },
  {
    id: "lumiere-pearl-paperclip-bracelet",
    category: "Bracelets",
    name: "Lumiere Pearl Paperclip Bracelet",
    price: 1100,
    estimate: 1100,
    priceLabel: "Starting at $1,100 in 14K gold",
    image: "bracelet-04.png",
    alt: "Gold paperclip bracelet with pearl stations on a black satin background",
    lede: "Made-to-order pearl paperclip bracelet in 14K gold with luminous pearl stations and adjustable chain detail. Available in 14K or 18K gold only.",
    cta: "Request Pearl Bracelet Quote",
    badges: ["Bracelets", "Pearls", "14K Gold", "Made to Order"],
    buttons: ["Add to Cart", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Metal", [["14K Yellow Gold", 1100], ["14K White Gold", 1100], ["14K Rose Gold", 1100], ["18K Yellow Gold", 1500], ["18K White Gold", 1500], ["18K Rose Gold", 1500]]], ["Bracelet Length", ["6.5 inches", "7 inches", "7.5 inches", "8 inches", "Custom Size - Message Request"]], ["Pearl Detail", ["Pearl stations"]], ["Production", ["Made to Order"]], ["Specification Note", ["Weight varies. Request weight details."]]],
  },
  {
    id: "fleur-diamond-cluster-station-bracelet",
    category: "Bracelets",
    name: "Fleur Diamond Cluster Station Bracelet",
    price: 1000,
    estimate: 1000,
    priceLabel: "Starting at $1,000 in 14K gold",
    image: "bracelet-05.png",
    alt: "Gold lab diamond flower cluster station bracelet on black satin",
    lede: "Made-to-order 14K lab-grown diamond cluster station bracelet with floral diamond stations and an estimated 0.55 to 0.75 CTW, depending on bracelet length and final stone layout. Platinum is available by custom quote.",
    cta: "Request Fleur Bracelet Quote",
    badges: ["Bracelets", "Lab Diamonds", "Cluster Detail", "Made to Order"],
    buttons: ["Add to Cart", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Metal", [["14K Yellow Gold", 1000], ["14K White Gold", 1000], ["14K Rose Gold", 1000], ["18K Yellow Gold", 1350], ["18K White Gold", 1350], ["18K Rose Gold", 1350]]], ["Bracelet Length", ["6.5 inches", "7 inches", "7.5 inches", "8 inches", "Custom Size - Message Request"]], ["Diamond Type", ["Lab-Grown Diamond"]], ["Estimated Diamond Weight", ["Approx. 0.55 to 0.75 CTW"]], ["Platinum Option", ["Available by custom quote"]], ["Specification Note", ["Weight varies. Request weight details."]]],
  },
  {
    id: "aurora-multi-gemstone-paperclip-bracelet",
    category: "Bracelets",
    name: "Aurora Multi-Gemstone Paperclip Bracelet",
    price: 1200,
    estimate: 1200,
    priceLabel: "Starting at $1,200 in 14K gold",
    image: "bracelet-06.png",
    alt: "Gold paperclip bracelet with blue topaz pink tourmaline and green peridot style stones",
    lede: "Made-to-order multi-gemstone paperclip bracelet with blue topaz, peridot, pink tourmaline-style, and teal gemstone stations. Final gemstone mix and specs are confirmed before production.",
    cta: "Request Aurora Gemstone Bracelet Quote",
    badges: ["Bracelets", "Gemstones", "14K Gold", "Made to Order"],
    buttons: ["Add to Cart", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Metal", [["14K Yellow Gold", 1200], ["14K White Gold", 1200], ["14K Rose Gold", 1200], ["18K Yellow Gold", 1600], ["18K White Gold", 1600], ["18K Rose Gold", 1600]]], ["Bracelet Length", ["6.5 inches", "7 inches", "7.5 inches", "8 inches", "Custom Size - Message Request"]], ["Gemstone Mix", ["Blue topaz, peridot, pink tourmaline-style, and teal gemstones"]], ["Production", ["Made to Order"]], ["Specification Note", ["Weight varies. Request weight details."]]],
  },
  {
    id: "solene-diamond-paperclip-station-bracelet",
    category: "Bracelets",
    name: "Solene Diamond Paperclip Station Bracelet",
    price: 1025,
    estimate: 1025,
    priceLabel: "Starting at $1,025 in 14K gold",
    image: "bracelet-08.png",
    alt: "Gold paperclip bracelet with bezel-set lab diamond stations",
    lede: "Made-to-order 14K lab-grown diamond paperclip bracelet with bezel-set diamond stations and an estimated 0.40 to 0.60 CTW, depending on final size and stone layout. Platinum is available by custom quote.",
    cta: "Request Solene Bracelet Quote",
    badges: ["Bracelets", "Lab Diamonds", "Paperclip Link", "Made to Order"],
    buttons: ["Add to Cart", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Metal", [["14K Yellow Gold", 1025], ["14K White Gold", 1025], ["14K Rose Gold", 1025], ["18K Yellow Gold", 1475], ["18K White Gold", 1475], ["18K Rose Gold", 1475]]], ["Bracelet Length", ["6.5 inches", "7 inches", "7.5 inches", "8 inches", "Custom Size - Message Request"]], ["Diamond Type", ["Lab-Grown Diamond"]], ["Estimated Diamond Weight", ["Approx. 0.40 to 0.60 CTW"]], ["Platinum Option", ["Available by custom quote"]], ["Specification Note", ["Weight varies. Request weight details."]]],
  },
  {
    id: "triple-row-diamond-tennis-bracelet",
    category: "Chains",
    name: "30-Pointer Diamond Tennis Chain",
    price: 8200,
    estimate: 8200,
    image: "triple-row-diamond-tennis-bracelet.jpeg",
    alt: "30 pointer diamond tennis chain on white tissue",
    lede: "A 22-inch 30-pointer diamond tennis chain with approximately 126 stones. At 0.30 carats per stone, the approximate total diamond weight is 37.8 carats.",
    cta: "Message Us for 30-Pointer Tennis Chain Quote",
    tennisChain: { pointer: "30pt" },
    badges: ["Customizable", "Made to Order", "Financing Available"],
    buttons: ["Add to Cart", "Build Your Chain", "Request Custom Quote", "Financing Available"],
    fields: [["Diamond Size", ["30pt"]], ["Chain Length", ["16 inch", "18 inch", "20 inch", "22 inch", "24 inch"]], ["Metal", metals], ["Diamond Type", ["Lab Diamonds", "Natural Diamonds by request"]], ["Diamond Quality", ["VVS", "VS"]], ["Clasp Style", ["Box clasp", "Hidden clasp", "Custom clasp request"]], ["Chain Style", ["Tennis chain"]], ["Production", ["Made to Order"]]],
  },
  {
    id: "ten-pointer-diamond-tennis-chain",
    category: "Chains",
    name: "10-Pointer Diamond Tennis Chain",
    price: 3600,
    estimate: 3600,
    image: "triple-row-diamond-tennis-bracelet.jpeg",
    alt: "10 pointer diamond tennis chain",
    lede: "Build a 10-pointer diamond tennis chain with your selected length, metal, diamond type, and clasp style.",
    cta: "Build Your Chain",
    tennisChain: { pointer: "10pt" },
    badges: ["Customizable", "Made to Order", "Financing Available"],
    buttons: ["Add to Cart", "Build Your Chain", "Request Custom Quote", "Financing Available"],
    fields: [["Diamond Size", ["10pt"]], ["Chain Length", ["16 inch", "18 inch", "20 inch", "22 inch", "24 inch"]], ["Metal", metals], ["Diamond Type", ["Lab Diamonds", "Natural Diamonds by request"]], ["Diamond Quality", ["VVS", "VS"]], ["Clasp Style", ["Box clasp", "Hidden clasp", "Custom clasp request"]]],
  },
  {
    id: "build-your-own-diamond-tennis-chain",
    category: "Chains",
    name: "Build Your Own Diamond Tennis Chain",
    price: 3600,
    estimate: 3600,
    image: "triple-row-diamond-tennis-bracelet.jpeg",
    alt: "Build your own diamond tennis chain",
    lede: "Build a custom diamond tennis chain by selecting diamond pointer size, chain length, metal type, gold color, diamond type, and clasp style.",
    cta: "Build Your Chain",
    tennisChain: { pointer: "10pt" },
    badges: ["Customizable", "Made to Order", "Financing Available"],
    buttons: ["Add to Cart", "Build Your Chain", "Request Custom Quote", "Financing Available"],
    fields: [["Diamond Size", ["10pt", "15pt", "20pt", "25pt", "30pt"]], ["Chain Length", ["16 inch", "18 inch", "20 inch", "22 inch", "24 inch"]], ["Metal", metals], ["Diamond Type", ["Lab Diamonds", "Natural Diamonds by request"]], ["Diamond Quality", ["VVS", "VS"]], ["Clasp Style", ["Box clasp", "Hidden clasp", "Custom clasp request"]]],
  },
  {
    id: "fifteen-pointer-diamond-tennis-chain",
    category: "Chains",
    name: "15-Pointer Diamond Tennis Chain",
    price: 5200,
    estimate: 5200,
    image: "triple-row-diamond-tennis-bracelet.jpeg",
    alt: "15 pointer diamond tennis chain",
    lede: "Build a 15-pointer diamond tennis chain with your selected length, metal, diamond type, and clasp style.",
    cta: "Build Your Chain",
    tennisChain: { pointer: "15pt" },
    badges: ["Customizable", "Made to Order", "Financing Available"],
    buttons: ["Add to Cart", "Build Your Chain", "Request Custom Quote", "Financing Available"],
    fields: [["Diamond Size", ["15pt"]], ["Chain Length", ["16 inch", "18 inch", "20 inch", "22 inch", "24 inch"]], ["Metal", metals], ["Diamond Type", ["Lab Diamonds", "Natural Diamonds by request"]], ["Diamond Quality", ["VVS", "VS"]], ["Clasp Style", ["Box clasp", "Hidden clasp", "Custom clasp request"]]],
  },
  {
    id: "twenty-pointer-diamond-tennis-chain",
    category: "Chains",
    name: "20-Pointer Diamond Tennis Chain",
    price: 6600,
    estimate: 6600,
    image: "triple-row-diamond-tennis-bracelet.jpeg",
    alt: "20 pointer diamond tennis chain",
    lede: "Build a 20-pointer diamond tennis chain with your selected length, metal, diamond type, and clasp style.",
    cta: "Build Your Chain",
    tennisChain: { pointer: "20pt" },
    badges: ["Customizable", "Made to Order", "Financing Available"],
    buttons: ["Add to Cart", "Build Your Chain", "Request Custom Quote", "Financing Available"],
    fields: [["Diamond Size", ["20pt"]], ["Chain Length", ["16 inch", "18 inch", "20 inch", "22 inch", "24 inch"]], ["Metal", metals], ["Diamond Type", ["Lab Diamonds", "Natural Diamonds by request"]], ["Diamond Quality", ["VVS", "VS"]], ["Clasp Style", ["Box clasp", "Hidden clasp", "Custom clasp request"]]],
  },
  {
    id: "twenty-five-pointer-diamond-tennis-chain",
    category: "Chains",
    name: "25-Pointer Diamond Tennis Chain",
    price: 7800,
    estimate: 7800,
    image: "triple-row-diamond-tennis-bracelet.jpeg",
    alt: "25 pointer diamond tennis chain",
    lede: "Build a 25-pointer diamond tennis chain with your selected length, metal, diamond type, and clasp style.",
    cta: "Build Your Chain",
    tennisChain: { pointer: "25pt" },
    badges: ["Customizable", "Made to Order", "Financing Available"],
    buttons: ["Add to Cart", "Build Your Chain", "Request Custom Quote", "Financing Available"],
    fields: [["Diamond Size", ["25pt"]], ["Chain Length", ["16 inch", "18 inch", "20 inch", "22 inch", "24 inch"]], ["Metal", metals], ["Diamond Type", ["Lab Diamonds", "Natural Diamonds by request"]], ["Diamond Quality", ["VVS", "VS"]], ["Clasp Style", ["Box clasp", "Hidden clasp", "Custom clasp request"]]],
  },
  {
    id: "yellow-gold-diamond-cuban-link-ring",
    category: "Men's Rings",
    name: "Yellow Gold Diamond Cuban Link Ring",
    price: 2800,
    estimate: 2800,
    image: "yellow-gold-diamond-cuban-link-ring.jpeg",
    alt: "Yellow gold diamond Cuban link ring in black jewelry box",
    lede: "A bold Miami Cuban link ring with diamond-set links, built as a custom statement ring in your selected metal, width, diamond weight, and ring size.",
    cta: "Message Us for Cuban Link Ring Quote",
    metalSurcharges: {
      "18K Yellow Gold": 425,
      "18K White Gold": 425,
      "18K Rose Gold": 425,
      Platinum: 850,
      Silver: -1700,
    },
    fields: [["Diamond Weight", [["6mm / approx. 1.50 ctw", 2800], ["8mm / approx. 2.50 ctw", 3950], ["10mm / approx. 4.00 ctw", 5650], ["12mm / approx. 5.50 ctw", 7250], ["14mm / approx. 7.00 ctw", 9250]]], ["Metal", ["14K Yellow Gold", "14K White Gold", "14K Rose Gold", "18K Yellow Gold", "18K White Gold", "18K Rose Gold", "Platinum", "Silver"]], ["Ring Size", ringSizes], ["Diamond Cut", ["Round"]], ["Diamond Quality", ["VVS", "VS"]], ["Diamond Color", ["D", "E", "F"]], ["Setting", ["Prong", "Micro pave", "Two row pave"]], ["Gram Weight Estimate", ["Light ring build", "Medium ring build", "Heavy ring build", "Request exact gram quote"]], ["Production Time", ["Made to Order - 10 to 15 business days"]]],
  },
  {
    id: "white-gold-diamond-cuban-link-bracelet",
    category: "Men's Rings",
    name: "White Gold Diamond Cuban Link Ring",
    price: 2800,
    estimate: 2800,
    image: "white-gold-diamond-cuban-link-bracelet.jpeg",
    alt: "White gold diamond Cuban link ring on black background",
    lede: "A white gold Miami Cuban link ring with diamond-set link faces, made to order by ring size, metal, diamond weight, and setting style.",
    cta: "Message Us for Diamond Cuban Ring Quote",
    metalSurcharges: {
      "18K Yellow Gold": 425,
      "18K White Gold": 425,
      "18K Rose Gold": 425,
      Platinum: 850,
      Silver: -1700,
    },
    fields: [["Diamond Weight", [["6mm / approx. 1.50 ctw", 2800], ["8mm / approx. 2.50 ctw", 3950], ["10mm / approx. 4.00 ctw", 5650], ["12mm / approx. 5.50 ctw", 7250], ["14mm / approx. 7.00 ctw", 9250]]], ["Metal", ["14K White Gold", "14K Yellow Gold", "14K Rose Gold", "18K White Gold", "18K Yellow Gold", "18K Rose Gold", "Platinum", "Silver"]], ["Ring Size", ringSizes], ["Diamond Cut", ["Round"]], ["Diamond Quality", ["VVS", "VS"]], ["Diamond Color", ["D", "E", "F"]], ["Setting", ["Prong", "Micro pave", "Two row pave"]], ["Gram Weight Estimate", ["Light ring build", "Medium ring build", "Heavy ring build", "Request exact gram quote"]], ["Production Time", ["Made to Order - 10 to 15 business days"]]],
  },
  {
    id: "gemstone-leaf-wedding-band-set",
    category: "Women's Rings",
    name: "Royal Flora Ruby & Sapphire Diamond Ring",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Request Pricing",
    image: "gemstone-leaf-wedding-band-set.jpeg",
    alt: "Gold floral filigree rings with ruby and sapphire accents",
    lede: "A filigree floral design ring with diamond accents and your choice of ruby, sapphire, or emerald gemstones. No carat-size selection is needed for this design.",
    cta: "Message Us for Floral Gemstone Ring Quote",
    fields: [["Metal", pendantMetals], ["Ring Size", ringSizes], ["Center Gemstone", ["Ruby", "Sapphire", "Emerald"]], ["Diamond Quality", ["VVS", "VS"]], ["Diamond Color", ["D", "E", "F"]], ["Ring Style", ["Filigree floral design"]], ["Production", ["Made to Order"]]],
  },
  {
    id: "yellow-gold-diamond-cuban-link-bracelet",
    category: "Men's Rings",
    name: "Yellow Gold Diamond Cuban Link Ring",
    price: 2800,
    estimate: 2800,
    image: "yellow-gold-diamond-cuban-link-bracelet.jpeg",
    alt: "Yellow gold diamond Cuban link ring on black background",
    lede: "A yellow gold Miami Cuban link ring with diamond-set link faces, made to order by ring size, metal, diamond weight, and setting style.",
    cta: "Message Us for Diamond Cuban Ring Quote",
    metalSurcharges: {
      "18K Yellow Gold": 425,
      "18K White Gold": 425,
      "18K Rose Gold": 425,
      Platinum: 850,
    },
    fields: [["Diamond Weight", [["6mm / approx. 1.50 ctw", 2800], ["8mm / approx. 2.50 ctw", 3950], ["10mm / approx. 4.00 ctw", 5650], ["12mm / approx. 5.50 ctw", 7250], ["14mm / approx. 7.00 ctw", 9250]]], ["Metal", ["14K Yellow Gold", "14K White Gold", "14K Rose Gold", "18K Yellow Gold", "18K White Gold", "18K Rose Gold", "Platinum"]], ["Ring Size", ringSizes], ["Diamond Cut", ["Round"]], ["Diamond Quality", ["VVS", "VS"]], ["Diamond Color", ["D", "E", "F"]], ["Setting", ["Prong", "Micro pave", "Two row pave"]], ["Gram Weight Estimate", ["Light ring build", "Medium ring build", "Heavy ring build", "Request exact gram quote"]], ["Production Time", ["Made to Order - 10 to 15 business days"]]],
  },
  {
    id: "custom-09-diamond-number-pendant",
    category: "Custom Jewelry",
    name: "Custom 09 Diamond Number Pendant",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Request Pricing",
    image: "custom-09-diamond-number-pendant.jpeg",
    alt: "Custom 09 number pendant CAD render with diamond pave and yellow gold border",
    lede: "A custom 09 number pendant CAD design with full diamond pave, raised borders, and an iced bail. Built as a one-on-one custom pendant request.",
    cta: "Message Us for Custom Number Pendant",
    fields: [["Metal", pendantMetals], ["Number / Letters", ["09", "Custom number", "Custom initials", "Custom name"]], ["Diamond Quality", ["VVS", "VS"]], ["Diamond Color", ["D", "E", "F"]], ["Finish", ["Yellow gold border", "White gold border", "Rose gold border", "Two-tone"]], ["Pendant Size", ["Small", "Medium", "Large", "Custom size"]], ["Production", ["Custom CAD design"]]],
  },
  {
    id: "custom-st-diamond-initial-pendant-front",
    category: "Custom Jewelry",
    name: "Custom ST Diamond Initial Pendant",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Request Pricing",
    image: "custom-st-diamond-initial-pendant-front.jpeg",
    alt: "Custom ST initial pendant CAD front render with diamond pave",
    lede: "A custom ST initial pendant CAD design with diamond pave lettering, polished gold borders, and a matching diamond bail.",
    cta: "Message Us for Custom Initial Pendant",
    fields: [["Metal", pendantMetals], ["Initials", ["ST", "Custom two-letter initials", "Custom name"]], ["Diamond Quality", ["VVS", "VS"]], ["Diamond Color", ["D", "E", "F"]], ["Finish", ["Yellow gold", "White gold", "Rose gold", "Two-tone"]], ["Pendant Size", ["Small", "Medium", "Large", "Custom size"]], ["Production", ["Custom CAD design"]]],
  },
  {
    id: "custom-st-diamond-initial-pendant-angle",
    category: "Custom Jewelry",
    name: "Custom ST Diamond Initial Pendant Angle Render",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Request Pricing",
    image: "custom-st-diamond-initial-pendant-angle.jpeg",
    alt: "Angled CAD render of custom ST diamond initial pendant",
    lede: "An angled CAD preview of the ST custom initial pendant showing depth, stone layout, bail placement, and raised gold structure.",
    cta: "Message Us for Custom CAD Pendant",
    fields: [["Metal", pendantMetals], ["Initials", ["ST", "Custom two-letter initials", "Custom name"]], ["Diamond Quality", ["VVS", "VS"]], ["Diamond Color", ["D", "E", "F"]], ["Finish", ["Yellow gold", "White gold", "Rose gold", "Two-tone"]], ["Pendant Size", ["Small", "Medium", "Large", "Custom size"]], ["Production", ["Custom CAD design"]]],
  },
  {
    id: "custom-j-diamond-initial-pendant-render",
    category: "Custom Jewelry",
    name: "Custom J Diamond Initial Pendant",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Request Pricing",
    image: "custom-j-diamond-initial-pendant-render.jpeg",
    alt: "Custom J initial pendant CAD render with full diamond pave",
    lede: "A custom J initial pendant CAD render with full diamond pave, rounded letter shaping, and a diamond bail.",
    cta: "Message Us for Custom Initial Pendant",
    fields: [["Metal", pendantMetals], ["Initial", ["J", "Custom single initial", "Custom initials", "Custom name"]], ["Diamond Quality", ["VVS", "VS"]], ["Diamond Color", ["D", "E", "F"]], ["Finish", ["Yellow gold", "White gold", "Rose gold", "Two-tone"]], ["Pendant Size", ["Small", "Medium", "Large", "Custom size"]], ["Production", ["Custom CAD design"]]],
  },
  {
    id: "gorilla-face-gold-pendant",
    category: "Pendants / Charms",
    name: "Roaring Gorilla Face Gold Pendant",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Request Pricing",
    image: "gorilla-face-gold-pendant.jpeg",
    alt: "Gold gorilla face pendant with open mouth detail",
    lede: "A made-to-order heavy gold gorilla face pendant with bold sculpted detail. Approximate weight is 45 to 50 grams, with final weight depending on selected size and customization.",
    cta: "Message Us for Gorilla Pendant Quote",
    badges: ["Made to Order", "Custom Pendant", "Heavy Gold Pendant"],
    buttons: ["Request Pricing", "Request Custom Quote", "Request Exact Weight & Specifications", "Financing Available"],
    fields: [["Metal", pendantMetals], ["Approximate Weight", ["45-50 grams", "Custom weight request"]], ["Finish", ["High polish yellow gold", "White gold", "Rose gold", "Add diamond accents"]], ["Stone Option", ["No stones", "Diamond eyes", "Diamond bail", "Full custom iced version"]], ["Pendant Size", ["Small", "Medium", "Large", "Custom size"]], ["Chain Option", ["Pendant only", "Add rope chain", "Add Cuban chain", "Add Franco chain"]], ["Production", ["Made to Order"]]],
  },
  {
    id: "two-tone-crucifix-diamond-medallion",
    category: "Pendants / Charms",
    name: "Rose Gold Diamond Crucifix Medallion",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Request Pricing",
    image: "two-tone-crucifix-diamond-medallion.jpeg",
    alt: "Rose gold crucifix medallion pendant with diamond background",
    lede: "A rose gold crucifix medallion pendant with natural diamonds. Pricing is available by request because final weight, diamond weight, and specifications vary by build.",
    cta: "Message Us for Crucifix Medallion Quote",
    badges: ["Natural Diamonds", "Rose Gold", "Custom Quote Required", "Made to Order"],
    notice: handcraftedNotice,
    buttons: ["Request Pricing", "Request Exact Weight & Specifications", "Request Custom Quote", "Financing Available"],
    fields: [["Metal", ["14K Rose Gold", "18K Rose Gold", "14K Yellow Gold", "14K White Gold", "18K Yellow Gold", "18K White Gold", "Platinum"]], ["Diamond Quality", ["VS", "VVS"]], ["Diamond Setting", ["Pave field", "Baguette border", "Iced bail", "Full custom layout"]], ["Pendant Size", ["Small", "Medium", "Large", "Custom size"]], ["Chain Option", ["Pendant only", "Add chain"]]],
  },
  {
    id: "rose-two-tone-flower-diamond-pendants",
    category: "Pendants / Charms",
    name: "Rose Gold Flower Diamond Pendant",
    price: 4200,
    estimate: 4200,
    image: "rose-two-tone-flower-diamond-pendants.jpeg",
    alt: "Rose gold flower diamond pendant with natural diamonds",
    lede: "A 14K rose gold flower pendant with approximately 3.55 CTW natural VS quality diamonds. Already made, ready to ship, handcrafted, and not mass produced.",
    cta: "Message Us for Flower Pendant Quote",
    badges: ["Natural Diamonds", "VS Quality", "14K Gold", "Ready to Ship", "Handcrafted"],
    notice: handcraftedNotice,
    buttons: ["Add to Cart", "Request Exact Weight & Specifications", "Request Custom Order", "Financing Available"],
    fields: [["Metal", ["14K Rose Gold"]], ["Diamond Type", ["Natural Diamonds"]], ["Approx. Diamond Weight", ["3.55 CTW natural diamonds"]], ["Diamond Quality", ["VS Quality"]], ["Availability", ["Already made - ready to ship"]], ["Production", ["Not mass produced"]]],
  },
  {
    id: "white-gold-flower-diamond-pendant",
    category: "Pendants / Charms",
    name: "White Gold Flower Diamond Pendant",
    price: 4200,
    estimate: 4200,
    image: "rose-two-tone-flower-diamond-pendants.jpeg",
    alt: "White gold flower diamond pendant with natural diamonds",
    lede: "A 14K white gold flower pendant with approximately 3.55 CTW natural VS quality diamonds. Already made, ready to ship, handcrafted, and not mass produced.",
    cta: "Message Us for Flower Pendant Quote",
    badges: ["Natural Diamonds", "VS Quality", "14K Gold", "Ready to Ship", "Handcrafted"],
    notice: handcraftedNotice,
    buttons: ["Add to Cart", "Request Exact Weight & Specifications", "Request Custom Order", "Financing Available"],
    fields: [["Metal", ["14K White Gold"]], ["Diamond Type", ["Natural Diamonds"]], ["Approx. Diamond Weight", ["3.55 CTW natural diamonds"]], ["Diamond Quality", ["VS Quality"]], ["Availability", ["Already made - ready to ship"]], ["Production", ["Not mass produced"]]],
  },
  {
    id: "baguette-diamond-initial-m-pendant",
    category: "Pendants / Charms",
    name: "Baguette Diamond Initial M Pendant",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Request Pricing",
    image: "baguette-diamond-initial-m-pendant.jpeg",
    alt: "Initial M pendant with baguette and round diamond details",
    lede: "A 14K gold initial pendant with natural diamonds, baguette channels, round diamond accents, and a matching iced bail. All letters are available by request, with pricing varying by letter, size, metal, and diamond coverage.",
    cta: "Message Us for Initial M Pendant Quote",
    priceLabel: "$800-$1,400+",
    badges: ["Natural Diamonds", "14K Gold", "Customizable", "Made to Order"],
    notice: handcraftedNotice,
    buttons: ["Request Pricing", "Request Exact Weight & Specifications", "Request Custom Letter", "Financing Available"],
    fields: [["Metal", pendantMetals], ["Initial", ["M", "All letters available", "Custom single initial", "Custom initials"]], ["Price Range", ["$800-$1,400+"]], ["Diamond Style", ["Baguette and round diamonds", "Round diamonds only", "Custom layout"]], ["Diamond Quality", ["VS", "VVS"]], ["Pendant Size", ["Small", "Medium", "Large", "Custom size"]]],
  },
  {
    id: "custom-blue-stone-gold-ring-photo",
    category: "Men's Rings",
    name: "Royal Sapphire Signet Ring",
    price: 1800,
    estimate: 1800,
    image: "custom-blue-stone-gold-ring-photo.jpeg",
    alt: "Gold ring with blue rectangular gemstone and engraved interior",
    lede: "A luxury custom gold signet-style ring with a natural blue sapphire center stone, pinky ring option, and starting pricing based on 14K gold.",
    cta: "Message Us for Blue Stone Ring Quote",
    metalSurcharges: engagementRingMetalSurcharges,
    badges: ["Natural Sapphire", "Custom Ring", "Made to Order"],
    buttons: ["Add to Cart", "Request Custom Size", "Request Custom Quote", "Financing Available"],
    fields: [["Metal", metals], ["Ring Size", ringSizes], ["Wear Style", ["Pinky ring", "Standard ring", "Custom fit"]], ["Center Stone", ["Natural Blue Sapphire", "Custom gemstone", "Customer-supplied stone"]], ["Stone Shape", ["Emerald cut", "Radiant cut", "Custom rectangular cut"]], ["Engraving", ["No engraving", "Inside engraving", "Custom inscription"]], ["Finish", ["High polish", "Satin", "Custom finish"]]],
  },
  {
    id: "custom-blue-stone-gold-ring-render",
    category: "Custom Jewelry",
    name: "Custom Blue Stone Gold Ring CAD Render",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Request Pricing",
    image: "custom-blue-stone-gold-ring-render.jpeg",
    alt: "CAD render of gold ring with blue rectangular gemstone",
    lede: "A CAD-style render for a custom gold ring with a rectangular blue center stone and smooth heavy band profile.",
    cta: "Message Us for Custom Ring CAD",
    fields: [["Metal", metals], ["Ring Size", ringSizes], ["Center Stone", ["Blue sapphire", "Blue gemstone", "Custom gemstone", "Customer-supplied stone"]], ["Stone Shape", ["Emerald cut", "Radiant cut", "Custom rectangular cut"]], ["Engraving", ["No engraving", "Inside engraving", "Custom inscription"]], ["Production", ["Custom CAD design"]]],
  },
  {
    id: "ornate-round-diamond-cross-pendant",
    category: "Pendants / Charms",
    name: "Ornate Round Diamond Cross Pendant",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Price available upon request",
    image: "ornate-round-diamond-cross-pendant.jpeg",
    alt: "Ornate gold cross pendant with round diamond accents",
    lede: "An ornate gold cross pendant with natural diamond accents, scroll detailing, and a polished bail. Pricing varies by size, gold weight, diamond weight, and customization.",
    cta: "Request Custom Cross Pendant",
    badges: ["Natural Diamonds", "Diamond Pendant", "Custom Quote Required", "Made to Order"],
    notice: handcraftedNotice,
    buttons: ["Request Price", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Metal", pendantMetals], ["Stone Option", ["Natural round diamonds", "Lab diamonds by request", "Natural diamonds by request"]], ["Pendant Size", ["Small", "Medium", "Large", "Custom size"]], ["Chain Option", ["Pendant only", "Add chain"]], ["Specification Note", ["Weight varies. Request weight details."]]],
  },
  {
    id: "celestial-diamond-sapphire-ring",
    category: "Women's Rings",
    name: "Celestial Diamond Sapphire Ring",
    price: 1600,
    estimate: 1600,
    priceLabel: "Starting at $1,600",
    image: "celestial-diamond-sapphire-ring.jpeg",
    alt: "Gold ring with blue sapphire and diamond celestial design",
    lede: "A celestial-style sapphire ring with lab-grown diamond accents. Available in 14K white gold or 14K yellow gold, with sapphire, ruby, or emerald center stone options.",
    cta: "Request Custom Ring Quote",
    badges: ["Natural Sapphire", "Lab Diamonds", "Custom Ring", "Made to Order"],
    buttons: ["Request Price", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Metal", metals], ["Ring Size", ringSizes], ["Center Stone", ["Sapphire", "Ruby", "Emerald"]], ["Accent Stones", ["Lab-grown diamonds"]], ["Finish", ["14K white gold", "14K yellow gold", "Custom finish"]], ["Specification Note", ["Final price varies by center stone, accent diamonds, gold color, gold weight, size, and customization."]]],
  },
  {
    id: "baguette-diamond-letter-a-pendant",
    category: "Pendants / Charms",
    name: "Baguette Diamond Letter A Pendant",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Price available upon request",
    image: "baguette-diamond-letter-a-pendant.jpeg",
    alt: "Letter A pendant with baguette and round diamond details",
    lede: "A custom Letter A pendant with baguette diamond channels, round diamond accents, and an iced bail. Pricing varies by letter, size, stone weight, gold weight, and customization. Weight varies. Request weight details.",
    cta: "Request Custom Letter Pendant",
    badges: ["Natural Diamonds", "Customizable", "Made to Order"],
    notice: handcraftedNotice,
    buttons: ["Request Price", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Metal", pendantMetals], ["Letter", ["A", "All letters available", "Custom initials"]], ["Diamond Style", ["Baguette and round diamonds", "Round diamonds only", "Custom layout"]], ["Diamond Quality", ["VS", "VVS"]], ["Pendant Size", ["Small", "Medium", "Large", "Custom size"]], ["Specification Note", ["Weight varies. Request weight details."]]],
  },
  {
    id: "arabic-diamond-name-pendant",
    category: "Custom Jewelry",
    name: "Arabic Diamond Name Pendant",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Price available upon request",
    image: "arabic-diamond-name-pendant.jpeg",
    alt: "Custom Arabic name pendant with diamond accents",
    lede: "A custom Arabic-style name pendant with diamond accents, made to order from the client's lettering or phrase.",
    cta: "Request Custom Name Pendant",
    badges: ["Custom Jewelry", "Made to Order", "Diamond Accents"],
    notice: handcraftedNotice,
    buttons: ["Request Price", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Metal", pendantMetals], ["Lettering", ["Arabic name", "Custom word", "Custom initials"]], ["Stone Option", ["Diamond accents", "Full diamond layout", "No stones"]], ["Pendant Size", ["Small", "Medium", "Large", "Custom size"]]],
  },
  {
    id: "ruby-accent-crucifix-cross-pendant",
    category: "Pendants / Charms",
    name: "Ruby Accent Crucifix Cross Pendant",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Price available upon request",
    image: "ruby-accent-crucifix-cross-pendant.jpeg",
    alt: "Two-tone crucifix cross pendant with ruby accents",
    lede: "A crucifix cross pendant variation with ruby accent stones, detailed cross engraving, and chain-compatible bail styling. Keep this under crucifix, cross, pendants, charms, and custom jewelry requests.",
    cta: "Request Crucifix Pendant Quote",
    badges: ["Ruby Accents", "Crucifix Pendant", "Custom Quote Required"],
    notice: handcraftedNotice,
    buttons: ["Request Price", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Metal", pendantMetals], ["Gemstone", ["Ruby", "Sapphire", "Emerald", "Custom gemstone"]], ["Finish", ["Silver", "Two-tone", "Yellow gold", "White gold", "Rose gold"]], ["Pendant Size", ["Small", "Medium", "Large", "Custom size"]], ["Chain Option", ["Pendant only", "Add chain"]]],
  },
  {
    id: "barber-pole-diamond-pendant-render",
    category: "Custom Jewelry",
    name: "Barber Pole Diamond Pendant",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Price available upon request",
    image: "barber-pole-diamond-pendant-render.jpeg",
    alt: "Custom barber pole pendant render with red blue and white stones",
    lede: "A custom barber pole pendant concept with diamond pave and red and blue gemstone sections, made for a personalized trade pendant.",
    cta: "Request Custom Barber Pendant",
    badges: ["Custom CAD Design", "Gemstone Pendant", "Made to Order"],
    buttons: ["Request Price", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Metal", pendantMetals], ["Gemstone Colors", ["Red, white, and blue", "Custom colors"]], ["Text", ["Barber for life", "Custom text"]], ["Pendant Size", ["Small", "Medium", "Large", "Custom size"]]],
  },
  {
    id: "diamond-pizza-slice-pendant-render",
    category: "Custom Jewelry",
    name: "Diamond Pizza Slice Pendant",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Price available upon request",
    image: "diamond-pizza-slice-pendant-render.jpeg",
    alt: "Custom pizza slice pendant render with diamonds and colored stones",
    lede: "A custom pizza slice pendant concept with diamond accents, red gemstone pepperoni details, and green gemstone leaf detail.",
    cta: "Request Custom Pizza Pendant",
    badges: ["Custom CAD Design", "Gemstone Pendant", "Made to Order"],
    buttons: ["Request Price", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Metal", pendantMetals], ["Stone Option", ["Diamonds and colored gemstones", "Lab diamonds", "Natural diamonds by request"]], ["Pendant Size", ["Small", "Medium", "Large", "Custom size"]]],
  },
  {
    id: "medusa-diamond-signet-ring",
    category: "Men's Rings",
    name: "Medusa Silver Nugget Ring",
    price: 275,
    estimate: 275,
    priceLabel: "Starting at $275",
    image: "medusa-diamond-signet-ring.jpeg",
    gallery: ["silver-medusa-nugget-ring-lifestyle.jpeg"],
    alt: "Silver nugget Medusa ring",
    lede: "A silver nugget-style Medusa ring with a bold polished finish. This ring has no diamonds and starts at $275.",
    cta: "Request Medusa Ring Quote",
    badges: ["Silver Ring", "Nugget Ring", "Custom Ring", "Starting at $275"],
    buttons: ["Add to Cart", "Request Custom Size", "Request Custom Quote", "Financing Available"],
    fields: [["Metal", ["Silver"]], ["Ring Size", ringSizes], ["Stone Option", ["No stones"]], ["Finish", ["Polished silver nugget finish"]]],
  },
  {
    id: "saint-michael-diamond-angel-pendant",
    category: "Pendants / Charms",
    name: "Saint Michael Diamond Angel Pendant",
    price: 4800,
    estimate: 4800,
    priceLabel: "Starting at $4,800 in 14K gold",
    image: "saint-michael-diamond-angel-pendant.jpeg",
    alt: "Gold Saint Michael angel pendant with diamond accents",
    lede: "A Saint Michael angel pendant with natural diamond accents, wing detail, and an iced bail. Starting at $4,800 in 14K gold. Final pricing varies by size, gold weight, diamond weight, and customization.",
    cta: "Request Angel Pendant Quote",
    badges: ["Natural Diamonds", "Religious Pendant", "Starting at $4,800", "Made to Order"],
    notice: handcraftedNotice,
    buttons: ["Request Price", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Metal", pendantMetals], ["Stone Option", ["Natural diamond accents", "Full iced version", "No stones"]], ["Pendant Size", ["Small", "Medium", "Large", "Custom size"]], ["Chain Option", ["Pendant only", "Add chain"]], ["Specification Note", ["Weight varies. Request weight details."]]],
  },
  {
    id: "large-round-diamond-cross-pendant",
    category: "Pendants / Charms",
    name: "Large Round Diamond Cross Pendant",
    price: 2414,
    estimate: 2414,
    priceLabel: "Starting at $2,414 in 14K white gold",
    image: "large-round-diamond-cross-pendant.jpeg",
    alt: "Large round diamond cross pendant on black background",
    lede: "A large round diamond cross pendant priced for lab-grown diamonds, with statement stones and a high-polish prong setting.",
    cta: "Request Diamond Cross Quote",
    metalSurcharges: engagementRingMetalSurcharges,
    badges: ["Lab Diamonds", "Diamond Pendant", "14K Gold", "Made to Order"],
    notice: handcraftedNotice,
    buttons: ["Add to Cart", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Metal", pendantGoldPlatinumMetals], ["Diamond Type", ["Lab-grown diamonds", "Natural diamonds by request"]], ["Diamond Size", ["Large round stones", "Custom stone size"]], ["Pendant Size", ["Small", "Medium", "Large", "Custom size"]]],
  },
  {
    id: "yellow-gold-round-diamond-cross-pendant",
    category: "Pendants / Charms",
    name: "Yellow Gold Round Diamond Cross Pendant",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Price available upon request",
    image: "yellow-gold-round-diamond-cross-pendant.jpeg",
    alt: "Yellow gold round diamond cross pendant on black background",
    lede: "A yellow gold round diamond cross pendant with 15-pointer diamonds, a classic stone layout, and an iced bail.",
    cta: "Request Yellow Gold Cross Quote",
    badges: ["Diamond Pendant", "Yellow Gold", "Made to Order"],
    notice: handcraftedNotice,
    buttons: ["Request Price", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Metal", ["14K Yellow Gold", "18K Yellow Gold", "14K White Gold", "14K Rose Gold", "Platinum"]], ["Diamond Type", ["Lab diamonds", "Natural diamonds by request"]], ["Diamond Size", ["15 pointers", "Custom stone size"]], ["Pendant Size", ["Small", "Medium", "Large", "Custom size"]]],
  },
  {
    id: "yellow-gold-diamond-ankh-pendant",
    category: "Pendants / Charms",
    name: "Yellow Gold Diamond Anchor Pendant",
    price: 3200,
    estimate: 3200,
    priceLabel: "Starting at $3,200 in 14K gold",
    image: "yellow-gold-diamond-ankh-pendant.jpeg",
    alt: "Yellow gold diamond anchor-inspired pendant on black background",
    lede: "A yellow gold diamond anchor-inspired pendant with full pave coverage and an iced bail. Natural stones are available by request, and lab-grown stones can be used. Request pricing for natural or lab-grown diamond options.",
    cta: "Request Anchor Pendant Quote",
    metalSurcharges: anchorPendantMetalSurcharges,
    badges: ["Natural Diamonds", "Lab Diamonds Available", "Yellow Gold", "Made to Order"],
    notice: handcraftedNotice,
    buttons: ["Request Price", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Metal", ["14K Yellow Gold", "18K Yellow Gold", "14K White Gold", "14K Rose Gold", "18K White Gold", "18K Rose Gold", "Platinum"]], ["Diamond Type", ["Natural diamonds", "Lab-grown diamonds"]], ["Diamond Quality", ["VS", "VVS"]], ["Pendant Size", ["Small", "Medium", "Large", "Custom size"]], ["Specification Note", ["Pricing varies by diamond type, carat weight, gold weight, size, and customization. Weight varies. Request weight details."]]],
  },
  {
    id: "elephant-head-diamond-pendant",
    category: "Pendants / Charms",
    name: "Iced Diamond Pendants",
    price: 4800,
    estimate: 6500,
    priceLabel: "Starting at $4,800 in 14K gold",
    image: "elephant-head-diamond-pendants.jpeg",
    alt: "Rose and white gold iced diamond pendants",
    lede: "14K iced diamond pendants shown in rose and white gold finishes with approximately 1.85 CTW diamonds. Starting at $4,800 in 14K gold with a retail value of $6,500. Request exact weight and specifications before purchase.",
    cta: "Request Iced Pendant Details",
    badges: ["14K Gold", "Diamond Pendant", "Starting at $4,800", "Retail $6,500"],
    notice: handcraftedNotice,
    buttons: ["Add to Cart", "Request Exact Weight & Specifications", "Request Custom Order", "Financing Available"],
    fields: [["Metal", pendantMetals], ["Diamond Type", ["Natural diamonds", "Lab-grown diamonds by request"]], ["Finish", ["Rose gold", "White gold", "Yellow gold"]], ["Specification Note", ["Weight varies. Request weight details."]]],
  },
  {
    id: "baguette-diamond-letter-z-pendant",
    category: "Pendants / Charms",
    name: "Baguette Diamond Letter Z Pendant",
    price: 1600,
    estimate: 1600,
    priceLabel: "Starting at $1,600",
    image: "baguette-diamond-letter-z-pendant.jpeg",
    alt: "Baguette diamond Letter Z pendant",
    lede: "A custom 14K Letter Z pendant with baguette and round diamond coverage. Pricing varies by letter, size, stone weight, gold weight, and customization.",
    cta: "Request Letter Z Pendant",
    badges: ["Natural Diamonds", "14K Gold", "Customizable", "Made to Order"],
    notice: handcraftedNotice,
    buttons: ["Add to Cart", "Request Exact Weight & Specifications", "Request Custom Letter", "Financing Available"],
    fields: [["Metal", pendantMetals], ["Letter", ["Z", "All letters available", "Custom initials"]], ["Diamond Style", ["Baguette and round diamonds", "Round diamonds only", "Custom layout"]], ["Specification Note", ["Weight varies. Request weight details."]]],
  },
  {
    id: "diamond-letter-l-pendant",
    category: "Pendants / Charms",
    name: "Diamond Letter L Pendant",
    price: 1200,
    estimate: 1200,
    priceLabel: "Starting at $1,200",
    image: "diamond-letter-l-pendant.jpeg",
    alt: "Diamond Letter L pendant",
    lede: "14K Letter L diamond pendant starting at $1,200. Pricing and final specifications vary by size, gold weight, diamond weight, and customization.",
    cta: "Request Letter L Details",
    badges: ["Natural Diamonds", "14K Gold", "Customizable", "Ready to Ship"],
    notice: handcraftedNotice,
    buttons: ["Add to Cart", "Request Exact Weight & Specifications", "Request Custom Letter", "Financing Available"],
    fields: [["Metal", pendantMetals], ["Letter", ["L", "All letters available", "Custom initials"]], ["Diamond Quality", ["VS", "VVS"]], ["Specification Note", ["Weight varies. Request weight details."]]],
  },
  {
    id: "diamond-letter-n-pendant",
    category: "Pendants / Charms",
    name: "Diamond Letter N Pendant",
    price: 1200,
    estimate: 1200,
    priceLabel: "Starting at $1,200",
    image: "diamond-letter-n-pendant.jpeg",
    gallery: ["diamond-letter-n-pendant-gallery.jpeg"],
    alt: "Diamond Letter N pendant",
    lede: "14K Letter N diamond pendant starting at $1,200. Includes an additional gallery view. Pricing varies by size, gold weight, diamond weight, and customization.",
    cta: "Request Letter N Details",
    badges: ["Natural Diamonds", "14K Gold", "Customizable", "Ready to Ship"],
    notice: handcraftedNotice,
    buttons: ["Add to Cart", "Request Exact Weight & Specifications", "Request Custom Letter", "Financing Available"],
    fields: [["Metal", pendantMetals], ["Letter", ["N", "All letters available", "Custom initials"]], ["Diamond Quality", ["VS", "VVS"]], ["Specification Note", ["Weight varies. Request weight details."]]],
  },
  {
    id: "diamond-letter-j-pendant",
    category: "Pendants / Charms",
    name: "Diamond Letter J Pendant",
    price: 1200,
    estimate: 1200,
    priceLabel: "Starting at $1,200",
    image: "diamond-letter-j-pendant.jpeg",
    alt: "Diamond Letter J pendant",
    lede: "14K Letter J diamond pendant starting at $1,200. Final weight and diamond count may vary slightly.",
    cta: "Request Letter J Details",
    badges: ["Natural Diamonds", "14K Gold", "Customizable", "Ready to Ship"],
    notice: handcraftedNotice,
    buttons: ["Add to Cart", "Request Exact Weight & Specifications", "Request Custom Letter", "Financing Available"],
    fields: [["Metal", pendantMetals], ["Letter", ["J", "All letters available", "Custom initials"]], ["Diamond Quality", ["VS", "VVS"]], ["Specification Note", ["Weight varies. Request weight details."]]],
  },
  {
    id: "lion-head-diamond-pendant",
    category: "Pendants / Charms",
    name: "Iced Jesus Pendant",
    price: 7214,
    estimate: 7214,
    priceLabel: "Starting at $7,214 in 14K gold",
    image: "lion-head-diamond-pendant.jpeg",
    alt: "Gold iced Jesus pendant",
    lede: "14K iced Jesus pendant with bold sculptural detail and diamond accents. Starting at $7,214 in 14K gold; request exact weight and specifications before purchase.",
    cta: "Request Jesus Pendant Details",
    badges: ["14K Gold", "Diamond Pendant", "Statement Piece", "Ready to Ship"],
    notice: handcraftedNotice,
    buttons: ["Add to Cart", "Request Exact Weight & Specifications", "Request Custom Order", "Financing Available"],
    fields: [["Metal", pendantMetals], ["Diamond Type", ["Natural diamonds", "Lab-grown diamonds by request"]], ["Specification Note", ["Weight varies. Request weight details."]]],
  },
  {
    id: "two-tone-rolex-datejust-diamond-dial",
    category: "Watches",
    name: "Two-Tone Rolex Datejust Diamond Dial",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Price available upon request",
    image: "two-tone-rolex-datejust-diamond-dial.jpeg",
    gallery: ["two-tone-rolex-datejust-papers.jpeg"],
    alt: "Two-tone Rolex Datejust with diamond dial",
    lede: "Two-tone Rolex Datejust watch with diamond hour markers. Availability, condition, box/papers, and final pricing must be confirmed before purchase.",
    cta: "Request Rolex Watch Details",
    badges: ["Watch", "Diamond Dial", "Request Pricing"],
    buttons: ["Request Price", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Watch Type", ["Rolex Datejust"]], ["Condition", ["Request condition details"]], ["Documentation", ["Request box and papers details"]]],
  },
  {
    id: "iced-cartier-santos-watch",
    category: "Watches",
    name: "Iced Cartier Santos Style Watch",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Price available upon request",
    image: "iced-cartier-santos-watch.jpeg",
    alt: "Iced Cartier Santos style watch",
    lede: "Iced Cartier Santos style watch photographed on a black display pillow. Request pricing, stone details, and availability before purchase.",
    cta: "Request Watch Quote",
    badges: ["Watch", "Custom Quote Required", "Diamond Style"],
    buttons: ["Request Price", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Watch Type", ["Cartier Santos style"]], ["Stone Option", ["Diamond-set style", "Custom request"]], ["Availability", ["Request current availability"]]],
  },
  {
    id: "iced-g-shock-watch-set",
    category: "Watches",
    name: "Iced G-Shock Watch Set",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Price available upon request",
    image: "iced-g-shock-watch-set.jpeg",
    alt: "Iced G-Shock watches with black and red bands",
    lede: "A custom iced G-Shock watch set shown with black and red band options. Request pricing and current availability.",
    cta: "Request G-Shock Watch Quote",
    badges: ["Watch", "Custom Quote Required", "Customizable"],
    buttons: ["Request Price", "Custom Order Inquiry", "Financing Available"],
    fields: [["Band Color", ["Black", "Red", "Custom color"]], ["Stone Option", ["Iced style", "Custom request"]], ["Availability", ["Request current availability"]]],
  },
  {
    id: "yellow-gold-rope-bracelet",
    category: "Bracelets",
    name: "Yellow Gold Rope Bracelet",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Price available upon request",
    image: "yellow-gold-rope-bracelet.jpeg",
    alt: "Yellow gold rope bracelet",
    lede: "Yellow gold rope bracelet with polished links. Pricing varies by length, karat, gram weight, and availability.",
    cta: "Request Bracelet Pricing",
    badges: ["Yellow Gold", "Bracelet", "Request Pricing"],
    buttons: ["Request Price", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Metal", ["10K Yellow Gold", "14K Yellow Gold", "18K Yellow Gold"]], ["Length", ["Request length details", "Custom length"]], ["Specification Note", ["Weight varies. Request weight details."]]],
  },
  {
    id: "yellow-gold-cuban-link-chain",
    category: "Chains",
    name: "Yellow Gold Cuban Link Chain",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Price available upon request",
    image: "yellow-gold-cuban-link-chain.jpeg",
    gallery: ["yellow-gold-cuban-chain-display.jpeg"],
    alt: "Yellow gold Cuban link chain",
    lede: "Yellow gold Cuban link chain photographed on display. Pricing varies by karat, length, width, gram weight, and market availability.",
    cta: "Request Cuban Chain Pricing",
    badges: ["Yellow Gold", "Chain", "Request Pricing"],
    buttons: ["Request Price", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Metal", ["10K Yellow Gold", "14K Yellow Gold", "18K Yellow Gold"]], ["Length", ["18 inch", "20 inch", "22 inch", "24 inch", "Custom length"]], ["Specification Note", ["Weight varies. Request weight details."]]],
  },
  {
    id: "yellow-gold-rope-chain",
    category: "Chains",
    name: "Yellow Gold Rope Chain",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Price available upon request",
    image: "yellow-gold-rope-chain-triple.jpeg",
    gallery: ["yellow-gold-rope-chain-flat.jpeg"],
    alt: "Yellow gold rope chains on display",
    lede: "Yellow gold rope chain available by request. Pricing varies by karat, length, width, gram weight, and current gold market.",
    cta: "Request Rope Chain Pricing",
    badges: ["Yellow Gold", "Chain", "Request Pricing"],
    buttons: ["Request Price", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Metal", ["10K Yellow Gold", "14K Yellow Gold", "18K Yellow Gold"]], ["Length", ["18 inch", "20 inch", "22 inch", "24 inch", "Custom length"]], ["Specification Note", ["Weight varies. Request weight details."]]],
  },
  {
    id: "yellow-gold-layered-figaro-chain",
    category: "Chains",
    name: "Yellow Gold Layered Figaro Chain",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Price available upon request",
    image: "yellow-gold-layered-figaro-chain.jpeg",
    alt: "Layered yellow gold Figaro-style chains",
    lede: "Layered yellow gold Figaro-style chains available by request. Pricing varies by karat, length, width, gram weight, and availability.",
    cta: "Request Chain Pricing",
    badges: ["Yellow Gold", "Chain", "Request Pricing"],
    buttons: ["Request Price", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Metal", ["10K Yellow Gold", "14K Yellow Gold", "18K Yellow Gold"]], ["Length", ["18 inch", "20 inch", "22 inch", "24 inch", "Custom length"]], ["Specification Note", ["Weight varies. Request weight details."]]],
  },
  {
    id: "gold-caduceus-medical-pendant",
    category: "Pendants / Charms",
    name: "Gold Caduceus Medical Pendant",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Price available upon request",
    image: "gold-caduceus-medical-pendant.jpeg",
    alt: "Gold caduceus medical pendant",
    lede: "Gold caduceus medical pendant available by request. Pricing varies by karat, size, gold weight, and customization.",
    cta: "Request Medical Pendant Quote",
    badges: ["Gold Pendant", "Custom Quote Required", "Made to Order"],
    notice: handcraftedNotice,
    buttons: ["Request Price", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Metal", pendantMetals], ["Pendant Size", ["Small", "Medium", "Large", "Custom size"]], ["Specification Note", ["Weight varies. Request weight details."]]],
  },
  {
    id: "gold-medusa-head-pendant",
    category: "Custom Jewelry",
    name: "Gold Medusa Head Pendant",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Price available upon request",
    image: "gold-medusa-head-pendant.jpeg",
    gallery: ["gold-medusa-head-pendant-alt.jpeg"],
    alt: "Gold Medusa head custom pendant",
    lede: "Custom gold Medusa head pendant photographed in two views. Pricing varies by size, gold weight, finish, and customization.",
    cta: "Request Medusa Pendant Quote",
    badges: ["Custom Jewelry", "Gold Pendant", "Made to Order"],
    notice: handcraftedNotice,
    buttons: ["Request Price", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Metal", pendantMetals], ["Finish", ["Yellow gold", "Custom finish"]], ["Pendant Size", ["Small", "Medium", "Large", "Custom size"]], ["Specification Note", ["Weight varies. Request weight details."]]],
  },
  {
    id: "green-jade-buddha-diamond-pendant",
    category: "Pendants / Charms",
    name: "Green Jade Buddha Diamond Pendant",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Price available upon request",
    image: "green-jade-buddha-diamond-pendant.jpeg",
    alt: "Green jade Buddha pendant with diamond halo",
    lede: "Green jade Buddha pendant with diamond halo and iced bail. Request gemstone, diamond, gold weight, and pricing details before purchase.",
    cta: "Request Buddha Pendant Quote",
    badges: ["Gemstone Pendant", "Diamond Halo", "Custom Quote Required"],
    notice: handcraftedNotice,
    buttons: ["Request Price", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Metal", pendantMetals], ["Gemstone", ["Green jade", "Custom gemstone"]], ["Diamond Type", ["Natural diamonds", "Lab-grown diamonds by request"]], ["Specification Note", ["Weight varies. Request weight details."]]],
  },
  {
    id: "custom-dejaun-diamond-name-pendant",
    category: "Custom Jewelry",
    name: "Custom Dejaun Diamond Name Pendant",
    price: "Request Pricing",
    estimate: null,
    priceLabel: "Price available upon request",
    image: "custom-dejaun-diamond-name-pendant.jpeg",
    alt: "Custom Dejaun diamond name pendant render",
    lede: "Custom Dejaun name pendant render with diamond coverage and script lettering. Made to order from the client's name or word.",
    cta: "Request Custom Name Pendant",
    badges: ["Custom CAD Design", "Custom Jewelry", "Made to Order"],
    notice: handcraftedNotice,
    buttons: ["Request Price", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Metal", pendantMetals], ["Lettering", ["Dejaun", "Custom name", "Custom word"]], ["Diamond Style", ["Full diamond layout", "Partial diamond layout", "No stones"]], ["Specification Note", ["Weight varies. Request weight details."]]],
  },
  {
    id: "rose-gold-pear-pave-engagement-ring",
    category: "Engagement Rings",
    name: "Rose Gold Pear Pave Engagement Ring",
    price: 1900,
    estimate: 1900,
    priceLabel: "Starting at $1,900 for 1 carat",
    image: "rose-gold-pear-pave-engagement-ring.jpeg",
    gallery: ["rose-gold-pear-pave-engagement-ring-front.jpeg"],
    alt: "Rose gold pear diamond pave engagement ring",
    lede: "Pear-shaped diamond engagement ring in rose gold with pave diamond band. Final pricing depends on center diamond selection and metal.",
    cta: "Request Pear Engagement Ring Quote",
    badges: ["Engagement Ring", "Rose Gold", "Pave Band"],
    fields: [["Diamond Size", baseCarats], ["Stone Shape", ["Pear"]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Ring Size", ringSizes]],
  },
  {
    id: "yellow-gold-oval-pave-engagement-ring",
    category: "Engagement Rings",
    name: "Yellow Gold Pave Engagement Ring",
    price: 1900,
    estimate: 1900,
    priceLabel: "Starting at $1,900 for 1 carat",
    image: "yellow-gold-oval-pave-engagement-ring.jpeg",
    gallery: ["yellow-gold-oval-pave-engagement-ring-side.jpeg", "yellow-gold-oval-pave-engagement-ring-front.jpeg"],
    alt: "Yellow gold oval diamond pave engagement ring",
    lede: "Oval diamond engagement ring in yellow gold with pave diamond band. Final pricing depends on center diamond selection and metal.",
    cta: "Request Oval Engagement Ring Quote",
    badges: ["Engagement Ring", "Yellow Gold", "Pave Band"],
    fields: [["Diamond Size", baseCarats], ["Stone Shape", ["Oval"]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Ring Size", ringSizes]],
  },
  {
    id: "white-gold-marquise-pave-engagement-ring",
    category: "Engagement Rings",
    name: "White Gold Marquise Pave Engagement Ring",
    price: 1900,
    estimate: 1900,
    priceLabel: "Starting at $1,900 for 1 carat",
    image: "white-gold-marquise-pave-engagement-ring.jpeg",
    alt: "White gold marquise diamond pave engagement ring",
    lede: "Marquise diamond engagement ring in white gold with pave diamond band. Final pricing depends on center diamond selection and metal.",
    cta: "Request Marquise Engagement Ring Quote",
    badges: ["Engagement Ring", "White Gold", "Pave Band"],
    fields: [["Diamond Size", baseCarats], ["Stone Shape", ["Marquise"]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Ring Size", ringSizes]],
  },
  {
    id: "round-cluster-diamond-stud-earrings",
    category: "Women's Earrings",
    secondaryCategories: ["Men's Earrings"],
    name: "Round Cluster Diamond Stud Earrings",
    price: 875,
    estimate: 875,
    priceLabel: "Starting at $875 for 1 carat",
    image: "round-cluster-diamond-stud-earrings-close.jpeg",
    gallery: ["round-cluster-diamond-stud-earrings-render.jpeg"],
    alt: "Round cluster diamond stud earrings render",
    lede: "Round cluster diamond stud earrings with screw-back posts, starting at $875 for 1 carat. Final pricing varies by diamond type, gold, total carat weight, and customization.",
    cta: "Request Stud Earring Quote",
    badges: ["Earrings", "Diamond Studs", "Starting at $875"],
    buttons: ["Add to Cart", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"],
    fields: [["Total Diamond Weight", [["1 carat", 875], ["1.5 carat", 1125], ["2 carat", 1400], ["Custom total carat weight", 875]]], ["Metal", metals], ["Diamond Type", ["Lab diamonds", "Natural diamonds by request"]], ["Back Type", ["Screw back", "Push back by request"]], ["Specification Note", ["Weight varies. Request weight details."]]],
  },
];

const diamondOriginByProduct = {
  "queen-aurelia-oval-marquise-ring": "LGD",
  "luna-solitaire": "LGD",
  "ready-engagement-ring-4662": "LGD",
  "classic-marquise-engagement-ring": "LGD",
  "gold-halo-engagement-ring": "LGD",
  "pink-oval-engagement-ring": "LGD",
  "yellow-oval-diamond-ring": "LGD",
  "radiant-solitaire-engagement-ring": "LGD",
  "emerald-accent-engagement-ring": "LGD",
  "imperial-bloom-engagement-ring": "LGD",
  "celeste-halo": "LGD",
  "round-diamond-studs": "LGD",
  "round-martini-diamond-studs": "LGD",
  "yellow-canary-diamond-studs": "LGD",
  "pink-monarch-diamond-studs": "LGD",
  "blue-monarch-diamond-studs": "LGD",
  "asscher-diamond-stud-earrings": "LGD",
  "cushion-diamond-stud-earrings": "LGD",
  "emerald-diamond-stud-earrings": "LGD",
  "oval-diamond-stud-earrings": "LGD",
  "pear-diamond-stud-earrings": "LGD",
  "round-brilliant-diamond-stud-earrings": "LGD",
  "marquise-arc": "LGD",
  "ever-band": "LGD",
  "lab-diamond-tennis-bracelet-8-1ct": "LGD",
  "celeste-bezel-diamond-station-bracelet": "LGD",
  "fleur-diamond-cluster-station-bracelet": "LGD",
  "solene-diamond-paperclip-station-bracelet": "LGD",
  "thirty-pointer-diamond-cross": "LGD",
  "triple-row-diamond-tennis-bracelet": "LGD",
  "yellow-gold-diamond-cuban-link-ring": "LGD",
  "white-gold-diamond-cuban-link-bracelet": "LGD",
  "gemstone-leaf-wedding-band-set": "LGD",
  "yellow-gold-diamond-cuban-link-bracelet": "LGD",
  "mens-royal-filigree-princess-channel-wedding-band": "LGD",
  "mens-white-gold-asscher-channel-wedding-band": "LGD",
  "mens-pear-cut-filigree-diamond-wedding-band": "LGD",
  "mens-asscher-cut-filigree-diamond-wedding-band": "LGD",
  "mens-round-diamond-filigree-wedding-band": "LGD",
};

function storedImportProducts() {
  try {
    return JSON.parse(localStorage.getItem("donApprovedInstagramProducts") || "[]").map((product) => ({
      ...product,
      category: normalizeImportCategory(product.category),
    }));
  } catch {
    return [];
  }
}

function allProducts() {
  return [...products, ...storedImportProducts(), ...approvedPreviewProducts]
    .filter((product) => !/marquise.*surround|surround.*marquise/i.test(product.name || ""));
}

function productImageSrc(product) {
  if (product.imageUrl) return product.imageUrl;
  if (product.image && String(product.image).startsWith("/")) return product.image;
  return asset(product.image || "don-logo.jpg");
}

function productGallery(product) {
  const images = (product.gallery || []).filter((image) => image && image !== product.image);
  if (!images.length) return "";
  return `
    <div class="product-gallery" aria-label="${productName(product)} gallery">
      ${images.map((image) => `<img src="${asset(image)}" alt="${productName(product)} additional view" ${imageSafety}>`).join("")}
    </div>
  `;
}

function cartImageSrc(item) {
  if (!item.image) return asset("don-logo.jpg");
  if (String(item.image).startsWith("/") || String(item.image).startsWith("data:")) return item.image;
  return asset(item.image);
}

function productName(product) {
  const origin = diamondOriginByProduct[product.id];
  return origin ? `${product.name} (${origin})` : product.name;
}

function htmlSafe(value) {
  return String(value || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function safeExternalUrl(value) {
  const url = String(value || "").trim();
  return /^https?:\/\//i.test(url) ? url : "";
}

async function fetchWithTimeout(url, options = {}, timeoutMs = 10000) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, {
      ...options,
      headers: { Accept: "application/json", ...(options.headers || {}) },
      signal: controller.signal,
    });
  } finally {
    window.clearTimeout(timeout);
  }
}

function selectedLiveDiamondFor(productId) {
  try {
    return JSON.parse(localStorage.getItem(`donLiveDiamond:${productId}`) || "null");
  } catch {
    return null;
  }
}

function liveDiamondLabel(diamond) {
  if (!diamond) return "No live diamond selected yet";
  if (!diamond.shape && diamond.details) return diamond.details;
  return `${diamond.shape || "Diamond"} ${diamond.carat ? `${diamond.carat}ct` : ""} ${diamond.color ? `${diamond.color} color` : ""} ${diamond.clarity || ""}`.replace(/\s+/g, " ").trim();
}

async function loadApprovedProducts() {
  approvedPreviewProducts = JSON.parse(localStorage.getItem("donApprovedProducts") || "[]");
}

function diamondOriginNote(product) {
  if (!diamondOriginByProduct[product.id]) return "";
  return `<p class="diamond-origin-note">Items marked <strong>(LGD)</strong> use lab-grown diamonds. Items marked <strong>(N)</strong> use natural diamonds. All items on this website are made to order.</p>`;
}

function engagementCertificationNote(product) {
  if (product.category !== "Engagement Rings") return "";
  return `<p class="diamond-origin-note">All engagement rings include IGI or GIA certified diamond paperwork and an appraisal for the ring itself.</p>`;
}

function productBadges(product) {
  return (product.badges || []).length
    ? `<div class="product-badges">${product.badges.map((badge) => `<span>${badge}</span>`).join("")}</div>`
    : "";
}

function productNotice(product) {
  return product.notice ? `<p class="product-notice">${product.notice}</p>` : "";
}

function productActionButtons(product) {
  const buttons = product.buttons || ((product.price === "Request Pricing" || product.estimate === null)
    ? ["Request Price", "Request Exact Weight & Specifications", "Custom Order Inquiry", "Financing Available"]
    : []);
  if (!buttons.length) return "";
  const hrefByButton = (label) => {
    if (/financing/i.test(label)) return "#/financing-policy";
    if (/cart/i.test(label)) return "";
    if (/exact weight|specifications/i.test(label)) return requestHref(product, "exact-weight-specifications");
    if (/custom order/i.test(label)) return "#/custom-orders";
    if (/request price|custom quote|pricing|custom size|custom letter|build your chain|build your bracelet/i.test(label)) return requestHref(product, "custom-quote");
    return requestHref(product, "product-request");
  };
  return `<div class="builder-actions product-extra-actions">
    ${buttons.filter((label) => !/cart/i.test(label)).map((label, index) => {
      const href = hrefByButton(label);
      const tone = index === 0 ? "button-gold" : index === 1 ? "button-dark" : "button-light";
      return `<a class="button ${tone}" href="${href}">${label}</a>`;
    }).join("")}
  </div>`;
}

function productFields(product) {
  if ((product.fields || []).some(([label]) => label === "Diamond Type")) return product.fields;
  if (!diamondOriginByProduct[product.id]) return product.fields;
  return [["Diamond Type", diamondTypeOptions], ...product.fields];
}

function startingText(product) {
  if (product.priceLabel) return product.priceLabel === "Request Pricing" ? "Price available upon request" : product.priceLabel;
  if (product.price === "Request Pricing" || product.estimate === null) return "Price available upon request";
  const pricedGroup = (product.fields || []).find(([, values]) => values.every(Array.isArray));
  if (!pricedGroup) return `Starting at ${money.format(product.price)}`;
  const [label, values] = pricedGroup;
  const [option, basePrice] = values[0];
  const price = basePrice + (product.estimate - basePrice);
  const context = label.toLowerCase().includes("diamond") ? option : `${label.toLowerCase()} ${option}`;
  return `Starting at ${money.format(price)} for ${context}`;
}

const categories = [
  ["select-diamond", "Live Diamond Selection", "diamond-banner.jpg"],
  ["cvd-lab-grown-diamond-jewelry", "CVD Lab-Grown Diamond Jewelry", "diamond-bracelet.png"],
  ["engagement-rings", "Engagement Rings", "pink-oval-engagement-ring.jpeg"],
  ["wedding-bands", "Wedding Bands", "mens-round-diamond-filigree-wedding-band.jpg"],
  ["mens-rings", "Men's Rings", "ring-product-black-07.png"],
  ["womens-rings", "Women's Rings", "ring-product-black-02.png"],
  ["mens-earrings", "Men's Earrings", "round-diamond-studs.jpeg"],
  ["womens-earrings", "Women's Earrings", "princess-diamond-earrings.png"],
  ["pendants-charms", "Pendants / Charms", "saint-michael-diamond-angel-pendant.jpeg"],
  ["chains", "Chains", "yellow-gold-rope-chain-triple.jpeg"],
  ["necklaces", "Necklaces", "yellow-gold-cuban-chain-display.jpeg"],
  ["bracelets", "Bracelets", "diamond-bracelet.png"],
  ["anklets", "Anklets", "yellow-gold-rope-bracelet.jpeg"],
  ["custom-jewelry", "Custom Jewelry", "custom-dejaun-diamond-name-pendant.jpeg"],
  ["watches", "Watches", "two-tone-rolex-datejust-diamond-dial.jpeg"],
  ["custom-orders", "Custom Orders", "don-logo.jpg"],
];

let cart = JSON.parse(localStorage.getItem("donCart") || "[]");
let selections = {};
let approvedPreviewProducts = [];
const splashStartedAt = Date.now();
let liveDiamondInventory = [];
let liveJewelryInventory = [];
let liveMatchingPairInventory = [];

function numericPrice(value) {
  const amount = Number(value);
  return Number.isFinite(amount) ? amount : 0;
}

function cartTotal(items = cart) {
  return items.reduce((sum, item) => sum + numericPrice(item.price) * Math.max(1, Number(item.quantity || 1)), 0);
}

function payableCartItems() {
  return cart.filter((item) => numericPrice(item.price) > 0 && !item.pricingNote);
}

function stripePayButton(total) {
  return `<a class="button button-gold" href="${stripePaymentLink}" target="_blank" rel="noopener noreferrer" data-stripe-checkout="true" data-stripe-total="${total || 0}">Pay Now with Stripe${total > 0 ? ` - ${money.format(total)}` : ""}</a>`;
}

function stripeCheckoutButton(total) {
  return `<a class="button button-gold" href="${stripePaymentLink}" target="_blank" rel="noopener noreferrer" data-stripe-checkout="true" data-stripe-total="${total || 0}">Checkout with Stripe${total > 0 ? ` - ${money.format(total)}` : ""}</a>`;
}

function productCheckoutButton(product, total, label = "Buy Now / Checkout with Stripe") {
  if (!product || !Number(total) || product.available === false || product.hidden) {
    return `<button class="button button-light" type="button" disabled>Checkout unavailable — request pricing</button>`;
  }
  return `<button class="button button-gold" type="button" data-buy-product="${htmlSafe(product.id)}">${label}${total ? ` - ${money.format(total)}` : ""}</button>`;
}

function requestPriceButton(product, className = "button button-light") {
  return `<a class="${className}" href="${requestHref(product, "pricing")}">Request Price</a>`;
}

function requestHref(product, intent = "product") {
  const params = new URLSearchParams();
  params.set("product", productName(product));
  params.set("category", product.category || "Product Inquiry");
  params.set("intent", intent);
  return `#/request/product?${params.toString()}`;
}

function hideSplashScreen() {
  const splash = document.getElementById("site-splash");
  if (!splash) return;
  const minimumVisibleMs = 1800;
  const remaining = Math.max(0, minimumVisibleMs - (Date.now() - splashStartedAt));
  window.setTimeout(() => {
    splash.classList.add("is-hiding");
    window.setTimeout(() => splash.remove(), 900);
  }, remaining);
}

function navLinks() {
  return `
    <a href="#/">Home</a>
    <a href="#/category/engagement-rings">Engagement Rings</a>
    <a href="#/select-diamond">Live Diamond Selection</a>
    <a href="#/category/cvd-lab-grown-diamond-jewelry">CVD Lab-Grown Diamond Jewelry</a>
    <a href="#/category/wedding-bands">Wedding Bands</a>
    <a href="#/category/mens-rings">Men's Rings</a>
    <a href="#/category/womens-rings">Women's Rings</a>
    <a href="#/category/necklaces">Necklaces</a>
    <a href="#/category/chains">Chains</a>
    <a href="#/category/pendants-charms">Pendants / Charms</a>
    <a href="#/category/custom-jewelry">Custom Jewelry</a>
    <a href="#/category/mens-earrings">Men's Earrings</a>
    <a href="#/category/womens-earrings">Women's Earrings</a>
    <a href="#/category/bracelets">Bracelets</a>
    <a href="#/category/anklets">Anklets</a>
    <a href="#/category/watches">Watches</a>
    <a class="nav-highlight" href="#/custom-orders">Custom Orders</a>
    <a href="#/cart">Cart <span class="cart-pill">${cart.length}</span></a>
  `;
}

function shell(main) {
  document.getElementById("app").innerHTML = `
    <header class="site-header">
      <button class="brand brand-menu-button" type="button" id="sidebar-open" aria-label="Open site menu" aria-controls="site-sidebar" aria-expanded="false">
        <span class="brand-mark" aria-hidden="true">TD</span>
        <span class="brand-copy"><strong>The Don Jewelers & Jewelry</strong><small>Luxury custom jewelry</small></span>
      </button>
      <nav class="nav-links" aria-label="Primary navigation">${navLinks()}</nav>
    </header>
    <div class="sidebar-backdrop" id="sidebar-backdrop" hidden></div>
    <aside class="site-sidebar" id="site-sidebar" aria-label="Site menu" aria-hidden="true">
      <div class="sidebar-head">
        <span class="sidebar-brand"><span class="brand-mark" aria-hidden="true">TD</span><span><strong>The Don Jewelers & Jewelry</strong><small>Luxury custom jewelry</small></span></span>
        <button class="sidebar-close" type="button" id="sidebar-close" aria-label="Close site menu">Close</button>
      </div>
      <nav class="sidebar-links" aria-label="Sidebar navigation">${navLinks()}</nav>
    </aside>
    ${main}
    ${footer()}
  `;
  wireSidebar();
  hydrateDeferredImages();
}

function hydrateDeferredImages() {
  const images = [...document.querySelectorAll("img[data-deferred-src]")];
  const loadNext = () => {
    const image = images.shift();
    if (!image) return;
    image.src = image.dataset.deferredSrc;
    image.removeAttribute("data-deferred-src");
    window.setTimeout(loadNext, 180);
  };
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(loadNext, { timeout: 1000 });
  } else {
    window.setTimeout(loadNext, 300);
  }
}

function footer() {
  const policyLinks = [
    ["Refund & Return Policy", "refund-return-policy"],
    ["Payment Policy", "payment-policy"],
    ["Shipping Policy", "shipping-policy"],
    ["Custom Order Policy", "custom-order-policy"],
    ["Warranty Policy", "warranty-policy"],
    ["Terms & Conditions", "terms"],
    ["Privacy Policy", "privacy-policy"],
    ["Financing Policy", "financing-policy"],
  ];
  return `
    <footer class="site-footer">
      <div>
        <strong>The Don Jewelers & Jewelry</strong>
        <p>Private jeweler for custom jewelry, engagement rings, diamond jewelry, and nationwide shipping.</p>
      </div>
      <div class="footer-contact">
        <strong>Contact for quotes</strong>
        <a href="${phoneHref}">${phoneDisplay}</a>
        <a href="mailto:${contactEmail}">${contactEmail}</a>
        <span>Serving ${serviceArea}. Call, text, or email before returns, custom approvals, or order questions.</span>
      </div>
      <div class="footer-links">
        <a href="#/products">Shop Now</a>
        <a href="#/request/contact">General Contact</a>
        <a href="#/checkout">Checkout</a>
        ${policyLinks.map(([label, path]) => `<a href="#/${path}">${label}</a>`).join("")}
        <span class="site-version">Customer policies and checkout support</span>
      </div>
    </footer>
  `;
}

function wireSidebar() {
  const sidebar = document.getElementById("site-sidebar");
  const backdrop = document.getElementById("sidebar-backdrop");
  const open = () => {
    sidebar.classList.add("is-open");
    sidebar.setAttribute("aria-hidden", "false");
    backdrop.hidden = false;
    document.getElementById("sidebar-open").setAttribute("aria-expanded", "true");
  };
  const close = () => {
    sidebar.classList.remove("is-open");
    sidebar.setAttribute("aria-hidden", "true");
    backdrop.hidden = true;
    document.getElementById("sidebar-open").setAttribute("aria-expanded", "false");
  };
  document.getElementById("sidebar-open").addEventListener("click", open);
  document.getElementById("sidebar-close").addEventListener("click", close);
  backdrop.addEventListener("click", close);
  sidebar.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));
}

function productCard(product) {
  const priced = Number.isFinite(Number(product.price)) && product.price !== "Request Pricing" && product.estimate !== null;
  return `
    <article class="product-card">
      <a href="#/product/${product.id}" class="product-image-link" aria-label="Customize ${productName(product)}">
        <img src="${productImageSrc(product)}" alt="${product.alt || productName(product)}" ${imageSafety}>
      </a>
      <div class="product-card-body">
        <p class="eyebrow">${product.category}</p>
        <h3>${productName(product)}</h3>
        <p class="muted">${startingText(product)}</p>
        ${productBadges(product)}
        <div class="card-actions">
          <a class="button button-dark" href="#/product/${product.id}">View Details</a>
          ${priced ? productCheckoutButton(product, numericPrice(product.price), "Buy Now") : requestPriceButton(product)}
        </div>
      </div>
    </article>
  `;
}

function pageHero(eyebrow, heading, body = "", action = "") {
  return `
    <section class="page-hero compact">
      <img class="page-hero-logo" src="${asset("don-logo.jpg")}" alt="The Don Jewelers and Jewelry logo">
      <p class="eyebrow">${eyebrow}</p>
      <h1>${heading}</h1>
      ${body ? `<p class="product-description">${body}</p>` : ""}
      ${action}
    </section>
  `;
}

function setSeo(title, description) {
  document.title = title;
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "description";
    document.head.appendChild(meta);
  }
  meta.content = description;
}

function policyLinksHtml() {
  return `
    <div class="policy-link-grid">
      <a href="#/refund-return-policy">Refund & Return Policy</a>
      <a href="#/payment-policy">Payment Policy</a>
      <a href="#/shipping-policy">Shipping Policy</a>
      <a href="#/custom-order-policy">Custom Order Policy</a>
      <a href="#/warranty-policy">Warranty Policy</a>
      <a href="#/terms">Terms & Conditions</a>
      <a href="#/privacy-policy">Privacy Policy</a>
      <a href="#/financing-policy">Financing Policy</a>
    </div>
  `;
}

function aboutUs() {
  return `
    <section class="about-us">
      <p class="eyebrow">About Us</p>
      <h2>Made for a better jewelry search</h2>
      <p>
        At The Don Jewelers & Jewelry, we are striving to give every client the best experience possible
        while searching for a piece that feels personal, memorable, and true to them. We work hard to make
        sure you feel supported from first look to final selection, whether your new jewelry marks a special
        moment, completes a style, or becomes part of your identity.
      </p>
    </section>
  `;
}

function customOrderBand() {
  return `
    <section class="custom-order-band">
      <div>
        <p class="eyebrow">Custom Orders</p>
        <h2>Looking for something 1-of-1?</h2>
        <p>Message us for custom designs, custom stone sizes, custom shapes, and full custom jewelry projects. For quotes or additional questions, call or text ${phoneDisplay} or email ${contactEmail}.</p>
      </div>
      <div class="custom-order-actions">
        <a class="button button-gold" href="#/custom-orders">Start Custom Order</a>
        <a class="button button-light" href="#/custom-orders">Message Us for Custom Design</a>
        <a class="button button-dark" href="#/request/contact">General Contact</a>
      </div>
    </section>
  `;
}

function home() {
  const heroProductIds = [
    "silver-cross-chain",
    "build-your-own-diamond-tennis-chain",
    "rose-two-tone-flower-diamond-pendants",
    "ruby-accent-crucifix-cross-pendant",
    "saint-michael-diamond-angel-pendant",
    "yellow-gold-diamond-ankh-pendant",
    "large-round-diamond-cross-pendant",
    "celeste-bezel-diamond-station-bracelet",
    "lumiere-pearl-paperclip-bracelet",
    "fleur-diamond-cluster-station-bracelet",
    "celeste-bezel-diamond-station-anklet",
    "lumiere-pearl-paperclip-anklet",
    "queen-aurelia-oval-marquise-ring",
    "marquise-crown-diamond-engagement-ring",
    "rose-three-stone-diamond-engagement-ring",
    "classic-marquise-engagement-ring",
  ];
  const heroProducts = heroProductIds.map((id) => allProducts().find((product) => product.id === id)).filter(Boolean);
  shell(`
    <main>
      <section class="hero">
        <div class="hero-rotator" aria-label="Featured jewelry pieces">
          ${heroProducts.map((product, index) => `
            <a class="hero-slide" href="#/product/${product.id}" style="animation-delay: ${index * 3}s">
              <img ${index === 0 ? `src="${productImageSrc(product)}" loading="eager" fetchpriority="high"` : `data-deferred-src="${productImageSrc(product)}" loading="lazy" fetchpriority="low"`} decoding="async" alt="${product.alt || productName(product)}" onerror="this.onerror=null;this.src='${asset(fallbackImage)}';">
              <span>${productName(product)}</span>
            </a>
          `).join("")}
        </div>
        <div class="hero-content">
          <p class="eyebrow">Custom fine jewelry</p>
          <h1>The Don Jewelers & Jewelry</h1>
          <p>Engagement rings, pendants, chains, bracelets, anklets, and custom pieces.</p>
          <div class="hero-actions">
            <a class="button button-gold" href="#/products">Shop Jewelry</a>
            <a class="button button-ghost" href="#/custom-orders">Custom Design</a>
          </div>
        </div>
      </section>
      <section class="section engagement-feature">
        <div>
          <p class="eyebrow">Engagement Rings</p>
          <h2>Start with the ring</h2>
          <p>Select diamond size, stone shape, color, clarity, metal, and exact ring size. Built for serious buyers who want a clear luxury quote before moving forward.</p>
          <div class="hero-actions">
            <a class="button button-gold" href="#/build-engagement-ring">Build Your Engagement Ring</a>
            <a class="button button-light" href="#/category/engagement-rings">View Engagement Rings</a>
          </div>
        </div>
        <div class="ring-showcase" aria-label="Featured engagement rings">
          ${["queen-aurelia-oval-marquise-ring", "pink-oval-engagement-ring", "yellow-oval-diamond-ring", "gold-halo-engagement-ring"].map((id) => productCard(allProducts().find((product) => product.id === id))).join("")}
        </div>
      </section>
      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">Luxury Categories</p>
          <h2>Browse by jewelry type</h2>
        </div>
        <div class="collection-grid">
          ${categories.map(([slug, name, image]) => `
            <a class="collection-tile" href="#/${["custom-orders", "select-diamond"].includes(slug) ? slug : `category/${slug}`}">
              <img src="${asset(image)}" alt="${name}" ${imageSafety}>
              <span>${name}</span>
            </a>
          `).join("")}
        </div>
      </section>
      ${customOrderBand()}
      <section class="trust-band" aria-label="Trust badges">
        <div><strong>Secure browsing</strong><span>Checkout handoff ready</span></div>
        <div><strong>Curated luxury pieces</strong><span>Custom options on every item</span></div>
        <div><strong>Custom sizing</strong><span>Sizes tailored by item type</span></div>
      </section>
      ${aboutUs()}
    </main>
  `);
}

function productGrid(list, title, body = "", action = "", afterGrid = "", gridId = "") {
  shell(`
    <main>
      ${pageHero("Jewelry Marketplace", title, body, action)}
      <section class="product-grid" ${gridId ? `id="${gridId}"` : ""}>${list.map(productCard).join("")}</section>
      ${afterGrid}
      ${aboutUs()}
    </main>
  `);
}

function productMatchesCategory(product, label) {
  return product.category === label || (product.secondaryCategories || []).includes(label);
}

const braceletFeaturedIds = [
  "ever-band",
  "lgd-jewelry-TJ6417TBC",
  "lgd-jewelry-LGD3645BFC",
  "lgd-jewelry-LGD3624BFC",
  "lgd-jewelry-LGD3602BFC",
];

function savedProductCard(product) {
  const price = Number(product.price ?? (product.priceCents ? product.priceCents / 100 : 0));
  const href = product.source === "manual" ? `#/product/${product.id}` : `#/catalog-jewelry/${product.id}`;
  return `
    <article class="product-card">
      <a href="${href}" class="product-image-link" aria-label="View ${htmlSafe(product.name)}">
        ${product.imageUrl ? `<img src="${htmlSafe(product.imageUrl)}" alt="${htmlSafe(product.name)}" ${imageSafety}>` : `<div class="product-image-placeholder">Diamond Jewelry</div>`}
      </a>
      <div class="product-card-body">
        <p class="eyebrow">${htmlSafe(product.category)}</p>
        <h3>${htmlSafe(product.name)}</h3>
        <p class="muted">${price ? `Starting at ${money.format(price)}` : "Request Pricing"}</p>
        <div class="card-actions">
          <a class="button button-dark" href="${href}">View Details</a>
          ${price && product.available !== false ? productCheckoutButton(product, price, "Buy Now") : `<span class="quote-note">Contact us for current pricing.</span>`}
        </div>
      </div>
    </article>
  `;
}

function databaseCategoryPage(slug, label) {
  const categoryName = slug === "cvd-lab-grown-diamond-jewelry" ? "" : label;
  shell(`
    <main>
      ${pageHero("Jewelry Marketplace", `Shop ${htmlSafe(label || "Jewelry")} with The Don`)}
      <section class="catalog-toolbar">
        <label>Sort products
          <select id="category-sort">
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </label>
      </section>
      <section class="product-grid" id="database-product-grid">
        ${Array.from({ length: 8 }, () => `<div class="product-card product-skeleton" aria-hidden="true"></div>`).join("")}
      </section>
      <div class="inventory-pagination" id="database-product-pagination"></div>
      ${aboutUs()}
    </main>
  `);
  wireDatabaseCategory({
    category: categoryName,
    source: slug === "cvd-lab-grown-diamond-jewelry" ? "lgd-jewelry" : "",
    featured: slug === "bracelets" ? braceletFeaturedIds : [],
  });
}

function wireDatabaseCategory({ category, source, featured }) {
  const grid = document.getElementById("database-product-grid");
  const pagination = document.getElementById("database-product-pagination");
  const sort = document.getElementById("category-sort");
  let page = 1;
  const load = async () => {
    try {
      const params = new URLSearchParams({ page: String(page), limit: "24", sort: sort.value });
      if (category) params.set("category", category);
      if (source) params.set("source", source);
      const response = await fetchWithTimeout(`/api/products?${params}`);
      const payload = await response.json();
      if (!payload.ok) throw new Error(payload.message);
      let items = payload.items || [];
      if (featured.length && page === 1) {
        const rank = new Map(featured.map((id, index) => [id, index]));
        items = [...items].sort((a, b) => {
          const aRank = rank.has(a.id) ? rank.get(a.id) : 999;
          const bRank = rank.has(b.id) ? rank.get(b.id) : 999;
          return aRank - bRank;
        });
      }
      grid.innerHTML = items.length ? items.map(savedProductCard).join("") : `<div class="empty-state">No available products were found in this category.</div>`;
      pagination.innerHTML = `
        <button class="button button-light" type="button" data-db-page="${Math.max(1, payload.page - 1)}" ${payload.page <= 1 ? "disabled" : ""}>Previous</button>
        <span>Page ${payload.page} of ${payload.totalPages}</span>
        <button class="button button-light" type="button" data-db-page="${Math.min(payload.totalPages, payload.page + 1)}" ${payload.page >= payload.totalPages ? "disabled" : ""}>Next</button>
      `;
    } catch {
      grid.innerHTML = `<div class="empty-state">Products are temporarily unavailable. Please refresh or contact us for assistance.</div>`;
      pagination.innerHTML = "";
    }
  };
  sort.addEventListener("change", () => { page = 1; load(); });
  pagination.addEventListener("click", (event) => {
    const button = event.target.closest("[data-db-page]");
    if (!button || button.disabled) return;
    page = Number(button.dataset.dbPage) || 1;
    load();
    grid.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  load();
}

function category(slug) {
  if (slug === "select-diamond") return diamondInventoryPage();
  const categoryLabels = {
    "tennis-bracelets": "Tennis Bracelets",
    "mens-rings": "Men's Rings",
    "womens-rings": "Women's Rings",
    "mens-earrings": "Men's Earrings",
    "womens-earrings": "Women's Earrings",
    anklets: "Anklets",
    pendants: "Pendants / Charms",
    grillz: "Grillz",
    watches: "Watches",
    "custom-jewelry": "Custom Jewelry",
    "gold-buying-services": "Gold Buying / Services",
    "cvd-lab-grown-diamond-jewelry": "CVD Lab-Grown Diamond Jewelry",
  };
  const engagementOrder = {
    "queen-aurelia-oval-marquise-ring": 1,
    "pink-oval-engagement-ring": 2,
    "yellow-oval-diamond-ring": 3,
  };
  const engagementFirst = (list) => [...list].sort((a, b) => {
    if (a.category === "Engagement Rings" && b.category !== "Engagement Rings") return -1;
    if (a.category !== "Engagement Rings" && b.category === "Engagement Rings") return 1;
    if (a.category === "Engagement Rings" && b.category === "Engagement Rings") {
      const aOrder = engagementOrder[a.id] || 100;
      const bOrder = engagementOrder[b.id] || 100;
      if (aOrder !== bOrder) return aOrder - bOrder;
    }
    return 0;
  });
  const names = {
    "engagement-rings": "Build your engagement ring with The Don",
    "select-diamond": "Live Diamond Selection",
    "wedding-bands": "Shop Wedding Bands with The Don",
    "mens-rings": "Shop Men's Rings with The Don",
    "womens-rings": "Shop Women's Rings with The Don",
    "mens-earrings": "Shop Men's Earrings with The Don",
    "womens-earrings": "Shop Women's Earrings with The Don",
    necklaces: "Shop Necklaces with The Don",
    chains: "Shop Chains with The Don",
    bracelets: "Shop Bracelets with The Don",
    anklets: "Shop Anklets with The Don",
    "pendants-charms": "Shop Pendants / Charms with The Don",
  };
  const label = categories.find(([id]) => id === slug)?.[1] || categoryLabels[slug];
  if (slug !== "engagement-rings") return databaseCategoryPage(slug, label);
  const list = slug === "pendants-charms"
    ? allProducts().filter((p) => ["Pendants / Charms", "Pendants"].includes(p.category) || ["silver-cross-chain", "marquise-arc"].includes(p.id))
    : slug === "bracelets"
      ? allProducts().filter((p) => ["Bracelets", "Tennis Bracelets"].includes(p.category))
      : allProducts().filter((p) => productMatchesCategory(p, label));
  const action = slug === "engagement-rings"
    ? `<a class="button button-gold" href="#/build-engagement-ring">Build Your Engagement Ring</a>`
    : slug === "chains"
      ? `<a class="button button-gold" href="#/product/build-your-own-diamond-tennis-chain">Build Your Tennis Chain</a>`
      : "";
  const body = slug === "engagement-rings" ? "All engagement rings include IGI or GIA certified diamond paperwork and an appraisal for the ring itself." : "";
  const liveCategory = {
    "wedding-bands": "Wedding Bands",
    "mens-rings": "Men's Rings",
    "womens-rings": "Women's Rings",
    "mens-earrings": "Men's Earrings",
    "womens-earrings": "Women's Earrings",
    necklaces: "Necklaces",
    chains: "Chains",
    bracelets: "Bracelets",
    anklets: "Anklets",
    "pendants-charms": "Pendants / Charms",
  }[slug];
  const catalogControls = liveCategory ? `
    <div class="catalog-feed-controls">
      <div class="diamond-api-note" id="catalog-feed-note" hidden></div>
      <div class="inventory-pagination" id="catalog-feed-pagination"></div>
    </div>
  ` : "";
  productGrid(
    slug === "engagement-rings" ? engagementFirst(list) : list,
    names[slug] || `Shop ${label || "All Luxury Jewelry"} with The Don`,
    body,
    action,
    catalogControls,
    liveCategory ? "category-product-grid" : "",
  );
  if (liveCategory) wireCatalogFeed(liveCategory);
}

function catalogFeedProductCard(product) {
  const imageUrl = safeExternalUrl(product.imageUrl);
  const price = Number(product.price);
  return `
    <article class="product-card" data-catalog-feed-product>
      <a href="#/catalog-jewelry/${encodeURIComponent(product.stockNumber)}" class="product-image-link" aria-label="View ${htmlSafe(product.name)}">
        ${imageUrl ? `<img src="${htmlSafe(imageUrl)}" alt="${htmlSafe(product.name)}" loading="lazy">` : `<div class="product-image-placeholder">Diamond Jewelry</div>`}
      </a>
      <div class="product-card-body">
        <p class="eyebrow">${htmlSafe(product.category)}</p>
        <h3>${htmlSafe(product.name)}</h3>
        <p class="muted">${htmlSafe(product.metal || "")}${product.diamondWeight ? ` · ${htmlSafe(product.diamondWeight)} ct total diamond weight` : ""}</p>
        <p class="muted">${price > 0 ? money.format(price) : "Request Pricing"}</p>
        <div class="card-actions">
          <a class="button button-dark" href="#/catalog-jewelry/${encodeURIComponent(product.stockNumber)}">View Details</a>
          <a class="button button-gold" href="#/request/product?product=${encodeURIComponent(product.name)}&category=${encodeURIComponent(product.category)}&intent=product-inquiry">Request Purchase</a>
        </div>
      </div>
    </article>
  `;
}

async function loadCatalogFeed(categoryName, page = 1) {
  const grid = document.getElementById("category-product-grid");
  const note = document.getElementById("catalog-feed-note");
  const pagination = document.getElementById("catalog-feed-pagination");
  if (!grid || !note || !pagination) return;
  note.hidden = true;
  note.textContent = "";
  try {
    const params = new URLSearchParams({ category: categoryName, page: String(page), limit: "24" });
    const response = await fetchWithTimeout(`/api/jewelry?${params}`);
    const payload = await response.json();
    if (!payload.ok || !Array.isArray(payload.items)) throw new Error(payload.message || "Live jewelry unavailable.");
    liveJewelryInventory = payload.items;
    grid.querySelectorAll("[data-catalog-feed-product]").forEach((card) => card.remove());
    if (payload.items.length) {
      grid.insertAdjacentHTML("beforeend", payload.items.map(catalogFeedProductCard).join(""));
    }
    note.hidden = true;
    pagination.innerHTML = `
      <button class="button button-light" type="button" data-catalog-page="${Math.max(1, payload.page - 1)}" ${payload.page <= 1 ? "disabled" : ""}>Previous</button>
      <span>Page ${payload.page} of ${payload.totalPages}</span>
      <button class="button button-light" type="button" data-catalog-page="${Math.min(payload.totalPages, payload.page + 1)}" ${payload.page >= payload.totalPages ? "disabled" : ""}>Next</button>
    `;
  } catch {
    note.hidden = true;
    pagination.innerHTML = "";
  }
}

function wireCatalogFeed(categoryName) {
  document.getElementById("catalog-feed-pagination")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-catalog-page]");
    if (!button || button.disabled) return;
    loadCatalogFeed(categoryName, Number(button.dataset.catalogPage) || 1);
    document.getElementById("category-product-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  loadCatalogFeed(categoryName);
}

function productSpecRows(product) {
  const specs = product.specs || {};
  const rows = [
    ["Metal", specs.metal],
    ["Diamond Type", specs.diamondType || "CVD Lab-Grown Diamond"],
    ["Carat Weight", specs.caratWeight ? `${specs.caratWeight} CTW` : ""],
    ["Color", specs.color],
    ["Clarity", specs.clarity],
    ["Size / Length", specs.size],
    ["Diamond Shape", specs.shape],
    ["Availability", product.availability || specs.availability],
  ].filter(([, value]) => value !== undefined && value !== null && String(value).trim() !== "");
  return rows.map(([label, value]) => `<div><dt>${htmlSafe(label)}</dt><dd>${htmlSafe(value)}</dd></div>`).join("");
}

async function catalogJewelryDetail(productId) {
  shell(`
    <main>
      ${pageHero("Diamond Jewelry", "Loading product details")}
      <section class="catalog-detail-shell" id="catalog-jewelry-detail"><div class="diamond-api-note">Loading product...</div></section>
      ${aboutUs()}
    </main>
  `);
  const container = document.getElementById("catalog-jewelry-detail");
  try {
    const response = await fetchWithTimeout(`/api/products?id=${encodeURIComponent(productId)}`);
    const payload = await response.json();
    const product = payload.product;
    if (!payload.ok || !product) throw new Error("Piece unavailable.");
    const imageUrl = safeExternalUrl(product.imageUrl);
    const videoUrl = safeExternalUrl(product.metadata?.videoUrl || product.videoUrl);
    const gallery = (product.gallery || []).map(safeExternalUrl).filter(Boolean);
    const price = Number(product.price ?? (product.priceCents ? product.priceCents / 100 : 0));
    container.innerHTML = `
      <section class="product-detail-hero catalog-jewelry-detail product-detail-expanded">
        <div class="product-media-stack">
          ${imageUrl ? `<img src="${htmlSafe(imageUrl)}" alt="${htmlSafe(product.name)}">` : `<div class="product-image-placeholder">Diamond Jewelry</div>`}
          ${gallery.map((url) => `<img src="${htmlSafe(url)}" alt="${htmlSafe(product.name)} alternate view" loading="lazy">`).join("")}
        </div>
        <div>
          <p class="eyebrow">${htmlSafe(product.category)}</p>
          <h1>${htmlSafe(product.name)}</h1>
          <p class="product-detail-price">${price ? money.format(price) : "Request Pricing"}</p>
          <div class="product-detail-copy">
            <h2>Description</h2>
            <p>${htmlSafe(product.description || "CVD lab-grown diamond jewelry selected for The Don Jewelers & Jewelry catalog.")}</p>
          </div>
          <div class="product-specification-block">
            <h2>Product Specifications</h2>
            <dl class="summary-list product-spec-list">${productSpecRows(product)}</dl>
          </div>
          <p class="shipping-note">${product.madeToOrder ? "Made to order. Production and insured shipping timing are confirmed after purchase." : "Availability and insured shipping timing are confirmed before fulfillment."}</p>
          <div class="builder-actions">
            ${price && product.available !== false ? productCheckoutButton(product, price) : `<button class="button button-light" type="button" disabled>Unavailable or pricing required</button>`}
            <a class="button button-dark" href="#/request/product?product=${encodeURIComponent(product.name)}&category=${encodeURIComponent(product.category)}&intent=product-${encodeURIComponent(product.id)}">Ask a Question</a>
            ${videoUrl ? `<a class="button button-light" href="${htmlSafe(videoUrl)}" target="_blank" rel="noopener noreferrer">View Product Video</a>` : ""}
          </div>
        </div>
      </section>
    `;
  } catch {
    container.innerHTML = `<div class="empty-state">This product is temporarily unavailable. Contact us with product ID ${htmlSafe(productId)} and we will help you.</div>`;
  }
}

function diamondSpecs(diamond) {
  return [
    diamond.stockNumber ? `Stock ${diamond.stockNumber}` : "",
    diamond.shape,
    diamond.carat ? `${diamond.carat} ct` : "",
    diamond.color ? `${diamond.color} color` : "",
    diamond.clarity,
    diamond.cut,
    diamond.polish ? `Polish ${diamond.polish}` : "",
    diamond.symmetry ? `Symmetry ${diamond.symmetry}` : "",
    diamond.certificate ? `${diamond.certificate} certified` : "",
    diamond.reportNumber ? `Report ${diamond.reportNumber}` : "",
    diamond.growthMethod || "CVD",
    diamond.price ? `Price ${diamond.price}` : "",
    diamond.diamondType,
  ].filter(Boolean).join(" | ");
}

function diamondMediaLinks(diamond) {
  const vendorLinks = Array.isArray(diamond.mediaLinks) ? diamond.mediaLinks.map((link) => [link.label || "View Vendor Link", link.url, link.type || "media"]) : [];
  const directLinks = [
    ["View Diamond Photo", diamond.imageUrl || diamond.mediaUrl, "image"],
    ["View IGI Report", diamond.reportUrl, "report"],
  ];
  const seen = new Set();
  const links = [...directLinks, ...vendorLinks].filter(([, url]) => {
    const safeUrl = safeExternalUrl(url);
    if (!safeUrl || seen.has(safeUrl)) return false;
    seen.add(safeUrl);
    return true;
  });
  return links.length
    ? `<div class="diamond-media-links">${links.map(([label, url, type]) => `<a class="button button-light" href="${htmlSafe(url)}" target="_blank" rel="noopener noreferrer" data-diamond-media-link="${htmlSafe(url)}" data-media-type="${htmlSafe(type || "media")}">${htmlSafe(label)}</a>`).join("")}</div>`
    : `<p class="quote-note">Vendor image and grading report links will show here when provided by the live API feed.</p>`;
}

function showDiamondMediaModal({ url, type = "media", label = "Diamond media" }) {
  const safeUrl = safeExternalUrl(url);
  if (!safeUrl) return;
  document.querySelector(".diamond-media-modal")?.remove();
  const modal = document.createElement("div");
  modal.className = "diamond-media-modal";
  const isImage = type === "image" || /\.(jpe?g|png|webp|gif)(\?|$)/i.test(safeUrl);
  const reportMatch = safeUrl.match(/([A-Z]{1,4}\d{5,})/i);
  const reportNumber = reportMatch ? reportMatch[1].toUpperCase() : "";
  const media = isImage
    ? `<img class="diamond-media-preview-image" src="${htmlSafe(safeUrl)}" alt="${htmlSafe(label)}">`
    : `<iframe class="diamond-media-preview-frame" src="${htmlSafe(safeUrl)}" title="${htmlSafe(label)}"></iframe>`;
  modal.innerHTML = `
    <div class="diamond-media-dialog" role="dialog" aria-modal="true" aria-label="${htmlSafe(label)}">
      <button class="natural-diamond-close" type="button" aria-label="Close media preview">Close</button>
      <p class="eyebrow">Live Diamond Media</p>
      <h2>${htmlSafe(label)}</h2>
      ${type === "report" && reportNumber ? `<p class="diamond-report-number">IGI Report Number: <strong>${htmlSafe(reportNumber)}</strong></p>` : ""}
      <div class="diamond-media-preview">${media}</div>
      <p class="quote-note">If the vendor blocks the preview, open the original vendor link below.</p>
      <div class="builder-actions">
        <a class="button button-gold" href="${htmlSafe(safeUrl)}" target="_blank" rel="noopener">Open Original Link</a>
        <a class="button button-light" href="${htmlSafe(safeUrl)}" target="_blank" rel="noopener noreferrer">Open in New Tab</a>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  const close = () => modal.remove();
  modal.addEventListener("click", (event) => {
    if (event.target === modal) close();
  });
  modal.querySelector(".natural-diamond-close")?.addEventListener("click", close);
}

function diamondInventoryCard(diamond) {
  const imageUrl = safeExternalUrl(diamond.imageUrl || diamond.mediaUrl);
  return `
    <article class="diamond-inventory-card" data-diamond-id="${htmlSafe(diamond.id)}" data-stock-number="${htmlSafe(diamond.stockNumber || diamond.id || "")}" data-shape="${htmlSafe(diamond.shape)}" data-carat="${htmlSafe(diamond.carat || "")}" data-color="${htmlSafe(diamond.color)}" data-clarity="${htmlSafe(diamond.clarity)}" data-certificate="${htmlSafe(diamond.certificate)}" data-report-number="${htmlSafe(diamond.reportNumber || "")}" data-price="${htmlSafe(diamond.price || "")}" data-diamond-type="${htmlSafe(diamond.diamondType || "")}" data-growth-method="${htmlSafe(diamond.growthMethod || "CVD")}">
      ${imageUrl ? `<img class="diamond-inventory-image" src="${htmlSafe(imageUrl)}" alt="${htmlSafe(`${diamond.shape || "Lab-grown"} diamond`)}">` : ""}
      <div>
        <p class="eyebrow">${htmlSafe(diamond.diamondType || "Lab-Grown Diamond")}</p>
        <h3>${htmlSafe(diamond.shape)} ${diamond.carat ? `${diamond.carat}ct` : ""} Diamond</h3>
        <p class="muted">${htmlSafe(diamondSpecs(diamond))}</p>
        ${diamond.stockNumber ? `<p class="diamond-report-pill">Stock # ${htmlSafe(diamond.stockNumber)}</p>` : ""}
        ${diamond.reportNumber ? `<p class="diamond-report-pill">IGI Report # ${htmlSafe(diamond.reportNumber)}</p>` : ""}
      </div>
      ${diamondMediaLinks(diamond)}
      <div class="builder-actions">
        <button class="button button-gold" type="button" data-select-diamond="${diamond.id}">Select Diamond</button>
        ${numericPrice(String(diamond.price || "").replace(/[^0-9.]/g, "")) > 0
          ? `<button class="button button-dark" type="button" data-buy-live-diamond="${htmlSafe(diamond.id)}" data-stock-number="${htmlSafe(diamond.stockNumber)}" data-diamond-type="${htmlSafe(diamond.diamondType)}" data-live-page="${htmlSafe(diamond._page || 1)}">Buy Now / Stripe Checkout</button>`
          : `<a class="button button-light" href="#/request/product?product=${encodeURIComponent(`${diamond.shape || "CVD"} diamond ${diamond.stockNumber || ""}`)}&category=Live%20Diamond%20Selection&intent=current-price">Request Current Price</a>`}
      </div>
    </article>
  `;
}

function matchingPairCard(pair) {
  const imageUrl = safeExternalUrl(pair.imageUrl);
  return `
    <article class="diamond-inventory-card matching-pair-card" data-pair-id="${htmlSafe(pair.id)}" data-stock-number="${htmlSafe(pair.stockNumber)}" data-shape="${htmlSafe(pair.shape)}" data-carat="${htmlSafe(pair.carat || "")}" data-color="${htmlSafe(pair.color)}" data-clarity="${htmlSafe(pair.clarity)}" data-certificate="${htmlSafe(pair.certificate)}" data-pair-type="${htmlSafe(pair.pairType)}">
      ${imageUrl ? `<img class="diamond-inventory-image" src="${htmlSafe(imageUrl)}" alt="${htmlSafe(`${pair.shape || "CVD"} matching diamond pair`)}" loading="lazy">` : ""}
      <div>
        <p class="eyebrow">${pair.pairType === "color" ? "Colored CVD Pair" : "White CVD Pair"}</p>
        <h3>${htmlSafe(pair.shape || "Matched")} Diamond Pair ${pair.carat ? `· ${htmlSafe(pair.carat)} ct` : ""}</h3>
        <p class="muted">${htmlSafe([pair.color && `${pair.color} color`, pair.clarity, pair.measurements, pair.lab, pair.certificate && `Certificate ${pair.certificate}`, "CVD only"].filter(Boolean).join(" | "))}</p>
        <p class="diamond-report-pill">${htmlSafe(pair.availability || "Check availability")} · Stock # ${htmlSafe(pair.stockNumber)}</p>
      </div>
      ${diamondMediaLinks(pair)}
      <div class="builder-actions">
        <button class="button button-gold" type="button" data-select-pair="${htmlSafe(pair.id)}">Request This Pair</button>
      </div>
    </article>
  `;
}

function matchingPairsPage(initialParams = new URLSearchParams()) {
  const selectedPairType = initialParams.get("pairType") || "white";
  shell(`
    <main>
      ${pageHero("Custom Earrings & Studs", "Source a professionally matched CVD diamond pair", "Browse white or colored CVD matching pairs for custom studs and earrings. Every HPHT record is excluded from this experience.", `<a class="button button-light" href="#/select-diamond">Browse Single Certified Diamonds</a>`)}
      <section class="diamond-inventory-section">
        <div class="sourcing-choice-grid">
          <button class="sourcing-choice ${selectedPairType === "white" ? "is-active" : ""}" type="button" data-pair-type-choice="white">
            <span class="eyebrow">Classic Studs</span>
            <strong>White Diamond Pairs</strong>
            <span>Matched CVD stones for timeless earrings.</span>
          </button>
          <button class="sourcing-choice ${selectedPairType === "color" ? "is-active" : ""}" type="button" data-pair-type-choice="color">
            <span class="eyebrow">Statement Earrings</span>
            <strong>Colored Diamond Pairs</strong>
            <span>Matched fancy-color CVD stones for custom designs.</span>
          </button>
        </div>
        <form class="diamond-filter-bar matching-pair-filter" id="matching-pair-filter-form">
          <input type="hidden" name="pairType" value="${htmlSafe(selectedPairType)}">
          <label>Shape
            <select name="shape">
              <option value="">All shapes</option>
              ${["Round", "Oval", "Marquise", "Radiant", "Emerald", "Pear", "Cushion", "Princess", "Asscher"].map((shape) => `<option value="${shape}">${shape}</option>`).join("")}
            </select>
          </label>
          <label>Minimum pair weight<input name="minCarat" type="number" min="0" step="0.1" placeholder="Any"></label>
          <label>Maximum pair weight<input name="maxCarat" type="number" min="0" step="0.1" placeholder="Any"></label>
          <label>Search color, clarity, stock #<input name="search" placeholder="Example: D VVS or stock number"></label>
          <button class="button button-dark" type="submit">Search Matching Pairs</button>
        </form>
        <div class="diamond-api-note" id="matching-pair-note">Loading matching pairs...</div>
        <div class="diamond-inventory-grid" id="matching-pair-grid"></div>
        <div class="inventory-pagination" id="matching-pair-pagination"></div>
      </section>
      <section class="custom-form-section">
        <div class="section-heading">
          <p class="eyebrow">Custom Earring Request</p>
          <h2>Build your earrings around the selected pair</h2>
        </div>
        ${customRequestForm({ formId: "matching-pair-request-form", requestType: "Product Inquiry Form", productCategory: "CVD Matching Diamond Pairs", productName: "Selected matching diamond pair" })}
      </section>
      ${aboutUs()}
    </main>
  `);
  wireMatchingPairs(initialParams);
  wireRequestForm("matching-pair-request-form", "Thank you. Your matching-pair request has been received, and we will contact you about availability, setting choices, and pricing.");
}

async function loadMatchingPairs(params = new URLSearchParams()) {
  const grid = document.getElementById("matching-pair-grid");
  const note = document.getElementById("matching-pair-note");
  const pagination = document.getElementById("matching-pair-pagination");
  if (!grid || !note || !pagination) return;
  note.textContent = "Loading CVD matching pairs...";
  const pairType = params.get("pairType") === "color" ? "color" : "white";
  const endpoint = pairType === "color" ? "/api/diamonds/matching-pair-color" : "/api/diamonds/matching-pair";
  const apiParams = new URLSearchParams({ page: params.get("page") || "1", limit: "24" });
  ["shape", "minCarat", "maxCarat", "search"].forEach((name) => {
    const value = params.get(name);
    if (value) apiParams.set(name, value);
  });
  try {
    const response = await fetch(`${endpoint}?${apiParams}`, { headers: { Accept: "application/json" } });
    const payload = await response.json();
    if (!payload.ok || !Array.isArray(payload.items)) throw new Error(payload.message || "Matching pairs unavailable.");
    liveMatchingPairInventory = payload.items;
    grid.innerHTML = payload.items.length
      ? payload.items.map(matchingPairCard).join("")
      : `<div class="empty-state">No matching pairs fit that search. Submit the request below and we will source one.</div>`;
    note.textContent = `Showing ${payload.items.length} of ${payload.total} ${pairType === "color" ? "colored" : "white"} CVD matching pairs. HPHT inventory is excluded.`;
    pagination.innerHTML = `
      <button class="button button-light" type="button" data-pair-page="${Math.max(1, payload.page - 1)}" ${payload.page <= 1 ? "disabled" : ""}>Previous</button>
      <span>Page ${payload.page} of ${payload.totalPages}</span>
      <button class="button button-light" type="button" data-pair-page="${Math.min(payload.totalPages, payload.page + 1)}" ${payload.page >= payload.totalPages ? "disabled" : ""}>Next</button>
    `;
  } catch {
    grid.innerHTML = `<div class="empty-state">Matching-pair inventory is refreshing. Submit a request and we will source a CVD pair for you.</div>`;
    note.textContent = "Live matching-pair inventory is being updated.";
    pagination.innerHTML = "";
  }
}

function wireMatchingPairs(initialParams = new URLSearchParams()) {
  const form = document.getElementById("matching-pair-filter-form");
  const requestForm = document.getElementById("matching-pair-request-form");
  const currentParams = () => {
    const params = new URLSearchParams();
    ["pairType", "shape", "minCarat", "maxCarat", "search"].forEach((name) => {
      const value = form?.elements[name]?.value || "";
      if (value) params.set(name, value);
    });
    return params;
  };
  document.querySelectorAll("[data-pair-type-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      form.elements.pairType.value = button.dataset.pairTypeChoice;
      document.querySelectorAll("[data-pair-type-choice]").forEach((choice) => choice.classList.toggle("is-active", choice === button));
      loadMatchingPairs(currentParams());
    });
  });
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    loadMatchingPairs(currentParams());
  });
  document.getElementById("matching-pair-pagination")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-pair-page]");
    if (!button || button.disabled) return;
    const params = currentParams();
    params.set("page", button.dataset.pairPage);
    loadMatchingPairs(params);
  });
  document.getElementById("matching-pair-grid")?.addEventListener("click", (event) => {
    const mediaLink = event.target.closest("[data-diamond-media-link]");
    if (mediaLink) {
      event.preventDefault();
      showDiamondMediaModal({ url: mediaLink.dataset.diamondMediaLink || mediaLink.href, type: mediaLink.dataset.mediaType, label: mediaLink.textContent.trim() });
      return;
    }
    const button = event.target.closest("[data-select-pair]");
    if (!button || !requestForm) return;
    const card = button.closest(".matching-pair-card");
    const details = card?.innerText?.replace(/\n+/g, " | ") || button.dataset.selectPair;
    requestForm.elements.stoneType.value = "Lab-Grown Diamond";
    requestForm.elements.diamondShape.value = card?.dataset.shape || "";
    requestForm.elements.caratWeight.value = card?.dataset.carat || "";
    requestForm.elements.notes.value = `Selected CVD matching pair: ${details}`;
    requestForm.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  loadMatchingPairs(new URLSearchParams({
    pairType: initialParams.get("pairType") || "white",
    page: initialParams.get("page") || "1",
  }));
}

function diamondInventoryPage(initialParams = new URLSearchParams()) {
  const selectedShape = initialParams.get("shape") || "all";
  const selectedColor = initialParams.get("color") || "all";
  const selectedClarity = initialParams.get("clarity") || "all";
  const selectedTypeParam = initialParams.get("type") || "";
  const selectedDiamondType = initialParams.get("diamondType")
    || (selectedTypeParam === "certified_color" || selectedTypeParam === "certified-color"
      ? "Certified Color Diamond"
      : selectedTypeParam === "matching_pair" || selectedTypeParam === "matching-pair"
        ? "CVD White Matching Pair"
        : selectedTypeParam === "matching_pair_color" || selectedTypeParam === "matching-pair-color"
          ? "CVD Color Matching Pair"
          : selectedTypeParam === "certified"
            ? "Certified Diamond"
            : "all");
  const option = (value, selected) => `<option value="${htmlSafe(value)}" ${String(value).toLowerCase() === String(selected).toLowerCase() ? "selected" : ""}>${htmlSafe(value === "all" ? "All shapes" : value)}</option>`;
  shell(`
    <main>
      ${pageHero("Live Diamond Selection", "Choose your CVD lab-grown diamonds", "Shop certified white diamonds, certified colored diamonds, white matching pairs, and colored matching pairs for engagement rings, custom jewelry, studs, and earrings—all from one streamlined selection page.")}
      <section class="diamond-inventory-section">
        <form class="diamond-filter-bar" id="diamond-filter-form">
          <label>Diamond type
            <select name="diamondType">
              <option value="all" ${selectedDiamondType === "all" ? "selected" : ""}>All certified diamonds</option>
              <option value="Certified Diamond" ${selectedDiamondType === "Certified Diamond" ? "selected" : ""}>Certified White Diamonds</option>
              <option value="Certified Color Diamond" ${selectedDiamondType === "Certified Color Diamond" ? "selected" : ""}>Certified Colored Diamonds</option>
              <option value="CVD White Matching Pair" ${selectedDiamondType === "CVD White Matching Pair" ? "selected" : ""}>White Matching Pairs</option>
              <option value="CVD Color Matching Pair" ${selectedDiamondType === "CVD Color Matching Pair" ? "selected" : ""}>Colored Matching Pairs</option>
            </select>
          </label>
          <label>Shape
            <select name="shape">
              ${["all", "Round", "Oval", "Marquise", "Radiant", "Emerald", "Pear", "Cushion", "Princess", "Asscher"].map((shape) => option(shape, selectedShape)).join("")}
            </select>
          </label>
          <label>Minimum carat<input name="minCarat" type="number" min="0" step="0.1" placeholder="Any" value="${htmlSafe(initialParams.get("minCarat") || "")}"></label>
          <label>Maximum carat<input name="maxCarat" type="number" min="0" step="0.1" placeholder="Any" value="${htmlSafe(initialParams.get("maxCarat") || "")}"></label>
          <label>Color
            <select name="color">
              <option value="all" ${selectedColor === "all" ? "selected" : ""}>All colors</option>
              ${["D", "E", "F", "Light Yellow", "Fancy Yellow", "Pink", "Blue", "Green", "Champagne"].map((color) => option(color, selectedColor)).join("")}
            </select>
          </label>
          <label>Clarity
            <select name="clarity">
              <option value="all" ${selectedClarity === "all" ? "selected" : ""}>All VVS/VS</option>
              ${["VVS1", "VVS2", "VS1", "VS2"].map((clarity) => option(clarity, selectedClarity)).join("")}
            </select>
          </label>
          <label>Max price<input name="maxPrice" type="number" min="0" step="1" placeholder="Any" value="${htmlSafe(initialParams.get("maxPrice") || "")}"></label>
          <label>Certificate #<input name="certificateNumber" placeholder="IGI report #" value="${htmlSafe(initialParams.get("certificateNumber") || "")}"></label>
          <label>Page<input name="page" type="number" min="1" step="1" value="${htmlSafe(initialParams.get("page") || "1")}"></label>
          <button class="button button-dark" type="submit">Search Diamonds</button>
        </form>
        <div class="diamond-api-note" id="diamond-api-note">Loading diamond inventory...</div>
        <div class="diamond-inventory-grid" id="diamond-inventory-grid"></div>
      </section>
      <section class="custom-form-section">
        <div class="section-heading">
          <p class="eyebrow">Diamond Request</p>
          <h2>Request this diamond or a custom match</h2>
        </div>
        ${customRequestForm({ formId: "diamond-inventory-form", requestType: "Product Inquiry Form", productCategory: "Lab-Grown Diamond Inventory", productName: "Selected lab-grown diamond" })}
      </section>
      ${aboutUs()}
    </main>
  `);
  wireDiamondInventory(initialParams);
  wireRequestForm("diamond-inventory-form", "Thank you for your submission. Your diamond request has been received and is currently under review. We will contact you regarding pricing, design details, and next steps.");
}

async function loadDiamondInventory(params = new URLSearchParams()) {
  const note = document.getElementById("diamond-api-note");
  const grid = document.getElementById("diamond-inventory-grid");
  if (!grid || !note) return;
  note.textContent = "Loading live diamond inventory...";
  grid.innerHTML = "";
  const minCarat = Math.max(0, Number(params.get("minCarat") || 0) || 0);
  const maxCarat = Math.max(0, Number(params.get("maxCarat") || 99) || 99);
  const maxPrice = Number(params.get("maxPrice") || 0);
  const shape = params.get("shape") || "all";
  const color = params.get("color") || "all";
  const clarity = params.get("clarity") || "all";
  const diamondType = params.get("diamondType") || "all";
  const certificateNumber = String(params.get("certificateNumber") || "").trim().toUpperCase();
  const page = Math.max(1, Number(params.get("page") || 1) || 1);
  const matchingPairMode = diamondType === "CVD White Matching Pair" || diamondType === "CVD Color Matching Pair";
  let payload = {};
  try {
    const endpoints = diamondType === "Certified Diamond"
      ? ["/api/diamonds/certified"]
      : diamondType === "Certified Color Diamond"
        ? ["/api/diamonds/certified-color"]
        : diamondType === "CVD White Matching Pair"
          ? ["/api/diamonds/matching-pair"]
          : diamondType === "CVD Color Matching Pair"
            ? ["/api/diamonds/matching-pair-color"]
            : ["/api/diamonds/certified", "/api/diamonds/certified-color"];
    const results = await Promise.all(endpoints.map(async (endpoint) => {
      const apiParams = new URLSearchParams({ page: String(page) });
      if (matchingPairMode) {
        apiParams.set("limit", "48");
        if (shape !== "all") apiParams.set("shape", shape);
        if (color !== "all") apiParams.set("color", color);
        if (minCarat) apiParams.set("minCarat", String(minCarat));
        if (maxCarat < 99) apiParams.set("maxCarat", String(maxCarat));
        if (certificateNumber) apiParams.set("search", certificateNumber);
      }
      const response = await fetchWithTimeout(`${endpoint}?${apiParams}`);
      const text = await response.text();
      let routePayload;
      try {
        routePayload = JSON.parse(text);
      } catch {
        throw new Error("Diamond inventory route did not return JSON.");
      }
      const records = matchingPairMode ? routePayload.items : routePayload.diamonds;
      if (!response.ok || !Array.isArray(records)) throw new Error(routePayload.message || routePayload.error || "Diamond inventory unavailable.");
      return routePayload;
    }));
    liveDiamondInventory = results.flatMap((result) => matchingPairMode ? result.items || [] : result.diamonds || []);
    payload = {
      ok: liveDiamondInventory.length > 0,
      cached: results.some((result) => result.cached),
      message: results.find((result) => result.message)?.message || "",
      error: results.map((result) => result.error).filter(Boolean).join(" | "),
    };
  } catch (error) {
    note.textContent = "Live diamond inventory is being updated. Contact us for real-time diamond options.";
    grid.innerHTML = `<div class="empty-state">Live diamond inventory is being updated. Contact us for real-time diamond options.</div>`;
    return;
  }

  const diamonds = liveDiamondInventory.filter((diamond) => {
    const numericPrice = Number(String(diamond.price || "").replace(/[^0-9.]/g, ""));
    const shapeMatch = shape === "all" || String(diamond.shape || "").toUpperCase() === String(shape).toUpperCase();
    const colorMatch = color === "all" || String(diamond.color || "").toUpperCase() === String(color).toUpperCase();
    const clarityMatch = clarity === "all" || String(diamond.clarity || "").toUpperCase() === String(clarity).toUpperCase();
    const typeMatch = diamondType === "all" || String(diamond.diamondType || "") === diamondType;
    const priceMatch = !maxPrice || (numericPrice && numericPrice <= maxPrice);
    const certificateMatch = !certificateNumber || `${diamond.reportNumber || ""} ${diamond.certificate || ""} ${diamond.stockNumber || ""}`.toUpperCase().includes(certificateNumber);
    const cvdMatch = !/\bHPHT\b/i.test(`${diamond.growthMethod || ""} ${diamond.diamondType || ""}`) && /\bCVD\b/i.test(`${diamond.growthMethod || "CVD"} ${diamond.diamondType || ""}`);
    return shapeMatch && colorMatch && clarityMatch && typeMatch && priceMatch && certificateMatch && cvdMatch && Number(diamond.carat) >= minCarat && Number(diamond.carat) <= maxCarat;
  });
  const cacheText = payload.cached ? " Showing cached inventory while the live feed refreshes." : "";
  note.textContent = payload.message || `Live diamond inventory loaded. Page ${page}. Showing ${diamonds.length} of ${liveDiamondInventory.length} diamonds.${cacheText}`;
  grid.innerHTML = diamonds.length
    ? diamonds.map((diamond) => {
      diamond._page = page;
      return matchingPairMode ? matchingPairCard(diamond) : diamondInventoryCard(diamond);
    }).join("")
    : `<div class="empty-state">${payload.message || "No diamonds matched that search. Submit a request for a custom diamond match."}</div>`;
}

function wireDiamondInventory(initialParams = new URLSearchParams()) {
  const form = document.getElementById("diamond-filter-form");
  const requestForm = document.getElementById("diamond-inventory-form");
  const returnProduct = initialParams.get("returnProduct") || "";
  const filterParams = () => {
    const params = new URLSearchParams();
    ["diamondType", "shape", "minCarat", "maxCarat", "color", "clarity", "maxPrice", "certificateNumber", "page"].forEach((name) => {
      const value = form?.elements[name]?.value || "";
      if (value) params.set(name, value);
    });
    if (returnProduct) params.set("returnProduct", returnProduct);
    return params;
  };
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    loadDiamondInventory(filterParams());
  });
  form?.querySelectorAll("select").forEach((select) => {
    select.addEventListener("change", () => loadDiamondInventory(filterParams()));
  });
  document.getElementById("diamond-inventory-grid")?.addEventListener("click", (event) => {
    const checkoutButton = event.target.closest("[data-buy-live-diamond]");
    if (checkoutButton) {
      const original = checkoutButton.textContent;
      checkoutButton.disabled = true;
      checkoutButton.textContent = "Validating live inventory...";
      fetchWithTimeout("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "live-diamond",
          diamondId: checkoutButton.dataset.buyLiveDiamond,
          stockNumber: checkoutButton.dataset.stockNumber,
          diamondType: checkoutButton.dataset.diamondType,
          page: checkoutButton.dataset.livePage || 1,
        }),
      }, 25000).then(async (response) => {
        const payload = await response.json();
        if (!response.ok || !payload.url) throw new Error(payload.message || "Checkout could not be started.");
        window.location.href = payload.url;
      }).catch((error) => {
        checkoutButton.disabled = false;
        checkoutButton.textContent = original;
        window.alert(error.message || "Checkout could not be started.");
      });
      return;
    }
    const mediaLink = event.target.closest("[data-diamond-media-link]");
    if (mediaLink) {
      event.preventDefault();
      const url = mediaLink.dataset.diamondMediaLink || mediaLink.href;
      const note = document.getElementById("diamond-api-note");
      if (note) note.textContent = "Opening vendor media in a new tab. If the vendor page loads slowly, this diamond page will stay available here.";
      const opened = window.open(url, "_blank", "noopener,noreferrer");
      if (!opened) window.location.href = url;
      return;
    }
    const pairButton = event.target.closest("[data-select-pair]");
    if (pairButton) {
      const card = pairButton.closest(".matching-pair-card");
      const details = card?.innerText?.replace(/\n+/g, " | ") || pairButton.dataset.selectPair;
      if (!requestForm) return;
      requestForm.elements.stoneType.value = "Lab-Grown Diamond";
      requestForm.elements.diamondShape.value = card?.dataset.shape || "";
      requestForm.elements.caratWeight.value = card?.dataset.carat || "";
      requestForm.elements.notes.value = `Selected CVD matching diamond pair: ${details}`;
      requestForm.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const button = event.target.closest("[data-select-diamond]");
    if (!button) return;
    const card = button.closest(".diamond-inventory-card");
    const details = card?.innerText?.replace(/\n+/g, " | ") || button.dataset.selectDiamond;
    const diamond = {
      id: button.dataset.selectDiamond,
      shape: card?.dataset.shape || "",
      carat: card?.dataset.carat || "",
      color: card?.dataset.color || "",
      clarity: card?.dataset.clarity || "",
      certificate: card?.dataset.certificate || "",
      reportNumber: card?.dataset.reportNumber || "",
      stockNumber: card?.dataset.stockNumber || "",
      price: card?.dataset.price || "",
      diamondType: card?.dataset.diamondType || "",
      details,
      selectedAt: new Date().toISOString(),
    };
    if (returnProduct) {
      localStorage.setItem(`donLiveDiamond:${returnProduct}`, JSON.stringify(diamond));
      location.hash = `#/product/${returnProduct}`;
      return;
    }
    if (!requestForm) return;
    requestForm.elements.stoneType.value = "Lab-Grown Diamond";
    requestForm.elements.notes.value = `Selected live inventory diamond: ${details}`;
    requestForm.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  loadDiamondInventory(filterParams());
}

function manualProductInformation(product) {
  const rows = productFields(product).map(([label, values]) => {
    const first = Array.isArray(values?.[0]) ? values[0][0] : values?.[0];
    return [label, first];
  }).filter(([, value]) => value !== undefined && value !== null && String(value).trim() !== "");
  return `
    <section class="product-information-section">
      <div class="product-detail-copy">
        <p class="eyebrow">Product Description</p>
        <h2>${htmlSafe(productName(product))}</h2>
        <p>${htmlSafe(product.lede || "Made-to-order fine jewelry by The Don Jewelers & Jewelry.")}</p>
      </div>
      ${rows.length ? `<div class="product-specification-block"><h2>Specifications & Starting Options</h2><dl class="summary-list product-spec-list">${rows.map(([label, value]) => `<div><dt>${htmlSafe(label)}</dt><dd>${htmlSafe(value)}</dd></div>`).join("")}</dl></div>` : ""}
      <p class="shipping-note">${product.category === "Watches" ? "Availability and insured shipping timing are confirmed before fulfillment." : "Made to order. Production timing and insured shipping are confirmed after the final specifications are approved."}</p>
    </section>
  `;
}

function productDetail(id) {
  const product = allProducts().find((p) => p.id === id) || products[0];
  if (product.imported) return importedProductDetail(product);
  selections = Object.fromEntries(productFields(product).map(([label, values]) => {
    if (label === "Diamond Type") return [label, "Lab-Grown Diamond"];
    return [label, Array.isArray(values[0]) ? values[0][0] : values[0]];
  }));
  shell(`
    <main>
      <section class="product-detail-hero">
        <div class="product-media-stack">
          <img src="${productImageSrc(product)}" alt="${product.alt || productName(product)}" ${imageSafety}>
          ${productGallery(product)}
        </div>
        <div>
          <p class="eyebrow">${product.category}</p>
          <h1>${productName(product)}</h1>
          <p class="product-description">${startingText(product)} before diamond, color, size, and style modifiers.</p>
          ${productBadges(product)}
          ${diamondOriginNote(product)}
          ${engagementCertificationNote(product)}
          ${productNotice(product)}
        </div>
      </section>
      ${manualProductInformation(product)}
      <section class="customizer-layout">
        <div class="customizer-panel">
          <p class="eyebrow">Custom Jewelry Builder</p>
          <h2>${productName(product)}</h2>
          <p class="lede">${product.lede}</p>
          ${productBadges(product)}
          ${diamondOriginNote(product)}
          ${engagementCertificationNote(product)}
          ${productFields(product).map(([label, values]) => optionGroup(label, values, product)).join("")}
          <div class="builder-actions">
            <a class="button button-gold" href="${requestHref(product, "quote-message")}">Request Quote / Message Us</a>
            <a class="button button-dark" href="#/custom-orders">${product.cta}</a>
            ${product.extraCta ? `<a class="button button-light" href="${requestHref(product, "special-request")}">${product.extraCta}</a>` : ""}
          </div>
          ${productActionButtons(product)}
        </div>
        <aside class="summary-panel" id="summary"></aside>
      </section>
      <section class="custom-form-section">
        <div class="section-heading">
          <p class="eyebrow">Product Inquiry</p>
          <h2>Ask about ${productName(product)}</h2>
        </div>
        ${customRequestForm({ formId: "product-inquiry-form", requestType: "Product Inquiry Form", productCategory: product.category, productName: productName(product) })}
      </section>
      ${aboutUs()}
    </main>
  `);
  wireOptions(product);
  renderSummary(product);
  wireRequestForm("product-inquiry-form", "Thank you for your submission. Your request has been received and is currently under review. We will contact you regarding pricing, design details, and next steps.");
}

function optionGroup(label, values, product) {
  const priceOffset = values.every(Array.isArray) && Number.isFinite(product.estimate) ? product.estimate - values[0][1] : 0;
  return `
    <fieldset class="option-group" data-group="${label}">
      <legend>${label}</legend>
      <div class="option-grid">
        ${values.map((value, index) => {
          const text = Array.isArray(value) ? value[0] : value;
          const price = Array.isArray(value) ? `<small>${money.format(value[1] + priceOffset)}</small>` : "";
          const selected = selections[label] === text || (!selections[label] && index === 0);
          return `<button class="option-button ${selected ? "is-selected" : ""}" type="button" data-value="${text}"><span>${text}</span>${price}</button>`;
        }).join("")}
      </div>
    </fieldset>
  `;
}

function wireOptions(product) {
  document.querySelectorAll(".option-group").forEach((group) => {
    const label = group.dataset.group;
    group.querySelectorAll(".option-button").forEach((button) => {
      button.addEventListener("click", () => {
        group.querySelectorAll(".option-button").forEach((btn) => btn.classList.remove("is-selected"));
        button.classList.add("is-selected");
        selections[label] = button.dataset.value;
        renderSummary(product);
        if (label === "Diamond Type" && button.dataset.value === "Natural Diamond") {
          showNaturalDiamondModal();
        }
      });
    });
  });
}

function showNaturalDiamondModal() {
  document.querySelector(".natural-diamond-modal")?.remove();
  const modal = document.createElement("div");
  modal.className = "natural-diamond-modal";
  modal.innerHTML = `
    <div class="natural-diamond-dialog" role="dialog" aria-modal="true" aria-label="Natural diamond pricing request">
      <button class="natural-diamond-close" type="button" aria-label="Close natural diamond message">Close</button>
      <p class="eyebrow">Natural Diamond Pricing</p>
      <h2>Request a custom quote</h2>
      <p>Please request natural diamond pricing through direct messaging, custom design, custom stone size, or Request Quote so we can price your natural diamond selection accurately.</p>
      <div class="hero-actions">
        <a class="button button-gold" href="#/request/product?intent=natural-diamond-quote">Request Quote</a>
        <a class="button button-dark" href="#/custom-orders">Custom Design / Stone Size</a>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  const close = () => modal.remove();
  modal.addEventListener("click", (event) => {
    if (event.target === modal) close();
  });
  modal.querySelector(".natural-diamond-close").addEventListener("click", close);
}

const tennisChainPricing = {
  "10pt": { base: 3600, caratPerInch: 0.55, goldPerInch: 1.25 },
  "15pt": { base: 5200, caratPerInch: 0.82, goldPerInch: 1.35 },
  "20pt": { base: 6600, caratPerInch: 1.1, goldPerInch: 1.45 },
  "25pt": { base: 7800, caratPerInch: 1.38, goldPerInch: 1.55 },
  "30pt": { base: 8200, caratPerInch: 1.72, goldPerInch: 1.7 },
};

function selectedTennisChainQuote(product) {
  if (!product.tennisChain) return null;
  const size = selections["Diamond Size"] || product.tennisChain.pointer;
  const length = Number(String(selections["Chain Length"] || "22").replace(/[^\d.]/g, "")) || 22;
  const metal = selections.Metal || "14K Yellow Gold";
  const diamondType = selections["Diamond Type"] || "Lab Diamonds";
  const pointer = tennisChainPricing[size] || tennisChainPricing[product.tennisChain.pointer] || tennisChainPricing["10pt"];
  let price = pointer.base + (length - 16) * (pointer.base * 0.085);
  if (metal.startsWith("18K")) price += 650 + (length - 16) * 55;
  if (metal === "Platinum") price += 1600 + (length - 16) * 90;
  if (/natural/i.test(diamondType)) price = null;
  return {
    price,
    caratWeight: `${(pointer.caratPerInch * length).toFixed(1)} CTW estimated`,
    goldWeight: `${(pointer.goldPerInch * length).toFixed(1)} grams estimated`,
  };
}

function selectedPrice(product) {
  const tennisQuote = selectedTennisChainQuote(product);
  if (tennisQuote) return tennisQuote.price;
  if (selections["Diamond Type"] === "Natural Diamond" || product.price === "Request Pricing" || product.priceLabel === "Request Pricing" || product.estimate === null) return null;
  let basePrice = product.estimate;
  for (const [label, values] of product.fields) {
    if (values.every(Array.isArray)) {
      const found = values.find(([text]) => text === selections[label]);
      if (found) {
        basePrice = found[1] + (product.estimate - values[0][1]);
        break;
      }
    }
  }
  const metalSurcharges = product.metalSurcharges || (product.category === "Engagement Rings" ? engagementRingMetalSurcharges : {});
  const metalSurcharge = metalSurcharges[selections.Metal] || 0;
  return basePrice + metalSurcharge;
}

function renderSummary(product) {
  const price = selectedPrice(product);
  const naturalDiamond = price === null;
  const tennisQuote = selectedTennisChainQuote(product);
  const liveDiamond = selectedLiveDiamondFor(product.id);
  const liveShape = selections["Center Stone Shape"] || selections["Stone Shape"] || "all";
  const liveDiamondHref = `#/select-diamond?shape=${encodeURIComponent(liveShape)}&returnProduct=${encodeURIComponent(product.id)}`;
  document.getElementById("summary").innerHTML = `
    <p class="eyebrow">Live Selection</p>
    <h2>${productName(product)}</h2>
    <dl class="summary-list">
      ${Object.entries(selections).map(([key, value]) => `<div><dt>${key}</dt><dd>${value}</dd></div>`).join("")}
      ${tennisQuote ? `<div><dt>Estimated CTW</dt><dd>${tennisQuote.caratWeight}</dd></div><div><dt>Estimated gold weight</dt><dd>${tennisQuote.goldWeight}</dd></div>` : ""}
      <div><dt>Live Diamond</dt><dd>${htmlSafe(liveDiamondLabel(liveDiamond))}</dd></div>
    </dl>
    <a class="button button-gold" href="${requestHref(product, "quote-message")}">Request Quote / Message Us</a>
    <a class="button button-light" href="${liveDiamondHref}">Select Live Diamond</a>
    <div class="price-row"><span>${naturalDiamond ? "Final selected price" : "Final selected price"}</span><strong>${naturalDiamond ? "Request pricing" : money.format(price)}</strong></div>
    ${naturalDiamond ? requestPriceButton(product, "button button-gold") : productCheckoutButton(product, price)}
    ${naturalDiamond ? `<p class="quote-note">Please message us or submit a request for special pricing on natural diamonds.</p>` : ""}
    ${productNotice(product)}
    <button class="button button-dark" id="add-cart" type="button">Add Build Order to Cart</button>
    <p class="quote-note" id="cart-note" hidden>Added to build order.</p>
  `;
  document.getElementById("add-cart").addEventListener("click", () => {
    cart.push({ id: product.id, name: productName(product), image: product.image, price: price || 0, quantity: 1, pricingNote: naturalDiamond ? "Request pricing" : "", selections: {...selections, "Live Diamond": liveDiamondLabel(liveDiamond)} });
    localStorage.setItem("donCart", JSON.stringify(cart));
    document.getElementById("cart-note").hidden = false;
  });
}

function importedProductFields(product) {
  const category = product.category;
  if (product.id === "import-img-7970-mpnlzebr") {
    return [
      ["Diamond Type", ["Natural Diamond", "Lab-Grown Diamond", "Not sure yet"]],
      ["Metal Type", quoteMetals],
      ["Ring Size", ringSizes],
      ["Center Stone Shape", ["Marquise"]],
      ["Side Stone Shape", ["Marquise"]],
      ["Carat Size", [
        ["2 carats", 2450],
        ["2.5 carats", 2775],
        ["3 carats", 3100],
        ["3.5 carats", 3425],
        ["4 carats", 3750],
        ["4.5 carats", 4075],
        ["5 carats", 4400],
        ["5.5 carats", 4725],
        ["6 carats", 5050],
      ]],
      ["Diamond Quality", importedDiamondQualityOptions],
    ];
  }
  if (product.id === "import-img-4816-mpnlzebr") {
    return [
      ["Metal Type", quoteMetals],
      ["Stone Type", ["Amethyst with lab diamonds"]],
      ["Diamond Quality", importedDiamondQualityOptions],
      ["Backing Type", ["Screw back"]],
    ];
  }
  if (product.id === "import-img-2352-mpnlzebr") {
    return [
      ["Metal Type", quoteMetals],
      ["Stone Type", ["Diamond"]],
      ["Stone Size", [
        ["1 carat", 750],
        ["1.5 carat", 950],
        ["2 carat", 1150],
        ["2.5 carat", 1350],
        ["3 carat", 1550],
        ["3.5 carat", 1750],
        ["4 carat", 1950],
        ["4.5 carat", 2150],
        ["5 carat", 2350],
        ["5.5 carat", 2550],
        ["6 carat", 2750],
      ]],
      ["Diamond Quality", importedDiamondQualityOptions],
      ["Backing Type", ["Screw back"]],
    ];
  }
  if (["Engagement Rings", "Men's Rings", "Women's Rings"].includes(category)) {
    return [
      ["Diamond Type", ["Natural Diamond", "Lab-Grown Diamond", "Not sure yet"]],
      ["Metal Type", quoteMetals],
      ["Ring Size", ringSizes],
      ["Center Stone Shape", ["Round", "Oval", "Emerald", "Radiant", "Marquise", "Pear", "Cushion", "Asscher", "Princess", "Custom Shape"]],
      ["Carat Size", ["1 carat", "1.5 carat", "2 carat", "2.5 carat", "3 carat", "4 carat", "5 carat", "Custom carat size"]],
      ["Diamond Quality", importedDiamondQualityOptions],
      ["Engraving Option", ["No engraving", "Inside engraving", "Custom engraving request"]],
      ["Hidden Halo Option", ["No hidden halo", "Add hidden halo", "Discuss with jeweler"]],
      ["Hidden Birthstone Option", ["No hidden birthstone", "Add hidden birthstone", "Discuss with jeweler"]],
    ];
  }
  if (["Men's Earrings", "Women's Earrings"].includes(category)) {
    return [
      ["Metal Type", quoteMetals],
      ["Stone Size", ["0.5 carat", "1 carat", "1.5 carat", "2 carat", "3 carat", "Custom stone size"]],
      ["Diamond Quality", importedDiamondQualityOptions],
      ["Backing Type", ["Screw back"]],
      ["Stone Type", ["Diamond", "Pink gemstone", "Blue gemstone", "Yellow gemstone", "Ruby", "Sapphire", "Emerald", "Custom gemstone"]],
    ];
  }
  if (["Pendants / Charms", "Pendants", "Custom Jewelry / Request Pricing"].includes(category)) {
    return [
      ["Metal Type", quoteMetals],
      ["Stone Option", ["Diamond", "Ruby", "Sapphire", "Emerald", "Colored gemstone", "No stones", "Custom stone request"]],
      ["Custom Engraving", ["No engraving", "Back engraving", "Name engraving", "Custom engraving request"]],
      ["Diamond Quality", importedDiamondQualityOptions],
    ];
  }
  if (category === "Chains") {
    return [
      ["Chain Style", ["Nameplate", "Rope", "Cuban", "Tennis", "Box", "Figaro", "Mooncut", "Franco", "Custom style"]],
      ["Metal Type", quoteMetals],
      ["Length", ["16 in", "18 in", "20 in", "22 in", "24 in", "26 in", "30 in", "Custom length"]],
      ["Width", ["Thin", "Medium", "Wide", "Custom width"]],
      ["Gram Weight Estimate", ["Lightweight", "Medium weight", "Heavy", "Request gram quote"]],
      ["Stone Option", ["Diamond", "Gemstone", "No stones", "Custom stone request"]],
    ];
  }
  if (["Bracelets", "Tennis Bracelets", "Anklets"].includes(category)) {
    return [
      ["Length", ["Starting at 7 inches", "7.5 inches", "8 inches", "Custom length"]],
      ["Metal Type", quoteMetals],
      ["Total Carat Weight", ["5 carats", "6 carats", "7 carats", "8 carats", "10 carats", "Custom carat weight"]],
      ["Stone Size", ["10 pointers", "15 pointers", "20 pointers", "25 pointers", "30 pointers", "Custom stone size"]],
      ["Diamond Quality", importedDiamondQualityOptions],
      ["Approximate Gram Weight", ["Request gram quote", "Lightweight", "Medium weight", "Heavy"]],
    ];
  }
  if (category === "Watches") {
    return [
      ["Brand / Model", ["Rolex", "Cartier", "Audemars Piguet", "Patek Philippe", "Custom model"]],
      ["Custom Diamond Setting", ["Bezel only", "Dial", "Case", "Bracelet", "Fully iced", "Custom setting"]],
      ["Metal / Finish", ["Yellow gold", "White gold", "Rose gold", "Steel", "Two-tone", "Custom finish"]],
      ["Diamond Quality", importedDiamondQualityOptions],
    ];
  }
  if (category === "Grillz") {
    return [
      ["Grillz Style", ["Top", "Bottom", "Top and bottom", "Open face", "Iced out", "Custom design"]],
      ["Metal Type", quoteMetals],
      ["Stone Option", ["No stones", "Diamond", "Gemstone", "Custom stone request"]],
      ["Diamond Quality", importedDiamondQualityOptions],
    ];
  }
  return [
    ["Metal Type", quoteMetals],
    ["Stone Option", ["Diamond", "Gemstone", "No stones", "Custom stone request"]],
    ["Diamond Quality", importedDiamondQualityOptions],
  ];
}

function initSelections(fields) {
  selections = Object.fromEntries(fields.map(([label, values]) => [label, Array.isArray(values[0]) ? values[0][0] : values[0]]));
}

function wireImportedOptions(product) {
  document.querySelectorAll(".option-group").forEach((group) => {
    const label = group.dataset.group;
    group.querySelectorAll(".option-button").forEach((button) => {
      button.addEventListener("click", () => {
        group.querySelectorAll(".option-button").forEach((btn) => btn.classList.remove("is-selected"));
        button.classList.add("is-selected");
        selections[label] = button.dataset.value;
        renderImportedSummary(product);
      });
    });
  });
}

function renderImportedSummary(product) {
  const host = document.getElementById("imported-summary");
  if (!host) return;
  const price = importedSelectedPrice(product);
  host.innerHTML = `
    <p class="eyebrow">Selected Options</p>
    <h2>${productName(product)}</h2>
    <dl class="summary-list">
      ${Object.entries(selections).map(([key, value]) => `<div><dt>${key}</dt><dd>${value}</dd></div>`).join("")}
    </dl>
    <div class="price-row"><span>Pricing</span><strong>${price === null ? "Request Pricing" : money.format(price)}</strong></div>
    <p class="quote-note">Pricing varies depending on metal, diamond quality, stone size, and market availability. Submit a request for final pricing.</p>
    <button class="button button-dark" id="imported-add-inquiry" type="button">Add to Inquiry</button>
    <p class="quote-note" id="imported-cart-note" hidden>Added to inquiry.</p>
  `;
  document.getElementById("imported-add-inquiry")?.addEventListener("click", () => {
    cart.push({ id: product.id, name: productName(product), image: product.imageUrl || product.image, price: 0, quantity: 1, pricingNote: "Request Pricing", selections: { ...selections, Product: productName(product), Category: product.category } });
    localStorage.setItem("donCart", JSON.stringify(cart));
    document.getElementById("imported-cart-note").hidden = false;
  });
}

function importedSelectedPrice(product) {
  let price = Number.isFinite(product.price) ? product.price : null;
  const fields = importedProductFields(product);
  for (const [label, values] of fields) {
    if (values.every(Array.isArray)) {
      const found = values.find(([text]) => text === selections[label]);
      if (found) price = found[1];
    }
  }
  if (price === null) return null;
  const metal = selections["Metal Type"] || "";
  if (product.id === "import-img-7970-mpnlzebr") {
    if (metal.startsWith("18K")) price += 375;
    if (metal === "Platinum") price += 625;
    return price;
  }
  if (metal.startsWith("18K")) price += 250;
  if (metal === "Platinum") price += 475;
  return price;
}

function importedProductDetail(product) {
  const fields = importedProductFields(product);
  initSelections(fields);
  shell(`
    <main>
      <section class="product-detail-hero">
        <div class="product-media-stack">
          <img src="${productImageSrc(product)}" alt="${product.alt || productName(product)}" ${imageSafety}>
          ${productGallery(product)}
        </div>
        <div>
          <p class="eyebrow">${product.category}</p>
          <h1>${productName(product)}</h1>
          <p class="product-description">${product.shortDescription || "A luxury custom jewelry piece from The Don Jewelers & Jewelry, available for quote review."}</p>
          <p class="diamond-origin-note">Pricing varies depending on metal, diamond quality, stone size, and market availability. Submit a request for final pricing.</p>
        </div>
      </section>
      <section class="customizer-layout">
        <div class="customizer-panel">
          <p class="eyebrow">Custom Product Builder</p>
          <h2>${productName(product)}</h2>
          <p class="lede">${product.specs || "Request Pricing"}</p>
          ${fields.map(([label, values]) => optionGroup(label, values, product)).join("")}
          <dl class="summary-list">
            <div><dt>Category</dt><dd>${product.category}</dd></div>
            <div><dt>Tags</dt><dd>${(product.tags || []).join(", ") || "Custom Jewelry"}</dd></div>
            <div><dt>Price</dt><dd>${product.priceLabel || "Request Pricing"}</dd></div>
          </dl>
          <div class="builder-actions">
            <a class="button button-gold" href="${requestHref(product, "custom-quote")}">Request Custom Quote</a>
            <a class="button button-dark" href="#/custom-orders">Message Us for Custom Design</a>
            <a class="button button-light" href="#/request/contact">Contact The Don Jewelers & Jewelry</a>
          </div>
        </div>
        <aside class="summary-panel" id="imported-summary"></aside>
      </section>
      <section class="custom-form-section">
        <div class="section-heading">
          <p class="eyebrow">Product Inquiry</p>
          <h2>Submit a request for ${productName(product)}</h2>
        </div>
        ${customRequestForm({ formId: "imported-product-inquiry-form", requestType: "Product Inquiry Form", productCategory: product.category, productName: productName(product) })}
      </section>
      ${aboutUs()}
    </main>
  `);
  wireImportedOptions(product);
  renderImportedSummary(product);
  wireRequestForm("imported-product-inquiry-form", "Thank you for your submission. Your request has been received and is currently under review. We will contact you regarding pricing, design details, and next steps.");
}

const importCategories = ["Engagement Rings", "Men's Rings", "Women's Rings", "Men's Earrings", "Women's Earrings", "Pendants / Charms", "Chains", "Tennis Bracelets", "Bracelets", "Anklets", "Watches", "Grillz", "Custom Jewelry", "Gold Buying / Services", "Custom Jewelry / Request Pricing"];

function normalizeImportCategory(category) {
  const value = String(category || "").trim().toLowerCase();
  if (["engagement ring", "engagement rings"].includes(value)) return "Engagement Rings";
  if (["men's ring", "mens ring", "men ring", "men's rings", "mens rings", "men rings"].includes(value)) return "Men's Rings";
  if (["women's ring", "womens ring", "woman ring", "women ring", "women's rings", "womens rings", "woman rings", "women rings", "ring", "rings"].includes(value)) return "Women's Rings";
  if (["tennis bracelet", "tennis bracelets"].includes(value)) return "Tennis Bracelets";
  if (["bracelet", "bracelets"].includes(value)) return "Bracelets";
  if (["anklet", "anklets"].includes(value)) return "Anklets";
  if (["chain", "chains"].includes(value)) return "Chains";
  if (["pendant", "pendants", "charm", "charms", "pendants / charms", "pendants/charms", "pendant / charm", "pendant/charm"].includes(value)) return "Pendants / Charms";
  if (["men's earring", "mens earring", "men earring", "men's earrings", "mens earrings", "men earrings"].includes(value)) return "Men's Earrings";
  if (["women's earring", "womens earring", "woman earring", "women earring", "women's earrings", "womens earrings", "woman earrings", "women earrings", "earring", "earrings", "stud", "studs"].includes(value)) return "Women's Earrings";
  if (["grill", "grillz"].includes(value)) return "Grillz";
  if (["watch", "watches"].includes(value)) return "Watches";
  if (["custom", "custom jewelry"].includes(value)) return "Custom Jewelry";
  if (["custom jewelry / request pricing", "request pricing"].includes(value)) return "Custom Jewelry / Request Pricing";
  if (["gold buying", "gold buying / services", "gold buying/services", "services"].includes(value)) return "Gold Buying / Services";
  return importCategories.includes(category) ? category : "Custom Jewelry";
}

function parseCsvRows(text) {
  const rows = text.split(/\r?\n/).filter(Boolean).map((line) => {
    const cells = [];
    let value = "";
    let quoted = false;
    for (const char of line) {
      if (char === '"') quoted = !quoted;
      else if (char === "," && !quoted) {
        cells.push(value.trim());
        value = "";
      } else value += char;
    }
    cells.push(value.trim());
    return cells;
  });
  if (!rows.length) return [];
  const headers = rows[0].map((header) => header.toLowerCase().replace(/\s+/g, ""));
  return rows.slice(1).map((row) => Object.fromEntries(headers.map((header, index) => [header, row[index] || ""])));
}

function normalizeFileName(name) {
  return String(name || "").split(/[\\/]/).pop().trim().toLowerCase();
}

function csvRowForFile(rows, fileName) {
  const normalized = normalizeFileName(fileName);
  return rows.find((row) => {
    const candidates = [row.filename, row.file, row.media, row.medianame, row.image, row.path, row.url].map(normalizeFileName);
    return candidates.includes(normalized);
  }) || {};
}

function inferCategory(text) {
  const value = text.toLowerCase();
  if (/engagement|solitaire/.test(value)) return "Engagement Rings";
  if (/men|mens|cuban|signet|medusa|nugget/.test(value)) return "Men's Rings";
  if (/ring|oval|marquise|radiant|emerald|pear|princess|eternity|flower|floral/.test(value)) return "Women's Rings";
  if (/anklet/.test(value)) return "Anklets";
  if (/tennis|bracelet/.test(value)) return "Tennis Bracelets";
  if (/chain|cuban|rope|franco/.test(value)) return "Chains";
  if (/pendant|charm|cross/.test(value)) return "Pendants / Charms";
  if (/earring|stud|martini/.test(value)) return "Women's Earrings";
  if (/grill|grillz/.test(value)) return "Grillz";
  if (/watch|rolex|cartier/.test(value)) return "Watches";
  if (/gold buying|cash for gold|scrap/.test(value)) return "Gold Buying / Services";
  return "Custom Jewelry";
}

function inferTitle(text, fallback) {
  const clean = text.replace(/https?:\/\/\S+/g, "").replace(/[#@][\w-]+/g, "").trim();
  const firstSentence = clean.split(/[.!?\n]/).find(Boolean)?.trim();
  if (firstSentence && firstSentence.length <= 72) return firstSentence;
  return fallback.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function inferTags(text, category) {
  const tags = new Set([category, "Instagram Import", "Custom Jewelry"]);
  ["LGD", "Natural", "VVS", "VS", "14K", "18K", "Platinum", "Silver", "Gold", "Diamond"].forEach((tag) => {
    if (text.toLowerCase().includes(tag.toLowerCase())) tags.add(tag);
  });
  return [...tags];
}

function inferPrice(text) {
  const match = text.match(/\$\s?[\d,]+/);
  return match ? match[0].replace(/\s/g, "") : "Request Pricing";
}

function normalizePriceLabel(value) {
  const text = String(value || "").trim();
  return text && !/^request pricing$/i.test(text) ? text : "Request Pricing";
}

function priceValueFromLabel(label) {
  const normalized = normalizePriceLabel(label);
  return normalized === "Request Pricing" ? "Request Pricing" : Number(normalized.replace(/[^\d]/g, ""));
}

function makeImportDraft({ caption = "", postLink = "", mediaUrl = "", mediaName = "Instagram product", source = instagramHandle }) {
  const category = normalizeImportCategory(inferCategory(`${caption} ${mediaName}`));
  const title = inferTitle(caption, mediaName);
  const priceLabel = normalizePriceLabel(inferPrice(caption));
  return {
    id: `ig-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    imported: true,
    source,
    postLink,
    category,
    name: title,
    imageUrl: mediaUrl,
    alt: title,
    caption,
    shortDescription: caption ? caption.slice(0, 180) : "Imported product draft from provided Instagram media.",
    specs: caption || "Request Pricing",
    tags: inferTags(caption, category),
    price: priceValueFromLabel(priceLabel),
    priceLabel,
  };
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function renderImportDrafts(drafts) {
  const host = document.getElementById("import-drafts");
  if (!host) return;
  const escapeField = (value) => String(value || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  host.innerHTML = drafts.length ? drafts.map((draft, index) => `
    <article class="import-draft" data-index="${index}">
      ${draft.imageUrl ? `<img src="${draft.imageUrl}" alt="">` : `<div class="import-media-empty">No media yet</div>`}
      <div class="import-fields">
        <label>Product title<input data-field="name" value="${escapeField(draft.name)}"></label>
        <label>Category<select data-field="category">${importCategories.map((category) => `<option ${category === draft.category ? "selected" : ""}>${category}</option>`).join("")}</select></label>
        <label>Short description<textarea data-field="shortDescription" rows="3">${escapeField(draft.shortDescription)}</textarea></label>
        <label>Specs section<textarea data-field="specs" rows="4">${escapeField(draft.specs)}</textarea></label>
        <label>Tags<input data-field="tags" value="${escapeField((draft.tags || []).join(", "))}"></label>
        <label>Price<input data-field="priceLabel" value="${escapeField(draft.priceLabel || "Request Pricing")}"></label>
        <label>Instagram post link<input data-field="postLink" value="${escapeField(draft.postLink || "")}"></label>
        <div class="builder-actions">
          <button class="button button-gold" type="button" data-approve="${index}">Approve Listing</button>
          <button class="button button-light" type="button" data-remove-draft="${index}">Remove Draft</button>
          <a class="button button-dark" href="#/request/product?product=${encodeURIComponent(draft.name)}&category=${encodeURIComponent(draft.category || "Product Inquiry")}&intent=custom-quote">Request Custom Quote</a>
        </div>
      </div>
    </article>
  `).join("") : `<div class="empty-state">Upload images or paste CSV rows to create draft listings for review.</div>`;
}

function updateDraftFromForm(drafts, card) {
  const draft = drafts[Number(card.dataset.index)];
  card.querySelectorAll("[data-field]").forEach((field) => {
    const key = field.dataset.field;
    draft[key] = field.value;
  });
  draft.tags = String(draft.tags || "").split(",").map((tag) => tag.trim()).filter(Boolean);
  draft.priceLabel = normalizePriceLabel(draft.priceLabel);
  draft.price = priceValueFromLabel(draft.priceLabel);
}

function wireRequestForm(formId, successText) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = form.querySelector("button[type='submit']");
    const success = form.querySelector(".form-success");
    const error = form.querySelector(".form-error");
    if (button) {
      button.disabled = true;
      button.textContent = "Submitting...";
    }
    if (error) error.hidden = true;
    try {
      const payload = requestPayloadFromForm(form);
      await sendWebsiteRequest(payload);
      savePendingRequest(payload);
      if (success) {
        success.hidden = false;
        success.textContent = `${successText} A notification was sent to The Don Jewelers & Jewelry.`;
      }
      form.reset();
    } catch (submitError) {
      const fallbackPayload = requestPayloadFromForm(form);
      savePendingRequest(fallbackPayload);
      if (error) {
        error.hidden = false;
        error.textContent = `${submitError.message || "Email notification could not be sent."} Your request was saved in this browser for follow-up review.`;
      }
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent = "Submit Custom Request";
      }
    }
  });
}

function selectedFormValue(form, name) {
  const checked = form.querySelector(`[name="${name}"]:checked`);
  if (checked) return checked.value;
  return form.elements[name]?.value || "";
}

function requestPayloadFromForm(form) {
  const files = [...form.querySelectorAll('input[type="file"]')].flatMap((input) => [...input.files].map((file) => ({
    name: file.name,
    type: file.type,
    size: file.size,
  })));
  const requestType = form.dataset.requestType || selectedFormValue(form, "requestType") || "General Contact Form";
  const productCategory = form.dataset.productCategory || selectedFormValue(form, "productCategory") || requestType;
  return {
    source: location.href,
    customer: {
      fullName: selectedFormValue(form, "fullName") || selectedFormValue(form, "name"),
      email: selectedFormValue(form, "email"),
      phone: selectedFormValue(form, "phone"),
    },
    jewelry: {
      requestType,
      productCategory,
      productName: form.dataset.productName || selectedFormValue(form, "productName"),
      metalType: selectedFormValue(form, "metalType") || selectedFormValue(form, "metal"),
      diamondShape: selectedFormValue(form, "diamondShape"),
      stoneType: selectedFormValue(form, "stoneType") || selectedFormValue(form, "gemstones"),
      caratWeight: selectedFormValue(form, "caratWeight") || selectedFormValue(form, "caratSize"),
      ringSize: selectedFormValue(form, "ringSize"),
      braceletSize: selectedFormValue(form, "braceletSize"),
      chainLength: selectedFormValue(form, "chainLength"),
      diamondQuality: selectedFormValue(form, "diamondQuality") || selectedFormValue(form, "diamondType"),
      budget: selectedFormValue(form, "budget"),
      timeline: selectedFormValue(form, "timeline"),
      notes: [
        selectedFormValue(form, "description"),
        selectedFormValue(form, "notes"),
        form.dataset.cartSummary ? `Cart summary: ${form.dataset.cartSummary}` : "",
        selectedFormValue(form, "bandStyle") ? `Band style: ${selectedFormValue(form, "bandStyle")}` : "",
        selectedFormValue(form, "prongs") ? `Prongs: ${selectedFormValue(form, "prongs")}` : "",
        selectedFormValue(form, "basket") ? `Basket / setting: ${selectedFormValue(form, "basket")}` : "",
        Object.keys(selections).length ? `Selected website options: ${Object.entries(selections).map(([key, value]) => `${key}: ${value}`).join(" | ")}` : "",
      ].filter(Boolean).join("\n"),
    },
    files,
  };
}

function savePendingRequest(payload) {
  const pending = JSON.parse(localStorage.getItem("donPendingCustomRequests") || "[]");
  pending.unshift({ ...payload, savedAt: new Date().toISOString() });
  localStorage.setItem("donPendingCustomRequests", JSON.stringify(pending.slice(0, 50)));
}

async function sendWebsiteRequest(payload) {
  const response = await fetch("/api/send-request", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || data.ok === false) {
    throw new Error(data.message || "Email notification could not be sent.");
  }
  return data;
}

function sendStripeStartAlert(link) {
  const payableItems = payableCartItems();
  const total = Number(link.dataset.stripeTotal || cartTotal(payableItems) || 0);
  const payload = {
    type: "Stripe checkout started",
    source: location.href,
    customer: {},
    jewelry: {
      requestType: "Stripe checkout started",
      productName: link.dataset.stripeProduct || "Cart checkout",
      productCategory: "Checkout",
      notes: cart.length
        ? cart.map((item) => `${item.name} - ${item.pricingNote || money.format(item.price)} - ${Object.entries(item.selections || {}).map(([key, value]) => `${key}: ${value}`).join(" | ")}`).join("\n")
        : "Customer clicked Stripe checkout from the website.",
    },
    checkout: {
      provider: "Stripe Payment Link",
      estimatedTotal: total > 0 ? money.format(total) : "Not available",
      paymentLink: stripePaymentLink,
      note: "This alert confirms the customer clicked the Stripe payment button. Confirm completed payment inside Stripe or add a Stripe webhook for completed-payment emails.",
    },
  };
  const body = JSON.stringify(payload);
  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/send-request", new Blob([body], { type: "application/json" }));
    return;
  }
  fetch("/api/send-request", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {});
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-stripe-checkout]");
  if (link) sendStripeStartAlert(link);
});

async function startProductCheckout(button) {
  const original = button.textContent;
  button.disabled = true;
  button.textContent = "Opening secure checkout...";
  try {
    const response = await fetchWithTimeout("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "saved-product",
        productId: button.dataset.buyProduct,
        selections: location.hash.startsWith(`#/product/${button.dataset.buyProduct}`) ? { ...selections } : {},
      }),
    }, 20000);
    const payload = await response.json();
    if (!response.ok || !payload.url) throw new Error(payload.message || "Checkout could not be started.");
    window.location.href = payload.url;
  } catch (error) {
    button.disabled = false;
    button.textContent = original;
    if (/STRIPE_SECRET_KEY/i.test(error.message || "")) {
      window.location.href = stripePaymentLink;
      return;
    }
    window.alert(error.message || "Checkout could not be started. Please contact us for assistance.");
  }
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-buy-product]");
  if (button) startProductCheckout(button);
});

function choiceGroup(label, name, options, wide = false) {
  return `
    <fieldset class="request-choice-group ${wide ? "form-wide" : ""}">
      <legend>${label}</legend>
      <div class="request-choice-grid">
        ${options.map((option, index) => `
          <label class="request-choice-pill">
            <input type="radio" name="${name}" value="${option}" ${index === 0 ? "checked" : ""}>
            <span>${option}</span>
          </label>
        `).join("")}
      </div>
    </fieldset>
  `;
}

function engagementRingBuilder() {
  shell(`
    <main>
      ${pageHero("Engagement Ring Builder", "Build your custom engagement ring", "Choose the diamond, metal, band, setting, gemstone ideas, and design notes. A $500 deposit starts the design process and secures your consultation for further custom design work.")}
      <section class="custom-form-section">
        <form class="custom-order-form engagement-build-form" id="engagement-build-form" data-request-type="Custom Engagement Ring Request" data-product-category="Engagement Rings">
          <label>Full Name<input name="fullName" autocomplete="name" required></label>
          <label>Email<input name="email" type="email" autocomplete="email" required></label>
          <label>Phone number<input name="phone" type="tel" autocomplete="tel" required></label>
          ${choiceGroup("Diamond type", "diamondType", ["Natural Diamond", "Lab-Grown Diamond", "Not sure yet"])}
          ${choiceGroup("Desired center stone size", "caratSize", ["1 carat", "1.5 carat", "2 carat", "2.5 carat", "3 carat", "3.5 carat", "4 carat", "4.5 carat", "5 carat", "5.5 carat", "6 carat", "Custom carat size"], true)}
          ${choiceGroup("Metal", "metal", ["14K Yellow Gold", "14K White Gold", "14K Rose Gold", "18K Yellow Gold", "18K White Gold", "18K Rose Gold", "Silver", "Platinum"], true)}
          ${choiceGroup("Band style", "bandStyle", ["Classic Solitaire", "Pave Diamond Band", "Hidden Halo Band", "Tapered Baguette Band", "Cathedral Band", "Split Shank Band", "Custom one-on-one design"], true)}
          ${choiceGroup("Diamond shape", "diamondShape", ["Round", "Oval", "Emerald", "Radiant", "Marquise", "Pear", "Cushion", "Asscher", "Princess", "Custom shape"], true)}
          ${choiceGroup("Prongs", "prongs", ["4-prong", "6-prong", "Double claw prongs", "Compass prongs", "Bezel setting", "Custom prong design"], true)}
          ${choiceGroup("Basket / setting", "basket", ["Low basket", "Medium basket", "High basket", "Cathedral basket", "Hidden halo basket", "Custom basket"], true)}
          ${choiceGroup("Side stones or gemstones", "gemstones", ["Diamonds only", "Add sapphires", "Add rubies", "Add emeralds", "Add pink stones", "Add yellow stones", "Other gemstone request"], true)}
          ${choiceGroup("Diamond quality selection", "diamondQuality", quoteQualityOptions, true)}
          <label>Stone Type<input name="stoneType" placeholder="Diamond, sapphire, ruby, emerald, custom gemstone"></label>
          <label>Ring size<input name="ringSize" placeholder="Example: 6.5, 7, custom"></label>
          <label>Timeline Needed<input name="timeline" placeholder="Example: 2 weeks, 30 days, proposal date"></label>
          <label>Budget range<input name="budget" placeholder="Example: $2,500 - $5,000"></label>
          <label class="form-wide">Describe exactly what you are looking to get<textarea name="description" rows="6" placeholder="Tell us about the look, stone size, setting, inspiration, timeline, and any one-on-one custom design details."></textarea></label>
          <label class="form-wide">Upload Inspiration Photos<input type="file" name="inspiration" multiple accept="image/*"></label>
          <div class="deposit-note form-wide">
            <strong>$500 design deposit</strong>
            <span>The deposit starts the custom engagement ring design process and secures consultation time for design work, CAD planning, stone sourcing, and follow-up direction.</span>
          </div>
          <button class="button button-gold form-wide" type="submit">Submit Custom Request</button>
          <p class="form-success" hidden></p>
          <p class="form-error" hidden></p>
        </form>
      </section>
      ${aboutUs()}
    </main>
  `);
  wireRequestForm("engagement-build-form", "Thank you for your submission. Your request has been received and is currently under review. We will contact you regarding pricing, design details, and next steps.");
}

function requestTypeToCategory(requestType) {
  if (requestType.includes("Engagement")) return "Engagement Rings";
  if (requestType.includes("Tennis Bracelet")) return "Bracelets";
  if (requestType.includes("Pendant")) return "Pendants / Charms";
  if (requestType.includes("Chain")) return "Chains";
  if (requestType.includes("Grillz")) return "Grillz";
  if (requestType.includes("CAD")) return "Custom Jewelry";
  if (requestType.includes("Product Inquiry")) return "Product Inquiry";
  return "Custom Jewelry";
}

function customRequestForm({ formId, requestType = "Request Custom Design Form", productCategory = "", productName = "" }) {
  const category = productCategory || requestTypeToCategory(requestType);
  return `
    <form class="custom-order-form engagement-build-form" id="${formId}" data-request-type="${htmlSafe(requestType)}" data-product-category="${htmlSafe(category)}" data-product-name="${htmlSafe(productName)}">
      <label>Full Name<input name="fullName" autocomplete="name" required></label>
      <label>Email Address<input name="email" type="email" autocomplete="email" required></label>
      <label>Phone Number<input name="phone" type="tel" autocomplete="tel" required></label>
      ${productName ? `<label class="form-wide">Product<input name="productName" value="${htmlSafe(productName)}" readonly></label>` : ""}
      <label>Product Category
        <select name="productCategory">
          ${quoteCategories.map((item) => `<option ${item === requestType ? "selected" : ""}>${item}</option>`).join("")}
        </select>
      </label>
      <label>Metal Type
        <select name="metalType">
          ${quoteMetals.map((item) => `<option>${item}</option>`).join("")}
        </select>
      </label>
      <label>Diamond Shape<input name="diamondShape" placeholder="Round, oval, emerald, radiant, custom"></label>
      <label>Stone Type<input name="stoneType" placeholder="Diamond, ruby, sapphire, emerald, gemstone"></label>
      <label>Carat Weight<input name="caratWeight" placeholder="Example: 1 carat, 2.5 carat, custom"></label>
      <label>Ring Size<input name="ringSize" placeholder="For rings or grillz notes"></label>
      <label>Bracelet Size<input name="braceletSize" placeholder="Example: 7 in, 7.5 in"></label>
      <label>Chain Length<input name="chainLength" placeholder="Example: 18 in, 20 in, 24 in"></label>
      <label>Diamond Quality Selection
        <select name="diamondQuality">
          ${quoteQualityOptions.map((item) => `<option>${item}</option>`).join("")}
        </select>
      </label>
      <label>Budget<input name="budget" placeholder="Example: $1,500 - $5,000"></label>
      <label>Timeline Needed<input name="timeline" placeholder="Example: 2 weeks, 30 days, event date"></label>
      <label class="form-wide">Notes / Custom Details<textarea name="notes" rows="6" placeholder="Describe the piece, design details, sizing, stones, inspiration, and any custom CAD direction."></textarea></label>
      <label class="form-wide">Upload Inspiration Photos<input type="file" name="inspiration" multiple accept="image/*"></label>
      <button class="button button-gold form-wide" type="submit">Submit Custom Request</button>
      <p class="form-success" hidden></p>
      <p class="form-error" hidden></p>
    </form>
  `;
}

function customOrders() {
  shell(`
    <main>
      ${pageHero("Custom Design", "Message us for a custom design", `Send your name, phone number, email, and a clear description of what you are looking for. We will contact you to discuss the design, budget, timeline, and next steps.`)}
      <section class="custom-form-section">
        ${customRequestForm({ formId: "custom-form", requestType: "Request Custom Design Form" })}
      </section>
      ${aboutUs()}
    </main>
  `);
  wireRequestForm("custom-form", "Thank you for your submission. Your request has been received and is currently under review. We will contact you regarding pricing, design details, and next steps.");
}

const requestPageTypes = {
  "tennis-bracelet": "Custom Tennis Bracelet Request",
  pendant: "Custom Pendant Request",
  chain: "Custom Chain Request",
  grillz: "Custom Grillz Request",
  cad: "Custom CAD Project Request",
  contact: "General Contact Form",
  product: "Product Inquiry Form",
  design: "Request Custom Design Form",
};

function customRequestPage(slug, params = new URLSearchParams()) {
  const requestType = requestPageTypes[slug] || "General Contact Form";
  const productName = params.get("product") || "";
  const productCategory = params.get("category") || "";
  const intent = params.get("intent") || "";
  const detail = productName
    ? `Request for ${productName}${intent ? ` (${intent.replace(/-/g, " ")})` : ""}.`
    : "Submit your details and inspiration photos.";
  shell(`
    <main>
      ${pageHero("Custom Quote", requestType, `${detail} Every request is routed to The Don Jewelers & Jewelry for follow-up.`)}
      <section class="custom-form-section">
        ${customRequestForm({ formId: "request-form", requestType, productCategory, productName })}
      </section>
      ${aboutUs()}
    </main>
  `);
  const notes = document.querySelector("#request-form textarea[name='notes']");
  if (notes && productName) notes.value = `I am requesting ${intent ? intent.replace(/-/g, " ") : "information"} for ${productName}.`;
  wireRequestForm("request-form", "Thank you for your submission. Your request has been received and is currently under review. We will contact you regarding pricing, design details, and next steps.");
}

function adminDashboard() {
  shell(`
    <main>
      ${pageHero("Admin Dashboard", "Customer request notifications", "New quote requests, customer names, categories, and submission dates appear here after customers submit forms.")}
      <section class="admin-dashboard-section">
        <div class="admin-toolbar">
          <strong>Website request system</strong>
          <button class="button button-dark" id="refresh-admin-requests" type="button">Refresh</button>
        </div>
        <div id="admin-request-list" class="admin-request-list">
          <div class="empty-state">Loading requests...</div>
        </div>
      </section>
      <section class="admin-dashboard-section">
        <div class="admin-toolbar">
          <strong>Diamond API readiness</strong>
          <button class="button button-dark" id="refresh-diamond-api-status" type="button">Check Diamond API</button>
        </div>
        <div id="diamond-api-status" class="admin-request-list">
          <div class="empty-state">Checking diamond API status...</div>
        </div>
      </section>
      <section class="admin-dashboard-section">
        <div class="admin-toolbar">
          <strong>Saved jewelry database sync</strong>
          <button class="button button-gold" id="run-jewelry-sync" type="button">Refresh API Products Now</button>
        </div>
        <label class="admin-secret-field">Admin sync key
          <input id="admin-sync-key" type="password" autocomplete="current-password" placeholder="Enter the configured admin sync key">
        </label>
        <div id="jewelry-sync-status" class="admin-request-list">
          <div class="empty-state">Loading latest sync status...</div>
        </div>
      </section>
      <section class="admin-dashboard-section">
        <div class="admin-toolbar">
          <strong>Product photo import drafts</strong>
          <div class="builder-actions">
            <button class="button button-gold" id="scan-product-photos" type="button">Scan Product Photos</button>
            <button class="button button-dark" id="refresh-product-drafts" type="button">Refresh Drafts</button>
          </div>
        </div>
        <p class="lede admin-helper">Add product photos to the project root, then scan. Drafts stay private until approved.</p>
        <div id="admin-product-drafts" class="admin-product-grid">
          <div class="empty-state">Loading product drafts...</div>
        </div>
      </section>
      <section class="admin-dashboard-section">
        <div class="admin-toolbar">
          <strong>Approved imported products</strong>
          <button class="button button-dark" id="refresh-approved-products" type="button">Refresh Products</button>
        </div>
        <div id="admin-approved-products" class="admin-product-grid">
          <div class="empty-state">Loading approved products...</div>
        </div>
      </section>
      ${aboutUs()}
    </main>
  `);
  const escapeField = (value) => String(value || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const productEditor = (product, action, label) => `
    <article class="admin-product-card" data-id="${product.id}">
      <img src="${productImageSrc(product)}" alt="${product.alt || product.name}">
      <div class="admin-product-fields">
        <label>Product title<input data-field="name" value="${escapeField(product.name)}"></label>
        <label>Category<select data-field="category">${importCategories.map((category) => `<option ${category === product.category ? "selected" : ""}>${category}</option>`).join("")}</select></label>
        <label>Short luxury description<textarea data-field="shortDescription" rows="3">${escapeField(product.shortDescription)}</textarea></label>
        <label>Specs / options<textarea data-field="specs" rows="4">${escapeField(product.specs)}</textarea></label>
        <label>Tags<input data-field="tags" value="${escapeField((product.tags || []).join(", "))}"></label>
        <label>Price table or Request Pricing<input data-field="priceLabel" value="${escapeField(product.priceLabel || "Request Pricing")}"></label>
        <div class="builder-actions">
          <button class="button button-gold" type="button" data-action="${action}">${label}</button>
          <button class="button button-light" type="button" data-action="${action === "approve" ? "delete-draft" : "delete-product"}">Delete</button>
        </div>
      </div>
    </article>
  `;
  const render = async () => {
    const host = document.getElementById("admin-request-list");
    const requests = JSON.parse(localStorage.getItem("donPendingCustomRequests") || "[]");
    host.innerHTML = requests.length ? requests.map((request) => `
        <article class="admin-request-card">
          <div>
            <p class="eyebrow">New request alert</p>
            <h2>${request.customer.fullName || "Unknown customer"}</h2>
            <p class="lede">${request.jewelry.productCategory || request.jewelry.requestType}</p>
          </div>
          <dl class="summary-list">
            <div><dt>Date submitted</dt><dd>${new Date(request.createdAt).toLocaleString()}</dd></div>
            <div><dt>Email</dt><dd>${request.customer.email}</dd></div>
            <div><dt>Phone</dt><dd>${request.customer.phone}</dd></div>
            <div><dt>Budget</dt><dd>${request.jewelry.budget || "Not provided"}</dd></div>
            <div><dt>Status</dt><dd>Saved in browser preview</dd></div>
          </dl>
          <p class="quote-note">${request.jewelry.notes || "No notes provided."}</p>
        </article>
      `).join("") : `<div class="empty-state">No customer requests saved yet.</div>`;
  };
  const productFromCard = (card) => {
    const product = { id: card.dataset.id };
    card.querySelectorAll("[data-field]").forEach((field) => {
      product[field.dataset.field] = field.value;
    });
    product.tags = String(product.tags || "").split(",").map((tag) => tag.trim()).filter(Boolean);
    product.price = product.priceLabel === "Request Pricing" ? "Request Pricing" : Number(String(product.priceLabel).replace(/[^\d]/g, ""));
    return product;
  };
  const renderDrafts = async () => {
    const host = document.getElementById("admin-product-drafts");
    const drafts = JSON.parse(localStorage.getItem("donProductDrafts") || "[]");
    host.innerHTML = drafts.length ? drafts.map((draft) => productEditor(draft, "approve", "Approve Product")).join("") : `<div class="empty-state">No product drafts are currently saved in this browser.</div>`;
  };
  const renderApproved = async () => {
    const host = document.getElementById("admin-approved-products");
    const approved = JSON.parse(localStorage.getItem("donApprovedProducts") || "[]");
    host.innerHTML = approved.length ? approved.map((product) => productEditor(product, "save-product", "Approved")).join("") : `<div class="empty-state">No approved imported products are currently saved in this browser.</div>`;
  };
  const renderDiamondApiStatus = async () => {
    const host = document.getElementById("diamond-api-status");
    host.innerHTML = `
        <article class="admin-request-card">
          <div>
            <p class="eyebrow">Website Status</p>
            <h2>Inventory display ready</h2>
            <p class="lede">The website is ready for production data and policy-supported checkout review.</p>
          </div>
          <dl class="summary-list">
            <div><dt>Status</dt><dd>Visual preview active</dd></div>
            <div><dt>Products</dt><dd>${allProducts().length}</dd></div>
            <div><dt>Diamond records</dt><dd>${liveDiamondInventory.length}</dd></div>
          </dl>
          <p class="quote-note">Confirm live inventory and payment processor settings before going live.</p>
        </article>
      `;
  };
  const renderJewelrySyncStatus = async () => {
    const host = document.getElementById("jewelry-sync-status");
    try {
      const response = await fetchWithTimeout("/api/admin/jewelry-sync");
      const payload = await response.json();
      const sync = payload.latest;
      host.innerHTML = sync ? `
        <article class="admin-request-card">
          <div><p class="eyebrow">Latest supplier jewelry sync</p><h2>${htmlSafe(sync.status)}</h2></div>
          <dl class="summary-list">
            <div><dt>Last sync</dt><dd>${new Date(sync.completed_at || sync.started_at).toLocaleString()}</dd></div>
            <div><dt>Added</dt><dd>${sync.added_count}</dd></div>
            <div><dt>Updated</dt><dd>${sync.updated_count}</dd></div>
            <div><dt>Hidden / unavailable</dt><dd>${sync.hidden_count}</dd></div>
            <div><dt>Failed</dt><dd>${sync.failed_count}</dd></div>
          </dl>
          ${(sync.errors || []).length ? `<pre class="admin-sync-errors">${htmlSafe(JSON.stringify(sync.errors, null, 2))}</pre>` : `<p class="quote-note">No sync errors recorded.</p>`}
        </article>
      ` : `<div class="empty-state">${payload.configured === false ? "DATABASE_URL must be configured before the first sync." : "No jewelry sync has run yet."}</div>`;
    } catch (error) {
      host.innerHTML = `<div class="empty-state">${htmlSafe(error.message || "Could not load sync status.")}</div>`;
    }
  };
  document.getElementById("refresh-admin-requests").addEventListener("click", render);
  document.getElementById("refresh-diamond-api-status").addEventListener("click", renderDiamondApiStatus);
  document.getElementById("run-jewelry-sync").addEventListener("click", async (event) => {
    const button = event.currentTarget;
    const keyInput = document.getElementById("admin-sync-key");
    const key = keyInput.value.trim() || sessionStorage.getItem("donAdminSyncKey") || "";
    if (!key) {
      window.alert("Enter the admin sync key first.");
      return;
    }
    sessionStorage.setItem("donAdminSyncKey", key);
    button.disabled = true;
    button.textContent = "Syncing all API jewelry...";
    try {
      const response = await fetchWithTimeout("/api/admin/jewelry-sync", {
        method: "POST",
        headers: { "x-admin-key": key },
      }, 120000);
      const payload = await response.json();
      if (!response.ok || !payload.ok) throw new Error(payload.message || payload.error || "Sync failed.");
      await renderJewelrySyncStatus();
    } catch (error) {
      window.alert(error.message || "Jewelry sync failed.");
    } finally {
      button.disabled = false;
      button.textContent = "Refresh API Products Now";
    }
  });
  document.getElementById("refresh-product-drafts").addEventListener("click", renderDrafts);
  document.getElementById("refresh-approved-products").addEventListener("click", renderApproved);
  document.getElementById("scan-product-photos").addEventListener("click", async () => {
    await renderDrafts();
  });
  document.getElementById("admin-product-drafts").addEventListener("click", async (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const card = button.closest(".admin-product-card");
    if (button.dataset.action === "approve") {
      const drafts = JSON.parse(localStorage.getItem("donProductDrafts") || "[]");
      const approved = JSON.parse(localStorage.getItem("donApprovedProducts") || "[]");
      localStorage.setItem("donProductDrafts", JSON.stringify(drafts.filter((draft) => draft.id !== card.dataset.id)));
      localStorage.setItem("donApprovedProducts", JSON.stringify([productFromCard(card), ...approved]));
      await loadApprovedProducts();
      await renderDrafts();
      await renderApproved();
    }
    if (button.dataset.action === "delete-draft") {
      const drafts = JSON.parse(localStorage.getItem("donProductDrafts") || "[]");
      localStorage.setItem("donProductDrafts", JSON.stringify(drafts.filter((draft) => draft.id !== card.dataset.id)));
      await renderDrafts();
    }
  });
  document.getElementById("admin-approved-products").addEventListener("click", async (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const card = button.closest(".admin-product-card");
    if (button.dataset.action === "delete-product") {
      const approved = JSON.parse(localStorage.getItem("donApprovedProducts") || "[]");
      localStorage.setItem("donApprovedProducts", JSON.stringify(approved.filter((product) => product.id !== card.dataset.id)));
      await loadApprovedProducts();
      await renderApproved();
    }
  });
  render();
  renderDiamondApiStatus();
  renderJewelrySyncStatus();
  renderDrafts();
  renderApproved();
}

function cartPage() {
  const total = cartTotal();
  const payableItems = payableCartItems();
  const payableTotal = cartTotal(payableItems);
  shell(`
    <main>
      ${pageHero("Cart", "Your saved custom jewelry")}
      <section class="cart-layout">
        <div class="cart-list">
          ${cart.length ? cart.map((item, index) => `
            <article class="cart-item">
              <img src="${cartImageSrc(item)}" alt="">
              <div><h3>${item.name}</h3><p class="muted">${Object.entries(item.selections).map(([k,v]) => `${k}: ${v}`).join(" | ")}</p></div>
              <strong>${item.pricingNote || money.format(numericPrice(item.price) * Math.max(1, Number(item.quantity || 1)))}</strong>
              <div class="quantity-controls" aria-label="Quantity controls">
                <button class="icon-button" type="button" data-quantity="${index}" data-step="-1">-</button>
                <span>Qty ${Math.max(1, Number(item.quantity || 1))}</span>
                <button class="icon-button" type="button" data-quantity="${index}" data-step="1">+</button>
              </div>
              <button class="icon-button" type="button" data-remove="${index}">Remove</button>
            </article>`).join("") : `<div class="empty-state">Your cart is empty. Start with a custom jewelry piece.</div>`}
        </div>
        <aside class="summary-panel">
          <p class="eyebrow">Cart Summary</p>
          <div class="price-row"><span>Total</span><strong>${money.format(total)}</strong></div>
          ${payableItems.length ? stripePayButton(payableTotal) : ""}
          <a class="button button-gold" href="${cart.length ? "#/checkout" : "#/products"}">${cart.length ? "Checkout" : "Shop Now"}</a>
        </aside>
      </section>
      ${aboutUs()}
    </main>
  `);
  document.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      cart.splice(Number(button.dataset.remove), 1);
      localStorage.setItem("donCart", JSON.stringify(cart));
      cartPage();
    });
  });
  document.querySelectorAll("[data-quantity]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.quantity);
      const step = Number(button.dataset.step);
      cart[index].quantity = Math.max(1, Number(cart[index].quantity || 1) + step);
      localStorage.setItem("donCart", JSON.stringify(cart));
      cartPage();
    });
  });
}

function checkout() {
  const total = cartTotal();
  const payableItems = payableCartItems();
  const payableTotal = cartTotal(payableItems);
  const cartSummary = cart.length
    ? cart.map((item) => `${item.name} - ${item.pricingNote || money.format(item.price)} - ${Object.entries(item.selections || {}).map(([key, value]) => `${key}: ${value}`).join(" | ")}`).join("\n")
    : "No saved cart items. Customer is requesting checkout/contact support.";
  shell(`
    <main>
      ${pageHero("Checkout", "Submit your jewelry inquiry", "Send your saved items and contact details so The Don Jewelers & Jewelry can confirm pricing, availability, deposit, and next steps.")}
      <section class="cart-layout">
        <div class="cart-list">
          ${cart.length ? cart.map((item) => `
            <article class="cart-item">
              <img src="${cartImageSrc(item)}" alt="">
              <div><h3>${item.name}</h3><p class="muted">${Object.entries(item.selections || {}).map(([key, value]) => `${key}: ${value}`).join(" | ")}</p></div>
              <strong>${item.pricingNote || money.format(item.price)}</strong>
            </article>
          `).join("") : `<div class="empty-state">No saved items yet. Submit the form below for direct checkout and quote support.</div>`}
        </div>
        <aside class="summary-panel">
          <p class="eyebrow">Checkout Summary</p>
          <div class="price-row"><span>Estimated total</span><strong>${cart.length ? money.format(total) : "Request Pricing"}</strong></div>
          ${payableItems.length ? stripePayButton(payableTotal) : ""}
          <p class="quote-note">Final pricing is confirmed after review of metal, stone availability, sizing, and custom details.</p>
          <div class="checkout-policy-support">
            <strong>Before payment or deposit</strong>
            <p>Review the policies below for returns, custom orders, shipping, payments, financing, warranty, privacy, and terms.</p>
            ${policyLinksHtml()}
          </div>
        </aside>
      </section>
      <section class="custom-form-section">
        ${customRequestForm({ formId: "checkout-form", requestType: "Product Inquiry Form", productCategory: "Checkout / Cart Inquiry", productName: "Website checkout inquiry" })}
      </section>
      ${aboutUs()}
    </main>
  `);
  const form = document.getElementById("checkout-form");
  if (form) {
    form.dataset.cartSummary = cartSummary;
    const notes = form.elements.notes;
    if (notes && cart.length) notes.value = `I would like to move forward with these saved items:\n${cartSummary}`;
  }
  wireRequestForm("checkout-form", "Thank you for your checkout inquiry. Your request has been received and is currently under review. We will contact you regarding pricing, payment, and next steps.");
}

function paymentStatusPage(status) {
  const success = status === "success";
  shell(`
    <main>
      ${pageHero(success ? "Payment Received" : "Checkout Canceled", success ? "Thank you for your payment" : "Your checkout was not completed", success ? "Your Stripe payment page has confirmed checkout. Please submit or email any custom sizing, stone, shipping, or design details so we can match payment to the correct order." : "No payment was completed. You can return to cart, request a quote, or contact us for help finishing the order.", `
        <div class="hero-actions">
          <a class="button button-gold" href="#/cart">Return to Cart</a>
          <a class="button button-dark" href="#/checkout">Checkout Details</a>
          <a class="button button-light" href="#/request/contact?intent=order-payment-support">Email Support</a>
        </div>
      `)}
      ${aboutUs()}
    </main>
  `);
}

const policyPages = {
  "refund-return-policy": {
    title: "Refund & Return Policy",
    seo: "Refund and return policy for The Don Jewelers & Jewelry ready-made jewelry, custom jewelry, diamonds, watches, deposits, and approved returns.",
    intro: "This policy is designed to be clear for customers and protective of custom jewelry work. Please contact us before sending any item back.",
    sections: [
      ["Ready-Made Jewelry", "Ready-made jewelry may be eligible for return only if the item is unworn, undamaged, unaltered, in its original condition, and approved by The Don Jewelers & Jewelry before return shipment or drop-off."],
      ["Final Sale Items", "Custom jewelry, made-to-order items, resized items, engraved items, special orders, loose diamonds, and watches are final sale unless there is a verified issue caused by our workmanship."],
      ["Deposits", "Deposits may be non-refundable once sourcing, CAD design, production, consultation work, or other custom work has started. Deposits may be applied toward the approved order according to the order agreement."],
      ["Refund Method and Timing", "Approved refunds are issued back to the original payment method only. Refund processing may take 5 to 10 business days after approval, and additional timing may depend on the card issuer or payment processor."],
      ["Non-Refundable Fees", "Shipping fees, rush fees, CAD fees, appraisal fees, sizing fees, and financing fees are non-refundable unless otherwise required by applicable law."],
      ["Return Approval Required", "Customers must contact us before sending anything back. Returns without approval may be refused, returned to sender, or delayed. Chargebacks made without contacting us first may delay resolution because we need order records, photos, and communication history to review the issue."],
    ],
  },
  "payment-policy": {
    title: "Payment Policy",
    seo: "Payment policy for The Don Jewelers & Jewelry including deposits, cleared payments, fraud prevention, custom balances, and processor verification.",
    intro: "Payments are handled carefully because fine jewelry and custom work involve high-value materials, private sourcing, and fraud-prevention review.",
    sections: [
      ["Accepted Payments", "We accept major credit and debit cards and approved payment processors. Available payment methods may depend on order type, location, payment amount, and processor approval."],
      ["Payment Before Release", "Full payment is required before shipping, pickup, delivery, or release of any jewelry. Custom orders may require a deposit before work begins, and the remaining balance must be paid before delivery or pickup."],
      ["Cleared Payments", "Orders are not confirmed until payment clears. Payment verification may be required for high-value jewelry, custom work, diamonds, watches, or suspicious transactions."],
      ["Billing Verification", "Billing and shipping information must match when required by the payment processor, fraud tools, or our internal review. Fraud prevention checks may delay processing."],
      ["Order Review", "The Don Jewelers & Jewelry reserves the right to cancel suspicious, unverifiable, high-risk, abusive, or policy-violating orders. If an order is canceled, eligible payments will be handled through the original payment method."],
    ],
  },
  "shipping-policy": {
    title: "Shipping Policy",
    seo: "Shipping policy for insured jewelry shipments, signature delivery, processing timelines, carrier delays, and delivery issue reporting.",
    intro: `The Don Jewelers & Jewelry serves ${serviceArea}. Shipping timing depends on the item, payment status, and production status.`,
    sections: [
      ["Insured Shipping", "All shipments are insured. Signature may be required for delivery, especially for high-value jewelry, diamonds, watches, or custom pieces."],
      ["Processing Time", "Processing time depends on item type. Ready-made items may ship faster. Custom items ship after production is completed, quality review is finished, and the remaining balance is paid."],
      ["Carrier Delays", "We are not responsible for delays caused by shipping carriers, weather, incorrect addresses, security holds, customs processes when applicable, or missed delivery attempts."],
      ["Address Accuracy", "Customers are responsible for providing a complete and accurate shipping address. Address changes may require identity or payment verification before shipment."],
      ["Delivery Inspection", "Customers must inspect the package upon delivery. Any shipping issue, damaged package, missing package, or delivery concern must be reported immediately so we can review the shipment and insurance process."],
    ],
  },
  "custom-order-policy": {
    title: "Custom Order Policy",
    seo: "Custom order policy for The Don Jewelers & Jewelry CAD approvals, design changes, production timelines, final sale terms, and client responsibilities.",
    intro: "Custom orders are created specifically for the client and require careful approval before production.",
    sections: [
      ["Made for the Client", "Custom orders are made specifically for the client. They may include engagement rings, diamond jewelry, pendants, bracelets, earrings, watches, nameplates, grillz, or other private jeweler projects."],
      ["CAD and Design Approval", "CAD or design approval is required before production when applicable. Once the client approves CAD, design direction, stone details, spelling, sizing, or layout, changes may cost extra and may extend the timeline."],
      ["Timeline", "Production timeline is usually 7 to 21 business days depending on complexity. Delays may happen due to diamond sourcing, casting, setting, polishing, certification, shipping, holidays, vendor schedules, or requested changes."],
      ["Final Sale", "Custom orders are final sale once production starts, except for a verified workmanship issue. Deposits may be non-refundable once design, sourcing, or production work has started."],
      ["Client Responsibility", "The client is responsible for confirming spelling, ring size, metal color, stone size, stone type, design details, and delivery information before approval. The Don Jewelers & Jewelry is not responsible for errors approved by the client."],
    ],
  },
  "warranty-policy": {
    title: "Warranty Policy",
    seo: "Warranty policy for The Don Jewelers & Jewelry manufacturing defects, jewelry care, excluded damage, inspections, and paid repairs.",
    intro: "Fine jewelry should be worn and cared for responsibly. Our warranty is limited to manufacturing defects only.",
    sections: [
      ["Covered Issues", "Warranty coverage applies to verified manufacturing defects only. Warranty review may require photos, inspection, order records, and reasonable time to evaluate the piece."],
      ["Not Covered", "Warranty does not cover normal wear, accidental damage, missing stones from impact, bent prongs, broken chains, resizing by another jeweler, unauthorized repairs, loss, theft, misuse, neglect, or damage from improper wear."],
      ["Jewelry Care", "Jewelry should be inspected regularly. Customers should avoid chemicals, hard impact, heavy lifting, sports, sleeping with fine jewelry, showering with fine jewelry, and activities that can bend prongs, weaken chains, or loosen stones."],
      ["Repairs", "Repairs outside warranty may be available for a fee. Any repair by another jeweler or unauthorized service provider may void warranty review for the affected area."],
    ],
  },
  terms: {
    title: "Terms & Conditions",
    seo: "Terms and conditions for The Don Jewelers & Jewelry purchases, custom orders, photos, pricing, disputes, fraud prevention, and policy agreement.",
    intro: "By purchasing, placing a deposit, approving a design, submitting an order request, or using this website, the customer agrees to these terms and all posted policies.",
    sections: [
      ["Policy Agreement", "Customers agree to all policies before purchasing, placing a deposit, approving CAD, requesting shipping, or submitting custom order details."],
      ["Product Photos and Natural Variation", "Product photos may vary slightly due to lighting, screen settings, photography, and natural variations. Diamond and gemstone weights may be approximate unless certified by a grading report or written order document."],
      ["Appraisals and Market Values", "Appraisals are estimates and may vary by market, appraiser, date, metal market, gemstone availability, and resale conditions. Appraisals are not a guarantee of resale value."],
      ["Pricing and Availability", "Prices may change based on metal market, diamond availability, gemstone availability, labor, custom requirements, vendor pricing, and order complexity. Errors in pricing, product information, or availability may be corrected."],
      ["Order Refusal or Cancellation", "The Don Jewelers & Jewelry may refuse or cancel orders for fraud, abuse, payment issues, unverifiable identity, chargeback risk, policy violations, or unavailable materials."],
      ["Dispute Resolution", "Any disputes should first be handled by contacting The Don Jewelers & Jewelry directly at the phone number or email listed on this website. Direct communication helps resolve order questions, shipping issues, payment concerns, and misunderstandings faster than third-party disputes."],
      ["Protective Purpose", "These policies are written to help protect customers and the business against fraud, chargebacks, payment abuse, shipping issues, unclear custom approvals, and misunderstandings."],
    ],
  },
  "privacy-policy": {
    title: "Privacy Policy",
    seo: "Privacy policy for The Don Jewelers & Jewelry customer information, payments, shipping, financing, communication, and third-party service providers.",
    intro: "We respect customer privacy and collect only the information needed to communicate, process orders, arrange shipping, and support jewelry services.",
    sections: [
      ["Information We Collect", "We collect customer information needed to process orders, appointments, shipping, payments, fraud checks, custom requests, and communication. This may include name, phone number, email, shipping address, billing information, order details, design notes, ring size, uploaded inspiration images, and communication history."],
      ["Payment Information", "Payment details are processed securely by third-party payment processors. The Don Jewelers & Jewelry does not sell customer payment information."],
      ["How Information Is Used", "Customer information may be used to provide quotes, confirm custom details, process payments, arrange insured shipping, communicate about orders, review fraud risk, handle support, and maintain order records."],
      ["Sharing Information", "We do not sell customer personal information. Customer information may be shared only with payment processors, shipping carriers, financing providers, fraud prevention tools, insurers, professional service providers, or service providers needed to complete the order or operate the website."],
      ["Customer Contact", "By submitting a form, placing an order, or contacting us, customers authorize The Don Jewelers & Jewelry to respond by phone, text, or email about the inquiry or order."],
    ],
  },
  "financing-policy": {
    title: "Financing Policy",
    seo: "Financing policy for The Don Jewelers & Jewelry third-party financing, approvals, payment schedules, refunds, and customer responsibility.",
    intro: "Financing options, when available, are offered through third-party providers and are subject to their approval process and terms.",
    sections: [
      ["Third-Party Providers", "Financing is handled by third-party providers such as Affirm, Klarna, Afterpay, or other approved partners when available. The providers control application review, approval, terms, interest, payment schedule, fees, and account servicing."],
      ["No Guaranteed Approval", "The Don Jewelers & Jewelry does not guarantee financing approval. Financing availability may depend on provider rules, customer eligibility, purchase amount, location, and order type."],
      ["Customer Responsibility", "Customers remain responsible for any financing agreement they enter with a provider. Questions about payments, late fees, interest, credit reporting, or financing account terms should be directed to the financing provider."],
      ["Refunds on Financed Orders", "Refunds on financed orders are handled according to the financing provider's rules and timeline. Approval of a return or refund by The Don Jewelers & Jewelry does not automatically cancel a customer's financing obligations unless processed and confirmed through the provider."],
    ],
  },
};

function policyPage(path) {
  const policy = policyPages[path] || policyPages.terms;
  setSeo(`${policy.title} | ${businessName}`, policy.seo);
  shell(`
    <main>
      ${pageHero("Policy", policy.title, policy.intro, `<button class="button button-gold" id="print-terms" type="button">Print / Save Policy</button>`)}
      <section class="terms-viewer-section">
        <article class="terms-document policy-document">
          <p class="terms-intro">${policy.intro}</p>
          <dl class="summary-list policy-business-card">
            <div><dt>Business</dt><dd>${businessName}</dd></div>
            <div><dt>Phone</dt><dd><a href="${phoneHref}">${phoneDisplay}</a></dd></div>
            <div><dt>Email</dt><dd><a href="mailto:${contactEmail}">${contactEmail}</a></dd></div>
            <div><dt>Service Area</dt><dd>${serviceArea}</dd></div>
          </dl>
          ${policy.sections.map(([heading, body]) => `<h2>${heading}</h2><p>${body}</p>`).join("")}
          <h2>Questions Before Purchase</h2>
          <p>Please contact ${businessName} before purchasing, returning, disputing, or approving a custom order if anything is unclear. We want every customer to understand the order, payment, delivery, and custom approval process before moving forward.</p>
          ${policyLinksHtml()}
        </article>
      </section>
    </main>
  `);
  document.getElementById("print-terms")?.addEventListener("click", () => window.print());
}

function router() {
  const hash = location.hash || "#/";
  const cleanHash = hash.slice(2);
  const [path, query = ""] = cleanHash.split("?");
  const parts = path.split("/");
  const params = new URLSearchParams(query);
  if (hash === "#/" || hash === "") return home();
  if (path === "build-engagement-ring") return engagementRingBuilder();
  if (path === "select-diamond") return diamondInventoryPage(params);
  if (path === "products") return databaseCategoryPage("all", "All Luxury Jewelry");
  if (path === "admin") return adminDashboard();
  if (parts[0] === "request") return customRequestPage(parts[1], params);
  if (parts[0] === "category") return category(parts[1]);
  if (parts[0] === "catalog-jewelry") return catalogJewelryDetail(parts[1]);
  if (parts[0] === "product") return productDetail(parts[1]);
  if (path === "custom-orders") return customOrders();
  if (path === "cart") return cartPage();
  if (path === "checkout") return checkout();
  if (path === "checkout-success") return paymentStatusPage("success");
  if (path === "checkout-cancel") return paymentStatusPage("cancel");
  if (policyPages[path]) return policyPage(path);
  home();
}

function scrollRouteToTop() {
  requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }));
}

function navigate() {
  router();
  scrollRouteToTop();
}

window.addEventListener("hashchange", navigate);
loadApprovedProducts().finally(() => {
  navigate();
  hideSplashScreen();
});

