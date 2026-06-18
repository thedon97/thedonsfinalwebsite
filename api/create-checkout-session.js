const Stripe = require("stripe");
const { readJson, sendJson } = require("./_http");
const { getProduct } = require("./_product-store");
const { fetchFeed } = require("./_diamond-utils");
const { fetchVendor } = require("./_live-inventory-utils");
const { getInventoryCache, setInventoryCache } = require("./_inventory-cache");

function stripeClient() {
  if (!process.env.STRIPE_SECRET_KEY) throw new Error("Missing server environment variable: STRIPE_SECRET_KEY");
  return new Stripe(process.env.STRIPE_SECRET_KEY);
}

function numericPrice(value) {
  const number = Number(String(value || "").replace(/[^0-9.]/g, ""));
  return Number.isFinite(number) && number > 0 ? number : 0;
}

function manualSelectedPrice(product, selections = {}) {
  const metadata = product.metadata || product;
  const estimate = Number(metadata.estimate ?? product.price ?? 0);
  if (!estimate) return product.priceCents || null;
  let price = estimate;
  for (const [label, values] of metadata.fields || []) {
    if (!Array.isArray(values) || !values.length || !values.every(Array.isArray)) continue;
    const selected = selections[label];
    const found = values.find(([name]) => name === selected);
    if (found) price = Number(found[1]) + (estimate - Number(values[0][1]));
    break;
  }
  price += Number((metadata.metalSurcharges || {})[selections.Metal] || 0);
  return Math.round(price * 100);
}

async function savedProductLine(body) {
  const product = await getProduct(body.productId);
  if (!product) throw new Error("Product not found.");
  if (!product.available || product.hidden) throw new Error("This product is currently unavailable.");
  const unitAmount = product.source === "manual"
    ? manualSelectedPrice(product, body.selections || {})
    : product.priceCents;
  if (!unitAmount) throw new Error("This product requires a custom price request.");
  return {
    unitAmount,
    name: product.name,
    imageUrl: product.imageUrl,
    metadata: {
      product_id: product.id,
      product_source: product.source,
      category: product.category,
      selections: JSON.stringify(body.selections || {}).slice(0, 450),
    },
  };
}

async function liveDiamondLine(body) {
  const diamondType = String(body.diamondType || "");
  let items = [];
  if (diamondType === "Certified Diamond" || diamondType === "Certified Color Diamond") {
    const feed = diamondType === "Certified Color Diamond" ? "certified-color" : "certified";
    const page = Math.max(1, Number(body.page) || 1);
    const cached = await getInventoryCache(`${feed}:${page}`);
    if (cached?.payload?.diamonds?.length) items = cached.payload.diamonds;
    else {
      const result = await fetchFeed(feed, page);
      items = result.diamonds;
      await setInventoryCache(`${feed}:${page}`, { diamonds: items }, 900);
    }
  } else if (diamondType === "CVD White Matching Pair" || diamondType === "CVD Color Matching Pair") {
    const feed = diamondType === "CVD Color Matching Pair" ? "matching-pair-color" : "matching-pair";
    const cached = await getInventoryCache(`${feed}:1`);
    if (cached?.payload?.items?.length) items = cached.payload.items;
    else {
      const result = await fetchVendor(feed, 1);
      items = result.items;
      await setInventoryCache(`${feed}:1`, { items, vendorTotal: result.vendorTotal }, 900);
    }
  } else {
    throw new Error("Unsupported live diamond type.");
  }
  const diamond = items.find((item) => String(item.id) === String(body.diamondId)
    || String(item.stockNumber) === String(body.stockNumber));
  if (!diamond) throw new Error("This diamond is no longer in the current active inventory.");
  if (/HPHT/i.test(JSON.stringify(diamond)) || !/CVD/i.test(`${diamond.growthMethod || "CVD"} ${diamond.diamondType || ""}`)) {
    throw new Error("Only active CVD lab-grown diamonds can be checked out.");
  }
  const price = numericPrice(diamond.price);
  if (!price) throw new Error("This diamond requires a current price request before checkout.");
  return {
    unitAmount: Math.round(price * 100),
    name: `${diamond.shape || "CVD"} ${diamond.carat ? `${diamond.carat}ct ` : ""}${diamondType}`,
    imageUrl: diamond.imageUrl,
    metadata: {
      product_source: "live-diamond",
      diamond_id: String(diamond.id || ""),
      stock_number: String(diamond.stockNumber || ""),
      diamond_type: diamondType,
      report_number: String(diamond.reportNumber || diamond.certificate || ""),
    },
  };
}

module.exports = async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      sendJson(res, 405, { ok: false, message: "Method not allowed." });
      return;
    }
    const body = await readJson(req);
    const line = body.kind === "live-diamond" ? await liveDiamondLine(body) : await savedProductLine(body);
    const origin = process.env.SITE_URL || `https://${req.headers?.host || "www.thedonjewelersandjewelrynyc.com"}`;
    const session = await stripeClient().checkout.sessions.create({
      mode: "payment",
      line_items: [{
        quantity: 1,
        price_data: {
          currency: "usd",
          unit_amount: line.unitAmount,
          product_data: {
            name: line.name,
            metadata: line.metadata,
            ...((line.imageUrl || "") ? {
              images: [/^https:\/\//i.test(line.imageUrl) ? line.imageUrl : `${origin}${line.imageUrl.startsWith("/") ? "" : "/"}${line.imageUrl}`],
            } : {}),
          },
        },
      }],
      metadata: line.metadata,
      billing_address_collection: "required",
      shipping_address_collection: { allowed_countries: ["US"] },
      success_url: `${origin}/#/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/#/checkout-cancel`,
    });
    sendJson(res, 200, { ok: true, url: session.url });
  } catch (error) {
    sendJson(res, 400, { ok: false, message: error.message || "Checkout could not be started." });
  }
};
