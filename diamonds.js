const LGD_BASE_URL = "https://lgdusallc.com/developer-api";
const CACHE_TTL_MS = 15 * 60 * 1000;
const FALLBACK_MESSAGE = "Live diamond inventory is being updated. Contact us for real-time diamond options.";
const FEEDS = ["certified", "certified_color"];

let cache = {
  diamonds: [],
  fetchedAt: 0,
  error: "",
};

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate=900");
  res.end(JSON.stringify(payload));
}

function firstValue(source, names) {
  const lookup = {};
  for (const [key, value] of Object.entries(source || {})) {
    lookup[key.replace(/[^a-z0-9]/gi, "").toLowerCase()] = value;
  }
  for (const name of names) {
    if (source && source[name] !== undefined && source[name] !== null && source[name] !== "") return source[name];
    const normalized = name.replace(/[^a-z0-9]/gi, "").toLowerCase();
    if (lookup[normalized] !== undefined && lookup[normalized] !== null && lookup[normalized] !== "") return lookup[normalized];
  }
  return "";
}

function collectUrls(value, urls = []) {
  if (value === null || value === undefined) return urls;
  if (typeof value === "string") {
    urls.push(...(value.match(/https?:\/\/[^\s"'<>]+/gi) || []).map((url) => url.replace(/[),.;]+$/g, "")));
    return urls;
  }
  if (Array.isArray(value)) {
    value.forEach((item) => collectUrls(item, urls));
    return urls;
  }
  if (typeof value === "object") Object.values(value).forEach((item) => collectUrls(item, urls));
  return urls;
}

function firstUrl(source, names) {
  const value = firstValue(source, names);
  if (Array.isArray(value)) return value.find((item) => typeof item === "string" && /^https?:\/\//i.test(item)) || "";
  if (value && typeof value === "object") return firstUrl(value, Object.keys(value));
  const url = String(value || "").trim();
  return /^https?:\/\//i.test(url) ? url : "";
}

function uniqueUrls(urls) {
  return [...new Set(urls.filter((url) => /^https?:\/\//i.test(url)))];
}

function reportUrlFromNumber(reportNumber) {
  const clean = String(reportNumber || "").trim();
  if (!clean) return "";
  const reportId = /^LG/i.test(clean) ? clean : `LG${clean}`;
  return `https://www.igi.org/verify-your-report/?r=${encodeURIComponent(reportId)}`;
}

function vendorAssetUrl(stockNumber, file) {
  const clean = String(stockNumber || "").trim();
  return clean ? `https://dna3.dnalinks.in/${encodeURIComponent(clean)}/${file}` : "";
}

function reportNumberFromUrl(url) {
  const match = String(url || "").match(/(?:^|[^\dA-Z])(LG\d{5,}|[A-Z]{1,5}\d{5,}|\d{6,})(?:[^\dA-Z]|$)/i);
  return match ? match[1].toUpperCase() : "";
}

function extractRows(payload) {
  if (Array.isArray(payload)) return payload;
  const keys = ["Stock", "stock", "data", "diamonds", "results", "items", "inventory", "records", "rows"];
  for (const key of keys) {
    if (Array.isArray(payload?.[key])) return payload[key];
    if (Array.isArray(payload?.[key]?.data)) return payload[key].data;
  }
  return [];
}

function normalizeDiamond(raw, index, feedType) {
  const urls = uniqueUrls(collectUrls(raw));
  const stockNumber = String(firstValue(raw, ["stockNumber", "stock_number", "stock", "stockId", "stock_id", "sku", "lot", "lotNo", "stoneNo", "stone_no", "stoneId", "stone_id", "id", "diamondId", "diamond_id", "Stone ID", "StoneID", "Stone No", "Stone_No", "Stock #", "Stock No", "Stock_No"]) || `${feedType}-${index + 1}`).trim();
  const firstReportNumber = String(firstValue(raw, ["reportNumber", "report_number", "certificateNumber", "certificate_number", "certificateNo", "certificate_no", "certNumber", "cert_number", "certNo", "cert_no", "certiNo", "certi_no", "certiNumber", "certi_number", "labReportNo", "lab_report_no", "igi_no", "igiNo", "Report No", "ReportNo", "Report No.", "Cert No", "CertNo", "Cert No.", "Certificate No", "CertificateNo", "Certificate No.", "Certi_NO", "CERTI_NO", "CERTIFICATE_NO", "REPORTNO"]) || "").trim();
  const imageUrl = firstUrl(raw, ["imageUrl", "image_url", "image", "diamondImage", "diamond_image", "imageLink", "image_link", "thumbnail", "photo", "photoUrl", "Image Link", "ImageLink", "Diamond Image"])
    || urls.find((url) => /still|image|photo|picture|jpg|jpeg|png|webp/i.test(url) && !/certificate|cert|report|pdf/i.test(url))
    || vendorAssetUrl(stockNumber, "still.jpg");
  const videoUrl = firstUrl(raw, ["videoUrl", "video_url", "video", "videoLink", "video_link", "movie", "movieUrl", "video360", "video_360", "view360", "view_360", "Video Link", "VideoLink", "Video Url", "VideoUrl", "360 View"])
    || urls.find((url) => /video|360|movie|mp4|view/i.test(url) && !/certificate|cert|report|pdf/i.test(url))
    || vendorAssetUrl(stockNumber, "video.mp4");
  const reportUrl = firstUrl(raw, ["reportUrl", "report_url", "certificateUrl", "certificate_url", "certUrl", "cert_url", "igiReport", "igi_report", "labReport", "lab_report", "Certificate Link", "CertificateLink", "Cert Link", "CertLink", "Report Link"])
    || urls.find((url) => /certificate|cert|report|igi|pdf/i.test(url))
    || reportUrlFromNumber(firstReportNumber);
  const reportNumber = firstReportNumber || reportNumberFromUrl(reportUrl);
  const lab = String(firstValue(raw, ["lab", "cert", "certificate", "lab_name", "labName", "Lab Name", "Lab"]) || (reportNumber ? "IGI" : "")).trim();
  const price = firstValue(raw, ["price", "totalPrice", "total_price", "cashPrice", "cash_price", "salePrice", "sale_price", "netPrice", "net_price", "amount", "rate", "Price", "Total Price", "Sale Price", "Net Price", "Cash Price"]);

  return {
    id: stockNumber,
    stockNumber,
    shape: String(firstValue(raw, ["shape", "diamondShape", "diamond_shape", "Shape Name", "ShapeName"]) || "").trim(),
    carat: Number(firstValue(raw, ["carat", "carats", "weight", "cts", "ct", "size", "caratWeight", "carat_weight", "Carat Wt", "CaratWt"])) || "",
    color: String(firstValue(raw, ["color", "diamondColor", "diamond_color", "fancyColor", "fancy_color", "col"]) || "").trim(),
    clarity: String(firstValue(raw, ["clarity", "diamondClarity", "diamond_clarity", "cla", "purity"]) || "").trim(),
    cut: String(firstValue(raw, ["cut", "cutGrade", "cut_grade", "make", "Cut Grade", "CutGrade"]) || "").trim(),
    polish: String(firstValue(raw, ["polish", "polishGrade", "polish_grade", "Polish"]) || "").trim(),
    symmetry: String(firstValue(raw, ["symmetry", "symmetryGrade", "symmetry_grade", "Symmetry"]) || "").trim(),
    certificate: lab,
    lab,
    reportNumber,
    price: price === "" ? "" : String(price).trim(),
    imageUrl,
    videoUrl,
    reportUrl,
    mediaUrl: imageUrl || videoUrl || "",
    mediaLinks: [
      ["View Diamond Photo", imageUrl, "image"],
      ["View Diamond Video", videoUrl, "video"],
      ["View IGI Report", reportUrl, "report"],
    ].filter(([, url]) => url).map(([label, url, type]) => ({ label, url, type })),
    diamondType: feedType === "certified_color" ? "Certified Color Diamond" : "Certified Diamond",
    feedType,
  };
}

async function fetchFeed(type, apiKey) {
  const url = new URL(`${LGD_BASE_URL}/diamond`);
  url.searchParams.set("type", type);
  url.searchParams.set("page", "1");
  url.searchParams.set("key", apiKey);

  const response = await fetch(url, { headers: { Accept: "application/json" } });
  const text = await response.text();
  let payload;
  try {
    payload = JSON.parse(text);
  } catch {
    throw new Error(`LGD ${type} feed returned a non-JSON response.`);
  }
  if (!response.ok) throw new Error(payload?.message || payload?.error || `LGD ${type} feed failed.`);
  const message = String(payload?.Message || payload?.message || "");
  const rows = extractRows(payload);
  if (/15 minute|limit|throttle|too many/i.test(message) && rows.length === 0) throw new Error(message);
  return rows.map((row, index) => normalizeDiamond(row, index, type));
}

module.exports = async function handler(req, res) {
  const apiKey = process.env.DIAMOND_API_KEY || "";
  if (!apiKey) {
    sendJson(res, 500, {
      ok: false,
      diamonds: [],
      count: 0,
      error: "Diamond API key is not configured. Add DIAMOND_API_KEY in Vercel environment variables.",
      message: FALLBACK_MESSAGE,
    });
    return;
  }

  const now = Date.now();
  if (cache.diamonds.length && now - cache.fetchedAt < CACHE_TTL_MS) {
    sendJson(res, 200, {
      ok: true,
      cached: true,
      count: cache.diamonds.length,
      diamonds: cache.diamonds,
      fetchedAt: new Date(cache.fetchedAt).toISOString(),
      message: "",
    });
    return;
  }

  try {
    const results = await Promise.allSettled(FEEDS.map((type) => fetchFeed(type, apiKey)));
    const diamonds = results.flatMap((result) => result.status === "fulfilled" ? result.value : []);
    const errors = results.filter((result) => result.status === "rejected").map((result) => result.reason?.message || "LGD feed unavailable");

    if (!diamonds.length) {
      if (cache.diamonds.length) {
        sendJson(res, 200, {
          ok: true,
          cached: true,
          stale: true,
          count: cache.diamonds.length,
          diamonds: cache.diamonds,
          fetchedAt: new Date(cache.fetchedAt).toISOString(),
          message: FALLBACK_MESSAGE,
          error: errors.join(" | ") || FALLBACK_MESSAGE,
        });
        return;
      }
      sendJson(res, 200, { ok: false, cached: false, count: 0, diamonds: [], message: FALLBACK_MESSAGE, error: errors.join(" | ") || FALLBACK_MESSAGE });
      return;
    }

    cache = { diamonds, fetchedAt: Date.now(), error: errors.join(" | ") };
    sendJson(res, 200, {
      ok: true,
      cached: false,
      count: diamonds.length,
      diamonds,
      fetchedAt: new Date(cache.fetchedAt).toISOString(),
      message: errors.length ? FALLBACK_MESSAGE : "",
      error: cache.error,
    });
  } catch (error) {
    if (cache.diamonds.length) {
      sendJson(res, 200, {
        ok: true,
        cached: true,
        stale: true,
        count: cache.diamonds.length,
        diamonds: cache.diamonds,
        fetchedAt: new Date(cache.fetchedAt).toISOString(),
        message: FALLBACK_MESSAGE,
        error: error?.message || FALLBACK_MESSAGE,
      });
      return;
    }
    sendJson(res, 200, { ok: false, cached: false, count: 0, diamonds: [], message: FALLBACK_MESSAGE, error: error?.message || FALLBACK_MESSAGE });
  }
};
