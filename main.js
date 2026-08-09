const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const contactEmail = "thedonjewelersandjewelry@gmail.com";
const phoneDisplay = "(484) 761-2008";
const phoneHref = "tel:+14847612008";
const businessName = "The Don Jewelers & Jewelry";
const brandAliases = ["The Don Jewelers", "The Don Jewelers and Jewelry", "Don Jewelers", "The Don Jewelers NYC", "The Don Jewelers & Jewelry NYC", "Don Jewelers NYC"];
const serviceArea = "NYC, Manhattan, the Diamond District, the Tri-State area, Easton PA, Bethlehem PA, Allentown PA, Pennsylvania, Florida clients by virtual consultation and insured shipping, and clients nationwide";
const stripePaymentLink = "https://buy.stripe.com/14A5kEeX9aYgfrKfCw5kk00";
const siteUrl = "https://www.thedonjewelersandjewelrynyc.com";
const gaMeasurementId = "G-68DJH1C3QF";
const asset = (name) => `/${name}`;
const mediaSrc = (name) => /^https?:\/\//i.test(String(name || "")) ? name : asset(name);
const fallbackImage = "don-logo.jpg";
const defaultSeoImage = "queen-aurelia-oval-marquise-ring.jpeg";
const primarySeoImage = "yellow-gold-diamond-cuban-link-bracelet.jpeg";
const featuredSeoImages = [
  primarySeoImage,
  "queen-aurelia-oval-marquise-ring.jpeg",
  "engagement-ring-feature.jpg",
  "triple-row-diamond-tennis-bracelet.jpeg",
  "diamond-banner.jpg",
];
const imageSafety = `loading="lazy" decoding="async" fetchpriority="low" width="720" height="720" onerror="this.onerror=null;this.src='${asset(fallbackImage)}';"`;
const instagramHandle = "@los_thejeweler";
const googleBusinessProfileUrl = "https://share.google/8uvOiIx224kLzQU3Y";
const googleBusinessProfileUrlSecondary = "https://share.google/z4jwjnAfyaquvfGCz";
const googleReviewUrl = googleBusinessProfileUrl;
const appointmentUrl = "#/request/appointment";
const officialSocialLinks = [
  "https://www.instagram.com/los_thejeweler/",
  "https://www.facebook.com/profile.php?id=100089172553878",
  googleBusinessProfileUrl,
];
const verifiedGoogleReviews = [
  { name: "Catlin Rogers", rating: 5, profile: "Google Profile · 4 reviews · 4 photos", featured: true, photos: [{ src: "/catlin-rogers-review-ring.png", alt: "Catlin Rogers wearing her custom red gemstone engagement ring" }, { src: "/catlin-rogers-review-proposal.png", alt: "Catlin Rogers celebrating her engagement" }], text: "I couldn’t be happier with my custom engagement ring from Don Jewelers & Jewelry! From the very beginning, the entire process was smooth, professional, and personalized. They took the time to listen to exactly what we wanted and brought our vision to life beautifully. The craftsmanship is absolutely stunning. Every detail is perfect, and the ring sparkles even more in person. I’ve received so many compliments, and I can’t stop looking at it! It’s clear they truly care about the quality of their work and making each piece special. If you’re looking for a trustworthy jeweler who creates beautiful custom jewelry and provides outstanding customer service, I highly recommend Don Jewelers & Jewelry. They made such an important moment in our lives even more memorable. Thank you for creating a ring I’ll cherish forever! Located in Lehigh Valley, PA!" },
  { name: "Chris Torres", rating: 5, profile: "Google Profile · 5 reviews", text: "This is the best jeweler in town. This place is trustworthy, kind, and truly experienced. The Don made it happen—my wife’s engagement ring came out extremely beautiful. This is all 100% real jewelry; you won’t have to go anywhere else! Kay Jewelers has nothing on The Don!" },
  { name: "Alex Cruz", rating: 5, profile: "Google Profile · 5 reviews", text: "Los helped me out with a custom diamond pinky ring that looks great and helps represent the brand well! Thanks again!!" },
  { name: "Los", rating: 5, profile: "Google Profile · 5 reviews", text: "Had the wonderful opportunity to work with Carlos on a giveaway. I won a beautiful gemstone and Carlos turned it into a ring." },
  { name: "Matthew Haddad", rating: 5, profile: "Google Profile · 5 reviews", text: "Carlos is a 10/10 guy. Easy to deal with and completes all the orders I have in any reasonable timeframe!" },
  { name: "Johnny Billz", rating: 5, profile: "Google Profile · 5 reviews", text: "Carlos is not only efficient but knowledgeable about everything that he has crafted. Ensures that his clients get exactly what they are looking for! Highly recommend." },
  { name: "Sasha", rating: 5, profile: "Google Profile · 4 reviews", text: "This is the jeweler to go to for a custom engagement ring and lab grown diamond. From the design to the pricing, the experience was phenomenal." },
  { name: "Ahmed Mohammed", rating: 5, profile: "Google Profile · 4 reviews", text: "Ordered a custom engagement ring. The owner, Carlos, was super knowledgeable, accommodating, and very fair on price, especially for the quality he provides. Truly a gem to work with." },
  { name: "Karen Meneses", rating: 5, profile: "Google Profile · 4 reviews", text: "Ordered something from here. He delivered in a timely manner and made sure I was happy with my piece." },
];
const locationTargets = ["NYC Diamond District", "Manhattan NY", "New York City", "Tri-State Area", "New York", "New Jersey", "Connecticut", "Lehigh Valley PA", "Easton PA", "Bethlehem PA", "Allentown PA", "Pennsylvania", "United States"];
const primaryKeywords = ["custom jeweler", "private jeweler", "engagement rings", "diamond engagement rings", "custom engagement rings", "diamond tennis chain", "diamond tennis bracelet", "lab grown diamonds", "natural diamonds", "diamond pendant", "diamond cross", "gold chains", "14k gold", "18k gold", "white gold", "yellow gold", "rose gold", "custom jewelry", "diamond jewelry", "wedding rings", "wedding bands", "bridal jewelry", "fine jewelry", "luxury jewelry", "jewelry financing", "diamond dealer", "NYC jeweler", "Manhattan jeweler", "Diamond District jeweler", "Easton jeweler", "Lehigh Valley jeweler", "custom jewelry NYC", "engagement rings NYC", "tennis chains NYC", "diamond chains", "lab diamond rings", "custom diamond pendant", "watch dealer", "Rolex", "Cartier", "Audemars Piguet", "Patek Philippe", "jewelry gifts", "anniversary jewelry", "birthday jewelry", "custom grillz", "CAD jewelry design", "diamond consultation"];

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
  ["start-custom-ring-design", "Start Your Custom Ring Design", "engagement-ring-feature.jpg"],
  ["select-diamond", "Live Diamond Selection", "live-diamond-selection.jpeg"],
  ["cvd-lab-grown-diamond-jewelry", "CVD Lab-Grown Diamond Jewelry", "https://dna3.dnalinks.in/TJ4594NCW/1.jpg"],
  ["engagement-rings", "Engagement Rings", "emerald-accent-engagement-ring.jpeg"],
  ["wedding-bands", "Wedding Bands", "mens-asscher-cut-filigree-diamond-wedding-band.jpg"],
  ["diamond-tennis-chains", "Diamond Tennis Chains", "triple-row-diamond-tennis-bracelet.jpeg"],
  ["diamond-tennis-bracelets", "Diamond Tennis Bracelets", "diamond-bracelet.png"],
  ["mens-rings", "Men's Rings", "medusa-diamond-signet-ring.jpeg"],
  ["womens-rings", "Women's Rings", "ring-product-black-02.png"],
  ["mens-earrings", "Men's Earrings", "https://dna3.dnalinks.in/TJ6671ESC/1.jpg"],
  ["womens-earrings", "Women's Earrings", "blue-monarch-diamond-studs.jpeg"],
  ["pendants-charms", "Pendants / Charms", "large-round-diamond-cross-pendant.jpeg"],
  ["chains", "Gold Chains", "yellow-gold-rope-chain-triple.jpeg"],
  ["necklaces", "Necklaces", "red-diamond-necklace.png"],
  ["bracelets", "Bracelets", "diamond-bracelet.png"],
  ["anklets", "Anklets", "bracelet-05.png"],
  ["watches", "Watches", "iced-cartier-santos-watch.jpeg"],
  ["custom-jewelry", "Custom Jewelry", "custom-dejaun-diamond-name-pendant.jpeg"],
  ["custom-orders", "Custom Orders", "don-logo.jpg"],
];

const globalFaqs = [
  ["Do you make custom engagement rings?", "Yes. The Don Jewelers & Jewelry designs custom engagement rings with lab grown diamonds, natural diamonds, 14K gold, 18K gold, platinum, CAD design, and private diamond sourcing."],
  ["Do you serve NYC and the Diamond District?", "Yes. The business serves clients looking for an NYC jeweler, Manhattan jeweler, Diamond District jeweler, private jeweler, and appointment-only jewelry consultation."],
  ["Do you work with clients in Pennsylvania?", "Yes. The Don Jewelers & Jewelry serves Lehigh Valley PA, Easton PA, Bethlehem PA, Allentown PA, and clients throughout Pennsylvania."],
  ["Can I finance jewelry?", "Jewelry financing may be available through third-party providers depending on approval, purchase amount, order type, and provider terms."],
  ["Do you source lab grown and natural diamonds?", "Yes. Clients can request lab grown diamonds, natural diamonds, IGI or GIA certified stones, VVS, VS, specific shapes, color ranges, and budget targets."],
  ["Do you offer CAD jewelry design?", "Yes. CAD jewelry design is available for custom rings, pendants, chains, bracelets, name pendants, grillz, and other one-of-one jewelry projects."],
];

const servicePages = [
  ["custom-engagement-rings", "Custom Engagement Rings", "Custom engagement rings in NYC, Manhattan, the Diamond District, and Lehigh Valley PA with lab grown or natural diamonds, CAD design, and private jeweler guidance.", "queen-aurelia-oval-marquise-ring.jpeg", ["engagement rings NYC", "custom engagement rings", "diamond engagement rings", "bridal jewelry"], ["custom-jewelry", "lab-diamond-rings", "natural-diamond-rings"]],
  ["lab-diamond-rings", "Lab Diamond Rings", "Lab diamond rings with IGI certified stones, VVS and VS options, 14K or 18K gold, platinum settings, and custom CAD ring design.", "queen-aurelia-oval-marquise-ring.jpeg", ["lab diamond rings", "lab grown diamonds", "diamond engagement rings"], ["custom-engagement-rings", "lab-diamonds-vs-natural-diamonds", "diamond-education"]],
  ["natural-diamond-rings", "Natural Diamond Rings", "Natural diamond rings sourced for clients who want GIA or IGI paperwork, investment-quality details, and private jeweler consultation.", "classic-marquise-engagement-ring.jpeg", ["natural diamonds", "diamond dealer", "private jeweler"], ["custom-engagement-rings", "diamond-education", "lab-diamonds-vs-natural-diamonds"]],
  ["diamond-tennis-chains", "Diamond Tennis Chains", "Diamond tennis chains in 14K and 18K yellow gold, white gold, and rose gold with lab grown or natural diamond options.", "triple-row-diamond-tennis-bracelet.jpeg", ["diamond tennis chain", "tennis chains NYC", "diamond chains"], ["diamond-tennis-bracelets", "custom-jewelry", "jewelry-financing"]],
  ["diamond-tennis-bracelets", "Diamond Tennis Bracelets", "Diamond tennis bracelets with custom carat weight, pointer size, gold color, clasp style, and financing support.", "triple-row-diamond-tennis-bracelet.jpeg", ["diamond tennis bracelet", "diamond jewelry", "luxury jewelry"], ["diamond-tennis-chains", "jewelry-care", "jewelry-financing"]],
  ["diamond-pendants", "Diamond Pendants", "Custom diamond pendants, initials, name pendants, religious pendants, anniversary jewelry, birthday jewelry, and custom diamond pendant design.", "saint-michael-diamond-angel-pendant.jpeg", ["diamond pendant", "custom diamond pendant", "jewelry gifts"], ["diamond-crosses", "custom-cad-design", "custom-jewelry"]],
  ["diamond-crosses", "Diamond Crosses", "Diamond cross pendants and crucifix pendants in yellow gold, white gold, rose gold, 14K gold, 18K gold, lab diamonds, and natural diamonds.", "large-round-diamond-cross-pendant.jpeg", ["diamond cross", "cross pendants", "diamond pendant"], ["diamond-pendants", "custom-jewelry", "jewelry-financing"]],
  ["custom-jewelry", "Custom Jewelry", "Custom jewelry by a private jeweler for rings, pendants, chains, bracelets, earrings, watches, grillz, CAD jewelry design, and diamond consultation.", "custom-dejaun-diamond-name-pendant.jpeg", ["custom jewelry", "custom jeweler", "custom jewelry NYC", "custom grillz"], ["custom-cad-design", "private-jeweler", "appointment-only-jeweler"]],
  ["jewelry-financing", "Jewelry Financing", "Jewelry financing support for engagement rings, diamond tennis chains, tennis bracelets, pendants, watches, and custom jewelry orders.", "don-logo.jpg", ["jewelry financing", "engagement rings", "luxury jewelry"], ["custom-engagement-rings", "diamond-tennis-chains", "diamond-pendants"]],
  ["diamond-education", "Diamond Education", "Learn diamond grading, the 4Cs, VVS vs VS clarity, lab grown diamonds, natural diamonds, diamond shapes, and buying strategy.", "round-diamond-studs.jpeg", ["diamond education", "how diamonds are graded", "VVS diamonds"], ["lab-diamonds-vs-natural-diamonds", "lab-diamond-rings", "natural-diamond-rings"]],
  ["lab-diamonds-vs-natural-diamonds", "Lab Diamonds vs Natural Diamonds", "Compare lab diamonds vs natural diamonds by origin, price, certification, appearance, resale considerations, and custom jewelry use.", "yellow-gold-oval-pave-engagement-ring.jpeg", ["lab diamonds vs natural diamonds", "lab grown diamonds", "natural diamonds"], ["diamond-education", "lab-diamond-rings", "natural-diamond-rings"]],
  ["jewelry-care", "Jewelry Care", "Jewelry care guidance for engagement rings, diamond chains, tennis bracelets, gold jewelry, watches, pendants, and custom pieces.", "yellow-gold-rope-chain-flat.jpeg", ["how to clean jewelry", "jewelry repair", "fine jewelry"], ["diamond-tennis-bracelets", "diamond-pendants", "custom-jewelry"]],
  ["custom-cad-design", "Custom CAD Design", "Custom CAD design for rings, pendants, initials, nameplates, grillz, chains, bracelets, and one-of-one diamond jewelry.", "custom-st-diamond-initial-pendant-front.jpeg", ["CAD jewelry design", "custom jewelry", "custom jeweler"], ["custom-jewelry", "custom-engagement-rings", "diamond-pendants"]],
  ["nyc-diamond-district-jeweler", "NYC Diamond District Jeweler", "A private jewelry experience for clients who want Diamond District access with a calmer, more personal way to design, source, and buy fine jewelry.", "queen-aurelia-oval-marquise-ring.jpeg", ["NYC jeweler", "Manhattan jeweler", "Diamond District jeweler", "custom jewelry NYC"], ["private-jeweler", "appointment-only-jeweler", "custom-engagement-rings"]],
  ["private-jeweler", "Private Jeweler", "Work one-on-one with a private jeweler for custom pieces, diamond sourcing, engagement rings, tennis chains, pendants, watches, and meaningful gifts.", "medusa-diamond-signet-ring.jpeg", ["private jeweler", "luxury jewelry", "diamond consultation"], ["appointment-only-jeweler", "custom-jewelry", "nyc-diamond-district-jeweler"]],
  ["appointment-only-jeweler", "Appointment Only Jeweler", "Book a relaxed private appointment where your questions, budget, style, timeline, and inspiration can be reviewed without pressure or a rushed showroom setting.", "two-tone-rolex-datejust-diamond-dial.jpeg", ["appointment only jeweler", "private jeweler", "jewelry consultation"], ["private-jeweler", "custom-cad-design", "jewelry-financing"]],
  ["engagement-rings-allentown-pa", "Engagement Rings Allentown PA", "Custom engagement rings for Allentown PA clients with lab grown diamonds, natural diamonds, CAD previews, private consultation, and nationwide shipping.", "engagement-ring-feature.jpg", ["engagement rings Allentown PA", "custom engagement rings Allentown", "diamond rings Allentown"], ["custom-engagement-rings", "lab-diamond-rings", "jewelry-financing"], "Allentown PA clients"],
  ["engagement-rings-lehigh-valley", "Engagement Rings Lehigh Valley", "Engagement rings for Lehigh Valley clients comparing custom settings, lab diamonds, natural diamonds, wedding bands, financing, and private jeweler guidance.", "queen-aurelia-oval-marquise-ring.jpeg", ["engagement rings Lehigh Valley", "Lehigh Valley jeweler", "custom engagement rings PA"], ["engagement-rings-allentown-pa", "custom-engagement-rings", "natural-diamond-rings"], "Lehigh Valley clients"],
  ["custom-jewelry-nyc", "Custom Jewelry NYC", "Custom jewelry in NYC for engagement rings, pendants, tennis chains, Cuban links, watches, CAD design, diamond sourcing, and private jeweler appointments.", "custom-dejaun-diamond-name-pendant.jpeg", ["custom jewelry NYC", "custom jeweler NYC", "diamond jeweler NYC"], ["nyc-diamond-district-jeweler", "private-jeweler", "custom-cad-design"], "NYC and Manhattan clients"],
  ["custom-jeweler-new-jersey", "Custom Jeweler New Jersey", "Custom jeweler serving New Jersey clients with engagement rings, diamond pendants, tennis bracelets, lab diamonds, natural diamonds, and shipped private orders.", "yellow-gold-diamond-cuban-link-bracelet.jpeg", ["custom jeweler New Jersey", "engagement rings New Jersey", "diamond jeweler NJ"], ["custom-engagement-rings", "custom-jewelry", "diamond-tennis-bracelets"], "New Jersey clients"],
  ["diamond-jeweler-connecticut", "Diamond Jeweler Connecticut", "Diamond jeweler serving Connecticut clients with custom engagement rings, diamond sourcing, tennis bracelets, pendants, CAD design, and insured shipping.", "triple-row-diamond-tennis-bracelet.jpeg", ["diamond jeweler Connecticut", "engagement rings Connecticut", "custom jeweler CT"], ["custom-engagement-rings", "diamond-pendants", "lab-diamond-rings"], "Connecticut clients"],
  ["tri-state-custom-jeweler", "Tri-State Custom Jeweler", "Tri-State custom jeweler serving New York, New Jersey, Connecticut, Pennsylvania, and nationwide clients with custom diamond jewelry and private consultation.", "diamond-banner.jpg", ["Tri-State custom jeweler", "engagement rings Tri-State area", "diamond jeweler near me"], ["custom-jewelry-nyc", "custom-jeweler-new-jersey", "diamond-jeweler-connecticut"], "Tri-State area clients"],
  ["diamond-jeweler-pennsylvania", "Diamond Jeweler Pennsylvania", "Diamond jeweler serving Pennsylvania clients with engagement rings, lab diamonds, natural diamonds, custom pendants, tennis bracelets, and private jewelry quotes.", "classic-marquise-engagement-ring.jpeg", ["diamond jeweler Pennsylvania", "custom jeweler PA", "engagement rings Pennsylvania"], ["engagement-rings-allentown-pa", "engagement-rings-lehigh-valley", "custom-jewelry"], "Pennsylvania clients"],
  ["free-engagement-ring-consultation", "Free Engagement Ring Consultation", "Free engagement ring consultation for clients comparing lab diamonds, natural diamonds, custom settings, budget, financing, CAD design, and private jeweler guidance.", "queen-aurelia-oval-marquise-ring.jpeg", ["free engagement ring consultation", "engagement ring consultation", "custom engagement ring quote"], ["custom-engagement-rings", "lab-diamond-rings", "engagement-rings-allentown-pa"], "serious engagement ring buyers"],
  ["lab-diamond-engagement-rings-allentown", "Lab Diamond Engagement Rings Allentown", "Lab diamond engagement rings for Allentown clients who want size, sparkle, certification, custom CAD settings, and private jeweler quote guidance.", "yellow-gold-oval-pave-engagement-ring.jpeg", ["lab diamond engagement rings Allentown", "lab diamond rings Allentown PA", "engagement rings Allentown"], ["free-engagement-ring-consultation", "engagement-rings-allentown-pa", "lab-diamond-rings"], "Allentown lab diamond clients"],
  ["private-jeweler-allentown", "Private Jeweler Allentown", "Private jeweler serving Allentown clients with engagement rings, diamond sourcing, custom pendants, tennis bracelets, CAD design, and appointment-based consultation.", "medusa-diamond-signet-ring.jpeg", ["private jeweler Allentown", "custom jeweler Allentown", "diamond jeweler Allentown"], ["engagement-rings-allentown-pa", "diamond-jeweler-pennsylvania", "custom-jewelry"], "Allentown private jewelry clients"],
  ["custom-engagement-rings-nyc", "Custom Engagement Rings NYC", "Custom engagement rings in NYC with lab grown diamonds, natural diamonds, CAD design, private diamond sourcing, and appointment-only jeweler guidance.", "engagement-ring-feature.jpg", ["custom engagement rings NYC", "engagement rings NYC", "NYC engagement ring jeweler"], ["custom-jewelry-nyc", "nyc-diamond-district-jeweler", "free-engagement-ring-consultation"], "NYC engagement ring clients"],
  ["lab-diamond-engagement-rings-nyc", "Lab Diamond Engagement Rings NYC", "Lab diamond engagement rings for NYC and Diamond District clients comparing certified CVD diamonds, custom settings, ring size, metal, CAD design, and private jeweler sourcing.", "yellow-gold-oval-pave-engagement-ring.jpeg", ["lab diamond engagement rings NYC", "lab grown diamond rings NYC", "CVD engagement rings NYC"], ["custom-engagement-rings-nyc", "lab-diamond-rings", "select-diamond"], "NYC lab diamond engagement ring clients"],
  ["custom-diamond-pendants-nyc", "Custom Diamond Pendants NYC", "Custom diamond pendants in NYC including name pendants, initials, crosses, religious pendants, CAD pendant design, and lab or natural diamond options.", "custom-dejaun-diamond-name-pendant.jpeg", ["custom diamond pendants NYC", "diamond pendant NYC", "custom name pendant NYC"], ["diamond-pendants", "custom-jewelry-nyc", "custom-cad-design"], "NYC custom pendant clients"],
  ["tennis-bracelets-allentown-pa", "Tennis Bracelets Allentown PA", "Diamond tennis bracelets for Allentown PA and Lehigh Valley clients with custom carat weight, lab-grown diamond options, gold color, bracelet length, and private quote support.", "triple-row-diamond-tennis-bracelet.jpeg", ["tennis bracelets Allentown PA", "diamond tennis bracelet Allentown", "lab diamond bracelet Lehigh Valley"], ["diamond-tennis-bracelets", "diamond-jeweler-pennsylvania", "engagement-rings-allentown-pa"], "Allentown tennis bracelet clients"],
  ["cvd-lab-grown-diamond-jewelry", "CVD Lab-Grown Diamond Jewelry", "Shop and request CVD lab-grown diamond jewelry including engagement rings, tennis bracelets, earrings, pendants, and rings from the live supplier catalog.", "live-diamond-selection.jpeg", ["CVD lab grown diamond jewelry", "lab-grown diamond jewelry", "CVD diamond rings"], ["select-diamond", "lab-diamond-rings", "lab-diamonds-vs-natural-diamonds"], "lab-grown diamond jewelry shoppers"],
  ["diamond-rings-near-me", "Diamond Rings Near Me", "Diamond rings near me search page for clients looking for engagement rings, lab diamonds, natural diamonds, custom settings, and private jeweler quotes.", "classic-marquise-engagement-ring.jpeg", ["diamond rings near me", "engagement rings near me", "custom rings near me"], ["free-engagement-ring-consultation", "custom-engagement-rings", "lab-diamond-rings"], "local diamond ring shoppers"],
  ["engagement-rings-new-jersey", "Engagement Rings New Jersey", "Engagement rings for New Jersey clients with custom settings, lab diamonds, natural diamonds, private consultation, financing options, and insured delivery.", "queen-aurelia-oval-marquise-ring.jpeg", ["engagement rings New Jersey", "custom engagement rings NJ", "diamond rings New Jersey"], ["custom-jeweler-new-jersey", "free-engagement-ring-consultation", "lab-diamond-rings"], "New Jersey engagement ring clients"],
  ["engagement-rings-connecticut", "Engagement Rings Connecticut", "Engagement rings for Connecticut clients comparing lab diamonds, natural diamonds, CAD settings, private jeweler consultation, and nationwide shipping.", "white-gold-marquise-pave-engagement-ring.jpeg", ["engagement rings Connecticut", "custom engagement rings CT", "diamond rings Connecticut"], ["diamond-jeweler-connecticut", "free-engagement-ring-consultation", "natural-diamond-rings"], "Connecticut engagement ring clients"],
  ["custom-jeweler-florida", "Custom Jeweler for Florida Clients", "Custom engagement rings, CVD lab-grown diamonds, diamond jewelry, CAD design, virtual private consultation, and insured shipping for Florida clients. The Don Jewelers serves Florida remotely and does not represent this page as a Florida storefront.", "queen-aurelia-oval-marquise-ring.jpeg", ["custom jeweler Florida", "custom engagement rings Florida", "lab grown diamonds Florida"], ["custom-engagement-rings", "cvd-lab-grown-diamond-jewelry", "jewelry-financing"], "Florida clients by virtual consultation and insured shipping"],
  ["engagement-ring-consultation-easton-bethlehem", "Engagement Ring Consultation Easton & Bethlehem", "Private engagement ring consultation for Easton and Bethlehem PA clients comparing diamonds, custom settings, CAD design, ring size, budget, and proposal timing.", "queen-aurelia-oval-marquise-ring.jpeg", ["engagement rings Easton PA", "engagement rings Bethlehem PA", "private jeweler Easton Bethlehem"], ["engagement-rings-lehigh-valley", "free-engagement-ring-consultation", "custom-engagement-rings"], "Easton and Bethlehem engagement ring clients"],
  ["custom-jewelry-project-gallery", "Custom Jewelry Project Gallery", "Explore original custom engagement rings, pendants, bracelets, initials, wedding sets, and one-of-one jewelry inspiration from The Don Jewelers.", "custom-dejaun-diamond-name-pendant.jpeg", ["custom jewelry projects", "custom jewelry gallery", "custom jeweler portfolio"], ["custom-jewelry", "custom-cad-design", "custom-orders"], "custom jewelry clients"],
  ["the-don-jewelers", "The Don Jewelers", "Official page for The Don Jewelers, a private custom jeweler for engagement rings, diamond jewelry, tennis chains, pendants, CAD design, and jewelry consultation.", "don-logo.jpg", ["The Don Jewelers", "Don Jewelers", "The Don Jewelers jewelry"], ["the-don-jewelers-and-jewelry", "custom-engagement-rings", "free-engagement-ring-consultation"], "clients searching The Don Jewelers"],
  ["the-don-jewelers-and-jewelry", "The Don Jewelers & Jewelry", "Official business page for The Don Jewelers & Jewelry with verified contact details, Google Business Profile, private jeweler service areas, and custom jewelry consultation.", "yellow-gold-diamond-cuban-link-bracelet.jpeg", ["The Don Jewelers and Jewelry", "The Don Jewelers & Jewelry", "Don Jewelers and Jewelry"], ["the-don-jewelers", "tri-state-custom-jeweler", "custom-jewelry"], "clients searching the official business name"],
  ["don-jewelers-nyc", "Don Jewelers NYC", "Don Jewelers NYC search page for clients looking for The Don Jewelers & Jewelry, custom engagement rings, diamond sourcing, and private jewelry consultation.", "diamond-banner.jpg", ["Don Jewelers NYC", "The Don Jewelers NYC", "NYC Don Jewelers"], ["custom-jewelry-nyc", "nyc-diamond-district-jeweler", "custom-engagement-rings-nyc"], "NYC brand search clients"],
  ["the-don-jewelers-engagement-rings", "The Don Jewelers Engagement Rings", "Engagement ring page for The Don Jewelers with lab diamonds, natural diamonds, custom settings, CAD design, private consultation, and proposal jewelry guidance.", "engagement-ring-feature.jpg", ["The Don Jewelers engagement rings", "Don Jewelers engagement ring", "The Don Jewelers rings"], ["custom-engagement-rings", "free-engagement-ring-consultation", "diamond-rings-near-me"], "engagement ring clients searching the brand"],
  ["custom-engagement-ring-process", "Custom Engagement Ring Process", "A step-by-step guide to choosing a center diamond, setting, metal, basket, prongs, band, ring size, CAD review, and private custom quote.", "queen-aurelia-oval-marquise-ring.jpeg", ["custom engagement ring process", "how to design a custom engagement ring", "CAD engagement ring"], ["start-custom-ring-design", "free-engagement-ring-consultation", "engagement-ring-cost-guide"], "custom engagement ring buyers"],
  ["engagement-ring-cost-guide", "Engagement Ring Cost Guide", "Compare diamond type, carat, shape, certification, metal, setting, side stones, labor, CAD, wedding band pairing, and custom quote factors.", "yellow-gold-oval-pave-engagement-ring.jpeg", ["engagement ring cost", "custom engagement ring price", "lab diamond ring cost"], ["custom-engagement-ring-process", "lab-diamond-buying-guide", "jewelry-financing"], "budget-focused engagement ring buyers"],
  ["lab-diamond-buying-guide", "Lab Diamond Buying Guide", "Guide to CVD lab diamond buying for engagement rings and jewelry, including certificate, carat, shape, color, clarity, cut, video, and setting fit.", "live-diamond-selection.jpeg", ["lab diamond buying guide", "CVD lab diamond engagement ring", "lab grown diamond ring guide"], ["select-diamond", "lab-diamond-rings", "lab-diamonds-vs-natural-diamonds"], "lab diamond buyers"],
  ["private-jeweler-vs-retail-store", "Private Jeweler vs Retail Store", "Compare private jeweler consultation with retail jewelry shopping for custom engagement rings, diamond sourcing, CAD design, and quote-first buying.", "medusa-diamond-signet-ring.jpeg", ["private jeweler vs retail store", "private jeweler engagement ring", "custom jeweler consultation"], ["private-jeweler", "appointment-only-jeweler", "custom-engagement-rings"], "buyers comparing jewelers"],
  ["service-areas", "Private Jeweler Service Areas", "Explore organized private jeweler service areas across New York, Pennsylvania, New Jersey, Connecticut, Ohio, Florida, the Tri-State region, and nationwide virtual consultation with insured shipping.", "diamond-banner.jpg", ["private jeweler service areas", "custom jeweler near me", "nationwide custom jewelry"], ["tri-state-custom-jeweler", "diamond-jeweler-pennsylvania", "custom-jeweler-new-jersey"], "regional and nationwide jewelry clients"],
  ["custom-jeweler-syracuse-ny", "Custom Jeweler Syracuse NY", "Private custom jewelry service for Syracuse and Central New York clients seeking engagement rings, certified diamonds, CAD design, pendants, earrings, and insured delivery.", "queen-aurelia-oval-marquise-ring.jpeg", ["custom jeweler Syracuse NY", "engagement rings Syracuse", "diamond jeweler Central New York"], ["custom-jeweler-new-york-state", "custom-engagement-rings", "select-diamond"], "Syracuse and Central New York clients"],
  ["custom-jeweler-floral-park-ny", "Custom Jeweler Floral Park NY", "Custom engagement rings and fine jewelry for Floral Park, Queens, Nassau County, and western Long Island clients with private consultation, CAD review, and diamond sourcing.", "engagement-ring-feature.jpg", ["custom jeweler Floral Park NY", "engagement rings Floral Park", "diamond jeweler Nassau County"], ["custom-jeweler-long-island-ny", "custom-engagement-rings-nyc", "free-engagement-ring-consultation"], "Floral Park and western Long Island clients"],
  ["custom-jeweler-long-island-ny", "Custom Jeweler Long Island NY", "Private jeweler service for Long Island clients comparing custom engagement rings, lab-grown or natural diamonds, wedding bands, pendants, earrings, and insured delivery.", "classic-marquise-engagement-ring.jpeg", ["custom jeweler Long Island", "engagement rings Long Island", "diamond jeweler Nassau Suffolk"], ["custom-jeweler-floral-park-ny", "custom-jeweler-new-york-state", "lab-diamond-rings"], "Nassau and Suffolk County clients"],
  ["custom-jeweler-new-york-state", "Custom Jeweler New York State", "Private custom jewelry and diamond sourcing for clients across New York State, including NYC, Long Island, Syracuse, Central New York, and nationwide remote consultation.", "diamond-banner.jpg", ["custom jeweler New York State", "New York diamond jeweler", "custom engagement rings New York"], ["custom-jeweler-syracuse-ny", "custom-jeweler-long-island-ny", "nyc-diamond-district-jeweler"], "New York State clients"],
  ["custom-jeweler-philadelphia-pa", "Custom Jeweler Philadelphia PA", "Custom engagement rings, certified diamonds, pendants, tennis bracelets, earrings, and CAD design for Philadelphia-area clients through private consultation and insured delivery.", "yellow-gold-oval-pave-engagement-ring.jpeg", ["custom jeweler Philadelphia PA", "engagement rings Philadelphia", "diamond jeweler Philadelphia"], ["diamond-jeweler-pennsylvania", "custom-engagement-rings", "jewelry-financing"], "Philadelphia and southeastern Pennsylvania clients"],
  ["custom-jeweler-pennsylvania", "Custom Jeweler Across Pennsylvania", "Statewide private jeweler service for Pennsylvania clients from Allentown and the Lehigh Valley to Philadelphia, Harrisburg, Scranton, Pittsburgh, and surrounding communities.", "diamond-banner.jpg", ["custom jeweler Pennsylvania", "engagement rings PA", "diamond jeweler Pennsylvania"], ["engagement-rings-allentown-pa", "custom-jeweler-philadelphia-pa", "diamond-jeweler-pennsylvania"], "clients across Pennsylvania"],
  ["custom-jewelry-pennsylvania", "Custom Jewelry Pennsylvania", "Design custom jewelry in Pennsylvania with private consultation, CAD planning, GIA or IGI certified diamonds, insured nationwide shipping, and clear quote support.", "medusa-diamond-signet-ring.jpeg", ["custom jewelry Pennsylvania", "custom jeweler PA", "certified diamonds Pennsylvania"], ["custom-jeweler-pennsylvania", "diamond-jewelry-pennsylvania", "custom-orders"], "Pennsylvania custom jewelry clients"],
  ["jewelry-store-easton-pa", "Jewelry Store Easton PA", "A private jewelry-store alternative for Easton PA clients seeking engagement rings, custom jewelry, certified diamonds, appointments, and insured delivery.", "engagement-ring-feature.jpg", ["jewelry store Easton PA", "Easton jeweler", "diamond jewelry Easton"], ["engagement-rings-easton-pa", "engagement-ring-consultation-easton-bethlehem", "custom-jewelry-pennsylvania"], "Easton PA jewelry clients"],
  ["engagement-rings-easton-pa", "Engagement Rings Easton PA", "Shop or design engagement rings for Easton PA with lab-grown or natural diamonds, CAD settings, ring-sizing guidance, financing options, and private consultation.", "queen-aurelia-oval-marquise-ring.jpeg", ["engagement rings Easton PA", "custom engagement rings Easton", "diamond rings Easton"], ["jewelry-store-easton-pa", "start-custom-ring-design", "select-diamond"], "Easton PA engagement ring clients"],
  ["diamond-jewelry-pennsylvania", "Diamond Jewelry Pennsylvania", "Diamond jewelry for Pennsylvania clients including engagement rings, pendants, earrings, tennis bracelets, certified stones, custom design, and insured shipping.", "diamond-banner.jpg", ["diamond jewelry Pennsylvania", "diamond jeweler PA", "custom diamond jewelry"], ["custom-jewelry-pennsylvania", "diamond-jeweler-pennsylvania", "products"], "Pennsylvania diamond jewelry clients"],
  ["diamond-district-custom-jewelry-nyc", "Diamond District Custom Jewelry NYC", "Create Diamond District custom jewelry in NYC with one-to-one design guidance, CAD approval, certified diamond sourcing, secure checkout, and nationwide service.", "custom-dejaun-diamond-name-pendant.jpeg", ["Diamond District custom jewelry", "custom jewelry NYC", "private jeweler Manhattan"], ["nyc-diamond-district-jeweler", "custom-jewelry-nyc", "custom-orders"], "NYC custom jewelry clients"],
  ["custom-jeweler-northern-new-jersey", "Custom Jeweler Northern New Jersey", "Private custom jewelry service for Northern New Jersey clients seeking engagement rings, certified diamonds, pendants, earrings, CAD design, and appointment guidance.", "custom-dejaun-diamond-name-pendant.jpeg", ["custom jeweler Northern New Jersey", "engagement rings North Jersey", "diamond jeweler NJ"], ["custom-jeweler-new-jersey", "engagement-rings-new-jersey", "tri-state-custom-jeweler"], "Northern New Jersey clients"],
  ["custom-jeweler-ohio", "Custom Jeweler Ohio", "Remote private jeweler service for Ohio clients seeking custom engagement rings, CVD lab-grown diamonds, natural diamonds, pendants, earrings, CAD design, and insured shipping.", "queen-aurelia-oval-marquise-ring.jpeg", ["custom jeweler Ohio", "engagement rings Ohio", "diamond jeweler Ohio"], ["custom-engagement-rings", "cvd-lab-grown-diamond-jewelry", "jewelry-financing"], "Ohio clients by virtual consultation and insured shipping"],
];

const blogTopics = [
  "How Much Does a Diamond Tennis Chain Cost?", "Lab Diamonds vs Natural Diamonds", "How to Buy an Engagement Ring", "Best Diamond Shapes", "How Diamonds Are Graded", "How to Clean Jewelry", "What Makes VVS Diamonds Better", "How to Finance Jewelry", "Custom Jewelry Process", "Best Engagement Ring Styles",
  "How to Choose a Diamond Tennis Bracelet", "14K Gold vs 18K Gold for Custom Jewelry", "White Gold vs Yellow Gold vs Rose Gold", "How to Buy a Diamond Pendant", "What to Know Before Buying a Diamond Cross", "How CAD Jewelry Design Works", "Natural Diamond Buying Guide", "Lab Diamond Ring Buying Guide", "How to Choose Wedding Bands", "Private Jeweler vs Retail Jewelry Store",
  "NYC Diamond District Jeweler Buying Tips", "Engagement Rings in NYC: What to Know", "Tennis Chains NYC Buying Guide", "Best Jewelry Gifts for Anniversaries", "Best Jewelry Gifts for Birthdays", "How to Design a Custom Diamond Pendant", "Rolex, Cartier, Audemars Piguet and Patek Philippe Watch Buying Notes", "How to Choose Gold Chains", "Cuban Chains Buying Guide", "Diamond Clarity Explained",
  "Diamond Color Explained", "Diamond Cut Explained", "Diamond Carat Weight Explained", "VVS vs VS Diamonds", "IGI vs GIA Diamond Certificates", "How to Source a Diamond", "Jewelry Repair: What Can Be Fixed?", "How Often Should Jewelry Be Inspected?", "How to Protect Diamond Jewelry", "How to Store Fine Jewelry",
  "Custom Grillz Buying Guide", "Easton PA Custom Jeweler Guide", "Lehigh Valley Jeweler Guide", "Bethlehem PA Engagement Ring Guide", "Allentown PA Jewelry Buying Guide", "Manhattan Private Jeweler Guide", "How to Plan a Custom Engagement Ring Budget", "Diamond Pendant Size Guide", "Tennis Bracelet Carat Size Guide", "Questions to Ask a Jeweler Before Buying",
];

const blogImagePool = [
  "yellow-gold-cuban-chain-display.jpeg",
  "queen-aurelia-oval-marquise-ring.jpeg",
  "triple-row-diamond-tennis-bracelet.jpeg",
  "large-round-diamond-cross-pendant.jpeg",
  "custom-dejaun-diamond-name-pendant.jpeg",
  "two-tone-rolex-datejust-diamond-dial.jpeg",
  "round-diamond-studs.jpeg",
  "yellow-gold-rope-chain-triple.jpeg",
  "medusa-diamond-signet-ring.jpeg",
  "saint-michael-diamond-angel-pendant.jpeg",
  "yellow-gold-oval-pave-engagement-ring.jpeg",
  "custom-st-diamond-initial-pendant-front.jpeg",
];

const slugify = (value) => String(value || "").toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const educationPath = (slug) => `education/${slug}`;
const faqPath = (slug) => `faq/${slug}`;

const educationResources = [
  {
    slug: "diamond-education",
    title: "Diamond Education",
    eyebrow: "Start Here",
    description: "A private jeweler's overview of diamond quality, certification, lab grown diamonds, natural diamonds, and the details that matter before you buy.",
    image: "live-diamond-selection.jpeg",
    keyword: "diamond education",
    productKeyword: "diamond",
    related: ["what-is-a-diamond", "lab-diamonds-vs-natural-diamonds", "diamond-cut", "certified-diamonds"],
    quote: "The point of diamond education is not to turn every client into a gemologist. It is to make the buying decision feel clear, calm, and protected.",
    sections: [
      ["Learn the language before the purchase", "Diamonds are often described with grades, reports, abbreviations, and pricing language that can feel intimidating at first. Once you understand cut, color, clarity, carat, certification, and origin, the conversation becomes much more comfortable."],
      ["Look beyond the certificate", "A certificate is important, but it does not replace taste, proportion, setting style, and the way the diamond looks in real life. The best buying process combines paperwork with visual review."],
      ["Use education to narrow the choices", "The goal is not to compare every stone on the market. The goal is to narrow the field to diamonds and jewelry options that fit your budget, style, timeline, and comfort level."],
    ],
    faqs: [
      ["Where should I start with diamond education?", "Start with the 4Cs, then learn the difference between lab grown and natural diamonds, certification, and how the stone will be used in the final piece."],
      ["Can a private jeweler explain diamonds before I buy?", "Yes. The Don Jewelers can walk through diamond options, certificates, videos, and custom design details before you commit."],
      ["Do you help beginners?", "Yes. The process is built to be clear for first-time buyers and detailed enough for clients comparing higher-end stones."],
    ],
  },
  {
    slug: "what-is-a-diamond",
    title: "What Is a Diamond?",
    eyebrow: "Diamond Education",
    description: "A clear, jeweler-written guide to what diamonds are, how they form, why cut matters, and how to compare stones with confidence.",
    image: "live-diamond-selection.jpeg",
    keyword: "diamond education",
    productKeyword: "diamond",
    related: ["diamond-cut", "diamond-color", "diamond-clarity", "diamond-carat"],
    quote: "A diamond is not just a size on paper. The life of the stone is in the cut, the light return, and how it looks in the piece you actually want to wear.",
    sections: [
      ["A diamond, in plain English", "A diamond is crystallized carbon arranged under extreme pressure and heat. That sounds technical, but what matters to a buyer is simpler: a diamond is valued by how beautifully it handles light, how rare its characteristics are, and how well it fits the jewelry being made."],
      ["Natural diamonds and lab grown diamonds", "Natural diamonds form underground over long geological periods. Lab grown diamonds are grown in controlled environments and have the same optical and chemical identity as diamond. The choice is not about one being beautiful and the other not; it is about budget, origin preference, size goals, and the story you want behind the piece."],
      ["Why two diamonds with the same carat can look different", "Carat weight only tells you weight. Cut, measurements, depth, table, polish, symmetry, color, and clarity all influence what your eye sees. A smaller diamond with excellent proportions can look brighter than a heavier diamond that carries weight in the wrong places."],
    ],
    faqs: [
      ["Is a lab grown diamond a real diamond?", "Yes. A lab grown diamond is a real diamond with the same basic optical and chemical properties as a mined diamond, but it has a different origin story."],
      ["What should beginners look at first?", "Start with shape, cut quality, budget, and the finished jewelry design. Certification matters, but the stone also has to look right in person or on video."],
      ["Can The Don Jewelers help source a diamond?", "Yes. The Don Jewelers can help compare certified stones, explain tradeoffs, and source diamonds for engagement rings, pendants, earrings, tennis chains, and custom jewelry."],
    ],
  },
  {
    slug: "lab-diamonds-vs-natural-diamonds",
    title: "Lab Diamonds vs Natural Diamonds",
    eyebrow: "Diamond Buying Guide",
    description: "Understand the real differences between lab grown diamonds and natural diamonds before choosing a stone for an engagement ring or custom jewelry.",
    image: "yellow-gold-oval-pave-engagement-ring.jpeg",
    keyword: "lab diamonds",
    productKeyword: "diamond",
    related: ["what-is-a-diamond", "certified-diamonds", "diamond-carat", "engagement-rings"],
    quote: "The best choice is the one that matches your priorities. Some clients want maximum size for the budget. Others want natural rarity. Both can be done beautifully.",
    sections: [
      ["What is actually different?", "Lab grown and natural diamonds can look identical to the naked eye when quality is comparable. The difference is origin: one is grown in a laboratory, the other formed naturally underground. That origin affects price, availability, and personal preference."],
      ["Where lab diamonds shine", "Lab diamonds often let clients move up in size, color, or clarity without stretching the budget as far. They are especially popular for engagement rings, tennis bracelets, earrings, and statement pieces where visual presence matters."],
      ["Where natural diamonds still matter", "Natural diamonds appeal to clients who value rarity, tradition, and the natural origin of the stone. For some buyers, especially for bridal jewelry, that story is part of the emotional value."],
    ],
    comparison: [
      ["Category", "Lab Grown Diamond", "Natural Diamond"],
      ["Origin", "Grown in a controlled environment", "Formed naturally underground"],
      ["Visual look", "Can be visually identical at comparable quality", "Can be visually identical at comparable quality"],
      ["Budget", "Usually more size for the money", "Usually higher cost at the same specs"],
      ["Best for", "Size, value, modern custom jewelry", "Rarity, tradition, natural origin"],
    ],
    faqs: [
      ["Can people tell the difference by looking?", "Usually no. Proper testing equipment and certification identify origin, but comparable stones can look the same to the eye."],
      ["Are lab diamonds good for engagement rings?", "Yes. Many clients choose lab diamonds for engagement rings because they can prioritize size, color, and clarity within budget."],
      ["Do you source both?", "Yes. The Don Jewelers can source both lab grown and natural diamonds based on your goals."],
    ],
  },
  {
    slug: "diamond-cut",
    title: "Diamond Cut",
    eyebrow: "The 4Cs",
    description: "Diamond cut explained by a private jeweler: proportions, sparkle, brilliance, and why cut quality often matters more than the number on the tag.",
    image: "live-diamond-selection.jpeg",
    keyword: "diamond cut",
    productKeyword: "diamond",
    related: ["diamond-color", "diamond-clarity", "diamond-carat", "certified-diamonds"],
    quote: "Cut is where a diamond earns its personality. Color and clarity matter, but cut is what makes the stone wake up.",
    sections: [
      ["Cut is not the same as shape", "Shape is round, oval, emerald, pear, marquise, cushion, radiant, or princess. Cut is how well that shape has been proportioned and finished. A round diamond and an oval diamond are shapes; their brightness depends on cutting decisions."],
      ["Why sparkle changes from stone to stone", "A diamond has to return light back to your eye. If the stone is too deep, too shallow, or poorly proportioned, light leaks out instead of reflecting back. That is why two diamonds with similar paperwork can feel very different."],
      ["How to judge cut in real life", "Look at the diamond in motion. Watch the brightness, contrast, and pattern. A stone should not only look good under jewelry-store lighting; it should still have life in softer, everyday light."],
    ],
    faqs: [
      ["Is cut the most important C?", "For many buyers, yes. Cut has a major effect on beauty because it controls light performance."],
      ["Does every shape receive the same cut grade?", "No. Round diamonds have the most standardized cut grading. Fancy shapes need a more hands-on review of measurements and appearance."],
      ["Can you help compare diamond cuts?", "Yes. The Don Jewelers can review stones, measurements, videos, and certificates before you commit."],
    ],
  },
  {
    slug: "diamond-color",
    title: "Diamond Color",
    eyebrow: "The 4Cs",
    description: "A practical guide to diamond color, metal choice, and when paying for a higher color grade is worth it.",
    image: "yellow-canary-diamond-studs.jpeg",
    keyword: "diamond color",
    productKeyword: "diamond",
    related: ["diamond-cut", "diamond-clarity", "diamond-carat", "lab-diamonds-vs-natural-diamonds"],
    quote: "Color is about balance. The metal, shape, setting, and budget all affect how much color grade you really need.",
    sections: [
      ["What color grades mean", "White diamonds are graded on a scale that usually runs from D, the most colorless, down through warmer grades. Most clients do not need to memorize the whole scale; they need to know what looks clean in the setting they want."],
      ["Metal color changes perception", "Yellow gold and rose gold can be forgiving because the setting already carries warmth. White gold and platinum make body color easier to notice, especially in larger stones."],
      ["Fancy color diamonds", "Yellow, pink, blue, and other fancy color diamonds are judged differently. With fancy colors, the color itself becomes the feature, not something to hide."],
    ],
    faqs: [
      ["Is D color always best?", "D color is the highest colorless grade, but it is not always the smartest spend. Many designs look excellent below D when the stone is well chosen."],
      ["Does yellow gold hide diamond warmth?", "It can soften the look of warmer diamonds, especially in certain settings."],
      ["Can you source fancy color diamonds?", "Yes. Fancy color options can be discussed by budget, shape, intensity, and timing."],
    ],
  },
  {
    slug: "diamond-clarity",
    title: "Diamond Clarity",
    eyebrow: "The 4Cs",
    description: "Clarity explained without the confusion: VVS, VS, eye-clean diamonds, and what actually matters once the stone is set.",
    image: "round-diamond-studs.jpeg",
    keyword: "diamond clarity",
    productKeyword: "diamond",
    related: ["diamond-cut", "diamond-color", "diamond-carat", "certified-diamonds"],
    quote: "Clarity should protect beauty, not drain the budget for something the eye cannot appreciate.",
    sections: [
      ["What clarity measures", "Clarity describes internal inclusions and surface characteristics. Higher clarity means fewer or less visible characteristics under magnification, but the key question is whether anything distracts from the stone's beauty."],
      ["VVS, VS, and eye-clean stones", "VVS diamonds are very clean under magnification. VS diamonds can also look completely clean to the eye and often offer strong value. For many pieces, an eye-clean diamond is the sweet spot."],
      ["When clarity matters more", "Clarity becomes more important in step cuts like emerald and asscher shapes because their broad facets show the inside of the stone more clearly. Brilliant cuts can hide inclusions better."],
    ],
    faqs: [
      ["Is VVS always worth it?", "VVS is beautiful, but it is not always necessary. The right choice depends on shape, size, budget, and how visible the inclusions are."],
      ["What does eye-clean mean?", "Eye-clean means no distracting inclusions are visible to the naked eye in normal viewing."],
      ["Can you help avoid bad inclusions?", "Yes. The Don Jewelers can review stone plots, videos, and photos before sourcing."],
    ],
  },
  {
    slug: "diamond-carat",
    title: "Diamond Carat",
    eyebrow: "The 4Cs",
    description: "Carat weight explained with practical buying advice for engagement rings, pendants, earrings, tennis chains, and bracelets.",
    image: "queen-aurelia-oval-marquise-ring.jpeg",
    keyword: "diamond carat",
    productKeyword: "diamond",
    related: ["diamond-cut", "diamond-color", "diamond-clarity", "engagement-rings"],
    quote: "Carat is weight, not magic. The smartest stone is the one that gives you the look you want without sacrificing life.",
    sections: [
      ["Carat is weight", "Carat tells you how much a diamond weighs. It does not automatically tell you how large the diamond will look from the top, because shape and proportions affect spread."],
      ["Why measurements matter", "Two one-carat diamonds can face up differently. A well-proportioned stone can look balanced and bright, while another may hide weight in depth."],
      ["Total carat weight", "For tennis chains, bracelets, earrings, and multi-stone pieces, total carat weight describes all diamonds combined. Pointer size and layout affect the finished look just as much as the total number."],
    ],
    faqs: [
      ["Does higher carat always look bigger?", "Not always. Shape and measurements affect how large a diamond appears."],
      ["What is total carat weight?", "Total carat weight is the combined weight of all diamonds in a piece."],
      ["Can you build around a target carat size?", "Yes. The Don Jewelers can source or design around a target size and budget."],
    ],
  },
  {
    slug: "certified-diamonds",
    title: "Certified Diamonds",
    eyebrow: "Diamond Paperwork",
    description: "What diamond certificates mean, how IGI and GIA reports help, and why paperwork should support the buying decision rather than replace your eye.",
    image: "live-diamond-selection.jpeg",
    keyword: "certified diamonds",
    productKeyword: "diamond",
    related: ["diamond-cut", "diamond-clarity", "lab-diamonds-vs-natural-diamonds", "diamond-carat"],
    quote: "A certificate is the map. The diamond is still the destination.",
    sections: [
      ["What a certificate tells you", "A diamond report records measurements, carat weight, color, clarity, proportions, polish, symmetry, fluorescence, and origin details when applicable. It gives you a common language for comparison."],
      ["IGI and GIA", "GIA is deeply respected for natural diamonds, while IGI is widely used for lab grown diamonds. Both can be useful, but the stone still has to be reviewed visually."],
      ["Why paperwork is not the whole story", "Certificates do not fully capture beauty, personality, or how a diamond looks in a setting. Videos, photos, measurements, and a jeweler's review help complete the picture."],
    ],
    faqs: [
      ["Should I buy only certified diamonds?", "For important diamonds, certification is strongly recommended because it protects clarity around specs and origin."],
      ["Is IGI good for lab diamonds?", "IGI is widely used for lab grown diamonds and can be useful for comparing stones."],
      ["Can you review a certificate?", "Yes. You can send a certificate or stock number for review before a custom order."],
    ],
  },
  {
    slug: "nyc-jewelers",
    title: "NYC Jewelers",
    eyebrow: "New York Jewelry Guide",
    description: "How to choose an NYC jeweler, what to ask before buying, and why private guidance can make the Diamond District feel easier.",
    image: "queen-aurelia-oval-marquise-ring.jpeg",
    keyword: "NYC jeweler",
    productKeyword: "custom",
    related: ["diamond-district", "custom-jewelry", "engagement-rings", "jewelry-financing"],
    quote: "The right jeweler should make you feel informed, not rushed.",
    sections: [
      ["What makes a good NYC jeweler", "A good jeweler listens first. Before discussing price, they should understand the piece, budget, timeline, stone preference, and how the jewelry will be worn."],
      ["Private jeweler vs showroom shopping", "Showrooms can be useful, but they can also feel fast and crowded. A private jeweler gives you room to compare options without pressure."],
      ["Working beyond New York", "The Don Jewelers primarily serves the tri-state area and works with clients nationwide through Zoom, FaceTime, video chat, insured shipping, and clear communication."],
    ],
    faqs: [
      ["Do you work with NYC clients?", "Yes. NYC, Manhattan, Diamond District, New Jersey, Pennsylvania, and nationwide clients can work with The Don Jewelers."],
      ["Can appointments happen remotely?", "Yes. Zoom, FaceTime, and video chat are available for clients outside the area."],
      ["Can you help with custom jewelry?", "Yes. Custom jewelry, CAD design, diamond sourcing, and private consultations are available."],
    ],
  },
  {
    slug: "diamond-district",
    title: "NYC Diamond District",
    eyebrow: "New York Jewelry Guide",
    description: "A buyer-friendly guide to the NYC Diamond District, private sourcing, appointment-based jewelry buying, and how to avoid feeling rushed.",
    image: "medusa-diamond-signet-ring.jpeg",
    keyword: "Diamond District jeweler",
    productKeyword: "diamond",
    related: ["nyc-jewelers", "certified-diamonds", "engagement-rings", "custom-jewelry"],
    quote: "The Diamond District has access. The key is having someone help you slow it down and make sense of the options.",
    sections: [
      ["Why the Diamond District matters", "The Diamond District is known for access to diamonds, setters, designers, manufacturers, and jewelry professionals. That access can be powerful when guided properly."],
      ["What buyers should avoid", "Avoid rushing into a stone because it sounds like a deal. Compare certificates, videos, measurements, return terms, production details, and the finished design plan."],
      ["How private sourcing helps", "Private sourcing narrows the field. Instead of sorting through everything, you review diamonds and designs that fit your budget and taste."],
    ],
    faqs: [
      ["Do I need to visit the Diamond District in person?", "Not always. Many decisions can be handled through video, photos, certificates, and private consultation."],
      ["Can you source diamonds from NYC?", "Yes. Diamond sourcing can be arranged around shape, carat, color, clarity, certification, and budget."],
      ["Do you serve nationwide clients?", "Yes. Clients across the United States can work remotely with insured shipping."],
    ],
  },
  {
    slug: "engagement-rings",
    title: "Engagement Rings",
    eyebrow: "Bridal Jewelry",
    description: "A practical engagement ring guide covering diamond shape, setting style, metal choice, budget, and custom design.",
    image: "pink-oval-engagement-ring.jpeg",
    keyword: "engagement rings",
    productKeyword: "engagement",
    related: ["diamond-cut", "lab-diamonds-vs-natural-diamonds", "diamond-carat", "jewelry-financing"],
    quote: "An engagement ring should feel like the person wearing it, not like a copy of what everyone else bought.",
    sections: [
      ["Start with style", "Before comparing certificates, look at the style: solitaire, halo, three-stone, hidden halo, pavé, vintage, bezel, or custom. The setting shapes the personality of the ring."],
      ["Choose the diamond thoughtfully", "Shape, cut, color, clarity, carat, and certification all matter. The best engagement ring balances the center stone with the setting and the hand that will wear it."],
      ["Think about the wedding band early", "A beautiful engagement ring should also make sense next to a wedding band. Some settings sit flush easily, while others need a custom curved or contoured band."],
    ],
    faqs: [
      ["Can you build a custom engagement ring?", "Yes. The Don Jewelers can help with CAD design, diamond sourcing, metal choice, and production."],
      ["Do you offer lab and natural diamonds?", "Yes. Both lab grown and natural diamonds are available depending on preference and budget."],
      ["Can I start with inspiration photos?", "Yes. Photos are one of the best ways to begin a custom ring conversation."],
    ],
  },
  {
    slug: "tennis-chains",
    title: "Diamond Tennis Chains",
    eyebrow: "Diamond Chains",
    description: "Learn how diamond tennis chains are priced, what pointer size means, and how to choose length, metal, clasp, and diamond type.",
    image: "triple-row-diamond-tennis-bracelet.jpeg",
    keyword: "diamond tennis chain",
    productKeyword: "tennis chain",
    related: ["tennis-bracelets", "diamond-carat", "certified-diamonds", "jewelry-financing"],
    quote: "A good tennis chain should sit right, move right, and feel secure. The details matter because the piece is meant to be worn.",
    sections: [
      ["Pointer size and total carat weight", "Pointer size describes the approximate size of each diamond. Total carat weight adds up every stone in the chain. Both affect price and visual presence."],
      ["Metal and length", "White gold, yellow gold, rose gold, 14K, and 18K all create a different look and feel. Length changes how the chain sits and how much diamond weight is needed."],
      ["Clasp and build quality", "A tennis chain needs a secure clasp and strong construction. Beauty matters, but security matters just as much on a high-value piece."],
    ],
    faqs: [
      ["Can I build a custom tennis chain?", "Yes. You can choose pointer size, length, metal, diamond type, and clasp style."],
      ["Are lab diamonds available?", "Yes. Lab grown and natural diamond options can be discussed."],
      ["What affects tennis chain price?", "Diamond size, total carat weight, metal, length, clasp style, and labor all affect price."],
    ],
  },
  {
    slug: "tennis-bracelets",
    title: "Diamond Tennis Bracelets",
    eyebrow: "Diamond Bracelets",
    description: "A jeweler's guide to diamond tennis bracelets, including carat weight, flexibility, clasp security, metal choice, and everyday wear.",
    image: "diamond-bracelet.png",
    keyword: "diamond tennis bracelet",
    productKeyword: "tennis bracelet",
    related: ["tennis-chains", "diamond-carat", "jewelry-care", "jewelry-financing"],
    quote: "The best tennis bracelets feel effortless on the wrist, but they are built with a lot of quiet engineering.",
    sections: [
      ["Fit and comfort", "A tennis bracelet should move comfortably without sliding too far down the hand. Fit affects both comfort and security."],
      ["Carat weight and layout", "Total carat weight matters, but stone size and spacing control the finished look. A bracelet can be delicate, bold, or somewhere in between."],
      ["Clasp security", "A secure clasp is essential. For daily wear, ask about safety features and have the bracelet inspected periodically."],
    ],
    faqs: [
      ["Can tennis bracelets be made custom?", "Yes. Metal, diamond type, carat weight, length, and clasp style can be selected."],
      ["Can I wear a tennis bracelet daily?", "Many clients do, but it should be worn responsibly and inspected."],
      ["Do you offer financing?", "Financing may be available through third-party providers depending on approval."],
    ],
  },
  {
    slug: "pendants",
    title: "Diamond Pendants",
    eyebrow: "Custom Pendants",
    description: "A guide to diamond pendants, initials, name pieces, religious pendants, and custom designs that feel personal and wearable.",
    image: "saint-michael-diamond-angel-pendant.jpeg",
    keyword: "diamond pendant",
    productKeyword: "pendant",
    related: ["custom-jewelry", "gold-jewelry", "certified-diamonds", "jewelry-financing"],
    quote: "A pendant sits close to the heart. That is why the best ones usually mean something.",
    sections: [
      ["Start with meaning", "Initials, names, crosses, icons, numbers, and symbols all carry a story. The best pendant starts with what the piece is supposed to say."],
      ["Choose scale carefully", "Size affects cost, comfort, visibility, and how the pendant works with a chain. A bold piece needs enough structure; a daily piece needs balance."],
      ["CAD design helps", "For custom pendants, CAD previews help confirm proportions, stone layout, bail size, and the overall feel before production."],
    ],
    faqs: [
      ["Can you design a custom pendant?", "Yes. Custom pendant design, CAD, diamond layout, and metal options are available."],
      ["Can I use initials or names?", "Yes. Initial pendants, name pendants, and symbolic designs can be created."],
      ["Can you help choose a chain?", "Yes. Chain style, length, and strength should match the pendant."],
    ],
  },
  {
    slug: "gold-jewelry",
    title: "Gold Jewelry",
    eyebrow: "Fine Jewelry Materials",
    description: "Understand 14K, 18K, yellow gold, white gold, rose gold, and how to choose the right metal for custom jewelry.",
    image: "yellow-gold-cuban-link-chain.jpeg",
    keyword: "gold jewelry",
    productKeyword: "gold",
    related: ["pendants", "custom-jewelry", "jewelry-care", "tennis-chains"],
    quote: "Gold choice is not just color. It affects durability, feel, maintenance, and the mood of the entire piece.",
    sections: [
      ["14K vs 18K", "14K gold is durable and practical for many everyday pieces. 18K gold has a richer gold content and a deeper luxury feel, but it can be softer depending on the design."],
      ["Yellow, white, and rose gold", "Yellow gold feels classic and warm. White gold gives a crisp diamond-forward look. Rose gold adds softness and warmth with a distinct personality."],
      ["Match metal to lifestyle", "Rings and bracelets take more impact than pendants. If a piece will be worn daily, durability should be part of the conversation."],
    ],
    faqs: [
      ["Is 14K or 18K better?", "Neither is automatically better. 14K is practical and durable; 18K has a richer gold feel."],
      ["Can custom jewelry be made in different gold colors?", "Yes. Yellow gold, white gold, rose gold, and platinum options can be discussed."],
      ["Does gold price change?", "Yes. Gold pricing can change with market conditions and piece weight."],
    ],
  },
  {
    slug: "jewelry-financing",
    title: "Jewelry Financing",
    eyebrow: "Buying Options",
    description: "Use code THEDON15 for 15% off the current order at secure Stripe Checkout and review eligible Affirm, Klarna, and Afterpay Buy Now, Pay Later options.",
    image: "don-logo.jpg",
    keyword: "jewelry financing",
    productKeyword: "jewelry",
    related: ["engagement-rings", "tennis-chains", "tennis-bracelets", "custom-jewelry"],
    quote: "Financing should make the purchase clearer, not more confusing.",
    sections: [
      ["$500 first custom-order credit", "New customers can receive a $500 credit on a first eligible custom jewelry order of $2,500 or more. Mention the offer in the custom design request so eligibility can be confirmed during quote review. Promotions cannot stack."],
      ["15% off with THEDON15", "Enter THEDON15 in the promotion-code field at secure Stripe Checkout for 15% off eligible items in the current order. Choose either THEDON15 or the $500 first custom-order credit; promotions cannot stack."],
      ["How Buy Now, Pay Later works", "Add an eligible item to cart and continue to secure Stripe Checkout. If an eligible provider is available, select it, review the payment schedule and disclosures, then apply. Approval is handled by the provider, not The Don Jewelers."],
      ["Affirm", "Affirm may offer pay-over-time plans for eligible purchases. Available terms, interest or APR, required down payment, and total cost are shown by Affirm before acceptance."],
      ["Klarna", "Klarna may offer installment or pay-later choices for eligible purchases. The schedule, any fees or interest, and first payment timing appear before acceptance."],
      ["Afterpay", "Afterpay may divide an eligible purchase into scheduled installments. The schedule, initial payment, spending limit, and late-fee rules are provided before acceptance."],
      ["Eligibility and approval", "Provider availability can vary by order amount, location, currency, device, customer history, and Stripe eligibility. Financing logos explain possible options; they do not promise approval."],
      ["Payments, returns, and custom orders", "Payments are managed through the selected provider. Refunds and cancellations follow the store return policy and provider timing. Custom work may require a deposit and have different cancellation limits."],
      ["Questions before applying", "Call (484) 761-2008 or book a private consultation. The Don Jewelers can explain the purchase process but does not make credit decisions or change provider terms."],
    ],
    faqs: [
      ["Is financing guaranteed?", "No. Financing depends on third-party provider approval."],
      ["Can financing be used for custom jewelry?", "It may be available depending on the provider, purchase amount, and order details."],
      ["Can I ask questions before applying?", "Yes. The Don Jewelers can explain available purchase paths before you move forward."],
    ],
  },
  {
    slug: "custom-jewelry",
    title: "Custom Jewelry",
    eyebrow: "Custom Design",
    description: "How custom jewelry works from idea to CAD design, diamond sourcing, production, approval, and finished piece.",
    image: "custom-dejaun-diamond-name-pendant.jpeg",
    keyword: "custom jewelry",
    productKeyword: "custom",
    related: ["pendants", "engagement-rings", "gold-jewelry", "jewelry-financing"],
    quote: "Custom jewelry is personal. The process should feel organized enough to trust and creative enough to enjoy.",
    sections: [
      ["Bring the idea", "A custom project can start with a sketch, a photo, a name, a symbol, a stone, or a loose concept. The first step is understanding what the piece should mean and how it should be worn."],
      ["CAD and approvals", "CAD design helps translate the idea into structure. This is where proportions, stone placement, bail size, ring size, and design details can be reviewed before production."],
      ["Production and finishing", "After approval, the piece moves through production, setting, polishing, and quality review. Custom timelines vary by complexity and sourcing."],
    ],
    faqs: [
      ["Can you make one-of-one jewelry?", "Yes. The Don Jewelers works on custom rings, pendants, chains, bracelets, earrings, and other personal pieces."],
      ["Do I need a finished design before contacting you?", "No. Inspiration photos and a rough direction are enough to start."],
      ["Can CAD be used before production?", "Yes. CAD is available when the design requires technical approval."],
    ],
  },
];

function buildBlogArticle(title, index) {
  const slug = slugify(title);
  const keyword = primaryKeywords[index % primaryKeywords.length];
  const matched = educationResources.find((item) => slug.includes(item.slug) || item.title.toLowerCase() === title.toLowerCase());
  const image = matched?.image || blogImagePool[index % blogImagePool.length];
  const focus = title.replace(/\?$/, "");
  return {
    slug,
    title,
    description: matched?.description || `${focus} explained by The Don Jewelers with practical buying advice, diamond guidance, and custom jewelry context.`,
    keyword: matched?.keyword || keyword,
    image,
    productKeyword: matched?.productKeyword || keyword,
    related: matched?.related || educationResources.slice(index % 6, (index % 6) + 4).map((item) => item.slug),
    quote: matched?.quote || `Good jewelry advice should make the decision feel calmer. Once the details are clear, the right piece becomes much easier to recognize.`,
    sections: matched?.sections || [
      [`What ${focus.toLowerCase()} really means`, `The best way to approach ${focus.toLowerCase()} is to connect the technical details to the finished piece. A number, grade, or label only matters when it improves the way the jewelry looks, feels, wears, or holds meaning for the person receiving it.`],
      ["What affects price and quality", "Pricing usually depends on material, diamond quality, carat weight, labor, certification, design complexity, and timing. Two pieces can sound similar on paper but feel very different once stone quality, gold weight, setting work, and finishing are compared."],
      ["How a private jeweler helps", "A private jeweler can narrow the options, explain tradeoffs, and keep the process personal. That matters when you are buying an engagement ring, tennis chain, tennis bracelet, pendant, watch, or one-of-one custom piece."],
    ],
    faqs: matched?.faqs || [
      [`Can The Don Jewelers help with ${focus.toLowerCase()}?`, `Yes. The Don Jewelers can explain options, compare quality, and help plan a purchase or custom project around ${focus.toLowerCase()}.`],
      ["Can I request a custom quote?", "Yes. Send photos, budget, metal preference, diamond preference, and timing so the project can be reviewed clearly."],
      ["Can this be handled remotely?", "Yes. Clients can work through phone, text, Zoom, FaceTime, or video chat, with insured shipping available nationwide."],
    ],
  };
}

const blogArticles = blogTopics.map((title, index) => {
  return buildBlogArticle(title, index);
});

const serverSeoArticles = [
  ["custom-engagement-ring-timeline", "How Long Does a Custom Engagement Ring Take?", "A practical timeline from consultation and CAD approval through production, inspection, and delivery.", "queen-aurelia-oval-marquise-ring.jpeg"],
  ["oval-vs-radiant-engagement-ring", "Oval vs Radiant Diamond Engagement Rings", "Compare sparkle, proportions, finger coverage, and setting compatibility.", "yellow-gold-oval-pave-engagement-ring.jpeg"],
  ["hidden-halo-vs-halo-engagement-ring", "Hidden Halo vs Halo Engagement Rings", "Understand how each halo style changes the face-up view, profile, and wedding-band fit.", "gold-halo-engagement-ring.jpeg"],
  ["read-igi-lab-diamond-report", "How to Read an IGI Lab Diamond Report", "Review measurements, cut, color, clarity, polish, symmetry, fluorescence, and inscription.", "live-diamond-selection.jpeg"],
  ["custom-engagement-ring-cost-factors", "What Changes the Cost of a Custom Engagement Ring?", "Learn how diamond, metal, setting, labor, and customization choices affect a quote.", "engagement-ring-feature.jpg"],
  ["private-jeweler-lehigh-valley-appointment", "Planning a Private Jewelry Appointment in the Lehigh Valley", "Prepare for an engagement-ring, diamond-sourcing, or custom-jewelry consultation.", "don-logo.jpg"],
].map(([slug, title, description, image]) => ({ slug, title, description, image }));

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
  return `<button class="button button-gold" type="button" data-buy-cart="true">Pay Securely${total > 0 ? ` - ${money.format(total)}` : ""}</button>`;
}

function stripeCheckoutButton(total) {
  return `<button class="button button-gold" type="button" data-buy-cart="true">Checkout Securely${total > 0 ? ` - ${money.format(total)}` : ""}</button>`;
}

function productCheckoutButton(product, total, label = "Buy Now / Checkout with Stripe") {
  if (!product || !Number(total) || product.available === false || product.hidden) {
    return `<button class="button button-light" type="button" disabled>Checkout unavailable - request pricing</button>`;
  }
  return `<button class="button button-gold" type="button" data-buy-product="${htmlSafe(product.id)}">${label}${total ? ` - ${money.format(total)}` : ""}</button>`;
}

function routePath(path = "") {
  const normalized = String(path || "").replace(/^#?\//, "").replace(/^\/+/, "");
  return normalized ? `/${normalized}` : "/";
}

function categoryUrl(slug) {
  return routePath(`category/${slug}`);
}

function productSlug(productOrId) {
  const product = typeof productOrId === "object" && productOrId ? productOrId : allProducts().find((item) => item.id === productOrId) || { id: productOrId, name: productOrId };
  const id = slugify(product.externalId || product.stockNumber || product.id || "");
  const name = slugify(productName(product) || product.name || "jewelry");
  if (!name) return id;
  if (!id || id === name) return name;
  return `${name}-${id}`;
}

function productUrl(id) {
  const product = typeof id === "object" ? id : allProducts().find((item) => item.id === id);
  return routePath(`products/${productSlug(product || id)}`);
}

function legacyProductUrl(id) {
  return routePath(`product/${id}`);
}

function catalogProductUrl(product) {
  return routePath(`products/${productSlug(product)}`);
}

function liveDiamondUrl(diamond) {
  const id = diamond.reportNumber || diamond.certificate || diamond.stockNumber || diamond.id;
  return routePath(`diamonds/${encodeURIComponent(id)}`);
}

function canonicalUrl(path = currentRoutePath()) {
  return `${siteUrl}${routePath(path)}`;
}

function currentRoutePath() {
  if (location.hash && location.hash.startsWith("#/")) return routePath(location.hash.slice(2));
  return routePath(location.pathname);
}

function internalLink(path) {
  return routePath(path);
}

let analyticsEnabled = false;
let analyticsDebug = false;
let lastTrackedPage = "";

function analyticsLocation() {
  return `${location.origin}${location.pathname}${location.hash ? `#/${currentRoutePath()}` : ""}`;
}

function trackEvent(eventName, params = {}) {
  const cleanName = String(eventName || "").replace(/[^a-zA-Z0-9_]/g, "_").slice(0, 40);
  if (!cleanName) return;
  const payload = {
    business_name: businessName,
    page_path: currentRoutePath(),
    page_location: analyticsLocation(),
    ...params,
  };
  if (analyticsEnabled && typeof window.gtag === "function") {
    window.gtag("event", cleanName, payload);
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: cleanName, ...payload });
  }
}

function trackPageView() {
  const pagePath = currentRoutePath();
  const pageKey = `${pagePath}|${document.title}`;
  if (pageKey === lastTrackedPage) return;
  lastTrackedPage = pageKey;
  if (analyticsEnabled && typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: analyticsLocation(),
      page_path: pagePath,
    });
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_title: document.title,
      page_location: analyticsLocation(),
      page_path: pagePath,
    });
  }
}

function installGa4(measurementId, options = {}) {
  const id = String(measurementId || "").trim();
  if (!options.enabled || !/^G-[A-Z0-9]+$/i.test(id)) return;
  const consentRequired = Boolean(options.consentRequired);
  const consentGranted = !consentRequired || localStorage.getItem("donAnalyticsConsent") === "granted";
  if (!consentGranted || navigator.doNotTrack === "1") return;
  analyticsEnabled = true;
  analyticsDebug = Boolean(options.debug);
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(){ window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", id, { send_page_view: false, debug_mode: analyticsDebug });
  if (!document.querySelector(`script[data-ga4="${id}"]`)) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    script.dataset.ga4 = id;
    document.head.appendChild(script);
  }
  lastTrackedPage = "";
  trackPageView();
}

async function loadAnalyticsConfig() {
  try {
    const response = await fetch("/api/site-config", { cache: "force-cache" });
    const config = await response.json();
    const verification = String(config?.searchConsole?.siteVerification || "").trim();
    if (verification) upsertMeta('meta[name="google-site-verification"]', "name", "google-site-verification", verification);
    installGa4(config?.analytics?.gaMeasurementId || gaMeasurementId, config?.analytics || {});
  } catch {
    window.dataLayer = window.dataLayer || [];
    installGa4(gaMeasurementId, { enabled: location.hostname === "www.thedonjewelersandjewelrynyc.com" });
  }
}

function upsertLink(rel, href, attrs = {}) {
  let link = document.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.rel = rel;
    document.head.appendChild(link);
  }
  link.href = href;
  Object.entries(attrs).forEach(([key, value]) => link.setAttribute(key, value));
}

function upsertMeta(selector, attrName, attrValue, content) {
  let meta = document.querySelector(selector);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attrName, attrValue);
    document.head.appendChild(meta);
  }
  meta.content = content;
}

function removeSeoJsonLd() {
  document.querySelectorAll('script[data-seo-jsonld="true"], script[data-server-jsonld="true"]').forEach((node) => node.remove());
}

function injectJsonLd(items = []) {
  removeSeoJsonLd();
  items.filter(Boolean).forEach((item) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.seoJsonld = "true";
    script.textContent = JSON.stringify(item);
    document.head.appendChild(script);
  });
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
  const minimumVisibleMs = 250;
  const remaining = Math.max(0, minimumVisibleMs - (Date.now() - splashStartedAt));
  window.setTimeout(() => {
    splash.classList.add("is-hiding");
    window.setTimeout(() => splash.remove(), 900);
  }, remaining);
}

function navLinks() {
  const categoryLinks = categories.map(([slug, name]) => {
    const href = ["custom-orders", "select-diamond", "start-custom-ring-design"].includes(slug) ? internalLink(slug) : categoryUrl(slug);
    const className = ["custom-orders", "start-custom-ring-design"].includes(slug) ? ` class="nav-highlight"` : "";
    return `<a${className} href="${href}">${name}</a>`;
  }).join("");
  return `
    <a href="${internalLink("/")}">Home</a>
    <span class="sidebar-section-label">Shop fine jewelry</span>
    <a class="nav-highlight" href="${internalLink("products")}">View All Fine Jewelry</a>
    ${categoryLinks}
    <span class="sidebar-section-label">Private service</span>
    <a class="nav-highlight" href="${internalLink("free-engagement-ring-consultation")}">Free Ring Consult</a>
    <a class="nav-highlight" href="${appointmentUrl}">Book Appointment</a>
    <a class="nav-highlight" href="${internalLink("jewelry-financing")}">Jewelry Financing</a>
    <a href="${internalLink("nyc-diamond-district-jeweler")}">NYC Jeweler</a>
    <a href="${internalLink("service-areas")}">Service Areas</a>
    <a href="${internalLink("blog")}">Blog</a>
    <a href="${internalLink("cart")}">Cart <span class="cart-pill">${cart.length}</span></a>
  `;
}

function commerceItems(items = []) {
  return items.map((item) => ({
    item_id: String(item.item_id || item.id || ""),
    item_name: String(item.item_name || item.name || "Jewelry"),
    item_category: String(item.item_category || item.category || "Jewelry"),
    price: Number(item.price || 0),
    quantity: Math.max(1, Number(item.quantity || 1)),
  }));
}

function desktopNavLinks() {
  return `
    <a href="${internalLink("products")}">Fine Jewelry</a>
    <a href="${categoryUrl("engagement-rings")}">Engagement Rings</a>
    <a href="${internalLink("select-diamond")}">Live Diamonds</a>
    <a class="nav-highlight" href="${internalLink("start-custom-ring-design")}">Custom Design</a>
  `;
}

function globalSearchForm(context = "header") {
  return `
    <form class="global-search global-search-${context}" role="search" aria-label="Search jewelry, diamonds, and pages">
      <input name="q" type="search" autocomplete="off" placeholder="Search all jewelry & diamonds" aria-label="Search every product, diamond, category, and page">
      <button type="submit">Search</button>
    </form>
  `;
}

function financingAnnouncement() {
  return `
    <aside class="financing-announcement" aria-label="Jewelry financing options">
      <span class="financing-pulse" aria-hidden="true"></span>
      <strong>$500 first custom-order credit</strong>
      <span>New clients: $500 off an eligible custom order of $2,500+. Or use THEDON15 at checkout. Promotions cannot stack.</span>
      <span class="bnpl-logos" aria-label="Eligible financing providers"><span class="bnpl-logo affirm-logo">affirm</span><span class="bnpl-logo klarna-logo">Klarna.</span><span class="bnpl-logo afterpay-logo">Afterpay</span></span>
      <a href="${internalLink("jewelry-financing")}">Explore financing</a>
    </aside>
  `;
}

function sidebarFinancingCard() {
  return `<div class="sidebar-financing-card"><strong>$500 first custom-order credit</strong><span>Eligible new-client custom orders of $2,500+. Promotions cannot stack; choose this credit or THEDON15.</span><div class="bnpl-logos" aria-label="Eligible financing providers"><span class="bnpl-logo affirm-logo">affirm</span><span class="bnpl-logo klarna-logo">Klarna.</span><span class="bnpl-logo afterpay-logo">Afterpay</span></div><a href="${internalLink("jewelry-financing")}">Offer & financing details</a></div>`;
}

function shell(main) {
  document.getElementById("app").innerHTML = `
    <header class="site-header">
      <button class="brand brand-menu-button" type="button" id="sidebar-open" aria-label="Open site menu" aria-controls="site-sidebar" aria-expanded="false">
        <span class="brand-mark" aria-hidden="true">TD</span>
        <span class="brand-copy"><strong>The Don Jewelers & Jewelry</strong><small>Luxury custom jewelry</small></span>
        <span class="header-menu-cue"><strong>More options</strong><small>Click here</small></span>
      </button>
      <nav class="nav-links" aria-label="Primary navigation">${desktopNavLinks()}</nav>
      ${globalSearchForm("header")}
    </header>
    ${financingAnnouncement()}
    <div class="sidebar-backdrop" id="sidebar-backdrop" hidden></div>
    <aside class="site-sidebar" id="site-sidebar" aria-label="Site menu" aria-hidden="true">
      <div class="sidebar-head">
        <span class="sidebar-brand"><span class="brand-mark" aria-hidden="true">TD</span><span><strong>The Don Jewelers & Jewelry</strong><small>Luxury custom jewelry</small></span></span>
        <button class="sidebar-close" type="button" id="sidebar-close" aria-label="Close site menu">Close</button>
      </div>
      ${globalSearchForm("sidebar")}
      ${sidebarFinancingCard()}
      <nav class="sidebar-links" aria-label="Sidebar navigation">${navLinks()}</nav>
    </aside>
    ${main}
    ${stickyAppointmentCta()}
    ${footer()}
  `;
  wireSidebar();
  wireGlobalSearch();
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

function stickyAppointmentCta() {
  return `
    <a class="sticky-appointment-cta" href="${appointmentUrl}" aria-label="Book a private jewelry appointment">
      <span>Book Appointment</span>
      <small>Private jeweler consultation</small>
    </a>
  `;
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
      <div class="footer-navigation">
        <div class="footer-link-group"><strong>Shop & Design</strong>
          <a href="#/products">Shop Jewelry</a><a href="#/select-diamond">Select a Diamond</a><a href="#/start-custom-ring-design">Build an Engagement Ring</a><a href="#/custom-orders">Custom Jewelry</a><a href="${appointmentUrl}">Book Appointment</a>
        </div>
        <div class="footer-link-group"><strong>Guidance</strong>
          <a href="#/ring-size-guide">Ring Size Guide</a><a href="#/diamond-shape-guide">Diamond Shape Guide</a><a href="#/lab-diamonds-vs-natural-diamonds">Lab vs Natural Diamonds</a><a href="#/blog">Jewelry Journal</a><a href="#/request/contact">Contact</a>
        </div>
        <div class="footer-link-group"><strong>Trust & Policies</strong>
          ${policyLinks.map(([label, path]) => `<a href="#/${path}">${label}</a>`).join("")}
        </div>
        <div class="footer-link-group"><strong>Follow & Review</strong>
          <a href="https://www.instagram.com/los_thejeweler/" target="_blank" rel="me noopener noreferrer" aria-label="Follow The Don Jewelers and Jewelry on Instagram at los_thejeweler">Instagram · @los_thejeweler</a><a href="https://www.facebook.com/profile.php?id=100089172553878" target="_blank" rel="me noopener noreferrer" aria-label="Visit The Don Jewelers and Jewelry on Facebook">Facebook · The Don Jewelers &amp; Jewelry</a><a href="${googleBusinessProfileUrl}" target="_blank" rel="noopener noreferrer">Google Business Profile</a><a href="${googleReviewUrl}" target="_blank" rel="noopener noreferrer">Google Reviews</a>
        </div>
        <span class="site-version">Private appointments · Secure checkout · Nationwide shipping</span>
      </div>
    </footer>
  `;
}

function trustBlockSection() {
  return `
    <section class="trust-block-section" aria-label="Customer protection and buying trust">
      <article>
        <strong>Warranty Review</strong>
        <p>Manufacturing-defect warranty review is available, with paid repair support when wear, impact, sizing, or outside work is involved.</p>
        <a href="#/warranty-policy">Warranty Policy</a>
      </article>
      <article>
        <strong>Insured Shipping</strong>
        <p>Orders ship only after details and payment are confirmed. Timing, carrier, and delivery needs are reviewed before fulfillment.</p>
        <a href="#/shipping-policy">Shipping Policy</a>
      </article>
      <article>
        <strong>Return Clarity</strong>
        <p>Ready-made and custom pieces have different rules. Review approval, sizing, and final-sale details before moving forward.</p>
        <a href="#/refund-return-policy">Return Policy</a>
      </article>
      <article>
        <strong>Secure Payment</strong>
        <p>Payments run through secure third-party processors with fraud checks, billing verification, and cleared-payment review.</p>
        <a href="#/payment-policy">Payment Policy</a>
      </article>
      <article>
        <strong>Private Jeweler Process</strong>
        <p>Consultation, diamond sourcing, CAD review, approval, production, final balance, and insured delivery are handled step by step.</p>
        <a href="#/custom-order-policy">Custom Order Policy</a>
      </article>
    </section>
  `;
}

function officialGoogleProfileSection() {
  return `
    <section class="trust-block-section official-google-profile" aria-label="Official Google Business Profile">
      <article>
        <strong>Official Google Business Profile</strong>
        <p>Use one verified profile for directions, business details, reviews, and Google search trust signals.</p>
        <a href="${googleBusinessProfileUrl}" target="_blank" rel="noopener noreferrer">Find us on Google</a>
      </article>
      <article>
        <strong>Reviews</strong>
        <p>Customer reviews and profile references are routed to the official The Don Jewelers & Jewelry Google profile.</p>
        <a href="${googleReviewUrl}" target="_blank" rel="noopener noreferrer">Open Google Reviews</a>
      </article>
    </section>
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

function wireGlobalSearch() {
  document.querySelectorAll(".global-search").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const q = String(new FormData(form).get("q") || "").trim();
      if (!q) return;
      trackEvent("search", { search_term: q });
      history.pushState({}, "", `/search?q=${encodeURIComponent(q)}`);
      navigate();
    });
  });
}

function productCard(product) {
  const priced = Number.isFinite(Number(product.price)) && product.price !== "Request Pricing" && product.estimate !== null;
  const href = productUrl(product);
  return `
    <article class="product-card">
      <a href="${href}" class="product-image-link" aria-label="Customize ${productName(product)}">
        <img src="${productImageSrc(product)}" alt="${product.alt || productName(product)}" ${imageSafety}>
      </a>
      <div class="product-card-body">
        <p class="eyebrow">${product.category}</p>
        <h3>${productName(product)}</h3>
        <p class="muted">${startingText(product)}</p>
        ${productBadges(product)}
        <div class="card-actions">
          <a class="button button-dark" href="${href}">View Details</a>
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

function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: businessName,
    alternateName: brandAliases,
    url: siteUrl,
    logo: `${siteUrl}/don-logo.jpg`,
    image: featuredSeoImages.map((name) => `${siteUrl}/${name}`),
    email: contactEmail,
    telephone: phoneDisplay,
    sameAs: officialSocialLinks,
    contactPoint: [{
      "@type": "ContactPoint",
      telephone: phoneDisplay,
      email: contactEmail,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["en"],
    }],
  };
}

function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "JewelryStore"],
    "@id": `${siteUrl}/#jewelry-store`,
    name: businessName,
    alternateName: brandAliases,
    url: siteUrl,
    image: featuredSeoImages.map((name) => `${siteUrl}/${name}`),
    logo: `${siteUrl}/don-logo.jpg`,
    email: contactEmail,
    telephone: phoneDisplay,
    sameAs: officialSocialLinks,
    hasMap: googleBusinessProfileUrl,
    priceRange: "$$$",
    description: "Luxury private jeweler specializing in custom engagement rings, diamond jewelry, tennis chains, tennis bracelets, pendants, watches, CAD jewelry design, diamond sourcing, and jewelry consultation for NYC, the Tri-State area, Allentown, Pennsylvania, and clients nationwide by shipping and private consultation.",
    areaServed: locationTargets.map((name) => ({ "@type": "Place", name })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: phoneDisplay,
        email: contactEmail,
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: ["en"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressRegion: "NY",
      addressCountry: "US",
    },
    makesOffer: primaryKeywords.slice(0, 35).map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  };
}

function breadcrumbSchema(items = []) {
  const list = [["Home", "/"], ...items].map(([name, path], index) => ({
    "@type": "ListItem",
    position: index + 1,
    name,
    item: canonicalUrl(path),
  }));
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list,
  };
}

function faqSchema(faqs = []) {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

function articleSchema(article, path, type = "Article") {
  if (!article) return null;
  const image = article.image ? `${siteUrl}/${article.image}` : `${siteUrl}/${defaultSeoImage}`;
  return {
    "@context": "https://schema.org",
    "@type": type,
    headline: article.title,
    description: article.description,
    image,
    mainEntityOfPage: canonicalUrl(path),
    author: { "@type": "Organization", name: businessName },
    publisher: {
      "@type": "Organization",
      name: businessName,
      logo: { "@type": "ImageObject", url: `${siteUrl}/don-logo.jpg` },
    },
  };
}

function merchantReturnPolicySchema() {
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

function shippingDetailsSchema() {
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

function merchantOfferDefaultsSchema() {
  return {
    shippingDetails: shippingDetailsSchema(),
    hasMerchantReturnPolicy: merchantReturnPolicySchema(),
  };
}

function productSchema(product) {
  if (!product) return null;
  const amount = Number(product.price);
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productName(product),
    image: [product.imageUrl || `${siteUrl}/${product.image || fallbackImage}`],
    description: product.lede || startingText(product),
    brand: { "@type": "Brand", name: businessName },
    category: product.category,
    sku: product.id,
    offers: {
      "@type": "Offer",
      url: canonicalUrl(productUrl(product.id)),
      priceCurrency: "USD",
      price: Number.isFinite(amount) ? amount : undefined,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      ...merchantOfferDefaultsSchema(),
    },
  };
}

function webPageSchema(title, description, path = currentRoutePath()) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl(path)}#webpage`,
    url: canonicalUrl(path),
    name: title,
    description,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: primaryKeywords.slice(0, 18).join(", "),
  };
}

function serviceSchema({ id, title, description, image, keywords }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/${id}#service`,
    name: title,
    description,
    image: `${siteUrl}/${image}`,
    provider: { "@id": `${siteUrl}/#jewelry-store` },
    areaServed: locationTargets.map((name) => ({ "@type": "Place", name })),
    serviceType: keywords.join(", "),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      url: `${siteUrl}/${id}`,
    },
  };
}

function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: businessName,
    alternateName: brandAliases,
    publisher: { "@id": `${siteUrl}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

function setSeo(title, description, options = {}) {
  document.title = title;
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "description";
    document.head.appendChild(meta);
  }
  meta.content = description;
  const path = options.path || currentRoutePath();
  const canonical = canonicalUrl(path);
  const image = options.image ? (String(options.image).startsWith("http") ? options.image : `${siteUrl}/${options.image}`) : `${siteUrl}/${primarySeoImage}`;
  upsertLink("canonical", canonical);
  upsertMeta('meta[property="og:title"]', "property", "og:title", title);
  upsertMeta('meta[property="og:description"]', "property", "og:description", description);
  upsertMeta('meta[property="og:url"]', "property", "og:url", canonical);
  upsertMeta('meta[property="og:type"]', "property", "og:type", options.type || "website");
  upsertMeta('meta[property="og:image"]', "property", "og:image", image);
  upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
  upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
  upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
  upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", image);
  upsertMeta('meta[name="robots"]', "name", "robots", "index,follow,max-image-preview:large");
  injectJsonLd([
    organizationSchema(),
    websiteSchema(),
    localBusinessSchema(),
    webPageSchema(title, description, path),
    breadcrumbSchema(options.breadcrumbs || []),
    faqSchema(options.faqs || []),
    ...(options.schema || []),
  ]);
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

function faqSection(faqs = globalFaqs) {
  return `
    <section class="seo-section faq-section">
      <div class="section-heading">
        <p class="eyebrow">FAQ</p>
        <h2>Frequently asked questions</h2>
      </div>
      <div class="faq-grid">
        ${faqs.map(([question, answer]) => `
          <article class="faq-item">
            <h3><a href="${internalLink(faqPath(slugify(question)))}">${question}</a></h3>
            <p>${answer}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function relatedProductGrid(keyword = "") {
  const terms = String(keyword).toLowerCase().split(/\s+/).filter(Boolean);
  const matches = allProducts().filter((product) => {
    const haystack = `${product.name} ${product.category} ${product.lede} ${product.alt}`.toLowerCase();
    return terms.some((term) => haystack.includes(term));
  }).slice(0, 4);
  const list = matches.length ? matches : allProducts().slice(0, 4);
  return `
    <section class="seo-section">
      <div class="section-heading">
        <p class="eyebrow">Related Products</p>
        <h2>Shop related jewelry</h2>
      </div>
      <div class="product-grid compact-grid">${list.map(productCard).join("")}</div>
    </section>
  `;
}

function categoryRelatedGrid(products = [], title = "Related Jewelry") {
  const list = products.filter(Boolean).slice(0, 4);
  if (!list.length) return "";
  return `
    <section class="seo-section">
      <div class="section-heading">
        <p class="eyebrow">Related Products</p>
        <h2>${title}</h2>
      </div>
      <div class="product-grid compact-grid">${list.map(productCard).join("")}</div>
    </section>
  `;
}

function relatedCategoryLinks(slugs = [], options = {}) {
  const fallback = ["custom-engagement-rings", "diamond-tennis-chains", "diamond-pendants", "custom-jewelry"];
  const items = (slugs.length ? slugs : fallback).map((slug) => servicePages.find(([id]) => id === slug)).filter(Boolean);
  return `
    <section class="seo-section related-links-section">
      <div class="section-heading">
        <p class="eyebrow">${options.eyebrow || "Related Categories"}</p>
        <h2>${options.heading || "Continue your jewelry research"}</h2>
        ${options.body ? `<p>${options.body}</p>` : ""}
      </div>
      <div class="policy-link-grid">
        ${items.map(([slug, title, description]) => `<a href="${internalLink(slug)}"><strong>${title}</strong><span>${description}</span></a>`).join("")}
      </div>
    </section>
  `;
}

function relatedArticleCards(slugs = [], currentSlug = "") {
  const resolve = (slug) => {
    const education = educationResources.find((item) => item.slug === slug);
    if (education) return { ...education, href: educationPath(education.slug) };
    const blog = blogArticles.find((item) => item.slug === slug);
    if (blog) return { ...blog, href: `blog/${blog.slug}` };
    return null;
  };
  const picked = slugs
    .map(resolve)
    .filter((item) => item && item.slug !== currentSlug)
    .slice(0, 4);
  const items = picked.length ? picked : educationResources.filter((item) => item.slug !== currentSlug).slice(0, 4).map((item) => ({ ...item, href: educationPath(item.slug) }));
  return `
    <section class="seo-section related-article-section">
      <div class="section-heading">
        <p class="eyebrow">Related Articles</p>
        <h2>You May Also Like</h2>
      </div>
      <div class="article-card-grid">
        ${items.map((item) => `
          <a class="article-resource-card" href="${internalLink(item.href)}">
            <img src="${asset(item.image || defaultSeoImage)}" alt="${item.title} jewelry education" ${imageSafety}>
            <span>${item.eyebrow || item.keyword || "Jewelry Guide"}</span>
            <strong>${item.title}</strong>
            <em>${item.description}</em>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function comparisonTable(rows = []) {
  if (!rows.length) return "";
  const [head, ...body] = rows;
  return `
    <div class="resource-table-wrap">
      <table class="resource-table">
        <thead><tr>${head.map((cell) => `<th>${cell}</th>`).join("")}</tr></thead>
        <tbody>${body.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>
  `;
}

function articleBody(article) {
  return `
    <article class="resource-article">
      <img class="resource-feature-image" src="${asset(article.image || defaultSeoImage)}" alt="${article.title} by The Don Jewelers & Jewelry" ${imageSafety}>
      <blockquote>${article.quote}</blockquote>
      <p class="resource-lede">${article.description}</p>
      <div class="resource-callout">
        <strong>Did you know?</strong>
        <span>Fine jewelry decisions become easier when you compare the finished look, the material quality, the paperwork, and how the piece will actually be worn.</span>
      </div>
      ${article.sections.map(([heading, body]) => `
        <section>
          <h2>${heading}</h2>
          <p>${body}</p>
        </section>
      `).join("")}
      ${comparisonTable(article.comparison || [])}
      <section class="tip-grid" aria-label="Jewelry buying tips">
        <article>
          <h3>Buying tip</h3>
          <p>Ask to compare more than one option. A good decision usually comes from seeing the tradeoffs clearly, not from being pushed toward the first piece.</p>
        </article>
        <article>
          <h3>Expert recommendation</h3>
          <p>Send inspiration photos, budget, timing, metal preference, and any diamond requirements before the consultation. Better context leads to better sourcing.</p>
        </article>
      </section>
      <div class="article-cta-band">
        <div>
          <p class="eyebrow">Ready for private guidance?</p>
          <h2>Talk through the piece before you buy.</h2>
          <p>Whether you are comparing diamonds or planning custom jewelry, The Don Jewelers can help you move from idea to finished piece with a clear plan.</p>
        </div>
        <div class="hero-actions">
          <a class="button button-gold" href="${internalLink("select-diamond")}">Shop Diamonds</a>
          <a class="button button-dark" href="${categoryUrl("custom-jewelry")}">Browse Jewelry</a>
          <a class="button button-light" href="${internalLink("custom-orders")}">Start Custom Project</a>
        </div>
      </div>
    </article>
  `;
}

function resourceArticlePage(article, options = {}) {
  const path = options.path || educationPath(article.slug);
  const faqs = article.faqs || globalFaqs;
  setSeo(`${article.title} | ${businessName}`, article.description, {
    path,
    image: article.image,
    type: "article",
    faqs,
    breadcrumbs: options.breadcrumbs || [["Education", "blog"], [article.title, path]],
    schema: [articleSchema(article, path, options.schemaType || "Article")],
  });
  shell(`
    <main>
      ${pageHero(article.eyebrow || "Jewelry Education", article.title, article.description, `<div class="hero-actions"><a class="button button-gold" href="${internalLink("select-diamond")}">Shop Diamonds</a><a class="button button-light" href="${internalLink("custom-orders")}">Schedule an Appointment</a></div>`)}
      ${articleBody(article)}
      ${relatedProductGrid(article.productKeyword || article.keyword || article.title)}
      ${relatedArticleCards(article.related || [], article.slug)}
      ${faqSection(faqs)}
    </main>
  `);
}

function educationResourcePage(slug, pathOverride = "") {
  const article = educationResources.find((item) => item.slug === slug) || educationResources[0];
  const path = pathOverride || educationPath(article.slug);
  resourceArticlePage(article, {
    path,
    breadcrumbs: [["Education", "blog"], [article.title, path]],
    schemaType: "Article",
  });
}

function allFaqResources() {
  const entries = [...globalFaqs];
  educationResources.forEach((article) => (article.faqs || []).forEach((faq) => entries.push(faq)));
  blogArticles.forEach((article) => (article.faqs || []).forEach((faq) => entries.push(faq)));
  return entries;
}

function faqDetailPage(slug) {
  const faqs = allFaqResources();
  const found = faqs.find(([question]) => slugify(question) === slug);
  const question = found?.[0] || slug.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  const answer = found?.[1] || "Yes. The Don Jewelers & Jewelry can help review the details, explain the options, and guide the next step through a private consultation.";
  const article = {
    slug,
    title: question,
    eyebrow: "Jewelry FAQ",
    description: answer,
    image: defaultSeoImage,
    keyword: "jewelry FAQ",
    productKeyword: "jewelry",
    quote: "A good answer should make the next step feel simple.",
    related: ["what-is-a-diamond", "custom-jewelry", "jewelry-financing", "nyc-jewelers"],
    sections: [
      ["The short answer", answer],
      ["What to do next", "If the question affects budget, timing, diamond quality, metal choice, sizing, shipping, or a custom design approval, it is worth discussing before you buy. Clear communication protects both the client and the finished piece."],
      ["How The Don Jewelers handles it", "The process is private and practical: review the goal, compare the realistic options, explain the tradeoffs, and then decide whether a finished piece, sourced diamond, or custom design is the right move."],
    ],
    faqs: [[question, answer], ["Can I ask follow-up questions?", "Yes. You can contact The Don Jewelers before purchasing or starting a custom order."], ["Can this be handled remotely?", "Yes. Phone, text, Zoom, FaceTime, and insured nationwide shipping are available where appropriate."]],
  };
  resourceArticlePage(article, {
    path: faqPath(slug),
    breadcrumbs: [["FAQ", "blog"], [question, faqPath(slug)]],
    schemaType: "Article",
  });
}

function nycJewelerStorySection() {
  return `
    <section class="seo-section service-story">
      <div class="section-heading">
        <p class="eyebrow">Private Jewelry Guidance</p>
        <h2>A calmer way to buy in the Diamond District</h2>
        <p>Buying fine jewelry should feel thoughtful, not rushed. Bring an idea, a photo, a budget, a diamond question, or even just the feeling you want the piece to carry. From there, each option is organized clearly so you can make a confident decision.</p>
      </div>
      <div class="story-grid">
        <article>
          <h3>Start with the idea</h3>
          <p>We begin with the person, the occasion, the timeline, and the way the jewelry will be worn. Then we refine the important details: diamond size, metal color, setting style, CAD design, or a fully custom concept.</p>
        </article>
        <article>
          <h3>Review real options</h3>
          <p>You can compare lab grown diamonds, natural diamonds, 14K gold, 18K gold, platinum, and design directions side by side. The goal is to understand the tradeoffs before you spend.</p>
        </article>
        <article>
          <h3>Work locally or nationwide</h3>
          <p>Clients in New York, New Jersey, Pennsylvania, and the tri-state area can work locally. Nationwide clients can use Zoom, FaceTime, or video chat, with insured shipping available across the United States.</p>
        </article>
      </div>
    </section>
  `;
}

function buyingGuide(page) {
  const [slug, title, description, image, keywords] = page;
  return `
    <section class="seo-section guide-section">
      <div class="section-heading">
        <p class="eyebrow">Buying Guide</p>
        <h2>${title} buying guide</h2>
      </div>
      <div class="guide-grid">
        <article>
          <h3>Start with purpose and budget</h3>
          <p>Decide whether the piece is for daily wear, bridal jewelry, a milestone gift, or a statement custom jewelry project. The best budget considers diamond size, gold weight, labor, certification, and whether the piece uses lab grown diamonds or natural diamonds.</p>
        </article>
        <article>
          <h3>Choose diamond and metal details</h3>
          <p>Compare VVS, VS, color, cut, carat weight, 14K gold, 18K gold, white gold, yellow gold, rose gold, and platinum. For ${title.toLowerCase()}, small changes in stone layout and gold weight can change the final quote.</p>
        </article>
        <article>
          <h3>Use private consultation</h3>
          <p>A private jeweler can source diamonds, build CAD previews, explain tradeoffs, and make the piece match your style instead of forcing a mass-market design.</p>
        </article>
      </div>
      <p class="seo-copy">${description} Relevant searches include ${keywords.join(", ")} plus ${locationTargets.join(", ")}.</p>
    </section>
  `;
}

function customProjectGallerySection() {
  const projects = [
    ["queen-aurelia-oval-marquise-ring.jpeg", "Oval and marquise custom engagement ring"],
    ["custom-dejaun-diamond-name-pendant.jpeg", "Custom diamond name pendant"],
    ["custom-st-diamond-initial-pendant-front.jpeg", "Custom diamond initial pendant"],
    ["yellow-gold-diamond-cuban-link-bracelet.jpeg", "Yellow gold diamond Cuban link bracelet"],
    ["gemstone-leaf-wedding-band-set.jpeg", "Gemstone leaf wedding band set"],
    ["medusa-diamond-signet-ring.jpeg", "Custom diamond signet ring"],
  ];
  return `
    <section class="seo-section" aria-label="Original custom jewelry projects">
      <div class="section-heading">
        <p class="eyebrow">Owned Work & Design Inspiration</p>
        <h2>Custom pieces built around personal specifications</h2>
      </div>
      <div class="project-gallery-grid">
        ${projects.map(([image, alt]) => `<figure><img src="${asset(image)}" alt="${alt} by The Don Jewelers & Jewelry" ${imageSafety}><figcaption>${alt}</figcaption></figure>`).join("")}
      </div>
      <div class="builder-actions">
        <a class="button button-gold" href="${internalLink("custom-orders")}">Request a Custom Project</a>
        <a class="button button-dark" href="${internalLink("request/appointment")}">Book Appointment</a>
      </div>
    </section>
  `;
}

function servicePage(slug) {
  const page = servicePages.find(([id]) => id === slug);
  if (!page) return home();
  const [id, title, description, image, keywords, related, regionLabel = "NYC, Manhattan, and Lehigh Valley clients"] = page;
  const defaultFaqs = [
    [`Can The Don Jewelers & Jewelry help with ${title.toLowerCase()}?`, `Yes. The Don Jewelers & Jewelry helps clients with ${title.toLowerCase()}, private jeweler consultation, diamond sourcing, custom CAD design, and quote guidance.`],
    [`Do you offer lab grown and natural diamond options?`, "Yes. Lab grown diamonds and natural diamonds can be sourced by shape, carat weight, color, clarity, certification, and budget."],
    [`Do you serve ${regionLabel}?`, `Yes. The service area includes ${locationTargets.join(", ")}.`],
    [`Can I request financing?`, "Jewelry financing may be available through third-party providers, subject to approval and provider terms."],
  ];
  const nycFaqs = [
    ["Can The Don Jewelers & Jewelry help with New York's NYC Diamond District jewelry?", "Yes. The Don Jewelers & Jewelry helps clients who want access to NYC Diamond District jewelry, custom engagement rings, diamond sourcing, CAD design, and private jeweler guidance in a more personal setting."],
    ["Do you offer lab grown and natural diamond options?", "Yes. Lab grown diamonds and natural diamonds can be sourced by shape, carat weight, color, clarity, certification, and budget."],
    ["Do you serve New York, Pennsylvania, and nationwide clients?", "Yes. The Don Jewelers & Jewelry primarily serves the tri-state area, including New York, New Jersey, and Pennsylvania, and also works with clients across the United States. Clients outside the area can use Zoom, FaceTime, or video chat, with insured nationwide shipping available."],
    ["Can I request financing?", "Jewelry financing may be available through third-party providers, subject to approval and provider terms."],
  ];
  const faqs = id === "nyc-diamond-district-jeweler" ? nycFaqs : defaultFaqs;
  const relatedOptions = id === "nyc-diamond-district-jeweler"
    ? {
        eyebrow: "Plan Your Jewelry Experience",
        heading: "Choose the next step that fits you",
        body: "Each path is meant to help you feel oriented before you buy, whether you are planning an engagement ring, comparing custom design, or booking a private appointment.",
      }
    : {};
  setSeo(`${title} | The Don Jewelers & Jewelry`, description, {
    path: id,
    image,
    faqs,
    breadcrumbs: [[title, id]],
    schema: [serviceSchema({ id, title, description, image, keywords })],
  });
  shell(`
    <main>
      ${pageHero("Luxury Private Jeweler", title, description, `<div class="hero-actions"><a class="button button-gold" href="${internalLink("custom-orders")}">Request a Quote</a><a class="button button-light" href="${internalLink("select-diamond")}">Browse Diamonds</a></div>`)}
      ${id === "free-engagement-ring-consultation" ? consultationOfferSection() : ""}
      <section class="seo-section split-seo">
        <img src="${asset(image)}" alt="${title} by The Don Jewelers & Jewelry for ${regionLabel}" ${imageSafety}>
        <div>
          <p class="eyebrow">Private Jewelry Service</p>
          <h2>${title} for ${regionLabel}</h2>
          <p>${description}</p>
          <ul class="service-bullets">
            <li>Private consultation before design or sourcing starts.</li>
            <li>Lab grown and natural diamond options when the piece calls for them.</li>
            <li>14K, 18K, white gold, yellow gold, rose gold, and platinum options by quote.</li>
          </ul>
        </div>
      </section>
      ${id === "jewelry-financing" ? financingGuideSection() : ""}
      ${id === "custom-jewelry-project-gallery" ? customProjectGallerySection() : ""}
      ${id === "nyc-diamond-district-jeweler" ? nycJewelerStorySection() : ""}
      ${id === "nyc-diamond-district-jeweler" ? "" : relatedProductGrid(keywords.join(" "))}
      ${relatedCategoryLinks(related, relatedOptions)}
      ${faqSection(faqs)}
    </main>
  `);
}

function financingGuideSection() {
  const guide = educationResources.find((item) => item.slug === "jewelry-financing");
  return `
    <section class="seo-section financing-guide-section" aria-labelledby="financing-guide-title">
      <div class="financing-provider-panel">
        <span class="promo-code-chip">15% OFF · THEDON15</span>
        <div class="bnpl-logos" aria-label="Eligible Buy Now, Pay Later providers"><span class="bnpl-logo affirm-logo">affirm</span><span class="bnpl-logo klarna-logo">Klarna.</span><span class="bnpl-logo afterpay-logo">Afterpay</span></div>
        <p>Subject to provider eligibility and approval. Terms are displayed before acceptance in secure Stripe Checkout.</p>
      </div>
      <div class="section-heading">
        <p class="eyebrow">Financing Guide</p>
        <h2 id="financing-guide-title">Understand every step before you apply</h2>
        <p>Compare the possible providers, read the approval disclosures, and know how payments, returns, discounts, and custom orders work.</p>
      </div>
      <div class="trust-block-section">
        ${(guide?.sections || []).map(([heading, body]) => `<article><strong>${htmlSafe(heading)}</strong><p>${htmlSafe(body)}</p></article>`).join("")}
      </div>
      <div class="builder-actions"><a class="button button-gold" href="${internalLink("products")}">Shop Eligible Jewelry</a><a class="button button-dark" href="${internalLink("request/appointment")}">Ask About Financing</a><a class="button button-light" href="${phoneHref}">Call ${phoneDisplay}</a></div>
    </section>
  `;
}

function firstCustomOrderCreditSection() {
  return `
    <section class="seo-section first-custom-credit" aria-labelledby="first-custom-credit-title">
      <div><p class="eyebrow">New Client Custom Design Perk</p><h2 id="first-custom-credit-title">Receive a $500 credit on your first eligible custom order</h2><p>Available to first-time customers on an eligible custom jewelry order totaling $2,500 or more. Mention the offer in your design request; eligibility is confirmed during quote review and the credit is applied before final payment.</p></div>
      <dl class="credit-terms"><div><dt>Credit</dt><dd>$500</dd></div><div><dt>Minimum order</dt><dd>$2,500</dd></div><div><dt>Who qualifies</dt><dd>New customers · first eligible custom order</dd></div><div><dt>Combining offers</dt><dd>Promotions cannot stack; choose this credit or THEDON15</dd></div></dl>
      <div class="builder-actions"><a class="button button-gold" href="${internalLink("custom-orders?offer=first-custom-500")}">Claim in Custom Design Request</a><a class="button button-light" href="${phoneHref}">Call ${phoneDisplay}</a></div>
    </section>`;
}

function consultationOfferSection() {
  return `
    <section class="seo-section">
      <p class="eyebrow">Free Buyer Help</p>
      <h2>Get clear on diamond size, budget, setting style, and next steps before you spend.</h2>
      <div class="guide-grid">
        <article>
          <h3>Compare lab vs natural diamonds</h3>
          <p>Review size, certification, color, clarity, cut, and price tradeoffs before choosing a center stone.</p>
        </article>
        <article>
          <h3>Plan a realistic ring budget</h3>
          <p>Talk through metal, carat size, diamond quality, financing, and timeline so the quote matches the goal.</p>
        </article>
        <article>
          <h3>Start a custom CAD direction</h3>
          <p>Bring inspiration photos and get guidance on what can be built, changed, upgraded, or simplified.</p>
        </article>
      </div>
      <div class="hero-actions">
        <a class="button button-gold" href="${internalLink("request/contact?intent=free-engagement-ring-consultation")}">Request Free Consultation</a>
        <a class="button button-light" href="${phoneHref}">Call or Text ${phoneDisplay}</a>
      </div>
    </section>
  `;
}

function blogIndex() {
  setSeo("Jewelry Knowledge Center | Diamond Education & Buying Guides", "Read diamond education, jewelry buying guides, NYC jeweler advice, engagement ring tips, tennis chain guidance, financing explainers, and custom jewelry resources from The Don Jewelers & Jewelry.", {
    path: "blog",
    breadcrumbs: [["Blog", "blog"]],
    schema: [{
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Jewelry Knowledge Center",
      url: canonicalUrl("blog"),
      hasPart: [...educationResources, ...blogArticles].slice(0, 25).map((article) => ({
        "@type": "Article",
        headline: article.title,
        url: canonicalUrl(article.slug ? (educationResources.includes(article) ? educationPath(article.slug) : `blog/${article.slug}`) : "blog"),
      })),
    }],
  });
  shell(`
    <main>
      ${pageHero("Jewelry Knowledge Center", "Diamond education and buying guides", "Learn how to buy engagement rings, diamond tennis chains, tennis bracelets, gold jewelry, custom pendants, lab grown diamonds, natural diamonds, watches, and custom jewelry.")}
      <section class="seo-section related-article-section">
        <div class="section-heading">
          <p class="eyebrow">Start Here</p>
          <h2>Core jewelry and diamond guides</h2>
          <p>These pages are written to help you understand the language of diamonds and fine jewelry before you request a quote, schedule an appointment, or start a custom project.</p>
        </div>
        <div class="article-card-grid">
          ${educationResources.map((article) => `
            <a class="article-resource-card" href="${internalLink(educationPath(article.slug))}">
              <img src="${asset(article.image || defaultSeoImage)}" alt="${article.title} education guide" ${imageSafety}>
              <span>${article.eyebrow}</span>
              <strong>${article.title}</strong>
              <em>${article.description}</em>
            </a>
          `).join("")}
        </div>
      </section>
      <section class="blog-grid">
        ${serverSeoArticles.map((article) => `
          <article class="blog-card">
            <img src="${asset(article.image)}" alt="${article.title}" ${imageSafety}>
            <div><p class="eyebrow">Original Buying Guide</p><h2><a href="/blog/${article.slug}" data-hard-navigation="true">${article.title}</a></h2><p>${article.description}</p></div>
          </article>
        `).join("")}
        ${blogArticles.map((article) => `
          <article class="blog-card">
            <img src="${asset(article.image)}" alt="${article.title} jewelry guide" ${imageSafety}>
            <div>
              <p class="eyebrow">${article.keyword}</p>
              <h2><a href="${internalLink(`blog/${article.slug}`)}">${article.title}</a></h2>
              <p>${article.description}</p>
            </div>
          </article>
        `).join("")}
      </section>
    </main>
  `);
}

function blogArticlePage(slug) {
  const article = blogArticles.find((item) => item.slug === slug);
  if (!article && serverSeoArticles.some((item) => item.slug === slug) && document.querySelector(".resource-article")) return;
  if (!article) return blogIndex();
  resourceArticlePage(article, {
    path: `blog/${article.slug}`,
    breadcrumbs: [["Blog", "blog"], [article.title, `blog/${article.slug}`]],
    schemaType: "BlogPosting",
  });
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

function googleReviewsSection() {
  return `
    <section class="section google-reviews-section" aria-labelledby="google-reviews-title">
      <div class="section-heading review-summary-heading">
        <div>
          <p class="eyebrow">Verified Google Reviews</p>
          <h2 id="google-reviews-title">Rated 5.0 by clients</h2>
          <p>All nine public reviews currently displayed across both verified Google Business Profile links.</p>
        </div>
        <div class="google-profile-actions">
          <a class="button button-light" href="${googleReviewUrl}" target="_blank" rel="noopener noreferrer">Google profile · 5 reviews</a>
          <a class="button button-light" href="${googleBusinessProfileUrlSecondary}" target="_blank" rel="noopener noreferrer">Google profile · 4 reviews</a>
          <a class="button button-dark" href="${phoneHref}">Call ${phoneDisplay}</a>
        </div>
      </div>
      <div class="review-carousel-controls" aria-label="Review carousel controls">
        <button type="button" aria-label="Previous reviews" onclick="this.parentElement.nextElementSibling.scrollBy({left:-420,behavior:'smooth'})">&#8592;</button>
        <span>Swipe or use the arrows to read all 9</span>
        <button type="button" aria-label="Next reviews" onclick="this.parentElement.nextElementSibling.scrollBy({left:420,behavior:'smooth'})">&#8594;</button>
      </div>
      <div class="google-review-carousel" aria-label="Google client reviews">
        ${verifiedGoogleReviews.map((review) => `
          <article class="google-review-card${review.featured ? " google-review-card-featured" : ""}">
            ${review.featured ? '<p class="review-featured-label">Featured client story</p>' : ""}
            ${review.photos?.length ? `<div class="review-photo-gallery" aria-label="Photos shared with ${htmlSafe(review.name)}'s Google review">${review.photos.map((photo) => `<a href="${htmlSafe(photo.src)}" target="_blank" rel="noopener" aria-label="View full-size review photo"><img src="${htmlSafe(photo.src)}" alt="${htmlSafe(photo.alt)}" width="320" height="320" loading="lazy" decoding="async"></a>`).join("")}</div>` : ""}
            <p class="review-stars" aria-label="${review.rating} out of 5 stars">★★★★★</p>
            <blockquote>“${htmlSafe(review.text)}”</blockquote>
            <p><strong>${htmlSafe(review.name)}</strong><span>${htmlSafe(review.profile)} · Verified on Google</span></p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function home() {
  setSeo("Custom Jeweler NYC | Engagement Rings & Diamond Jewelry | The Don Jewelers", "The Don Jewelers & Jewelry is a luxury private jeweler for custom engagement rings, diamond tennis chains, tennis bracelets, pendants, lab grown diamonds, natural diamonds, CAD design, and jewelry financing in NYC, Manhattan, the Diamond District, Lehigh Valley, Easton, Bethlehem, Allentown, and Pennsylvania.", {
    path: "/",
    image: defaultSeoImage,
    faqs: globalFaqs,
  });
  const heroProduct = allProducts().find((product) => product.id === "queen-aurelia-oval-marquise-ring");
  shell(`
    <main>
      <section class="hero">
        <a class="hero-media" href="${productUrl(heroProduct)}" aria-label="View ${productName(heroProduct)}">
          <img src="${productImageSrc(heroProduct)}" loading="eager" fetchpriority="high" decoding="async" width="1600" height="1200" alt="${heroProduct.alt || productName(heroProduct)}" onerror="this.onerror=null;this.src='${asset(fallbackImage)}';">
        </a>
        <div class="hero-content">
          <p class="eyebrow">Private jeweler · NYC Diamond District access</p>
          <h1>Luxury custom jewelry. Made personal.</h1>
          <p>Designed for you. Built to last. Custom engagement rings, GIA and IGI certified diamond options, and one-to-one guidance from design through delivery.</p>
          <div class="hero-actions">
            <a class="button button-gold" href="${internalLink("start-custom-ring-design")}">Start Your Custom Design</a>
            <a class="button button-ghost" href="${internalLink("select-diamond")}">View Live Diamonds</a>
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
            <em>Read all 9 reviews →</em>
          </a>
          <div class="hero-assurance-links"><a href="${internalLink("shipping-policy")}">Insured shipping</a><a href="${internalLink("warranty-policy")}">Craftsmanship support</a><a href="${internalLink("refund-return-policy")}">Return policy</a><span>Secure Stripe checkout</span></div>
        </div>
      </section>
      <section class="section engagement-feature">
        <div>
          <p class="eyebrow">Engagement Rings</p>
          <h2>Start with the ring</h2>
          <p>Select diamond size, stone shape, color, clarity, metal, and exact ring size. Built for serious buyers who want a clear luxury quote before moving forward.</p>
          <div class="hero-actions">
            <a class="button button-gold" href="${internalLink("start-custom-ring-design")}">Start Your Custom Ring Design</a>
            <a class="button button-light" href="${categoryUrl("engagement-rings")}">View Engagement Rings</a>
          </div>
        </div>
        <div class="ring-showcase" aria-label="Featured engagement rings">
          ${["queen-aurelia-oval-marquise-ring", "pink-oval-engagement-ring"].map((id) => productCard(allProducts().find((product) => product.id === id))).join("")}
        </div>
      </section>
      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">Luxury Categories</p>
          <h2>Browse by jewelry type</h2>
        </div>
        <div class="collection-grid">
          ${categories.slice(0, 8).map(([slug, name, image]) => `
            <a class="collection-tile" href="${["custom-orders", "select-diamond", "start-custom-ring-design"].includes(slug) ? internalLink(slug) : categoryUrl(slug)}">
              <img src="${mediaSrc(image)}" alt="${name}" ${imageSafety}>
              <span>${name}</span>
            </a>
          `).join("")}
        </div>
        <div class="hero-actions collection-more-action"><a class="button button-light" href="${internalLink("products")}">Browse All Jewelry Categories</a></div>
      </section>
      ${customOrderBand()}
      ${trustBlockSection()}
      ${googleReviewsSection()}
      ${relatedCategoryLinks(["custom-engagement-rings", "diamond-tennis-chains", "diamond-pendants", "custom-jewelry"])}
      ${faqSection(globalFaqs)}
      <section class="trust-band" aria-label="Trust badges">
        <div><strong>Secure browsing</strong><span>Checkout handoff ready</span></div>
        <div><strong>Curated luxury pieces</strong><span>Custom options on every item</span></div>
        <div><strong>Custom sizing</strong><span>Sizes tailored by item type</span></div>
      </section>
      ${aboutUs()}
    </main>
  `);
}

function productGrid(list, title, body = "", action = "", afterGrid = "", gridId = "", seoOptions = {}) {
  const description = body || `${title} from ${businessName}. Shop custom jewelry, diamond jewelry, engagement rings, gold jewelry, and private jeweler services across NYC, Manhattan, Lehigh Valley, Easton, Bethlehem, Allentown, and Pennsylvania.`;
  setSeo(`${title} | ${businessName}`, description, {
    path: seoOptions.path || currentRoutePath(),
    image: seoOptions.image || list[0]?.image || defaultSeoImage,
    breadcrumbs: seoOptions.breadcrumbs || [["Jewelry", seoOptions.path || currentRoutePath()]],
  });
  shell(`
    <main>
      ${pageHero("Jewelry Marketplace", title, body, action)}
      ${productFilterPanel()}
      <section class="product-grid" ${gridId ? `id="${gridId}"` : ""}>${list.map(productCard).join("")}</section>
      ${trustBlockSection()}
      ${afterGrid}
    </main>
  `);
  wireProductFilterPanel();
}

function productFilterPanel() {
  return `
    <section class="product-filter-panel" aria-label="Product filters">
      <label>Search
        <input id="product-filter-search" type="search" placeholder="Oval ring, Cuban chain, pendant">
      </label>
      <label>Max price
        <select id="product-filter-price">
          <option value="">Any price</option>
          <option value="1000">Under $1,000</option>
          <option value="2500">Under $2,500</option>
          <option value="5000">Under $5,000</option>
          <option value="10000">Under $10,000</option>
        </select>
      </label>
      <label>Metal / color
        <select id="product-filter-metal">
          <option value="">Any metal</option>
          <option>Yellow Gold</option>
          <option>White Gold</option>
          <option>Rose Gold</option>
          <option>Platinum</option>
          <option>Silver</option>
        </select>
      </label>
      <label>Diamond type
        <select id="product-filter-diamond">
          <option value="">Any diamond</option>
          <option>Lab</option>
          <option>Natural</option>
          <option>VVS</option>
          <option>VS</option>
        </select>
      </label>
      <button class="button button-light" type="button" id="product-filter-reset">Reset</button>
    </section>
  `;
}

function searchText(value) {
  if (Array.isArray(value)) return value.map(searchText).join(" ");
  if (value && typeof value === "object") return Object.values(value).map(searchText).join(" ");
  return String(value || "");
}

function productSearchHaystack(product) {
  return [
    productName(product),
    product.category,
    product.priceLabel,
    product.description,
    product.lede,
    product.alt,
    product.badges,
    product.fields,
    product.specs,
  ].map(searchText).join(" ").toLowerCase();
}

function serviceSearchHaystack(page) {
  return [page[1], page[2], page[4], page[6]].map(searchText).join(" ").toLowerCase();
}

function categorySearchHaystack(category) {
  return category.map(searchText).join(" ").toLowerCase();
}

function searchPage(params = new URLSearchParams()) {
  const q = String(params.get("q") || "").trim();
  const normalized = q.toLowerCase();
  const productMatches = normalized
    ? allProducts().filter((product) => productSearchHaystack(product).includes(normalized)).slice(0, 36)
    : [];
  const categoryMatches = normalized
    ? categories.filter((item) => categorySearchHaystack(item).includes(normalized)).slice(0, 12)
    : [];
  const serviceMatches = normalized
    ? servicePages.filter((item) => serviceSearchHaystack(item).includes(normalized)).slice(0, 12)
    : [];
  setSeo(`Search ${q ? q : "Jewelry"} | ${businessName}`, `Search The Don Jewelers & Jewelry for engagement rings, diamonds, custom jewelry, products, guides, and quote request pages.`, {
    path: `search${q ? `?q=${encodeURIComponent(q)}` : ""}`,
    image: defaultSeoImage,
    breadcrumbs: [["Search", "search"]],
  });
  shell(`
    <main>
      ${pageHero("Search", q ? `Search results for "${htmlSafe(q)}"` : "Search the website", "Find engagement rings, loose diamonds, custom jewelry, product pages, guides, and quote request options.", `
        <form class="search-page-form global-search" role="search" aria-label="Search the website">
          <input name="q" type="search" value="${htmlSafe(q)}" placeholder="Search engagement rings, diamond pendants, chains..." aria-label="Search the website">
          <button class="button button-gold" type="submit">Search</button>
        </form>
      `)}
      <section class="search-results-section">
        <div class="section-heading">
          <p class="eyebrow">Product Results</p>
          <h2>${productMatches.length ? `${productMatches.length} product matches` : "No direct product matches yet"}</h2>
        </div>
        <div class="product-grid">${productMatches.length ? productMatches.map(productCard).join("") : `<div class="empty-state">Try a broader term like "oval", "engagement ring", "pendant", "Cuban", or submit a request and we will source it.</div>`}</div>
      </section>
      <section class="search-results-section">
        <div class="section-heading">
          <p class="eyebrow">Marketplace & Supplier Results</p>
          <h2>Matching jewelry from the full catalog</h2>
        </div>
        <div class="product-grid" id="search-api-results">
          ${q ? Array.from({ length: 4 }, () => `<div class="product-card product-skeleton" aria-hidden="true"></div>`).join("") : `<div class="empty-state">Search by item type, diamond shape, metal, stock number, or style.</div>`}
        </div>
      </section>
      <section class="search-results-section">
        <div class="section-heading">
          <p class="eyebrow">Live Diamond Results</p>
          <h2>Matching CVD diamond inventory</h2>
        </div>
        <div class="diamond-inventory-grid" id="search-diamond-results">
          ${q ? Array.from({ length: 3 }, () => `<div class="product-card product-skeleton" aria-hidden="true"></div>`).join("") : `<div class="empty-state">Search by diamond shape, carat, color, clarity, stock number, or IGI report.</div>`}
        </div>
      </section>
      <section class="search-results-section">
        <div class="section-heading">
          <p class="eyebrow">Pages & Categories</p>
          <h2>Related places to continue</h2>
        </div>
        <div class="search-link-grid">
          ${categoryMatches.map(([slug, name, image]) => `<a href="${["custom-orders", "select-diamond", "start-custom-ring-design"].includes(slug) ? internalLink(slug) : categoryUrl(slug)}"><img src="${mediaSrc(image)}" alt="${htmlSafe(name)}" ${imageSafety}><span>${htmlSafe(name)}</span></a>`).join("")}
          ${serviceMatches.map(([slug, title, description]) => `<a href="${internalLink(slug)}"><strong>${htmlSafe(title)}</strong><small>${htmlSafe(description)}</small></a>`).join("")}
          <a href="${internalLink("select-diamond")}"><strong>Live Diamond Selection</strong><small>Search certified diamonds and request sourcing.</small></a>
          <a href="${internalLink("start-custom-ring-design")}"><strong>Start Custom Ring Design</strong><small>Send engagement ring options, budget, and inspiration.</small></a>
          <a href="${internalLink("request/contact?intent=website-search-help")}"><strong>Request Help Finding It</strong><small>Send us what you are looking for and we will reply.</small></a>
        </div>
      </section>
    </main>
  `);
  wireSearchApiResults(q, productMatches.map((product) => product.id));
  wireSearchDiamondResults(q);
}

async function wireSearchApiResults(query, localMatchIds = []) {
  const grid = document.getElementById("search-api-results");
  if (!grid || !query) return;
  try {
    const params = new URLSearchParams({ search: query, limit: "36", page: "1" });
    const response = await fetchWithTimeout(`/api/products?${params}`);
    const payload = await response.json();
    if (!payload.ok) throw new Error(payload.message || "Product search failed.");
    const localIds = new Set(localMatchIds);
    const items = (payload.items || []).filter((item) => !localIds.has(item.id)).slice(0, 24);
    grid.innerHTML = items.length
      ? items.map((item, index) => savedProductCard(item, index)).join("")
      : `<div class="empty-state">No additional catalog items matched. Try "lab diamond", "bracelet", "pendant", "ring", "gold", or request help finding it.</div>`;
  } catch {
    grid.innerHTML = `<div class="empty-state">Full catalog search is temporarily unavailable. Local products and request forms are still available.</div>`;
  }
}

function diamondSearchHaystack(diamond) {
  return [
    diamond.id,
    diamond.stockNumber,
    diamond.reportNumber,
    diamond.shape,
    diamond.carat,
    diamond.color,
    diamond.clarity,
    diamond.cut,
    diamond.polish,
    diamond.symmetry,
    diamond.certificate,
    diamond.lab,
    diamond.growthMethod,
    diamond.diamondType,
  ].map(searchText).join(" ").toLowerCase();
}

function searchDiamondResultCard(diamond) {
  const imageUrl = safeExternalUrl(diamond.imageUrl || diamond.mediaUrl);
  const href = liveDiamondUrl(diamond);
  const price = numericPrice(String(diamond.price || "").replace(/[^0-9.]/g, ""));
  const label = `${diamond.shape || "CVD"} ${diamond.carat ? `${diamond.carat}ct ` : ""}Diamond`;
  return `
    <article class="diamond-inventory-card">
      ${imageUrl ? `<a href="${href}" aria-label="View ${htmlSafe(label)}"><img class="diamond-inventory-image" src="${htmlSafe(imageUrl)}" alt="${htmlSafe(label)}" loading="lazy"></a>` : ""}
      <div>
        <p class="eyebrow">${htmlSafe(diamond.diamondType || "Live CVD Diamond")}</p>
        <h3><a href="${href}">${htmlSafe(label)}</a></h3>
        <p class="muted">${htmlSafe(diamondSpecs(diamond))}</p>
        ${diamond.stockNumber ? `<p class="diamond-report-pill">Stock # ${htmlSafe(diamond.stockNumber)}</p>` : ""}
        ${diamond.reportNumber ? `<p class="diamond-report-pill">IGI Report # ${htmlSafe(diamond.reportNumber)}</p>` : ""}
        ${price ? `<p class="product-price">${htmlSafe(money.format(price))}</p>` : ""}
      </div>
      <div class="builder-actions">
        <a class="button button-light" href="${href}">View Details</a>
        <a class="button button-gold" href="#/request/product?product=${encodeURIComponent(label)}&category=Live%20Diamond%20Selection&intent=search-result">Request This Diamond</a>
      </div>
    </article>
  `;
}

async function wireSearchDiamondResults(query) {
  const grid = document.getElementById("search-diamond-results");
  if (!grid || !query) return;
  try {
    const endpoints = ["/api/diamonds/certified?page=1", "/api/diamonds/certified-color?page=1"];
    const results = await Promise.allSettled(endpoints.map(async (endpoint) => {
      const response = await fetchWithTimeout(endpoint, {}, 20000);
      const payload = await response.json();
      if (!response.ok || !payload.ok) throw new Error(payload.message || payload.error || "Diamond inventory unavailable.");
      return payload.diamonds || [];
    }));
    const normalized = query.toLowerCase();
    const diamonds = results
      .flatMap((result) => result.status === "fulfilled" ? result.value : [])
      .filter((diamond) => diamondSearchHaystack(diamond).includes(normalized))
      .slice(0, 12);
    grid.innerHTML = diamonds.length
      ? diamonds.map(searchDiamondResultCard).join("")
      : `<div class="empty-state">No live diamonds matched that search. Try a shape like "oval" or "round", or request help sourcing a diamond.</div>`;
  } catch {
    grid.innerHTML = `<div class="empty-state">Live diamond search is temporarily unavailable. Use Live Diamond Selection or send a product inquiry and we will source options.</div>`;
  }
}

function wireProductFilterPanel() {
  const cards = [...document.querySelectorAll(".product-grid .product-card")];
  if (!cards.length) return;
  const search = document.getElementById("product-filter-search");
  const price = document.getElementById("product-filter-price");
  const metal = document.getElementById("product-filter-metal");
  const diamond = document.getElementById("product-filter-diamond");
  const reset = document.getElementById("product-filter-reset");
  const apply = () => {
    const q = String(search?.value || "").trim().toLowerCase();
    const max = Number(price?.value || 0);
    const metalValue = String(metal?.value || "").toLowerCase();
    const diamondValue = String(diamond?.value || "").toLowerCase();
    cards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      const priceMatch = text.match(/\$([0-9,]+)/);
      const cardPrice = priceMatch ? Number(priceMatch[1].replace(/,/g, "")) : 0;
      const visible = (!q || text.includes(q))
        && (!max || !cardPrice || cardPrice <= max)
        && (!metalValue || text.includes(metalValue))
        && (!diamondValue || text.includes(diamondValue));
      card.hidden = !visible;
    });
  };
  [search, price, metal, diamond].forEach((control) => control?.addEventListener("input", apply));
  reset?.addEventListener("click", () => {
    if (search) search.value = "";
    if (price) price.value = "";
    if (metal) metal.value = "";
    if (diamond) diamond.value = "";
    apply();
  });
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

const chainDisplayImagePool = [
  "yellow-gold-cuban-chain-display.jpeg",
  "yellow-gold-cuban-link-chain.jpeg",
  "yellow-gold-rope-chain-triple.jpeg",
  "yellow-gold-layered-figaro-chain.jpeg",
  "yellow-gold-rope-chain-flat.jpeg",
  "silver-cross-chain.png",
  "triple-row-diamond-tennis-bracelet.jpeg",
];

function savedProductImage(product, index = 0) {
  const source = product.imageUrl || product.image || "";
  if (product.category === "Chains" && /triple-row-diamond-tennis-bracelet/i.test(source)) {
    return asset(chainDisplayImagePool[index % chainDisplayImagePool.length]);
  }
  return source;
}

function savedProductCard(product, index = 0) {
  const price = Number(product.price ?? (product.priceCents ? product.priceCents / 100 : 0));
  const href = catalogProductUrl(product);
  const imageSource = savedProductImage(product, index);
  return `
    <article class="product-card">
      <a href="${href}" class="product-image-link" aria-label="View ${htmlSafe(product.name)}">
        ${imageSource ? `<img src="${htmlSafe(imageSource)}" alt="${htmlSafe(product.name)}" ${imageSafety}>` : `<div class="product-image-placeholder">Diamond Jewelry</div>`}
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
  const path = slug === "all" ? "products" : categoryUrl(slug);
  const fallbackProducts = slug === "all"
    ? allProducts()
    : slug === "cvd-lab-grown-diamond-jewelry"
      ? allProducts().filter((product) => product.source === "lgd-jewelry" || /lab|cvd|grown/i.test(productSearchHaystack(product)))
      : allProducts().filter((product) => !label || productMatchesCategory(product, label));
  const description = `Shop ${label || "luxury jewelry"} from ${businessName}, a private jeweler for custom jewelry, lab grown diamonds, natural diamonds, engagement rings, wedding bands, chains, pendants, bracelets, and watches.`;
  setSeo(`Shop ${label || "Jewelry"} | ${businessName}`, description, {
    path,
    image: defaultSeoImage,
    breadcrumbs: [["Jewelry", path]],
  });
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
    </main>
  `);
  wireDatabaseCategory({
    category: categoryName,
    source: slug === "cvd-lab-grown-diamond-jewelry" ? "lgd-jewelry" : "",
    featured: slug === "bracelets" ? braceletFeaturedIds : [],
    fallbackProducts,
  });
}

function wireDatabaseCategory({ category, source, featured, fallbackProducts = [] }) {
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
      if (!items.length && fallbackProducts.length) {
        items = fallbackProducts.slice(0, 24);
      }
      grid.innerHTML = items.length ? items.map((item, index) => savedProductCard(item, index)).join("") : `<div class="empty-state">No available products were found in this category.</div>`;
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
    "diamond-tennis-chains": "Diamond Tennis Chains",
    "diamond-tennis-bracelets": "Diamond Tennis Bracelets",
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
    "engagement-rings": "Shop Engagement Rings with The Don",
    "diamond-tennis-chains": "Shop Diamond Tennis Chains with The Don",
    "diamond-tennis-bracelets": "Shop Diamond Tennis Bracelets with The Don",
    "select-diamond": "Live Diamond Selection",
    "wedding-bands": "Shop Wedding Bands with The Don",
    "mens-rings": "Shop Men's Rings with The Don",
    "womens-rings": "Shop Women's Rings with The Don",
    "mens-earrings": "Shop Men's Earrings with The Don",
    "womens-earrings": "Shop Women's Earrings with The Don",
    necklaces: "Shop Necklaces with The Don",
    chains: "Shop Gold Chains with The Don",
    bracelets: "Shop Bracelets with The Don",
    anklets: "Shop Anklets with The Don",
    "pendants-charms": "Shop Pendants / Charms with The Don",
  };
  const label = categories.find(([id]) => id === slug)?.[1] || categoryLabels[slug];
  const manualCategorySlugs = ["engagement-rings", "diamond-tennis-chains", "diamond-tennis-bracelets", "chains", "custom-jewelry"];
  if (!manualCategorySlugs.includes(slug)) return databaseCategoryPage(slug, label);
  const list = slug === "engagement-rings"
    ? allProducts().filter((p) => p.category === "Engagement Rings")
    : slug === "diamond-tennis-chains"
      ? allProducts().filter((p) => /tennis chain/i.test(`${p.name} ${p.lede || ""}`))
      : slug === "diamond-tennis-bracelets"
        ? allProducts().filter((p) => p.category === "Tennis Bracelets" || /tennis bracelet/i.test(`${p.name} ${p.lede || ""}`))
        : slug === "chains"
          ? allProducts().filter((p) => p.category === "Chains" && !/tennis chain/i.test(`${p.name} ${p.lede || ""}`))
          : allProducts().filter((p) => productMatchesCategory(p, label) || /^custom-/i.test(p.id) || /custom/i.test(p.name || ""));
  const relatedProducts = slug === "engagement-rings"
    ? allProducts().filter((p) => ["Wedding Bands", "Earrings", "Womens Rings"].includes(p.category) || /wedding band|stud/i.test(p.name))
    : slug === "diamond-tennis-chains"
      ? allProducts().filter((p) => p.category === "Chains" && !/tennis chain/i.test(`${p.name} ${p.lede || ""}`))
      : slug === "diamond-tennis-bracelets"
        ? allProducts().filter((p) => p.category === "Bracelets" && !/tennis bracelet/i.test(`${p.name} ${p.lede || ""}`))
        : slug === "chains"
          ? allProducts().filter((p) => /tennis chain/i.test(`${p.name} ${p.lede || ""}`))
          : allProducts().filter((p) => ["Pendants / Charms", "Chains", "Bracelets"].includes(p.category));
  const action = slug === "engagement-rings"
    ? `<a class="button button-gold" href="#/start-custom-ring-design">Start Your Custom Ring Design</a>`
    : slug === "diamond-tennis-chains"
      ? `<a class="button button-gold" href="#/product/build-your-own-diamond-tennis-chain">Build Your Tennis Chain</a>`
      : "";
  const body = slug === "engagement-rings"
    ? "Shop engagement ring styles and request a custom ring with your preferred diamond, metal, ring size, budget, and design notes."
    : slug === "diamond-tennis-chains"
      ? "Shop diamond tennis chain options and build a chain by pointer size, length, metal, diamond type, and clasp style."
      : slug === "diamond-tennis-bracelets"
        ? "Shop diamond tennis bracelet styles with custom carat weight, gold color, clasp style, and diamond options."
        : slug === "chains"
          ? "Shop gold chains and chain styles separate from diamond tennis chain builds."
          : "Shop custom jewelry pieces and start a one-of-one design request.";
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
    `${catalogControls}${categoryRelatedGrid(relatedProducts, "More jewelry you may like")}`,
    liveCategory ? "category-product-grid" : "",
    { path: categoryUrl(slug), related: ["custom-jewelry", "jewelry-financing", "diamond-education"] },
  );
  if (liveCategory) wireCatalogFeed(liveCategory);
}

function catalogFeedProductCard(product) {
  const imageUrl = safeExternalUrl(product.imageUrl);
  const price = Number(product.price);
  const href = catalogProductUrl({ ...product, id: `lgd-jewelry-${product.stockNumber}`, externalId: product.stockNumber });
  return `
    <article class="product-card" data-catalog-feed-product>
      <a href="${href}" class="product-image-link" aria-label="View ${htmlSafe(product.name)}">
        ${imageUrl ? `<img src="${htmlSafe(imageUrl)}" alt="${htmlSafe(product.name)}" loading="lazy">` : `<div class="product-image-placeholder">Diamond Jewelry</div>`}
      </a>
      <div class="product-card-body">
        <p class="eyebrow">${htmlSafe(product.category)}</p>
        <h3>${htmlSafe(product.name)}</h3>
        <p class="muted">${htmlSafe(product.metal || "")}${product.diamondWeight ? ` · ${htmlSafe(product.diamondWeight)} ct total diamond weight` : ""}</p>
        <p class="muted">${price > 0 ? money.format(price) : "Request Pricing"}</p>
        <div class="card-actions">
          <a class="button button-dark" href="${href}">View Details</a>
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

function supplierLuxuryDescription(product) {
  const specs = product.specs || {};
  const metadata = product.metadata || {};
  const details = [];
  if (specs.metal) details.push(`crafted in ${specs.metal}`);
  if (specs.diamondType) details.push(`set with ${specs.diamondType.toLowerCase()}s`);
  const opening = `${product.name} is ${details.length ? details.join(" and ") : "a fine diamond jewelry design"} selected for The Don Jewelers & Jewelry collection.`;
  const diamondDetails = [
    metadata.diamondPieces ? `${metadata.diamondPieces} diamond${Number(metadata.diamondPieces) === 1 ? "" : "s"}` : "",
    specs.caratWeight ? `approximately ${specs.caratWeight} total carat weight` : "",
    specs.shape ? `${specs.shape} shape` : "",
    specs.color ? `${specs.color} color` : "",
    specs.clarity ? `${specs.clarity} clarity` : "",
  ].filter(Boolean);
  const quality = diamondDetails.length ? `Its diamond specifications include ${diamondDetails.join(", ")}.` : "";
  const sizing = specs.size ? `The listed size or length is ${specs.size}; contact us if you need a different fit or customization.` : "";
  const sourceDescription = String(product.description || "").trim();
  const source = sourceDescription ? `Supplier design reference: ${sourceDescription}.` : "";
  return [opening, quality, sizing, source].filter(Boolean).join(" ");
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
    trackEvent("view_item", {
      item_id: product.id,
      item_name: product.name,
      item_category: product.category,
      value: price || 0,
      currency: "USD",
    });
    container.innerHTML = `
      <section class="product-detail-hero catalog-jewelry-detail supplier-product-hero">
        <div class="product-media-stack">
          ${imageUrl ? `<img src="${htmlSafe(imageUrl)}" alt="${htmlSafe(product.name)}">` : `<div class="product-image-placeholder">Diamond Jewelry</div>`}
          ${gallery.map((url) => `<img src="${htmlSafe(url)}" alt="${htmlSafe(product.name)} alternate view" loading="lazy">`).join("")}
        </div>
        <div>
          <p class="eyebrow">${htmlSafe(product.category)}</p>
          <h1>${htmlSafe(product.name)}</h1>
          <p class="product-detail-price">${price ? money.format(price) : "Request Pricing"}</p>
          <p class="supplier-product-intro">CVD lab-grown diamond jewelry with complete specifications and secure purchase support.</p>
          <div class="builder-actions">
            ${price && product.available !== false ? productCheckoutButton(product, price) : `<button class="button button-light" type="button" disabled>Unavailable or pricing required</button>`}
            <a class="button button-dark" href="#/request/product?product=${encodeURIComponent(product.name)}&category=${encodeURIComponent(product.category)}&intent=product-${encodeURIComponent(product.id)}">Ask a Question</a>
            ${videoUrl ? `<a class="button button-light" href="${htmlSafe(videoUrl)}" target="_blank" rel="noopener noreferrer">View Product Video</a>` : ""}
          </div>
        </div>
      </section>
      <section class="supplier-product-information">
        <article class="supplier-description-card">
          <p class="eyebrow">Product Description</p>
          <h2>${htmlSafe(product.name)}</h2>
          <p>${htmlSafe(supplierLuxuryDescription(product))}</p>
        </article>
        <article class="supplier-specification-card">
          <p class="eyebrow">Complete Details</p>
          <h2>Product Specifications</h2>
          <dl class="summary-list product-spec-list">${productSpecRows(product)}</dl>
        </article>
        <p class="shipping-note supplier-shipping-note">${product.madeToOrder ? "Made to order. Production and insured shipping timing are confirmed after purchase." : "Availability and insured shipping timing are confirmed before fulfillment."}</p>
      </section>
    `;
  } catch {
    container.innerHTML = `<div class="empty-state">This product is temporarily unavailable. Contact us with product ID ${htmlSafe(productId)} and we will help you.</div>`;
  }
}

function productDetailFromCleanSlug(slug) {
  const clean = decodeURIComponent(String(slug || ""));
  const manual = allProducts().find((product) => productSlug(product) === clean || slugify(product.id) === clean);
  if (manual) return productDetail(manual.id);
  const stock = clean.split("-").filter(Boolean).pop() || clean;
  return catalogJewelryDetail(stock.toUpperCase());
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
  const href = liveDiamondUrl(diamond);
  return `
    <article class="diamond-inventory-card" data-diamond-id="${htmlSafe(diamond.id)}" data-stock-number="${htmlSafe(diamond.stockNumber || diamond.id || "")}" data-shape="${htmlSafe(diamond.shape)}" data-carat="${htmlSafe(diamond.carat || "")}" data-color="${htmlSafe(diamond.color)}" data-clarity="${htmlSafe(diamond.clarity)}" data-certificate="${htmlSafe(diamond.certificate)}" data-report-number="${htmlSafe(diamond.reportNumber || "")}" data-price="${htmlSafe(diamond.price || "")}" data-diamond-type="${htmlSafe(diamond.diamondType || "")}" data-growth-method="${htmlSafe(diamond.growthMethod || "CVD")}">
      ${imageUrl ? `<a href="${href}" aria-label="View ${htmlSafe(`${diamond.shape || "Lab-grown"} diamond ${diamond.reportNumber || diamond.stockNumber || ""}`)}"><img class="diamond-inventory-image" src="${htmlSafe(imageUrl)}" alt="${htmlSafe(`${diamond.shape || "Lab-grown"} diamond ${diamond.carat ? `${diamond.carat} carat` : ""} ${diamond.color || ""} ${diamond.clarity || ""}`)}"></a>` : ""}
      <div>
        <p class="eyebrow">${htmlSafe(diamond.diamondType || "Lab-Grown Diamond")}</p>
        <h3><a href="${href}">${htmlSafe(diamond.shape)} ${diamond.carat ? `${diamond.carat}ct` : ""} Diamond</a></h3>
        <p class="muted">${htmlSafe(diamondSpecs(diamond))}</p>
        ${diamond.stockNumber ? `<p class="diamond-report-pill">Stock # ${htmlSafe(diamond.stockNumber)}</p>` : ""}
        ${diamond.reportNumber ? `<p class="diamond-report-pill">IGI Report # ${htmlSafe(diamond.reportNumber)}</p>` : ""}
      </div>
      ${diamondMediaLinks(diamond)}
      <div class="builder-actions">
        <a class="button button-light" href="${href}">View Details</a>
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
  setSeo("Live Diamond Selection | Lab Grown Diamonds & Diamond Sourcing", "Browse live diamond inventory and request private diamond sourcing for lab grown diamonds, certified diamonds, matching diamond pairs, engagement rings, and custom jewelry with The Don Jewelers & Jewelry.", {
    path: "select-diamond",
    image: "round-diamond-studs.jpeg",
    breadcrumbs: [["Diamond Education", "diamond-education"], ["Live Diamond Selection", "select-diamond"]],
    faqs: globalFaqs,
  });
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
  const returnTarget = initialParams.get("return") || "";
  const filterParams = () => {
    const params = new URLSearchParams();
    ["diamondType", "shape", "minCarat", "maxCarat", "color", "clarity", "maxPrice", "certificateNumber", "page"].forEach((name) => {
      const value = form?.elements[name]?.value || "";
      if (value) params.set(name, value);
    });
    if (returnProduct) params.set("returnProduct", returnProduct);
    if (returnTarget) params.set("return", returnTarget);
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
      event.stopPropagation();
      startProductCheckout(checkoutButton);
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
    if (returnTarget === "engagement-ring-builder") {
      localStorage.setItem("donEngagementBuilderDiamond", JSON.stringify(diamond));
      location.hash = "#/start-custom-ring-design?selectedDiamond=1";
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
  return `
    <section class="product-information-section">
      <div class="product-detail-copy">
        <p class="eyebrow">Product Description</p>
        <h2>${htmlSafe(productName(product))}</h2>
        <p>${htmlSafe(product.lede || "Made-to-order fine jewelry by The Don Jewelers & Jewelry.")}</p>
      </div>
      <p class="shipping-note">${product.category === "Watches" ? "Availability and insured shipping timing are confirmed before fulfillment." : "Made to order. Production timing and insured shipping are confirmed after the final specifications are approved."}</p>
    </section>
  `;
}

function productDetail(id) {
  const product = allProducts().find((p) => p.id === id) || products[0];
  if (product.imported) return importedProductDetail(product);
  trackEvent("view_item", {
    item_id: product.id,
    item_name: productName(product),
    item_category: product.category,
    value: Number(product.price || product.estimate || 0),
    currency: "USD",
  });
  setSeo(`${productName(product)} | ${businessName}`, `${startingText(product)} from ${businessName}. Configure custom jewelry details, diamond options, metal, sizing, and private jeweler consultation.`, {
    path: productUrl(product.id),
    image: product.image || fallbackImage,
    type: "product",
    breadcrumbs: [["Jewelry", "products"], [productName(product), productUrl(product.id)]],
    schema: [productSchema(product)],
  });
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
    trackEvent("add_to_cart", {
      item_id: product.id,
      item_name: productName(product),
      item_category: product.category,
      value: price || 0,
      currency: "USD",
    });
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
    trackEvent("add_to_cart", {
      item_id: product.id,
      item_name: productName(product),
      item_category: product.category,
      value: 0,
      currency: "USD",
    });
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
  trackEvent("view_item", {
    item_id: product.id,
    item_name: productName(product),
    item_category: product.category,
    value: Number(product.price || product.estimate || 0),
    currency: "USD",
  });
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
  form.addEventListener("focusin", () => {
    if (form.dataset.analyticsStarted) return;
    form.dataset.analyticsStarted = "true";
    trackEvent("quote_form_start", {
      form_id: form.id,
      lead_type: form.dataset.requestType || "Website Request",
    });
  });
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = form.querySelector("button[type='submit']");
    const originalButtonText = button?.textContent || "Submit";
    const success = form.querySelector(".form-success");
    const error = form.querySelector(".form-error");
    if (button) {
      button.disabled = true;
      button.textContent = "Submitting...";
    }
    if (error) error.hidden = true;
    let payload;
    try {
      payload = await requestPayloadFromForm(form, event.submitter);
      await sendWebsiteRequest(payload);
      savePendingRequest(payload);
      if (success) {
        success.hidden = false;
        success.textContent = `${successText} A notification was sent to The Don Jewelers & Jewelry.`;
      }
      form.reset();
    } catch (submitError) {
      const fallbackPayload = payload || {
        source: location.href,
        customer: {
          fullName: selectedFormValue(form, "fullName") || selectedFormValue(form, "name"),
          email: selectedFormValue(form, "email"),
          phone: selectedFormValue(form, "phone"),
        },
        jewelry: {
          requestType: form.dataset.requestType || "Website Request",
          productCategory: form.dataset.productCategory || "",
          productName: form.dataset.productName || selectedFormValue(form, "productName"),
          notes: selectedFormValue(form, "description") || selectedFormValue(form, "notes"),
        },
        files: [],
      };
      savePendingRequest(fallbackPayload);
      if (error) {
        error.hidden = false;
        error.textContent = `${submitError.message || "Email notification could not be sent."} Your request was saved in this browser for follow-up review.`;
      }
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent = originalButtonText;
      }
    }
  });
}

function selectedFormValue(form, name) {
  const checked = form.querySelector(`[name="${name}"]:checked`);
  if (checked) return checked.value;
  return form.elements[name]?.value || "";
}

async function imageFileAttachment(file) {
  const maxDimension = 1600;
  const image = "createImageBitmap" in window
    ? await createImageBitmap(file)
    : await new Promise((resolve, reject) => {
      const preview = new Image();
      const url = URL.createObjectURL(file);
      preview.onload = () => {
        URL.revokeObjectURL(url);
        resolve(preview);
      };
      preview.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error(`Could not read ${file.name}.`));
      };
      preview.src = url;
    });
  const sourceWidth = image.width || image.naturalWidth;
  const sourceHeight = image.height || image.naturalHeight;
  const scale = Math.min(1, maxDimension / Math.max(sourceWidth, sourceHeight));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(sourceWidth * scale));
  canvas.height = Math.max(1, Math.round(sourceHeight * scale));
  canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
  image.close?.();
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.82));
  if (!blob) throw new Error(`Could not prepare ${file.name}.`);
  const dataUrl = await fileToDataUrl(blob);
  return {
    name: String(file.name || "inspiration.jpg").replace(/\.[^.]+$/, "") + ".jpg",
    type: "image/jpeg",
    size: blob.size,
    content: dataUrl.split(",")[1],
  };
}

async function requestAttachments(form) {
  const selected = [...form.querySelectorAll('input[type="file"]')].flatMap((input) => [...input.files]);
  if (selected.length > 5) throw new Error("Please upload no more than 5 inspiration images.");
  const files = [];
  let totalBytes = 0;
  for (const file of selected) {
    if (!String(file.type || "").startsWith("image/")) throw new Error(`${file.name} is not a supported image.`);
    const attachment = await imageFileAttachment(file);
    totalBytes += attachment.size;
    if (totalBytes > 2_500_000) throw new Error("The uploaded images are too large together. Please use fewer or smaller images.");
    files.push(attachment);
  }
  return files;
}

async function requestPayloadFromForm(form, submitter = null) {
  const files = await requestAttachments(form);
  const requestType = form.dataset.requestType || selectedFormValue(form, "requestType") || "General Contact Form";
  const productCategory = form.dataset.productCategory || selectedFormValue(form, "productCategory") || requestType;
  const submitIntent = submitter?.value || selectedFormValue(form, "requestIntent") || "";
  return {
    source: location.href,
    customer: {
      fullName: selectedFormValue(form, "fullName") || selectedFormValue(form, "name"),
      email: selectedFormValue(form, "email"),
      phone: selectedFormValue(form, "phone"),
    },
    jewelry: {
      requestType,
      requestIntent: submitIntent,
      productCategory,
      productName: form.dataset.productName || selectedFormValue(form, "productName"),
      settingPath: selectedFormValue(form, "settingPath"),
      settingStyle: selectedFormValue(form, "settingStyle"),
      metalType: selectedFormValue(form, "metalType") || selectedFormValue(form, "metal"),
      diamondType: selectedFormValue(form, "diamondType"),
      diamondShape: selectedFormValue(form, "diamondShape") || selectedFormValue(form, "centerStoneShape"),
      selectedLiveDiamond: selectedFormValue(form, "selectedLiveDiamond"),
      selectedLiveDiamondStock: selectedFormValue(form, "selectedLiveDiamondStock"),
      stoneType: selectedFormValue(form, "stoneType") || selectedFormValue(form, "gemstones"),
      caratWeight: selectedFormValue(form, "caratWeight") || selectedFormValue(form, "caratSize"),
      bandStyle: selectedFormValue(form, "bandStyle"),
      bandProfile: selectedFormValue(form, "bandProfile"),
      bandWidth: selectedFormValue(form, "bandWidth"),
      prongs: selectedFormValue(form, "prongs") || selectedFormValue(form, "headStyle"),
      basketSetting: selectedFormValue(form, "basket") || selectedFormValue(form, "headStyle"),
      sideStonesOrGemstones: selectedFormValue(form, "gemstones") || selectedFormValue(form, "sideStoneStyle"),
      finishDetails: selectedFormValue(form, "finishDetails") || selectedFormValue(form, "engraving"),
      engraving: selectedFormValue(form, "engraving"),
      hiddenBirthstone: selectedFormValue(form, "hiddenBirthstone"),
      weddingBandPairing: selectedFormValue(form, "weddingBandPairing") || selectedFormValue(form, "matchingWeddingBand"),
      matchingWeddingBand: selectedFormValue(form, "matchingWeddingBand"),
      ringSize: selectedFormValue(form, "ringSize"),
      braceletSize: selectedFormValue(form, "braceletSize"),
      chainLength: selectedFormValue(form, "chainLength"),
      diamondQuality: selectedFormValue(form, "diamondQuality") || selectedFormValue(form, "diamondType"),
      idealBudget: selectedFormValue(form, "idealBudget"),
      maximumBudget: selectedFormValue(form, "maximumBudget"),
      budget: selectedFormValue(form, "budget") || [selectedFormValue(form, "idealBudget") && `Ideal: ${selectedFormValue(form, "idealBudget")}`, selectedFormValue(form, "maximumBudget") && `Max: ${selectedFormValue(form, "maximumBudget")}`].filter(Boolean).join(" | "),
      priceEstimate: selectedFormValue(form, "priceEstimate"),
      builderUrl: selectedFormValue(form, "builderUrl"),
      renderReference: selectedFormValue(form, "renderReference"),
      internalAdjustmentTotal: selectedFormValue(form, "internalAdjustmentTotal"),
      timeline: selectedFormValue(form, "timeline"),
      notes: [
        selectedFormValue(form, "buildSummary") ? `Engagement ring build summary:\n${selectedFormValue(form, "buildSummary")}` : "",
        selectedFormValue(form, "builderUrl") ? `Saved builder URL: ${selectedFormValue(form, "builderUrl")}` : "",
        selectedFormValue(form, "renderReference") ? `Builder render reference: ${selectedFormValue(form, "renderReference")}` : "",
        selectedFormValue(form, "internalAdjustmentTotal") ? `Internal builder adjustment total: ${selectedFormValue(form, "internalAdjustmentTotal")}` : "",
        selectedFormValue(form, "priceEstimate") ? `Quote display: ${selectedFormValue(form, "priceEstimate")}` : "",
        selectedFormValue(form, "description"),
        selectedFormValue(form, "customDesignRequest") ? `Unique custom design request: ${selectedFormValue(form, "customDesignRequest")}` : "",
        selectedFormValue(form, "notes"),
        form.dataset.cartSummary ? `Cart summary: ${form.dataset.cartSummary}` : "",
        Object.keys(selections).length ? `Selected website options: ${Object.entries(selections).map(([key, value]) => `${key}: ${value}`).join(" | ")}` : "",
      ].filter(Boolean).join("\n"),
    },
    files,
  };
}

function savePendingRequest(payload) {
  const pending = JSON.parse(localStorage.getItem("donPendingCustomRequests") || "[]");
  pending.unshift({
    ...payload,
    files: (payload.files || []).map(({ name, type, size }) => ({ name, type, size })),
    savedAt: new Date().toISOString(),
  });
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
  trackEvent("generate_lead", {
    lead_type: payload?.type || payload?.jewelry?.requestType || "Website Request",
    item_name: payload?.jewelry?.productName || "",
    item_category: payload?.jewelry?.productCategory || "",
  });
  const leadType = String(payload?.type || payload?.jewelry?.requestType || "").toLowerCase();
  const eventName = /appointment|consult/.test(leadType) ? "appointment_request"
    : /contact/.test(leadType) ? "contact_form_submit"
      : /engagement|ring builder/.test(leadType) ? "ring_design_submit"
        : /custom/.test(leadType) ? "custom_jewelry_submit"
          : /product/.test(leadType) ? "product_inquiry_submit"
            : /financ/.test(leadType) ? "financing_request"
              : "quote_form_submit";
  trackEvent(eventName, {
    lead_type: payload?.type || payload?.jewelry?.requestType || "Website Request",
    item_category: payload?.jewelry?.productCategory || "",
  });
  return data;
}

function sendStripeStartAlert(link) {
  const payableItems = payableCartItems();
  const total = Number(link.dataset.stripeTotal || cartTotal(payableItems) || 0);
  trackEvent("begin_checkout", {
    checkout_type: "stripe_payment_link",
    value: total,
    currency: "USD",
    items: payableItems.map((item) => ({ item_id: item.id, item_name: item.name, price: item.price, quantity: item.quantity })),
  });
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

let embeddedCheckout;
let stripeScriptPromise;

function loadStripeJs() {
  if (window.Stripe) return Promise.resolve(window.Stripe);
  if (stripeScriptPromise) return stripeScriptPromise;
  stripeScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/";
    script.async = true;
    script.onload = () => window.Stripe ? resolve(window.Stripe) : reject(new Error("Stripe did not initialize."));
    script.onerror = () => reject(new Error("Secure checkout could not be loaded."));
    document.head.appendChild(script);
  });
  return stripeScriptPromise;
}

function closeEmbeddedCheckout() {
  if (embeddedCheckout) {
    embeddedCheckout.destroy();
    embeddedCheckout = null;
  }
  document.querySelector(".stripe-checkout-overlay")?.remove();
  document.body.classList.remove("checkout-open");
}

async function startProductCheckout(button) {
  const original = button.textContent;
  button.disabled = true;
  button.textContent = "Loading secure checkout...";
  try {
    await loadStripeJs();
    const configResponse = await fetchWithTimeout("/api/stripe-config", { headers: { Accept: "application/json" } }, 10000);
    const config = await configResponse.json();
    if (!configResponse.ok || !config.publishableKey) throw new Error(config.message || "Stripe is not configured.");
    const requestBody = button.dataset.buyLiveDiamond ? {
      kind: "live-diamond",
      diamondId: button.dataset.buyLiveDiamond,
      stockNumber: button.dataset.stockNumber,
      diamondType: button.dataset.diamondType,
      page: button.dataset.livePage || 1,
    } : button.dataset.buyCart ? {
      kind: "cart",
      items: payableCartItems().map((item) => ({
        productId: item.id,
        quantity: Math.max(1, Number(item.quantity || 1)),
        selections: { ...(item.selections || {}) },
      })),
    } : {
        kind: "saved-product",
        productId: button.dataset.buyProduct,
        selections: location.hash.startsWith(`#/product/${button.dataset.buyProduct}`) ? { ...selections } : {},
      };

    closeEmbeddedCheckout();
    const overlay = document.createElement("div");
    overlay.className = "stripe-checkout-overlay";
    overlay.innerHTML = `<section class="stripe-checkout-dialog" role="dialog" aria-modal="true" aria-label="Secure checkout"><header><div><p class="eyebrow">Secure Payment</p><h2>Complete your purchase</h2></div><button class="stripe-checkout-close" type="button" aria-label="Close checkout">Close</button></header><p class="stripe-checkout-status" role="status">Loading cards, wallets, and eligible financing options…</p><p class="checkout-financing-note">Stripe will display any eligible Affirm, Klarna, or Afterpay options enabled for this purchase. Availability and approval depend on the provider, order amount, and customer location.</p><div id="stripe-embedded-checkout"></div></section>`;
    document.body.appendChild(overlay);
    document.body.classList.add("checkout-open");
    overlay.querySelector(".stripe-checkout-close").addEventListener("click", closeEmbeddedCheckout);
    overlay.addEventListener("click", (event) => { if (event.target === overlay) closeEmbeddedCheckout(); });

    const stripe = window.Stripe(config.publishableKey);
    embeddedCheckout = await stripe.initEmbeddedCheckout({
      fetchClientSecret: async () => {
        const response = await fetchWithTimeout("/api/create-checkout-session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        }, 20000);
        const payload = await response.json();
        if (!response.ok || !payload.clientSecret) throw new Error(payload.message || "Checkout could not be started.");
        const checkoutItems = button.dataset.buyCart
          ? commerceItems(payableCartItems())
          : [{ item_id: button.dataset.buyProduct || button.dataset.buyLiveDiamond || "", item_name: button.dataset.stockNumber || "Jewelry purchase", item_category: button.dataset.buyLiveDiamond ? "Loose Diamond" : "Jewelry", quantity: 1 }];
        trackEvent("begin_checkout", {
          checkout_type: button.dataset.buyLiveDiamond ? "live_diamond" : button.dataset.buyCart ? "cart" : "product",
          currency: "USD",
          items: checkoutItems,
        });
        return payload.clientSecret;
      },
    });
    overlay.querySelector(".stripe-checkout-status").hidden = true;
    embeddedCheckout.mount("#stripe-embedded-checkout");
  } catch (error) {
    closeEmbeddedCheckout();
    window.alert(error.message || "Checkout could not be started. Please contact us for assistance.");
  } finally {
    button.disabled = false;
    button.textContent = original;
  }
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-buy-product], [data-buy-cart], [data-buy-live-diamond]");
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

const allRingShapes = ["round", "oval", "emerald", "radiant", "cushion", "pear", "marquise", "princess", "asscher", "heart"];
const allRingMetals = ["14k-white", "14k-yellow", "14k-rose", "18k-white", "18k-yellow", "platinum"];
const ringThumbnailSlot = (category, id) => `/assets/ring-builder/thumbnails/${category}/${id}.svg`;
const ringPreviewSlot = (...parts) => `/assets/ring-builder/previews/${parts.filter(Boolean).join("--")}.svg`;
const ringOption = ({ id, name, category, description, internalPriceAdjustment = 0, compatibleDiamondShapes = allRingShapes, compatibleMetals = allRingMetals, previewImagePath = "" }) => ({
  id,
  name,
  label: name,
  category,
  description,
  internalPriceAdjustment,
  priceModifier: internalPriceAdjustment,
  compatibleDiamondShapes,
  compatibleMetals,
  previewImagePath: previewImagePath || ringThumbnailSlot(category, id),
});

const ringBuilderOptions = {
  startPath: [
    ringOption({ id: "setting-first", name: "Start With Setting", category: "start-path", description: "Design the ring first, then attach a diamond or request sourcing." }),
    ringOption({ id: "diamond-first", name: "Start With Diamond", category: "start-path", description: "Choose your diamond direction first, then build the setting around it." }),
  ],
  diamondType: [
    ringOption({ id: "lab-grown", name: "Lab-Grown Diamond", category: "diamond-type", description: "Premium lab-grown options with strong size and value." }),
    ringOption({ id: "natural", name: "Natural Diamond", category: "diamond-type", description: "Natural diamonds sourced for certification, beauty, and rarity.", internalPriceAdjustment: 1800 }),
  ],
  centerStoneShape: [
    ringOption({ id: "round", name: "Round", category: "diamond-shape", description: "Classic brilliance and balanced sparkle." }),
    ringOption({ id: "oval", name: "Oval", category: "diamond-shape", description: "Elongated coverage with soft brilliance." }),
    ringOption({ id: "emerald", name: "Emerald", category: "diamond-shape", description: "Step-cut flashes with a clean architectural face." }),
    ringOption({ id: "radiant", name: "Radiant", category: "diamond-shape", description: "Bright rectangular faceting with modern structure." }),
    ringOption({ id: "cushion", name: "Cushion", category: "diamond-shape", description: "Soft square outline with romantic sparkle." }),
    ringOption({ id: "pear", name: "Pear", category: "diamond-shape", description: "A graceful teardrop silhouette." }),
    ringOption({ id: "marquise", name: "Marquise", category: "diamond-shape", description: "Dramatic pointed shape with major finger coverage." }),
    ringOption({ id: "princess", name: "Princess", category: "diamond-shape", description: "Sharp square brilliance with clean geometry." }),
    ringOption({ id: "asscher", name: "Asscher", category: "diamond-shape", description: "Square step-cut depth with vintage presence." }),
    ringOption({ id: "heart", name: "Heart", category: "diamond-shape", description: "Romantic statement shape for a personal build." }),
  ],
  settingStyle: [
    ringOption({ id: "solitaire", name: "Solitaire", category: "setting-style", description: "A focused setting that keeps attention on the center diamond." }),
    ringOption({ id: "hidden-halo", name: "Hidden Halo", category: "setting-style", description: "Sparkle tucked beneath the crown for side-view detail.", internalPriceAdjustment: 650 }),
    ringOption({ id: "halo", name: "Halo", category: "setting-style", description: "A diamond frame that increases face-up presence.", internalPriceAdjustment: 950 }),
    ringOption({ id: "three-stone", name: "Three-Stone", category: "setting-style", description: "Two side stones balance the center diamond.", internalPriceAdjustment: 1400, compatibleDiamondShapes: ["round", "oval", "emerald", "radiant", "cushion", "pear", "marquise", "princess", "asscher"] }),
    ringOption({ id: "pave", name: "Pave", category: "setting-style", description: "Fine diamonds along the shoulders for extra fire.", internalPriceAdjustment: 850 }),
    ringOption({ id: "cathedral", name: "Cathedral", category: "setting-style", description: "Raised shoulders lift the diamond with an architectural profile.", internalPriceAdjustment: 550 }),
    ringOption({ id: "vintage", name: "Vintage", category: "setting-style", description: "Milgrain, engraving, and old-world detail.", internalPriceAdjustment: 900 }),
    ringOption({ id: "custom", name: "Custom", category: "setting-style", description: "A private custom concept built with CAD review.", internalPriceAdjustment: 1200 }),
  ],
  metal: [
    ringOption({ id: "14k-white", name: "14K White Gold", category: "metal", description: "Bright white bridal finish." }),
    ringOption({ id: "14k-yellow", name: "14K Yellow Gold", category: "metal", description: "Warm classic gold." }),
    ringOption({ id: "14k-rose", name: "14K Rose Gold", category: "metal", description: "Soft rose tone with romantic warmth." }),
    ringOption({ id: "18k-white", name: "18K White Gold", category: "metal", description: "Premium white gold with richer weight.", internalPriceAdjustment: 475 }),
    ringOption({ id: "18k-yellow", name: "18K Yellow Gold", category: "metal", description: "Richer yellow gold color and feel.", internalPriceAdjustment: 475 }),
    ringOption({ id: "platinum", name: "Platinum", category: "metal", description: "Dense heirloom-grade platinum.", internalPriceAdjustment: 950 }),
  ],
  headStyle: [
    ringOption({ id: "four-prong", name: "4-Prong", category: "head-basket", description: "Open head with a clean view of the stone." }),
    ringOption({ id: "six-prong", name: "6-Prong", category: "head-basket", description: "Classic secure crown with a rounder look." }),
    ringOption({ id: "eagle-claw", name: "Eagle Claw", category: "head-basket", description: "Fine pointed tips for a couture finish.", internalPriceAdjustment: 180 }),
    ringOption({ id: "bezel", name: "Bezel", category: "head-basket", description: "Smooth rim around the center stone.", internalPriceAdjustment: 500, compatibleDiamondShapes: ["round", "oval", "emerald", "radiant", "cushion", "pear", "marquise", "princess", "asscher"] }),
    ringOption({ id: "hidden-halo-basket", name: "Hidden Halo Basket", category: "head-basket", description: "Diamond detail under the center stone.", internalPriceAdjustment: 700 }),
  ],
  bandStyle: [
    ringOption({ id: "plain", name: "Plain", category: "band-style", description: "Clean polished shank with timeless focus." }),
    ringOption({ id: "pave", name: "Pave", category: "band-style", description: "Fine diamond line across the shank.", internalPriceAdjustment: 650 }),
    ringOption({ id: "cathedral", name: "Cathedral", category: "band-style", description: "Lifted shoulders leading into the head.", internalPriceAdjustment: 500 }),
    ringOption({ id: "split-shank", name: "Split Shank", category: "band-style", description: "Two rails open toward the center stone.", internalPriceAdjustment: 850 }),
    ringOption({ id: "twisted", name: "Twisted", category: "band-style", description: "Interwoven movement with a custom feel.", internalPriceAdjustment: 750 }),
    ringOption({ id: "floral-inspired", name: "Floral-Inspired", category: "band-style", description: "Original floral detail inspired by hand engraving.", internalPriceAdjustment: 950, compatibleMetals: ["14k-white", "14k-yellow", "14k-rose", "18k-yellow", "platinum"] }),
    ringOption({ id: "three-stone-side-accents", name: "Three-Stone Side Accents", category: "band-style", description: "Side accent stones framing the center diamond.", internalPriceAdjustment: 1250, compatibleDiamondShapes: ["round", "oval", "emerald", "radiant", "cushion", "princess", "asscher"] }),
  ],
  ringSize: ["4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"].map((size) => ringOption({ id: size, name: `Size ${size}`, category: "ring-size", description: "Final sizing can be confirmed before production." })),
};

function optionById(group, id) {
  const options = ringBuilderOptions[group] || [];
  return options.find((option) => option.id === id) || options[0] || {};
}

function getRingBuilderQuery() {
  const source = location.hash && location.hash.includes("?") ? location.hash.split("?")[1] : location.search.replace(/^\?/, "");
  return new URLSearchParams(source || "");
}

function metalPalette(metal = "14k-yellow") {
  const palettes = {
    "14k-yellow": ["#fff0b7", "#d8a93e", "#7a4d11"],
    "18k-yellow": ["#fff2aa", "#e2b43b", "#8a5a0d"],
    "14k-white": ["#ffffff", "#cfd5dc", "#737d88"],
    "18k-white": ["#ffffff", "#dbe2ea", "#87919c"],
    "14k-rose": ["#ffe0d4", "#c98468", "#7c3b2f"],
    "18k-rose": ["#ffd7c9", "#d08b72", "#834231"],
    platinum: ["#ffffff", "#d6dce2", "#6f7780"],
  };
  return palettes[metal] || palettes["14k-yellow"];
}

function ringDiamondShape(shape, cx, cy, scale = 1) {
  const rx = 34 * scale;
  const ry = 34 * scale;
  const map = {
    round: `<circle cx="${cx}" cy="${cy}" r="${rx}" />`,
    oval: `<ellipse cx="${cx}" cy="${cy}" rx="${rx * .78}" ry="${ry * 1.08}" />`,
    emerald: `<rect x="${cx - rx * .78}" y="${cy - ry}" width="${rx * 1.56}" height="${ry * 2}" rx="${8 * scale}" />`,
    radiant: `<polygon points="${cx},${cy - ry} ${cx + rx * .76},${cy - ry * .56} ${cx + rx * .86},${cy + ry * .66} ${cx},${cy + ry} ${cx - rx * .86},${cy + ry * .66} ${cx - rx * .76},${cy - ry * .56}" />`,
    marquise: `<path d="M${cx - rx * 1.15} ${cy} C${cx - rx * .48} ${cy - ry * 1.2} ${cx + rx * .48} ${cy - ry * 1.2} ${cx + rx * 1.15} ${cy} C${cx + rx * .48} ${cy + ry * 1.2} ${cx - rx * .48} ${cy + ry * 1.2} ${cx - rx * 1.15} ${cy}Z" />`,
    pear: `<path d="M${cx} ${cy - ry * 1.2} C${cx + rx} ${cy - ry * .38} ${cx + rx * .76} ${cy + ry * .92} ${cx} ${cy + ry * 1.08} C${cx - rx * .76} ${cy + ry * .92} ${cx - rx} ${cy - ry * .38} ${cx} ${cy - ry * 1.2}Z" />`,
    cushion: `<rect x="${cx - rx}" y="${cy - ry}" width="${rx * 2}" height="${ry * 2}" rx="${18 * scale}" />`,
    princess: `<rect x="${cx - rx * .88}" y="${cy - ry * .88}" width="${rx * 1.76}" height="${ry * 1.76}" rx="${4 * scale}" transform="rotate(45 ${cx} ${cy})" />`,
    asscher: `<rect x="${cx - rx * .9}" y="${cy - ry * .9}" width="${rx * 1.8}" height="${ry * 1.8}" rx="${8 * scale}" /><rect x="${cx - rx * .56}" y="${cy - ry * .56}" width="${rx * 1.12}" height="${ry * 1.12}" rx="${3 * scale}" fill="none" stroke="rgba(255,255,255,.48)" stroke-width="${2 * scale}" />`,
    heart: `<path d="M${cx} ${cy + ry * .9} C${cx - rx * 1.45} ${cy - ry * .1} ${cx - rx * .9} ${cy - ry * 1.18} ${cx} ${cy - ry * .45} C${cx + rx * .9} ${cy - ry * 1.18} ${cx + rx * 1.45} ${cy - ry * .1} ${cx} ${cy + ry * .9}Z" />`,
  };
  return map[shape] || map.round;
}

function ringPreviewSvg(selection = {}, mode = "large") {
  const metal = selection.metal || "14k-yellow";
  const shape = selection.centerStoneShape || "round";
  const band = selection.bandStyle || "plain";
  const setting = selection.settingStyle || "solitaire";
  const head = selection.headStyle || "four-prong";
  const prongs = head;
  const side = band === "three-stone-side-accents" || setting === "three-stone" ? "side-accents" : "none";
  const wedding = "none";
  const engraving = setting === "vintage" || band === "floral-inspired" ? "floral-engraving" : "none";
  const birthstone = "none";
  const width = mode === "thumb" ? 360 : 760;
  const height = mode === "thumb" ? 220 : 520;
  const [light, mid, dark] = metalPalette(metal);
  const svgKey = `${mode}-${Object.entries(selection).map(([key, value]) => `${key}-${value}`).join("-") || "default"}`.replace(/[^a-z0-9-]/gi, "-");
  const bandStroke = /split-shank|cathedral/.test(band) ? 18 : /twisted|pave/.test(band) ? 14 : 16;
  const centerX = width / 2;
  const centerY = mode === "thumb" ? 94 : 210;
  const scale = mode === "thumb" ? .72 : 1.24;
  const lift = /cathedral|split-shank/.test(`${band} ${setting}`) ? 16 * scale : 0;
  const accentDiamond = (x, y, r = 7 * scale) => `<circle cx="${x}" cy="${y}" r="${r}" fill="url(#diamond-${svgKey})" stroke="rgba(150,160,170,.55)" stroke-width="${Math.max(1, scale)}" />`;
  const sideDiamonds = side === "none" ? "" : [
    accentDiamond(centerX - 58 * scale, centerY + 13 * scale, side === "tapered-baguette" ? 8 * scale : 6 * scale),
    accentDiamond(centerX + 58 * scale, centerY + 13 * scale, side === "tapered-baguette" ? 8 * scale : 6 * scale),
    side !== "none" ? `<ellipse cx="${centerX - 83 * scale}" cy="${centerY + 28 * scale}" rx="${12 * scale}" ry="${5 * scale}" fill="url(#diamond-${svgKey})" transform="rotate(-24 ${centerX - 83 * scale} ${centerY + 28 * scale})" /><ellipse cx="${centerX + 83 * scale}" cy="${centerY + 28 * scale}" rx="${12 * scale}" ry="${5 * scale}" fill="url(#diamond-${svgKey})" transform="rotate(24 ${centerX + 83 * scale} ${centerY + 28 * scale})" />` : "",
  ].join("");
  const pave = /pave|floral|twisted|three-stone/.test(`${band} ${setting}`)
    ? Array.from({ length: mode === "thumb" ? 14 : 24 }, (_, index) => {
      const offset = (index - (mode === "thumb" ? 6.5 : 11.5)) * 14 * scale;
      if (Math.abs(offset) < 54 * scale) return "";
      return accentDiamond(centerX + offset, centerY + 77 * scale + Math.abs(offset) * .02, 3.2 * scale);
    }).join("")
    : "";
  const weddingBand = wedding === "none" ? "" : `<path d="M${centerX - 178 * scale} ${centerY + 122 * scale} C${centerX - 64 * scale} ${centerY + 164 * scale} ${centerX + 64 * scale} ${centerY + 164 * scale} ${centerX + 178 * scale} ${centerY + 122 * scale}" fill="none" stroke="url(#metal-${svgKey})" stroke-width="${bandStroke * .78}" stroke-linecap="round" />${wedding === "pave-contour" ? Array.from({ length: 18 }, (_, i) => accentDiamond(centerX - 105 * scale + i * 12 * scale, centerY + 137 * scale, 2.8 * scale)).join("") : ""}`;
  const bandPath = band === "split-shank"
    ? `<path d="M${centerX - 224 * scale} ${centerY + 96 * scale} C${centerX - 116 * scale} ${centerY + 52 * scale} ${centerX - 54 * scale} ${centerY + 50 * scale} ${centerX - 21 * scale} ${centerY + 34 * scale}" fill="none" stroke="url(#metal-${svgKey})" stroke-width="${bandStroke * .68}" stroke-linecap="round" /><path d="M${centerX + 224 * scale} ${centerY + 96 * scale} C${centerX + 116 * scale} ${centerY + 52 * scale} ${centerX + 54 * scale} ${centerY + 50 * scale} ${centerX + 21 * scale} ${centerY + 34 * scale}" fill="none" stroke="url(#metal-${svgKey})" stroke-width="${bandStroke * .68}" stroke-linecap="round" />`
    : band === "twisted"
      ? `<path d="M${centerX - 224 * scale} ${centerY + 97 * scale} C${centerX - 98 * scale} ${centerY + 42 * scale} ${centerX + 98 * scale} ${centerY + 150 * scale} ${centerX + 224 * scale} ${centerY + 97 * scale}" fill="none" stroke="url(#metal-${svgKey})" stroke-width="${bandStroke * .75}" stroke-linecap="round" /><path d="M${centerX - 224 * scale} ${centerY + 118 * scale} C${centerX - 98 * scale} ${centerY + 166 * scale} ${centerX + 98 * scale} ${centerY + 46 * scale} ${centerX + 224 * scale} ${centerY + 118 * scale}" fill="none" stroke="url(#metal-${svgKey})" stroke-width="${bandStroke * .58}" stroke-linecap="round" />`
      : `<path d="M${centerX - 232 * scale} ${centerY + 106 * scale} C${centerX - 116 * scale} ${centerY + 144 * scale} ${centerX + 116 * scale} ${centerY + 144 * scale} ${centerX + 232 * scale} ${centerY + 106 * scale}" fill="none" stroke="url(#metal-${svgKey})" stroke-width="${bandStroke}" stroke-linecap="round" />`;
  const halo = setting === "halo" ? Array.from({ length: 18 }, (_, index) => {
    const angle = (index / 18) * Math.PI * 2;
    return accentDiamond(centerX + Math.cos(angle) * 42 * scale, centerY - lift + Math.sin(angle) * 39 * scale, 3.4 * scale);
  }).join("") : "";
  const hiddenHalo = /hidden-halo/.test(`${setting} ${head}`) ? Array.from({ length: 11 }, (_, i) => accentDiamond(centerX - 34 * scale + i * 6.8 * scale, centerY + 43 * scale, 2.6 * scale)).join("") : "";
  const prongCount = /six/.test(head) ? 6 : 4;
  const prongMarks = Array.from({ length: prongCount }, (_, index) => {
    const angle = (index / prongCount) * Math.PI * 2 - Math.PI / 2;
    const x = centerX + Math.cos(angle) * 38 * scale;
    const y = centerY - lift + Math.sin(angle) * 36 * scale;
    return `<circle cx="${x}" cy="${y}" r="${/eagle/.test(prongs) ? 3.2 * scale : 4.6 * scale}" fill="${light}" stroke="${dark}" stroke-width="${1.2 * scale}" />`;
  }).join("");
  const detail = engraving === "floral-engraving" || band === "floral-engraved" ? `<path d="M${centerX - 154 * scale} ${centerY + 87 * scale} q${16 * scale} -${18 * scale} ${32 * scale} 0 q-${16 * scale} ${18 * scale} -${32 * scale} 0Z M${centerX + 122 * scale} ${centerY + 87 * scale} q${16 * scale} -${18 * scale} ${32 * scale} 0 q-${16 * scale} ${18 * scale} -${32 * scale} 0Z" fill="rgba(255,255,255,.3)" stroke="${light}" stroke-width="${1.1 * scale}" />` : "";
  const birth = birthstone === "hidden-birthstone" ? `<circle cx="${centerX}" cy="${centerY + 72 * scale}" r="${5.5 * scale}" fill="#84b7ff" stroke="#dcefff" stroke-width="${1.5 * scale}" />` : "";
  return `
    <svg class="ring-render-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Custom engagement ring preview" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="metal-${svgKey}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${light}"/><stop offset=".45" stop-color="${mid}"/><stop offset=".72" stop-color="${light}"/><stop offset="1" stop-color="${dark}"/></linearGradient>
        <radialGradient id="diamond-${svgKey}" cx=".35" cy=".25" r=".78"><stop offset="0" stop-color="#ffffff"/><stop offset=".35" stop-color="#f4fbff"/><stop offset=".72" stop-color="#b9d1e5"/><stop offset="1" stop-color="#7893aa"/></radialGradient>
        <filter id="soft-shadow-${svgKey}" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="${8 * scale}" stdDeviation="${8 * scale}" flood-color="#000" flood-opacity=".28"/></filter>
      </defs>
      <g filter="url(#soft-shadow-${svgKey})">
        ${weddingBand}
        ${bandPath}
        ${pave}
        ${sideDiamonds}
        ${detail}
        <path d="M${centerX - 32 * scale} ${centerY + 45 * scale} C${centerX - 22 * scale} ${centerY + 18 * scale} ${centerX + 22 * scale} ${centerY + 18 * scale} ${centerX + 32 * scale} ${centerY + 45 * scale}" fill="none" stroke="url(#metal-${svgKey})" stroke-width="${8 * scale}" stroke-linecap="round" />
        ${hiddenHalo}
        <g fill="url(#diamond-${svgKey})" stroke="#edf7ff" stroke-width="${2 * scale}">${ringDiamondShape(shape, centerX, centerY - lift, scale)}</g>
        <path d="M${centerX - 20 * scale} ${centerY - lift - 18 * scale} L${centerX} ${centerY - lift + 26 * scale} L${centerX + 21 * scale} ${centerY - lift - 18 * scale}" fill="none" stroke="rgba(255,255,255,.62)" stroke-width="${1.5 * scale}" />
        ${prongMarks}
        ${birth}
      </g>
    </svg>
  `;
}

function ringPreviewCandidatePaths(selection = {}) {
  const shape = selection.centerStoneShape || "round";
  const setting = selection.settingStyle || "solitaire";
  const metal = selection.metal || "14k-yellow";
  const head = selection.headStyle || "four-prong";
  const band = selection.bandStyle || "plain";
  return [
    ringPreviewSlot(shape, setting, metal, head, band),
    ringPreviewSlot(shape, setting, metal),
    ringPreviewSlot(shape, setting),
    ringPreviewSlot(shape),
    "/assets/ring-builder/previews/luxury-preview-sheet.png",
    "/assets/ring-builder/previews/default-luxury-ring.svg",
  ];
}

function advanceRingBuilderImage(image, fallbackId) {
  let candidates = [];
  try {
    candidates = JSON.parse(image.dataset.ringPreviewCandidates || "[]");
  } catch {
    candidates = [];
  }
  const next = candidates.shift();
  image.dataset.ringPreviewCandidates = JSON.stringify(candidates);
  if (next) {
    image.src = next;
    return;
  }
  image.hidden = true;
  const fallback = document.getElementById(fallbackId);
  if (fallback) fallback.hidden = false;
}
window.advanceRingBuilderImage = advanceRingBuilderImage;

function ringImageFallbackAttrs(fallbackId) {
  return `onerror="advanceRingBuilderImage(this,'${fallbackId}')"`;
}

function ringImagePreview(selection = {}, mode = "large", fallbackId = "") {
  const candidates = ringPreviewCandidatePaths(selection);
  const fallback = fallbackId || `ring-fallback-${mode}-${Math.random().toString(36).slice(2)}`;
  return `
    <div class="ring-image-preview-shell">
      <img class="ring-preview-photo" src="${candidates[0]}" alt="Custom engagement ring render" data-ring-preview-candidates="${htmlSafe(JSON.stringify(candidates.slice(1)))}" ${ringImageFallbackAttrs(fallback)}>
      <div class="ring-preview-svg-fallback" id="${fallback}" hidden>${ringPreviewSvg(selection, mode)}</div>
    </div>
  `;
}

function ringOptionThumbnail(option, name) {
  const fallbackSelection = { [name]: option.id };
  const fallbackId = `ring-thumb-fallback-${name}-${option.id}`.replace(/[^a-z0-9-]/gi, "-");
  return `
    <span class="ring-option-media">
      <img src="${htmlSafe(option.previewImagePath)}" alt="${htmlSafe(option.name)}" data-ring-preview-candidates="[]" ${ringImageFallbackAttrs(fallbackId)}>
      <span class="ring-preview-svg-fallback" id="${fallbackId}" hidden>${ringPreviewSvg(fallbackSelection, "thumb")}</span>
    </span>
  `;
}

function currentBuilderSelection(form) {
  const selected = {};
  Object.keys(ringBuilderOptions).forEach((name) => {
    selected[name] = form ? selectedFormValue(form, name) : optionById(name).id;
  });
  return selected;
}

const ringBuilderSteps = [
  { id: "start", title: "Start", name: "startPath", kicker: "Choose your path", helper: "Begin with the setting or diamond direction. You can still change everything before submission." },
  { id: "diamond-type", title: "Diamond", name: "diamondType", kicker: "Diamond type", helper: "Choose lab-grown or natural. Final sourcing and quote are handled personally." },
  { id: "shape", title: "Shape", name: "centerStoneShape", kicker: "Center diamond", helper: "Every shape updates the live preview immediately." },
  { id: "setting", title: "Setting", name: "settingStyle", kicker: "Setting style", helper: "Pick the overall ring architecture and visual direction." },
  { id: "metal", title: "Metal", name: "metal", kicker: "Precious metal", helper: "Choose the metal color and grade for the final build." },
  { id: "head", title: "Head", name: "headStyle", kicker: "Head / basket", helper: "Select how the diamond is held and shown from the side." },
  { id: "band", title: "Band", name: "bandStyle", kicker: "Shank / band", helper: "Choose the ring's band structure and accent style." },
  { id: "size", title: "Size", name: "ringSize", kicker: "Ring size", helper: "Choose the closest size now. Exact sizing can be confirmed before production." },
  { id: "review", title: "Review", name: "", kicker: "Final review", helper: "Review the finished build and submit it for a personalized quote." },
];

function RingPreview() {
  return `
    <section class="ring-preview-panel" aria-label="Live engagement ring preview">
      <div class="ring-preview-heading">
        <p class="eyebrow">Live Luxury Preview</p>
        <h3 id="ring-preview-title">Your custom engagement ring</h3>
      </div>
      <div class="ring-preview-stage" id="ring-preview-stage">
        <div id="ring-preview-render">${ringImagePreview({}, "large", "ring-main-preview-fallback")}</div>
      </div>
      <p class="ring-builder-save-note" id="ring-builder-save-note" hidden></p>
    </section>
  `;
}

function OptionSelector({ label, name, options, compact = false, stepIndex = 0 }) {
  return `
    <fieldset class="ring-option-group ${compact ? "compact" : ""}" data-option-group="${name}">
      <legend><span>${label}</span></legend>
      <div class="ring-option-grid">
        ${options.map((option, index) => `
          <label class="ring-option-card" data-option-card="${name}" data-option-id="${htmlSafe(option.id)}">
            <input type="radio" name="${name}" value="${htmlSafe(option.id)}" ${index === 0 ? "checked" : ""}>
            ${ringOptionThumbnail(option, name)}
            <span class="ring-option-copy">
              <strong>${htmlSafe(option.name)}</strong>
              <small>${htmlSafe(option.description)}</small>
              <em>${htmlSafe(option.category.replace(/-/g, " "))}</em>
            </span>
          </label>
        `).join("")}
      </div>
    </fieldset>
  `;
}

function RingBuilderStepper() {
  return `<nav class="ring-builder-stepper" aria-label="Engagement ring builder steps">
    ${ringBuilderSteps.map((step, index) => `<button type="button" data-step-jump="${index}" class="${index === 0 ? "is-active" : ""}"><span>${index + 1}</span><strong>${htmlSafe(step.title)}</strong></button>`).join("")}
  </nav>`;
}

function RingBuilderStepPanels() {
  return ringBuilderSteps.map((step, index) => {
    if (step.id === "review") {
      return `<section class="ring-builder-review" data-builder-step="${index}" hidden>
        <p class="eyebrow">${htmlSafe(step.kicker)}</p>
        <h3>Submit your finished design</h3>
        <p>${htmlSafe(step.helper)}</p>
        ${CustomQuoteForm()}
      </section>`;
    }
    return `<section class="ring-builder-step-panel" data-builder-step="${index}" ${index === 0 ? "" : "hidden"}>
      <p class="eyebrow">${htmlSafe(step.kicker)}</p>
      <h3>${htmlSafe(step.title === "Start" ? "How would you like to begin?" : step.kicker)}</h3>
      <p>${htmlSafe(step.helper)}</p>
      ${OptionSelector({ label: step.kicker, name: step.name, options: ringBuilderOptions[step.name], compact: step.name === "diamondType" || step.name === "metal" || step.name === "ringSize", stepIndex: index })}
    </section>`;
  }).join("");
}

function BuilderSummary() {
  return `<section class="builder-summary-panel"><p class="eyebrow">Review Build</p><h3>Your selected design</h3><dl id="engagement-build-summary" class="builder-summary-list"></dl></section>`;
}

function CustomQuoteForm() {
  return `
    <section class="custom-quote-panel">
      <h3>Submit Design Request</h3>
      <label>Timeline needed<input name="timeline" placeholder="Example: 2 weeks, 30 days, proposal date"></label>
      <label>Ideal budget<input name="idealBudget" placeholder="Example: $3,500"></label>
      <label>Maximum budget<input name="maximumBudget" placeholder="Example: $5,000 max"></label>
      <label class="form-wide">Anything custom?<textarea name="customDesignRequest" rows="4" placeholder="Tell us about engraving text, hidden details, inspiration links, custom flower/leaf ideas, or special stones."></textarea></label>
      <label class="form-wide">Upload Inspiration Photos<input type="file" name="inspiration" multiple accept="image/*"></label>
      <label>Full Name<input name="fullName" autocomplete="name" required></label>
      <label>Email<input name="email" type="email" autocomplete="email" required></label>
      <label>Phone number<input name="phone" type="tel" autocomplete="tel" required></label>
      <div class="deposit-note form-wide">
        <strong>Quote-first custom review</strong>
        <span>Your completed build goes directly to The Don Jewelers & Jewelry for a personalized quote, stone review, and next-step consultation.</span>
      </div>
      <div class="ring-submit-actions form-wide">
        <button class="button button-gold" type="submit" name="requestIntent" value="quote">Submit Design Request</button>
        <button class="button button-dark" type="submit" name="requestIntent" value="custom-design">Submit Custom Design Request</button>
      </div>
      <p class="form-success" hidden></p>
      <p class="form-error" hidden></p>
    </section>
  `;
}

function RingBuilderPage() {
  setSeo("Start Your Custom Ring Design | The Don Jewelers", "Request a custom engagement ring with The Don Jewelers & Jewelry. Share diamond direction, metal, ring size, budget, timeline, and inspiration photos for a private quote.", {
    path: "start-custom-ring-design",
    image: "engagement-ring-feature.jpg",
    breadcrumbs: [["Engagement Rings", "category/engagement-rings"], ["Start Your Custom Ring Design", "start-custom-ring-design"]],
    faqs: [
      ["Can I choose my own diamond?", "Yes. You can start with the live diamond selection, choose a lab-grown or natural diamond direction, or submit the exact stone specifications you want sourced."],
      ["Can The Don Jewelers make a custom setting?", "Yes. The process can include a private consultation, CAD design, stone sourcing, approval, production, and insured delivery."],
      ["Do I need my ring size before starting?", "No. You can submit an estimated size and confirm exact sizing before final approval."],
    ],
  });
  shell(`
    <main>
      ${pageHero("Engagement Ring Builder", "Build your own engagement ring", "Start with a diamond or setting, customize every detail, then submit the finished design for a personalized quote from The Don Jewelers & Jewelry.", `
        <div class="hero-actions">
          <a class="button button-gold" href="#engagement-build-form">Start Building</a>
          <a class="button button-light" href="#/select-diamond?return=engagement-ring-builder">Choose Live Diamond</a>
        </div>
      `)}
      <section class="engagement-builder-section">
        <form class="custom-order-form engagement-build-form" id="engagement-build-form" data-request-type="Custom Engagement Ring Request" data-product-category="Engagement Rings">
          <input type="hidden" name="selectedLiveDiamond">
          <input type="hidden" name="selectedLiveDiamondStock">
          <textarea name="buildSummary" hidden></textarea>
          <input type="hidden" name="builderUrl">
          <input type="hidden" name="internalAdjustmentTotal">
          <input type="hidden" name="priceEstimate" value="Personal quote requested">
          <input type="hidden" name="renderReference">
          <div class="ring-builder-shell form-wide">
            <div class="ring-builder-left">
              ${RingPreview()}
            </div>
            <div class="ring-builder-controls">
              ${RingBuilderStepper()}
              <div class="ring-builder-step-card">
                ${RingBuilderStepPanels()}
                <div class="ring-builder-nav">
                  <button class="button button-light" type="button" data-builder-prev disabled>Back</button>
                  <button class="button button-gold" type="button" data-builder-next>Continue</button>
                </div>
              </div>
            </div>
          </div>
          <div class="ring-builder-bottom form-wide">
            ${BuilderSummary()}
            <div class="ring-preview-actions">
              <button class="button button-gold" type="button" data-save-ring-design>Save Design</button>
              <a class="button button-light" href="#/select-diamond?return=engagement-ring-builder">Start With Live Diamond</a>
            </div>
          </div>
        </form>
      </section>
      ${trustBlockSection()}
      ${officialGoogleProfileSection()}
      ${aboutUs()}
    </main>
  `);
  wireEngagementRingBuilder();
  wireRequestForm("engagement-build-form", "Thank you for your submission. Your request has been received and is currently under review. We will contact you regarding pricing, design details, and next steps.");
}

function engagementRingBuilder() {
  return RingBuilderPage();
}

function selectedDiamondSummary(diamond) {
  if (!diamond) return "";
  return [
    diamond.shape && `${diamond.shape} shape`,
    diamond.carat && `${diamond.carat}ct`,
    diamond.color && `${diamond.color} color`,
    diamond.clarity,
    diamond.certificate && `${diamond.certificate} certified`,
    diamond.reportNumber && `Report ${diamond.reportNumber}`,
    diamond.stockNumber && `Stock ${diamond.stockNumber}`,
  ].filter(Boolean).join(" | ");
}

function wireEngagementRingBuilder() {
  const form = document.getElementById("engagement-build-form");
  if (!form) return;
  const summary = document.getElementById("engagement-build-summary");
  const query = getRingBuilderQuery();
  let selectedDiamond = null;
  try {
    selectedDiamond = JSON.parse(localStorage.getItem("donEngagementBuilderDiamond") || "null");
  } catch {
    selectedDiamond = null;
  }
  if (selectedDiamond) {
    form.elements.selectedLiveDiamond.value = selectedDiamondSummary(selectedDiamond);
    form.elements.selectedLiveDiamondStock.value = selectedDiamond.stockNumber || selectedDiamond.id || "";
  }
  [...query.entries()].forEach(([name, value]) => {
    const input = form.querySelector(`[name="${CSS.escape(name)}"][value="${CSS.escape(value)}"]`);
    if (input && !input.disabled) input.checked = true;
  });
  const configFields = Object.keys(ringBuilderOptions);
  const optionFields = [
    ["startPath", "Builder path"],
    ["diamondType", "Diamond type"],
    ["centerStoneShape", "Center stone"],
    ["settingStyle", "Setting"],
    ["headStyle", "Basket/head"],
    ["metal", "Metal"],
    ["bandStyle", "Band"],
    ["ringSize", "Ring size"],
  ];
  const watchedFields = [
    ...optionFields,
    ["timeline", "Timeline"],
    ["idealBudget", "Ideal budget"],
    ["maximumBudget", "Max budget"],
    ["selectedLiveDiamond", "Live diamond"],
  ];
  const selectedOption = (name) => optionById(name, selectedFormValue(form, name));
  const optionCompatible = (option) => {
    const metal = selectedFormValue(form, "metal");
    const shape = selectedFormValue(form, "centerStoneShape");
    const metalOk = !option.compatibleMetals?.length || option.compatibleMetals.includes(metal);
    const shapeOk = !option.compatibleDiamondShapes?.length || option.compatibleDiamondShapes.includes(shape);
    return metalOk && shapeOk;
  };
  const enforceCompatibility = () => {
    configFields.forEach((name) => {
      ringBuilderOptions[name].forEach((option) => {
        const input = form.querySelector(`[name="${name}"][value="${option.id}"]`);
        const card = form.querySelector(`[data-option-card="${name}"][data-option-id="${option.id}"]`);
        const compatible = optionCompatible(option);
        if (input) input.disabled = !compatible;
        card?.classList.toggle("is-incompatible", !compatible);
        card?.setAttribute("aria-disabled", compatible ? "false" : "true");
      });
      const current = selectedOption(name);
      if (current?.id && !optionCompatible(current)) {
        const replacement = ringBuilderOptions[name].find(optionCompatible);
        const replacementInput = replacement && form.querySelector(`[name="${name}"][value="${replacement.id}"]`);
        if (replacementInput) replacementInput.checked = true;
      }
    });
  };
  const updatePreview = () => {
    const selection = currentBuilderSelection(form);
    const renderHost = document.getElementById("ring-preview-render");
    const previewCandidates = ringPreviewCandidatePaths(selection);
    if (renderHost) renderHost.innerHTML = ringImagePreview(selection, "large", "ring-main-preview-fallback");
    if (form.elements.renderReference) form.elements.renderReference.value = JSON.stringify({ selection, previewCandidates });
    if (form.elements.priceEstimate) form.elements.priceEstimate.value = "Personal quote requested";
    const internalTotal = configFields.reduce((sum, name) => sum + Number(selectedOption(name).internalPriceAdjustment || 0), 0);
    if (form.elements.internalAdjustmentTotal) form.elements.internalAdjustmentTotal.value = String(internalTotal);
    const title = document.getElementById("ring-preview-title");
    if (title) title.textContent = `${selectedOption("centerStoneShape").name || "Center"} ${selectedOption("settingStyle").name || "Custom"} in ${selectedOption("metal").name || "gold"}`;
    return { selection, previewCandidates };
  };
  const updateUrl = () => {
    const params = new URLSearchParams();
    optionFields.map(([name]) => name).forEach((name) => {
      const value = selectedFormValue(form, name);
      if (value) params.set(name, value);
    });
    const queryString = params.toString();
    const nextHash = `#/start-custom-ring-design${queryString ? `?${queryString}` : ""}`;
    if (location.hash !== nextHash) history.replaceState(null, "", `${location.pathname}${location.search}${nextHash}`);
    if (form.elements.builderUrl) form.elements.builderUrl.value = `${siteUrl}/${nextHash}`;
  };
  const updateSummary = () => {
    enforceCompatibility();
    const renderReference = updatePreview();
    updateUrl();
    const rows = watchedFields
      .map(([name, label]) => {
        const option = ringBuilderOptions[name] ? selectedOption(name) : null;
        return [label, option?.name || selectedFormValue(form, name)];
      })
      .filter(([, value]) => value);
    if (summary) {
      summary.innerHTML = rows.map(([label, value]) => `<div><dt>${htmlSafe(label)}</dt><dd>${htmlSafe(value)}</dd></div>`).join("");
    }
    const adminOptions = optionFields.map(([name, label]) => {
      const option = selectedOption(name);
      return `${label}: ${option.name} | id=${option.id} | category=${option.category} | preview=${option.previewImagePath} | internalAdjustment=${option.internalPriceAdjustment}`;
    });
    const summaryText = [...rows, ["Quote status", "Personal quote requested"], ["Admin option model", adminOptions.join("\n")], ["Render reference", JSON.stringify(renderReference)]].map(([label, value]) => `${label}: ${value}`).join("\n");
    if (form.elements.buildSummary) form.elements.buildSummary.value = summaryText;
  };
  let activeStep = 0;
  const setStep = (nextStep) => {
    activeStep = Math.max(0, Math.min(ringBuilderSteps.length - 1, nextStep));
    form.querySelectorAll("[data-builder-step]").forEach((panel) => {
      panel.hidden = Number(panel.dataset.builderStep) !== activeStep;
    });
    form.querySelectorAll("[data-step-jump]").forEach((button) => {
      const index = Number(button.dataset.stepJump);
      button.classList.toggle("is-active", index === activeStep);
      button.classList.toggle("is-complete", index < activeStep);
    });
    const prev = form.querySelector("[data-builder-prev]");
    const next = form.querySelector("[data-builder-next]");
    if (prev) prev.disabled = activeStep === 0;
    if (next) {
      next.textContent = activeStep === ringBuilderSteps.length - 1 ? "Review Submitted Below" : activeStep === ringBuilderSteps.length - 2 ? "Review Design" : "Continue";
      next.hidden = activeStep === ringBuilderSteps.length - 1;
    }
  };
  form.querySelector("[data-builder-next]")?.addEventListener("click", () => setStep(activeStep + 1));
  form.querySelector("[data-builder-prev]")?.addEventListener("click", () => setStep(activeStep - 1));
  form.querySelectorAll("[data-step-jump]").forEach((button) => {
    button.addEventListener("click", () => setStep(Number(button.dataset.stepJump)));
  });
  form.querySelectorAll('input[name="startPath"]').forEach((input) => {
    input.addEventListener("change", () => {
      setStep(input.value === "diamond-first" ? 1 : 3);
      updateSummary();
    });
  });
  form.addEventListener("change", updateSummary);
  form.addEventListener("input", updateSummary);
  form.querySelector("[data-save-ring-design]")?.addEventListener("click", () => {
    const design = { savedAt: new Date().toISOString(), url: form.elements.builderUrl?.value || location.href, summary: form.elements.buildSummary?.value || "" };
    localStorage.setItem("donSavedEngagementRingDesign", JSON.stringify(design));
    const note = document.getElementById("ring-builder-save-note");
    if (note) {
      note.hidden = false;
      note.textContent = "Design saved in this browser. You can return to this device and keep building.";
    }
  });
  updateSummary();
  setStep(0);
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
      <input type="hidden" name="selectedLiveDiamond">
      <input type="hidden" name="selectedLiveDiamondStock">
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
      <label class="form-wide">Unique custom design request<textarea name="customDesignRequest" rows="5" placeholder="Use this if the normal options do not cover the design. Add links, sketches, inspiration, engraving, special stones, or exact custom details."></textarea></label>
      <label class="form-wide">Upload Inspiration Photos<input type="file" name="inspiration" multiple accept="image/*"></label>
      <button class="button button-gold form-wide" type="submit">Submit Custom Request</button>
      <p class="form-success" hidden></p>
      <p class="form-error" hidden></p>
    </form>
  `;
}

const customRingSelects = {
  diamondType: ["Lab-grown diamond", "Natural diamond", "Not sure yet"],
  diamondShape: ["Round", "Oval", "Emerald", "Radiant", "Cushion", "Pear", "Marquise", "Princess", "Asscher", "Heart", "Not sure yet"],
  caratWeight: ["0.75 ct", "1 ct", "1.5 ct", "2 ct", "2.5 ct", "3 ct", "4 ct+", "Not sure yet"],
  settingStyle: ["Solitaire", "Hidden halo", "Halo", "Three-stone", "Pave", "Cathedral", "Vintage-inspired", "Custom"],
  headStyle: ["4-prong", "6-prong", "Eagle claw", "Bezel", "Hidden halo basket", "Not sure yet"],
  bandStyle: ["Plain", "Pave", "Cathedral", "Split shank", "Twisted", "Floral-inspired", "Three-stone side accents", "Not sure yet"],
  bandProfile: ["Thin delicate", "Classic medium", "Wide statement", "Tapered", "Knife edge", "Comfort fit", "Not sure yet"],
  metalType: ["14K White Gold", "14K Yellow Gold", "14K Rose Gold", "18K White Gold", "18K Yellow Gold", "Platinum", "Not sure yet"],
  ringSize: ["Not sure yet", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "Custom / needs sizing"],
  matchingWeddingBand: ["No matching band yet", "Yes, design matching wedding band", "Maybe, show me options"],
};

function selectField(name, label, options, { required = false } = {}) {
  return `
    <label>${label}
      <select name="${name}" ${required ? "required" : ""}>
        ${options.map((item) => `<option>${item}</option>`).join("")}
      </select>
    </label>
  `;
}

function customRingRequestForm(formId = "custom-ring-request-form") {
  return `
    <form class="custom-order-form engagement-build-form ring-request-form" id="${formId}" data-request-type="Custom Engagement Ring Request" data-product-category="Engagement Rings" data-product-name="Custom engagement ring design request">
      <input type="hidden" name="productName" value="Custom engagement ring design request">
      <input type="hidden" name="selectedLiveDiamond">
      <input type="hidden" name="selectedLiveDiamondStock">

      <div class="form-wide ring-request-heading">
        <p class="eyebrow">Custom engagement ring request</p>
        <h2>Tell us the ring direction</h2>
        <p>Pick what you know. Leave the rest as "not sure yet" and The Don Jewelers & Jewelry will help refine the design.</p>
      </div>

      <label>Full Name<input name="fullName" autocomplete="name" required></label>
      <label>Email Address<input name="email" type="email" autocomplete="email" required></label>
      <label>Phone Number<input name="phone" type="tel" autocomplete="tel" required></label>

      ${selectField("diamondType", "Diamond Type", customRingSelects.diamondType, { required: true })}
      ${selectField("diamondShape", "Center Diamond Shape", customRingSelects.diamondShape, { required: true })}
      ${selectField("caratWeight", "Diamond Size", customRingSelects.caratWeight)}
      ${selectField("metalType", "Metal", customRingSelects.metalType, { required: true })}
      ${selectField("settingStyle", "Setting Style", customRingSelects.settingStyle, { required: true })}
      ${selectField("headStyle", "Basket / Head / Prongs", customRingSelects.headStyle)}
      ${selectField("bandStyle", "Band / Shank Style", customRingSelects.bandStyle, { required: true })}
      ${selectField("bandProfile", "Band Profile", customRingSelects.bandProfile)}
      ${selectField("ringSize", "Ring Size", customRingSelects.ringSize)}
      ${selectField("matchingWeddingBand", "Matching Wedding Band", customRingSelects.matchingWeddingBand)}

      <label>Budget Range<input name="budget" placeholder="Example: $3,000 - $7,000"></label>
      <label>Timeline Needed<input name="timeline" placeholder="Example: 4-6 weeks, proposal date, not urgent"></label>
      <label class="form-wide">Design Notes<textarea name="notes" rows="5" placeholder="Example: oval lab diamond, hidden halo, thin yellow gold pave band, low basket, elegant and simple. Add any inspiration links or special details."></textarea></label>
      <label class="form-wide">Upload Inspiration Photos<input type="file" name="inspiration" multiple accept="image/*"></label>
      <button class="button button-gold form-wide" type="submit">Submit Engagement Ring Request</button>
      <p class="form-success" hidden></p>
      <p class="form-error" hidden></p>
    </form>
  `;
}

function customOrders() {
  shell(`
    <main>
      ${pageHero("Custom Design", "Message us for a custom design", `Send your name, phone number, email, and a clear description of what you are looking for. We will contact you to discuss the design, budget, timeline, and next steps.`)}
      ${firstCustomOrderCreditSection()}
      <section class="custom-form-section">
        ${customRequestForm({ formId: "custom-form", requestType: "Request Custom Design Form" })}
      </section>
      ${trustBlockSection()}
      ${aboutUs()}
    </main>
  `);
  wireRequestForm("custom-form", "Thank you for your submission. Your request has been received and is currently under review. We will contact you regarding pricing, design details, and next steps.");
}

function customRingDesignPage() {
  setSeo("Start Your Custom Engagement Ring Design | The Don Jewelers", "Request a custom diamond engagement ring with The Don Jewelers & Jewelry. Choose diamond shape, diamond size, setting, basket, prongs, metal, band, shank, ring size, budget, and inspiration photos.", {
    path: "start-custom-ring-design",
    image: "engagement-ring-feature.jpg",
    breadcrumbs: [["Engagement Rings", "category/engagement-rings"], ["Start Your Custom Ring Design", "start-custom-ring-design"]],
    faqs: [
      ["Can I request a custom engagement ring without using the builder?", "Yes. Select the diamond shape, size, setting, basket, metal, band, shank, ring size, and budget, then submit the request for personal follow-up."],
      ["Can I still start with a live diamond?", "Yes. You can browse live diamonds separately and include the stock number or diamond details in your engagement ring request."],
      ["Will I receive a quote immediately?", "The Don Jewelers & Jewelry reviews the engagement ring details personally and follows up with a custom quote, sourcing options, and next steps."],
    ],
  });
  shell(`
    <main>
      ${pageHero("Start Your Custom Ring Design", "Design a diamond engagement ring", "Choose the diamond shape, size, setting, basket, prongs, metal, band, shank, ring size, budget, and inspiration. Your request goes directly to The Don Jewelers & Jewelry for a personal quote.", `
        <div class="hero-actions">
          <a class="button button-gold" href="#custom-ring-request-form">Start Engagement Ring Request</a>
          <a class="button button-light" href="${internalLink("select-diamond")}">Start With Live Diamond</a>
        </div>
      `)}
      ${firstCustomOrderCreditSection()}
      <section class="builder-choice-section">
        <div class="builder-choice-grid">
          <article class="builder-choice-card"><strong>Diamond</strong><p>Choose lab-grown or natural, shape, size, and any live diamond stock number you already like.</p></article>
          <article class="builder-choice-card"><strong>Ring design</strong><p>Select setting, basket, prongs, metal, band style, shank profile, ring size, and matching band direction.</p></article>
          <article class="builder-choice-card"><strong>Quote details</strong><p>Add budget, timeline, notes, and inspiration photos so the quote can match the ring you want.</p></article>
        </div>
      </section>
      <section class="custom-form-section">
        ${customRingRequestForm("custom-ring-request-form")}
      </section>
      ${trustBlockSection()}
      ${officialGoogleProfileSection()}
    </main>
  `);
  const notes = document.querySelector("#custom-ring-request-form textarea[name='notes']");
  if (notes) notes.placeholder = "Example: oval lab diamond, yellow gold hidden halo, thin pave band, low basket, size 6.5, matching wedding band, $4,000-$7,000 budget, needed in 4-6 weeks.";
  let selectedDiamond = null;
  try {
    selectedDiamond = JSON.parse(localStorage.getItem("donEngagementBuilderDiamond") || "null");
  } catch {
    selectedDiamond = null;
  }
  const form = document.getElementById("custom-ring-request-form");
  if (selectedDiamond && form) {
    const summary = selectedDiamondSummary(selectedDiamond);
    if (form.elements.selectedLiveDiamond) form.elements.selectedLiveDiamond.value = summary;
    if (form.elements.selectedLiveDiamondStock) form.elements.selectedLiveDiamondStock.value = selectedDiamond.stockNumber || selectedDiamond.id || "";
    if (notes && !notes.value) notes.value = `Selected live inventory diamond: ${summary}`;
  }
  wireRequestForm("custom-ring-request-form", "Thank you. Your custom ring request was received and sent to The Don Jewelers & Jewelry for personal review.");
}

function ringSizeGuidePage() {
  setSeo("Ring Size Guide | Engagement Ring Sizing | The Don Jewelers", "Use The Don Jewelers ring size guide to plan engagement ring sizing, comfort fit, resizing questions, measuring tips, and final approval before custom ring production.", {
    path: "ring-size-guide",
    image: "engagement-ring-feature.jpg",
    breadcrumbs: [["Guides", "diamond-education"], ["Ring Size Guide", "ring-size-guide"]],
  });
  shell(`
    <main>
      ${pageHero("Ring Size Guide", "Measure before you build", "Use this as a planning guide before your final consultation. Exact ring size should be confirmed before CAD approval, casting, setting, or shipment.", `
        <div class="hero-actions">
          <a class="button button-gold" href="#/start-custom-ring-design">Start Custom Ring Design</a>
          <a class="button button-light" href="${appointmentUrl}">Book Appointment</a>
        </div>
      `)}
      <section class="guide-table-section">
        <div class="section-heading">
          <p class="eyebrow">Quick Sizing</p>
          <h2>Common US ring size reference</h2>
        </div>
        <div class="guide-table">
          ${[
            ["US 4", "46.8 mm", "Small finger / pinky range"],
            ["US 5", "49.3 mm", "Common smaller engagement size"],
            ["US 6", "51.9 mm", "Common engagement ring range"],
            ["US 7", "54.4 mm", "Common engagement ring range"],
            ["US 8", "57.0 mm", "Larger engagement / smaller men's range"],
            ["US 9", "59.5 mm", "Common men's ring range"],
            ["US 10", "62.1 mm", "Common men's ring range"],
            ["US 11", "64.6 mm", "Larger men's ring range"],
          ].map(([size, circumference, note]) => `<div><strong>${size}</strong><span>${circumference}</span><p>${note}</p></div>`).join("")}
        </div>
      </section>
      <section class="builder-choice-section">
        <div class="builder-choice-grid">
          <article class="builder-choice-card"><strong>Best method</strong><p>Have the finger sized professionally, especially for engagement rings, wide bands, eternity bands, and expensive custom settings.</p></article>
          <article class="builder-choice-card"><strong>Measure at the right time</strong><p>Finger size changes with heat, cold, salt, and time of day. Measure when hands are normal, not swollen or cold.</p></article>
          <article class="builder-choice-card"><strong>Account for width</strong><p>Wider bands often feel tighter. Thin solitaire bands and wide men's bands may not fit the same at the same size.</p></article>
          <article class="builder-choice-card"><strong>Confirm before production</strong><p>Custom work should not move to final approval until spelling, stone, metal, and ring size are confirmed.</p></article>
        </div>
      </section>
      ${trustBlockSection()}
    </main>
  `);
}

function diamondShapeGuidePage() {
  setSeo("Diamond Shape Guide | Oval Round Emerald Radiant Marquise | The Don Jewelers", "Compare diamond shapes for engagement rings including round, oval, emerald, radiant, marquise, pear, cushion, princess, and Asscher diamonds.", {
    path: "diamond-shape-guide",
    image: "queen-aurelia-oval-marquise-ring.jpeg",
    breadcrumbs: [["Guides", "diamond-education"], ["Diamond Shape Guide", "diamond-shape-guide"]],
  });
  const shapes = [
    ["Round", "Maximum classic sparkle; easiest shape for strict cut-grade comparison.", "Best for timeless solitaires, pave bands, and buyers who want the brightest traditional look."],
    ["Oval", "Elongated shape that looks large for its carat weight.", "Best for finger coverage, modern bridal looks, hidden halos, and yellow gold settings."],
    ["Emerald", "Step-cut shape with clean flashes instead of crushed sparkle.", "Best for elegant, quiet luxury settings; clarity should be higher because inclusions show more."],
    ["Radiant", "Brilliant faceting with rectangular or square outline.", "Best for buyers who like emerald shape but want more sparkle."],
    ["Marquise", "Long pointed shape with dramatic finger presence.", "Best for statement rings, vintage influence, and maximum visual size."],
    ["Pear", "Teardrop shape that can face up large and feel romantic.", "Best for solitaire, halo, and east-west custom designs."],
    ["Cushion", "Soft square/rectangular shape with romantic corners.", "Best for vintage, halo, and soft modern settings."],
    ["Princess", "Square brilliant style with sharp corners.", "Best for clean geometric settings and modern solitaire designs."],
    ["Asscher", "Square step-cut with a hall-of-mirrors look.", "Best for Art Deco, vintage, and high-clarity stones."],
  ];
  shell(`
    <main>
      ${pageHero("Diamond Shape Guide", "Choose the shape before the setting", "Shape controls the personality of the ring. Use this guide to narrow the look, then choose from live diamonds or request sourcing.", `
        <div class="hero-actions">
          <a class="button button-gold" href="#/select-diamond?return=shape-guide">Choose Live Diamond</a>
          <a class="button button-light" href="#/start-custom-ring-design">Start Custom Ring Design</a>
        </div>
      `)}
      <section class="shape-guide-grid">
        ${shapes.map(([shape, summary, best]) => `
          <article>
            <strong>${shape}</strong>
            <p>${summary}</p>
            <span>${best}</span>
            <a href="#/select-diamond?shape=${encodeURIComponent(shape)}&return=shape-guide">Shop ${shape} Diamonds</a>
          </article>
        `).join("")}
      </section>
      ${trustBlockSection()}
    </main>
  `);
}

function labNaturalComparisonPage() {
  setSeo("Lab Diamonds vs Natural Diamonds | Engagement Ring Comparison", "Compare lab grown diamonds and natural diamonds by appearance, origin, budget, certification, resale considerations, and engagement ring use.", {
    path: "lab-diamonds-vs-natural-diamonds",
    image: "yellow-gold-oval-pave-engagement-ring.jpeg",
    breadcrumbs: [["Guides", "diamond-education"], ["Lab Diamonds vs Natural Diamonds", "lab-diamonds-vs-natural-diamonds"]],
  });
  shell(`
    <main>
      ${pageHero("Diamond Comparison", "Lab diamonds vs natural diamonds", "Both can look beautiful in an engagement ring. The right choice depends on budget, origin preference, size goals, certification, and the story you want behind the piece.", `
        <div class="hero-actions">
          <a class="button button-gold" href="#/select-diamond?type=lab&return=lab-natural-guide">Shop Lab Diamonds</a>
          <a class="button button-light" href="#/request/contact?intent=natural-diamond-search">Request Natural Diamond Search</a>
        </div>
      `)}
      <section class="comparison-table-section">
        <div class="comparison-table">
          ${[
            ["Origin", "Grown in a controlled lab environment", "Formed naturally underground"],
            ["Appearance", "Can look identical to natural at comparable quality", "Can look identical to lab at comparable quality"],
            ["Budget", "Usually allows larger size, color, or clarity for the money", "Usually costs more at the same specs"],
            ["Certification", "Often IGI; some GIA options available", "Often GIA or IGI"],
            ["Best For", "Maximum size, modern value, visual impact", "Natural rarity, tradition, origin story"],
            ["Resale", "Typically weaker resale market", "Typically stronger but still not guaranteed"],
          ].map(([factor, lab, natural]) => `
            <div class="comparison-row">
              <strong>${factor}</strong>
              <p><b>Lab:</b> ${lab}</p>
              <p><b>Natural:</b> ${natural}</p>
            </div>
          `).join("")}
        </div>
      </section>
      ${trustBlockSection()}
    </main>
  `);
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
  ring: "Custom Engagement Ring Request",
  engagement: "Custom Engagement Ring Request",
  appointment: "Appointment Request",
};

function appointmentRequestForm(formId = "appointment-request-form") {
  return `
    <form class="custom-order-form engagement-build-form ring-request-form" id="${formId}" data-request-type="Appointment Request" data-product-category="Appointment" data-product-name="Private jewelry appointment">
      <input type="hidden" name="productName" value="Private jewelry appointment">
      <div class="form-wide ring-request-heading">
        <p class="eyebrow">Private appointment</p>
        <h2>Book a jewelry consultation</h2>
        <p>Send your contact information, what you want to discuss, and the best time to reach you.</p>
      </div>
      <label>Full Name<input name="fullName" autocomplete="name" required></label>
      <label>Email Address<input name="email" type="email" autocomplete="email" required></label>
      <label>Phone Number<input name="phone" type="tel" autocomplete="tel" required></label>
      <label>Appointment Type
        <select name="settingStyle" required>
          <option>Engagement ring consultation</option>
          <option>Live diamond sourcing</option>
          <option>Custom jewelry consultation</option>
          <option>Product or checkout help</option>
          <option>Repair / sizing question</option>
        </select>
      </label>
      <label>Preferred Day / Time<input name="timeline" placeholder="Example: Saturday afternoon, weekday evening, ASAP"></label>
      <label>Budget Range<input name="budget" placeholder="Optional: $3,000 - $7,000"></label>
      <label class="form-wide">Appointment Notes<textarea name="notes" rows="5" placeholder="Tell us what you want to look at or discuss. Add ring style, diamond shape, product names, order questions, or any urgent timing."></textarea></label>
      <label class="form-wide">Upload Inspiration Photos<input type="file" name="inspiration" multiple accept="image/*"></label>
      <button class="button button-gold form-wide" type="submit">Submit Appointment Request</button>
      <p class="form-success" hidden></p>
      <p class="form-error" hidden></p>
    </form>
  `;
}

function customRequestPage(slug, params = new URLSearchParams()) {
  const requestType = requestPageTypes[slug] || "General Contact Form";
  const productName = params.get("product") || "";
  const productCategory = params.get("category") || "";
  const intent = params.get("intent") || "";
  if (slug === "appointment") {
    setSeo(`Book Appointment | ${businessName}`, "Book a private jewelry appointment for engagement rings, live diamonds, custom jewelry, product questions, checkout help, and private jeweler consultation.", {
      path: "request/appointment",
      image: defaultSeoImage,
      breadcrumbs: [["Appointment", "request/appointment"]],
    });
    shell(`
      <main>
        ${pageHero("Book Appointment", "Private jewelry appointment", "Send your preferred time and what you want to discuss. Your appointment request is emailed directly to The Don Jewelers & Jewelry.")}
        <section class="custom-form-section">
          ${appointmentRequestForm("appointment-request-form")}
        </section>
        ${officialGoogleProfileSection()}
      </main>
    `);
    wireRequestForm("appointment-request-form", "Thank you. Your appointment request was received and sent to The Don Jewelers & Jewelry.");
    return;
  }
  const detail = productName
    ? `Request for ${productName}${intent ? ` (${intent.replace(/-/g, " ")})` : ""}.`
    : "Submit your details and inspiration photos.";
  shell(`
    <main>
      ${pageHero("Custom Quote", requestType, `${detail} Every request is routed to The Don Jewelers & Jewelry for follow-up.`)}
      <section class="custom-form-section">
        ${customRequestForm({ formId: "request-form", requestType, productCategory, productName })}
      </section>
      ${officialGoogleProfileSection()}
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
          <strong>Official profile and conversion settings</strong>
          <button class="button button-dark" id="refresh-site-system-status" type="button">Check Status</button>
        </div>
        <div class="admin-request-list">
          <article class="admin-request-card">
            <div>
              <p class="eyebrow">Google Business Profile</p>
              <h2>One official profile link</h2>
              <p class="lede">${googleBusinessProfileUrl}</p>
            </div>
            <div class="builder-actions">
              <a class="button button-gold" href="${googleBusinessProfileUrl}" target="_blank" rel="noopener noreferrer">Find us on Google</a>
              <a class="button button-light" href="${googleReviewUrl}" target="_blank" rel="noopener noreferrer">Open Reviews</a>
              <a class="button button-dark" href="/api/merchant-feed" target="_blank" rel="noopener noreferrer">Merchant Feed</a>
            </div>
          </article>
        </div>
        <div id="site-system-status" class="admin-request-list">
          <div class="empty-state">Checking email, checkout, database, and sync readiness...</div>
        </div>
      </section>
      <section class="admin-dashboard-section">
        <div class="admin-toolbar">
          <strong>Lead Recovery</strong>
          <div class="builder-actions">
            <button class="button button-dark" id="refresh-lead-recovery" type="button">Refresh Leads</button>
          </div>
        </div>
        <label class="admin-secret-field">Admin recovery key
          <input id="admin-lead-key" type="password" autocomplete="current-password" placeholder="Enter ADMIN_SYNC_SECRET or CRON_SECRET">
        </label>
        <div id="admin-lead-recovery-list" class="admin-request-list">
          <div class="empty-state">Enter admin key, then refresh lead recovery.</div>
        </div>
      </section>
      <section class="admin-dashboard-section">
        <div class="admin-toolbar">
          <strong>SEO & Analytics</strong>
          <button class="button button-dark" id="refresh-seo-dashboard" type="button">Refresh SEO Status</button>
        </div>
        <div id="admin-seo-dashboard" class="admin-request-list">
          <div class="empty-state">Enter the admin recovery key to load secure SEO and conversion status.</div>
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
  const renderSiteSystemStatus = async () => {
    const host = document.getElementById("site-system-status");
    if (!host) return;
    host.innerHTML = `<div class="empty-state">Checking live system status...</div>`;
    try {
      const response = await fetchWithTimeout("/api/system-status", {}, 15000);
      const status = await response.json();
      if (!response.ok || !status.ok) throw new Error(status.message || "Could not load system status.");
      const rows = [
        ["Resend email", status.resendConfigured ? "Configured" : "Missing RESEND_API_KEY"],
        ["Business inbox", status.resendBusinessEmail || contactEmail],
        ["Checkout API", status.stripeConfigured ? "Dynamic Stripe Checkout configured" : "Payment link fallback active"],
        ["Stripe webhook", status.stripeWebhookConfigured ? "Configured" : "Not configured"],
        ["Lead recovery database", status.leadRecoveryConfigured ? "Configured" : "Not configured"],
        ["Admin recovery key", status.adminSyncConfigured || status.cronConfigured ? "Configured" : "Not configured"],
        ["Live diamond API", status.lgdConfigured ? "Configured" : "Not configured"],
      ];
      host.innerHTML = `
        <article class="admin-request-card">
          <div>
            <p class="eyebrow">Production readiness</p>
            <h2>${status.resendConfigured ? "Email is active" : "Email needs attention"}</h2>
            <p class="lede">Checkout currently uses ${status.stripeConfigured ? "dynamic Stripe Checkout" : "the Stripe payment-link fallback"}.</p>
          </div>
          <dl class="summary-list">
            ${rows.map(([label, value]) => `<div><dt>${htmlSafe(label)}</dt><dd>${htmlSafe(value)}</dd></div>`).join("")}
          </dl>
        </article>
      `;
    } catch (error) {
      host.innerHTML = `<div class="empty-state">${htmlSafe(error.message || "Could not load system status.")}</div>`;
    }
  };
  const adminLeadKey = () => {
    const input = document.getElementById("admin-lead-key");
    const value = input?.value.trim() || sessionStorage.getItem("donAdminLeadKey") || "";
    if (value) sessionStorage.setItem("donAdminLeadKey", value);
    return value;
  };
  const renderLeadRecovery = async () => {
    const host = document.getElementById("admin-lead-recovery-list");
    const key = adminLeadKey();
    if (!key) {
      host.innerHTML = `<div class="empty-state">Enter the admin recovery key to view saved leads and retry failed emails.</div>`;
      return;
    }
    host.innerHTML = `<div class="empty-state">Loading saved leads...</div>`;
    try {
      const response = await fetchWithTimeout("/api/admin/lead-recovery?limit=75", {
        headers: { "x-admin-key": key },
      }, 20000);
      const payload = await response.json();
      if (!response.ok || !payload.ok) throw new Error(payload.message || "Could not load lead recovery.");
      host.innerHTML = payload.leads.length ? payload.leads.map((lead) => `
        <article class="admin-request-card" data-lead-id="${htmlSafe(lead.publicId)}">
          <div>
            <p class="eyebrow">${htmlSafe(lead.type || "Website Lead")}</p>
            <h2>${htmlSafe(lead.customer?.fullName || lead.customer?.name || "Unknown customer")}</h2>
            <p class="lede">${htmlSafe(lead.source || lead.jewelry?.productCategory || "Website submission")}</p>
          </div>
          <dl class="summary-list">
            <div><dt>Submitted</dt><dd>${new Date(lead.createdAt).toLocaleString()}</dd></div>
            <div><dt>Email</dt><dd>${htmlSafe(lead.customer?.email || "Not provided")}</dd></div>
            <div><dt>Phone</dt><dd>${htmlSafe(lead.customer?.phone || "Not provided")}</dd></div>
            <div><dt>Business email</dt><dd>${htmlSafe(lead.businessEmailStatus)}</dd></div>
            <div><dt>Customer email</dt><dd>${htmlSafe(lead.customerEmailStatus)}</dd></div>
            <div><dt>Status</dt><dd>${htmlSafe(lead.status)}</dd></div>
            <div><dt>Stripe</dt><dd>${htmlSafe(lead.stripeStatus || lead.checkout?.status || "N/A")}</dd></div>
          </dl>
          ${lead.lastError ? `<p class="form-error">${htmlSafe(lead.lastError)}</p>` : ""}
          <p class="quote-note">${htmlSafe(lead.jewelry?.notes || lead.jewelry?.productName || "No notes provided.")}</p>
          <div class="builder-actions">
            <button class="button button-gold" type="button" data-retry-lead="${htmlSafe(lead.publicId)}">Retry Email</button>
          </div>
        </article>
      `).join("") : `<div class="empty-state">No saved leads found.</div>`;
    } catch (error) {
      host.innerHTML = `<div class="empty-state">${htmlSafe(error.message || "Could not load lead recovery.")}</div>`;
    }
  };
  const renderSeoDashboard = async () => {
    const host = document.getElementById("admin-seo-dashboard");
    const key = adminLeadKey();
    if (!key) {
      host.innerHTML = `<div class="empty-state">Enter the admin recovery key above, then refresh SEO status.</div>`;
      return;
    }
    host.innerHTML = `<div class="empty-state">Loading secure SEO status...</div>`;
    try {
      const response = await fetchWithTimeout("/api/admin/seo-dashboard", { headers: { "x-admin-key": key } }, 20000);
      const payload = await response.json();
      if (!response.ok || !payload.ok) throw new Error(payload.message || "Could not load SEO status.");
      const integrations = payload.integrations || {};
      const conversions = payload.conversions || {};
      const google = payload.googleData || {};
      const ga = google.analytics || {};
      const search = google.searchConsole || {};
      const change = (current, previous) => previous ? `${(((current - previous) / previous) * 100).toFixed(1)}%` : "No prior baseline";
      host.innerHTML = `
        <article class="admin-request-card">
          <div><p class="eyebrow">Tracking readiness</p><h2>${integrations.ga4Configured ? "GA4 configured" : "GA4 setup required"}</h2><p class="lede">${htmlSafe(payload.googleDataMessage)}</p></div>
          <dl class="summary-list">
            <div><dt>Search Console verification</dt><dd>${integrations.searchConsoleVerificationConfigured ? "Configured" : "Use existing verification or add env token"}</dd></div>
            <div><dt>Google reporting APIs</dt><dd>${integrations.analyticsApiConfigured || integrations.searchConsoleApiConfigured ? "Connected" : "Not connected"}</dd></div>
            <div><dt>Lead records sampled</dt><dd>${Number(conversions.availableLeadSample || 0)}</dd></div>
            <div><dt>Quote/custom requests</dt><dd>${Number(conversions.quoteSubmissions || 0)}</dd></div>
            <div><dt>Appointment requests</dt><dd>${Number(conversions.appointmentRequests || 0)}</dd></div>
            <div><dt>Checkout starts</dt><dd>${Number(conversions.checkoutStarts || 0)}</dd></div>
            <div><dt>Completed purchases</dt><dd>${Number(conversions.purchases || 0)}</dd></div>
            <div><dt>Organic search clicks (28 days)</dt><dd>${search.clicks === undefined ? "API not connected" : Number(search.clicks)}</dd></div>
            <div><dt>Search impressions (28 days)</dt><dd>${search.impressions === undefined ? "API not connected" : Number(search.impressions)}</dd></div>
            <div><dt>Average search position</dt><dd>${search.position === undefined ? "API not connected" : Number(search.position).toFixed(1)}</dd></div>
            <div><dt>GA4 sessions (28 days)</dt><dd>${ga.current ? Number(ga.current.sessions || 0) : "API not connected"}</dd></div>
            <div><dt>Session change vs prior 28 days</dt><dd>${ga.current ? change(Number(ga.current.sessions || 0), Number(ga.previous?.sessions || 0)) : "API not connected"}</dd></div>
            <div><dt>GA4 key events (28 days)</dt><dd>${ga.current ? Number(ga.current.keyEvents || 0) : "API not connected"}</dd></div>
          </dl>
          ${Array.isArray(search.topQueries) && search.topQueries.length ? `<div class="admin-query-list"><strong>Top Search Queries</strong>${search.topQueries.map((row) => `<p>${htmlSafe(row.key)}: ${Number(row.clicks)} clicks, ${Number(row.impressions)} impressions, position ${Number(row.position).toFixed(1)}</p>`).join("")}</div>` : ""}
          <div class="builder-actions"><a class="button button-light" href="${payload.sitemapUrl}" target="_blank" rel="noopener">Open Sitemap</a><a class="button button-light" href="${payload.robotsUrl}" target="_blank" rel="noopener">Open Robots</a></div>
        </article>`;
    } catch (error) {
      host.innerHTML = `<div class="empty-state">${htmlSafe(error.message || "Could not load SEO status.")}</div>`;
    }
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
  document.getElementById("refresh-site-system-status").addEventListener("click", renderSiteSystemStatus);
  document.getElementById("refresh-lead-recovery").addEventListener("click", renderLeadRecovery);
  document.getElementById("refresh-seo-dashboard").addEventListener("click", renderSeoDashboard);
  document.getElementById("admin-lead-recovery-list").addEventListener("click", async (event) => {
    const button = event.target.closest("[data-retry-lead]");
    if (!button) return;
    const key = adminLeadKey();
    if (!key) {
      window.alert("Enter the admin recovery key first.");
      return;
    }
    button.disabled = true;
    button.textContent = "Retrying...";
    try {
      const response = await fetchWithTimeout("/api/admin/lead-recovery", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-admin-key": key },
        body: JSON.stringify({ leadId: button.dataset.retryLead }),
      }, 30000);
      const payload = await response.json();
      if (!response.ok || !payload.ok) throw new Error(payload.message || "Retry failed.");
      await renderLeadRecovery();
    } catch (error) {
      window.alert(error.message || "Retry failed.");
    } finally {
      button.disabled = false;
      button.textContent = "Retry Email";
    }
  });
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
  renderSiteSystemStatus();
  renderLeadRecovery();
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

async function verifyAndTrackPurchase() {
  const sessionId = new URLSearchParams(location.hash.split("?")[1] || "").get("session_id");
  if (!sessionId) return;
  const dedupeKey = `donGa4Purchase:${sessionId}`;
  if (sessionStorage.getItem(dedupeKey)) return;
  try {
    const response = await fetchWithTimeout(`/api/checkout-session-status?session_id=${encodeURIComponent(sessionId)}`, { headers: { Accept: "application/json" } }, 10000);
    const purchase = await response.json();
    if (!response.ok || !purchase.paid) return;
    trackEvent("purchase", {
      transaction_id: purchase.transactionId,
      value: Number(purchase.value || 0),
      tax: Number(purchase.tax || 0),
      shipping: Number(purchase.shipping || 0),
      currency: String(purchase.currency || "USD").toUpperCase(),
      coupon: purchase.coupon || "",
      items: commerceItems(purchase.items),
    });
    sessionStorage.setItem(dedupeKey, new Date().toISOString());
  } catch (error) {
    console.warn("Purchase analytics verification failed", { message: error?.message || String(error) });
  }
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
  if (success) verifyAndTrackPurchase();
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
  const hashPath = location.hash && location.hash.startsWith("#/") ? location.hash.slice(2) : "";
  const browserPath = `${location.pathname.replace(/^\/+/, "")}${location.search || ""}`;
  const routeSource = hashPath || browserPath || "";
  const [path, query = ""] = routeSource.split("?");
  const parts = path.split("/");
  const params = new URLSearchParams(query);
  if (path === "" || path === "/" || path === "index.html") return home();
  if (path === "search") return searchPage(params);
  if (path === "blog") return blogIndex();
  if (parts[0] === "blog") return blogArticlePage(parts[1]);
  if (path === "ring-size-guide") return ringSizeGuidePage();
  if (path === "diamond-shape-guide") return diamondShapeGuidePage();
  if (path === "lab-diamonds-vs-natural-diamonds") return labNaturalComparisonPage();
  if (path === "diamond-education") return educationResourcePage("diamond-education", "diamond-education");
  if (parts[0] === "education") return educationResourcePage(parts[1]);
  if (parts[0] === "faq") return faqDetailPage(parts[1]);
  if (servicePages.some(([slug]) => slug === path)) return servicePage(path);
  if (path === "build-engagement-ring") return customRingDesignPage();
  if (path === "start-custom-ring-design") return customRingDesignPage();
  if (path === "select-diamond") return diamondInventoryPage(params);
  if (path === "products" && params.get("q")) return searchPage(params);
  if (path === "products") return databaseCategoryPage("all", "All Luxury Jewelry");
  if (parts[0] === "products" && parts[1]) return productDetailFromCleanSlug(parts[1]);
  if (parts[0] === "engagement-rings" && parts[1]) return productDetailFromCleanSlug(parts[1]);
  if (parts[0] === "diamonds" && parts[1] === "lab-grown" && parts[2]) return productDetailFromCleanSlug(parts[2]);
  if (parts[0] === "diamonds" && parts[1]) return diamondInventoryPage(new URLSearchParams({ search: decodeURIComponent(parts[1]) }));
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
  clientNotFoundPage();
}

function scrollRouteToTop() {
  requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }));
}

function navigate() {
  router();
  trackPageView();
  const path = currentRoutePath();
  if ((path === "/start-custom-ring-design" || path === "/build-engagement-ring") && sessionStorage.getItem(`tracked:${path}`) !== "1") {
    sessionStorage.setItem(`tracked:${path}`, "1");
    trackEvent("ring_builder_start", { builder_path: path });
  }
  scrollRouteToTop();
}

function clientNotFoundPage() {
  const existingRobots = document.querySelector('meta[name="robots"]')?.content || "";
  if (/noindex/i.test(existingRobots) && document.querySelector("h1")?.textContent === "Page not found") return;
  setSeo(`Page Not Found | ${businessName}`, "The requested page could not be found.", { path: currentRoutePath() });
  upsertMeta('meta[name="robots"]', "name", "robots", "noindex,follow");
  shell(`
    <main>
      ${pageHero("404", "Page not found", "The page may have moved or the address may be incorrect.", `<div class="hero-actions"><a class="button button-gold" href="/products">Browse Jewelry</a><a class="button button-dark" href="/start-custom-ring-design">Start Custom Ring Design</a><a class="button button-light" href="/">Return Home</a></div>`)}
    </main>
  `);
}

window.addEventListener("hashchange", navigate);
window.addEventListener("popstate", navigate);
document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href]");
  if (!link) return;
  const href = link.getAttribute("href") || "";
  if (link.dataset.hardNavigation === "true") return;
  if (href.startsWith("tel:")) trackEvent("phone_click", { link_location: currentRoutePath() });
  if (href.startsWith("mailto:")) trackEvent("email_click", { link_location: currentRoutePath() });
  if (/instagram\.com|facebook\.com|share\.google/i.test(href)) trackEvent("social_click", { social_network: /instagram/i.test(href) ? "instagram" : /facebook/i.test(href) ? "facebook" : "google_business_profile" });
  if (/financ|klarna|affirm|afterpay|acima/i.test(href + " " + (link.textContent || ""))) trackEvent("financing_option_click", { option_name: (link.textContent || "financing").trim().slice(0, 60) });
  if (!href.startsWith("/") || link.target || link.hasAttribute("download")) return;
  const url = new URL(href, location.origin);
  if (url.origin !== location.origin) return;
  event.preventDefault();
  history.pushState({}, "", `${url.pathname}${url.search}${url.hash}`);
  navigate();
});
loadAnalyticsConfig();
loadApprovedProducts().finally(() => {
  navigate();
  hideSplashScreen();
});

