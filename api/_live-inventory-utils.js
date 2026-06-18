const CACHE_TTL_MS = 15 * 60 * 1000;
const JEWELRY_MARKUP = 1.35;
const DEFAULT_JEWELRY_URL = "https://lgdusallc.com/developer-api/jewelry?type=all";
const DEFAULT_MATCHING_PAIR_URL = "https://lgdusallc.com/developer-api/diamond?type=matching_pair";
const DEFAULT_COLOR_PAIR_URL = "https://lgdusallc.com/developer-api/diamond?type=matching_pair_color";

const cache = {
  jewelry: { items: [], fetchedAt: 0 },
  "matching-pair": { items: [], fetchedAt: 0 },
  "matching-pair-color": { items: [], fetchedAt: 0 },
};

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate=900");
  res.end(JSON.stringify(payload));
}

function cleanBaseUrl(value) {
  const url = new URL(String(value || "").trim());
  url.searchParams.delete("page");
  url.searchParams.delete("key");
  return url.toString();
}

function feedUrl(feed, page) {
  if (!process.env.LGD_API_KEY) throw new Error("Missing server environment variable: LGD_API_KEY");
  const configured = feed === "jewelry"
    ? process.env.LGD_JEWELRY_URL || DEFAULT_JEWELRY_URL
    : feed === "matching-pair-color"
      ? process.env.LGD_MATCHING_PAIR_COLOR_URL || DEFAULT_COLOR_PAIR_URL
      : process.env.LGD_MATCHING_PAIR_URL || DEFAULT_MATCHING_PAIR_URL;
  const url = new URL(cleanBaseUrl(configured));
  url.searchParams.set("page", String(page));
  url.searchParams.set("key", process.env.LGD_API_KEY);
  return url.toString();
}

function rowsFrom(payload) {
  if (Array.isArray(payload)) return payload;
  for (const key of ["data", "items", "results", "Stock", "stock"]) {
    if (Array.isArray(payload?.[key])) return payload[key];
  }
  return [];
}

function titleCase(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
    .trim();
}

function retailPrice(value) {
  const price = Number(value);
  return Number.isFinite(price) && price > 0 ? Math.round(price * JEWELRY_MARKUP * 100) / 100 : null;
}

function metalName(value) {
  const code = String(value || "").trim().toUpperCase();
  const map = {
    "10KW": "10K White Gold",
    "10KY": "10K Yellow Gold",
    "10KR": "10K Rose Gold",
    "14KW": "14K White Gold",
    "14KY": "14K Yellow Gold",
    "14KR": "14K Rose Gold",
    "18KW": "18K White Gold",
    "18KY": "18K Yellow Gold",
    "18KR": "18K Rose Gold",
    PT: "Platinum",
  };
  return map[code] || titleCase(code);
}

function jewelryCategory(raw) {
  const category = String(raw.Category || "").trim().toUpperCase();
  const details = `${raw.Jewelry_Type || ""} ${raw.Remarks || ""}`.toUpperCase();
  if (/ANKLET/.test(`${category} ${details}`)) return "Anklets";
  if (/CHAIN/.test(`${category} ${details}`)) return "Chains";
  if (/PENDANT|CHARM/.test(category)) return "Pendants / Charms";
  if (/BRACELET|BANGLE/.test(category)) return "Bracelets";
  if (/NECKLACE/.test(category)) return "Necklaces";
  if (/EARRING/.test(category)) {
    if (/STUD/.test(details) && !/PINK|BLUE|YELLOW|GREEN|CHAMPAGNE/.test(details)) return "Men's Earrings";
    return "Women's Earrings";
  }
  if (/RING|BAND/.test(category)) {
    if (/\bMEN'?S?\b|GENT|MENS/.test(details)) return /WEDDING|BAND/.test(details) ? "Wedding Bands" : "Men's Rings";
    if (/WEDDING/.test(details)) return "Wedding Bands";
    if (/ETERNITY|BAND/.test(details)) return "Women's Rings";
    return "Women's Rings";
  }
  return titleCase(category || "Custom Jewelry");
}

function jewelryName(raw) {
  const type = titleCase(raw.Jewelry_Type || "Diamond");
  const shape = titleCase(raw.Shape);
  const category = String(raw.Category || "").trim().toUpperCase();
  const noun = category === "RINGS"
    ? "Ring"
    : category === "EARRINGS"
      ? "Earrings"
      : category === "BRACELETS"
        ? "Bracelet"
        : category === "NECKLACES"
          ? "Necklace"
          : category === "PENDANTS"
            ? "Pendant"
            : "Jewelry";
  return [...new Set([shape, type, noun].filter(Boolean))].join(" ");
}

function normalizeJewelry(raw) {
  const stockNumber = String(raw.Stock_No || raw.Stock || raw.id || "").trim();
  const price = retailPrice(raw.Price);
  return {
    id: `lgd-jewelry-${stockNumber}`,
    stockNumber,
    category: jewelryCategory(raw),
    name: jewelryName(raw),
    price,
    priceLabel: price ? `Live price $${price.toLocaleString("en-US", { maximumFractionDigits: 2 })}` : "Request Pricing",
    imageUrl: String(raw.Image_1 || "").trim(),
    gallery: [raw.Image_2].filter(Boolean),
    videoUrl: String(raw.Video_1 || "").trim(),
    jewelryType: titleCase(raw.Jewelry_Type),
    metal: metalName(raw.Metal_Type),
    shape: titleCase(raw.Shape),
    color: String(raw.Color || "").trim(),
    clarity: String(raw.Clarity || "").trim(),
    diamondPieces: Number(raw.Dia_Pcs) || "",
    diamondWeight: Number(raw.Dia_Wt) || "",
    grossWeight: Number(raw.Gross_Wt) || "",
    size: String(raw.Size || "").trim(),
    availability: Number(raw.Inhand_Pcs) > 0 ? "Available" : Number(raw.Memo_Out) > 0 ? "On memo" : "Check availability",
    growthMethod: "CVD",
    remarks: String(raw.Remarks || "").trim(),
    liveVendorInventory: true,
  };
}

function normalizePair(raw, colorPair) {
  const stockNumber = String(raw.Stock_No || raw.Stock || raw.id || "").trim();
  return {
    id: `lgd-${colorPair ? "color-" : ""}pair-${stockNumber}`,
    stockNumber,
    availability: String(raw.Availability || "Check availability").trim(),
    shape: titleCase(raw.Shape),
    carat: Number(raw.Weight) || "",
    color: String(raw.Color || "").trim(),
    clarity: String(raw.Clarity || "").trim(),
    measurements: String(raw.Measurements || "").trim(),
    lab: String(raw.Lab || "").trim(),
    certificate: String(raw.Certificate || "").trim(),
    imageUrl: String(raw.ImageLink || "").trim(),
    videoUrl: String(raw.Video_HTML || raw.VideoLink || "").trim(),
    reportUrl: String(raw.CertificateLink || "").trim(),
    growthMethod: "CVD",
    diamondType: colorPair ? "CVD Color Matching Pair" : "CVD White Matching Pair",
    pairType: colorPair ? "color" : "white",
    price: "",
  };
}

async function fetchVendor(feed, page = 1) {
  const response = await fetch(feedUrl(feed, page), { headers: { Accept: "application/json" } });
  const text = await response.text();
  let payload;
  try {
    payload = JSON.parse(text);
  } catch {
    throw new Error(`LGD ${feed} feed returned a non-JSON response.`);
  }
  if (!response.ok) throw new Error(payload?.message || `LGD ${feed} feed failed with status ${response.status}.`);
  const rows = rowsFrom(payload);
  if (!rows.length) throw new Error(payload?.message || `LGD ${feed} feed returned no inventory rows.`);
  const items = feed === "jewelry"
    ? rows
      .filter((raw) => /^CVD$/i.test(String(raw.Growth_Type || "").trim()) && Number(raw.Price) > 0)
      .map(normalizeJewelry)
    : rows
      .filter((raw) => /^CVD$/i.test(String(raw.Brand || raw.Growth_Type || "").trim()))
      .map((raw) => normalizePair(raw, feed === "matching-pair-color"));
  return { items, vendorTotal: Number(payload?.total_results) || rows.length };
}

async function inventory(feed) {
  const stored = cache[feed];
  if (stored.items.length && Date.now() - stored.fetchedAt < CACHE_TTL_MS) return { ...stored, cached: true };
  try {
    const result = await fetchVendor(feed, 1);
    cache[feed] = { items: result.items, fetchedAt: Date.now(), vendorTotal: result.vendorTotal };
    return { ...cache[feed], cached: false };
  } catch (error) {
    if (stored.items.length) return { ...stored, cached: true, stale: true, error: error.message };
    throw error;
  }
}

function paginate(items, page, limit) {
  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const safePage = Math.min(Math.max(1, page), totalPages);
  return {
    items: items.slice((safePage - 1) * limit, safePage * limit),
    page: safePage,
    limit,
    total,
    totalPages,
  };
}

function queryItems(items, params, feed) {
  const category = String(params.get("category") || "").trim().toLowerCase();
  const shape = String(params.get("shape") || "").trim().toLowerCase();
  const color = String(params.get("color") || "").trim().toLowerCase();
  const search = String(params.get("search") || "").trim().toLowerCase();
  const stock = String(params.get("stock") || "").trim().toLowerCase();
  return items.filter((item) => {
    if (category && String(item.category || "").toLowerCase() !== category) return false;
    if (shape && String(item.shape || "").toLowerCase() !== shape) return false;
    if (color && String(item.color || "").toLowerCase() !== color) return false;
    if (stock && String(item.stockNumber || "").toLowerCase() !== stock) return false;
    if (search) {
      const haystack = Object.values(item).filter((value) => typeof value === "string" || typeof value === "number").join(" ").toLowerCase();
      if (!haystack.includes(search)) return false;
    }
    if (feed !== "jewelry") {
      const minCarat = Number(params.get("minCarat")) || 0;
      const maxCarat = Number(params.get("maxCarat")) || Infinity;
      if (Number(item.carat) < minCarat || Number(item.carat) > maxCarat) return false;
    }
    return true;
  });
}

function routeInventory(feed) {
  return async function handler(req, res) {
    try {
      const params = new URL(req.url, "http://localhost").searchParams;
      const page = Math.max(1, Number(params.get("page")) || 1);
      const limit = Math.min(48, Math.max(1, Number(params.get("limit")) || 24));
      const result = await inventory(feed);
      const filtered = queryItems(result.items, params, feed);
      const paged = paginate(filtered, page, limit);
      sendJson(res, 200, {
        ok: true,
        feed,
        cached: result.cached,
        stale: result.stale || false,
        ...paged,
        items: paged.items,
        message: "",
      });
    } catch (error) {
      sendJson(res, 200, {
        ok: false,
        feed,
        items: [],
        page: 1,
        total: 0,
        totalPages: 1,
        message: "Live inventory is being updated. Contact us for current sourcing options.",
        error: error?.message || "Live inventory unavailable.",
      });
    }
  };
}

module.exports = {
  JEWELRY_MARKUP,
  fetchVendor,
  routeInventory,
};
