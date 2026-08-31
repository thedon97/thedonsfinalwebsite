const Stripe = require("stripe");
const { readJson, sendJson } = require("./_http");
const { getProduct } = require("./_product-store");
const { fetchFeed } = require("./_diamond-utils");
const { fetchVendor } = require("./_live-inventory-utils");
const { getInventoryCache, setInventoryCache } = require("./_inventory-cache");
const { configured: leadDatabaseConfigured, createLead, updateLeadCheckout } = require("./_lead-store");
const { processFallbackEmails, processLeadEmails } = require("./send-request")._test;

const STRIPE_PAYMENT_LINK = process.env.STRIPE_PAYMENT_LINK || "https://buy.stripe.com/14A5kEeX9aYgfrKfCw5kk00";
const PROMOTION_CODE = "THEDON15";
const PROMOTION_COUPON_ID = "the-don-15-percent";

function stripeClient() {
  if (!process.env.STRIPE_SECRET_KEY) throw new Error("Missing server environment variable: STRIPE_SECRET_KEY");
  return new Stripe(process.env.STRIPE_SECRET_KEY);
}

async function ensurePromotionCode(stripe) {
  const existing = await stripe.promotionCodes.list({ code: PROMOTION_CODE, active: true, limit: 1 });
  if (existing.data?.length) return existing.data[0];
  let coupon;
  try {
    coupon = await stripe.coupons.retrieve(PROMOTION_COUPON_ID);
  } catch (error) {
    if (error?.statusCode !== 404 && error?.code !== "resource_missing") throw error;
    coupon = await stripe.coupons.create({ id: PROMOTION_COUPON_ID, name: "The Don 15% Off", percent_off: 15, duration: "once", metadata: { website_promotion: PROMOTION_CODE } });
  }
  try {
    return await stripe.promotionCodes.create({ code: PROMOTION_CODE, promotion: { type: "coupon", coupon: coupon.id }, metadata: { website_promotion: PROMOTION_CODE } });
  } catch (error) {
    if (!/promotion/i.test(String(error?.message || ""))) throw error;
    return stripe.promotionCodes.create({ code: PROMOTION_CODE, coupon: coupon.id, metadata: { website_promotion: PROMOTION_CODE } });
  }
}

function numericPrice(value) {
  const number = Number(String(value || "").replace(/[^0-9.]/g, ""));
  return Number.isFinite(number) && number > 0 ? number : 0;
}

function safeMetadataValue(value, max = 450) {
  return String(value == null ? "" : value).slice(0, max);
}

function readableSelections(selections = {}) {
  if (!selections || typeof selections !== "object") return "";
  return Object.entries(selections)
    .filter(([, value]) => value !== undefined && value !== null && String(value).trim() !== "")
    .map(([key, value]) => `${key}: ${value}`)
    .join(" | ");
}

function manualSelectedPrice(product, selections = {}) {
  const metadata = product.metadata || product;
  for (const [label, values] of metadata.fields || []) {
    const allowed = values.map((value) => Array.isArray(value) ? value[0] : value);
    if (selections[label] != null && !allowed.includes(selections[label])) {
      throw new Error(`Invalid ${label} selection.`);
    }
  }
  if (/natural/i.test(String(selections["Diamond Type"] || ""))) {
    throw new Error("Natural diamonds require a confirmed quote before payment.");
  }
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
      product_name: safeMetadataValue(product.name),
      product_source: product.source,
      category: product.category,
      selected_options: safeMetadataValue(readableSelections(body.selections || {})),
      selections: safeMetadataValue(JSON.stringify(body.selections || {})),
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
      product_name: safeMetadataValue(`${diamond.shape || "CVD"} ${diamond.carat ? `${diamond.carat}ct ` : ""}${diamondType}`),
      diamond_id: String(diamond.id || ""),
      stock_number: String(diamond.stockNumber || ""),
      diamond_type: diamondType,
      report_number: String(diamond.reportNumber || diamond.certificate || ""),
      selected_options: safeMetadataValue([
        diamond.shape ? `Shape: ${diamond.shape}` : "",
        diamond.carat ? `Carat: ${diamond.carat}` : "",
        diamond.color ? `Color: ${diamond.color}` : "",
        diamond.clarity ? `Clarity: ${diamond.clarity}` : "",
        diamond.cut ? `Cut: ${diamond.cut}` : "",
        diamond.stockNumber ? `Stock Number: ${diamond.stockNumber}` : "",
        diamond.reportNumber || diamond.certificate ? `Report: ${diamond.reportNumber || diamond.certificate}` : "",
      ].filter(Boolean).join(" | ")),
    },
  };
}

async function checkoutLines(body) {
  if (body.kind !== "cart") return [{ ...(await savedProductLine(body)), quantity: 1 }];
  if (!Array.isArray(body.items) || !body.items.length || body.items.length > 20) {
    throw new Error("A valid cart is required.");
  }
  return Promise.all(body.items.map(async (item) => ({
    ...(await savedProductLine({ productId: item.productId, selections: item.selections || {} })),
    quantity: Math.max(1, Math.min(10, Math.floor(Number(item.quantity) || 1))),
  })));
}

function checkoutLeadPayload({ body, line, session, origin }) {
  const hasSession = Boolean(session?.id);
  return {
    type: hasSession ? "Stripe checkout session created" : "Stripe checkout session starting",
    source: `${origin}/api/create-checkout-session`,
    customer: {},
    jewelry: {
      requestType: "Stripe checkout started",
      productName: line.name,
      productCategory: line.metadata?.category || line.metadata?.product_source || "Checkout",
      budget: `$${Math.round(line.unitAmount / 100).toLocaleString("en-US")}`,
      selectedOptions: line.metadata?.selected_options || line.metadata?.selections || "",
      notes: `Customer opened a Stripe Checkout session. Kind: ${body.kind || "saved-product"}. Customer contact and address are collected by Stripe on the checkout page and sent after payment completion.`,
    },
    checkout: {
      event: hasSession ? "checkout.session.created" : "checkout.session.starting",
      status: hasSession ? "created" : "starting",
      provider: "Stripe Checkout",
      sessionId: session?.id || "",
      url: session?.url || "",
      amountTotal: line.unitAmount,
      currency: "usd",
      metadata: line.metadata,
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
    const lines = body.kind === "live-diamond"
      ? [{ ...(await liveDiamondLine(body)), quantity: 1 }]
      : await checkoutLines(body);
    const line = {
      ...lines[0],
      name: lines.length === 1 ? lines[0].name : `${lines.length} jewelry items`,
      unitAmount: lines.reduce((total, item) => total + item.unitAmount * item.quantity, 0),
    };
    const origin = process.env.SITE_URL || `https://${req.headers?.host || "www.thedonjewelersandjewelrynyc.com"}`;
    const startingPayload = checkoutLeadPayload({ body, line, session: null, origin });
    let lead = null;
    if (leadDatabaseConfigured()) {
      try {
        lead = await createLead(startingPayload);
      } catch (leadError) {
        console.warn("Checkout lead creation failed; continuing without database lead recovery:", leadError?.message || leadError);
      }
    }
    if (!process.env.STRIPE_SECRET_KEY) {
      const fallbackPayload = {
        ...startingPayload,
        checkout: {
          ...startingPayload.checkout,
          event: "stripe.payment_link_fallback",
          status: "payment_link_opened",
          url: STRIPE_PAYMENT_LINK,
        },
      };
      if (lead) {
        try {
          const updatedLead = await updateLeadCheckout(lead.id, fallbackPayload.checkout, {
            checkout: fallbackPayload.checkout,
            checkoutSessionCreatedAt: new Date().toISOString(),
          });
          await processLeadEmails(updatedLead, fallbackPayload);
          sendJson(res, 200, { ok: true, url: STRIPE_PAYMENT_LINK, leadId: updatedLead.publicId, fallback: true });
          return;
        } catch (leadError) {
          console.warn("Lead database failed after checkout started; continuing with email fallback:", leadError?.message || leadError);
        }
      }
      await processFallbackEmails(fallbackPayload);
      sendJson(res, 200, {
        ok: true,
        url: STRIPE_PAYMENT_LINK,
        fallback: true,
        leadWarning: "Stripe secret is not configured; opened payment link and sent checkout email notification.",
      });
      return;
    }
    const stripe = stripeClient();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      ui_mode: "embedded_page",
      line_items: lines.map((item) => ({
        quantity: item.quantity,
        price_data: {
          currency: "usd",
          unit_amount: item.unitAmount,
          product_data: {
            name: item.name,
            metadata: item.metadata,
            ...((item.imageUrl || "") ? {
              images: [/^https:\/\//i.test(item.imageUrl) ? item.imageUrl : `${origin}${item.imageUrl.startsWith("/") ? "" : "/"}${item.imageUrl}`],
            } : {}),
          },
        },
      })),
      metadata: line.metadata,
      billing_address_collection: "required",
      shipping_address_collection: { allowed_countries: ["US"] },
      phone_number_collection: { enabled: true },
      custom_fields: [
        {
          key: "first_name",
          label: { type: "custom", custom: "First name" },
          type: "text",
          optional: false,
        },
        {
          key: "last_name",
          label: { type: "custom", custom: "Last name" },
          type: "text",
          optional: false,
        },
        {
          key: "offer_code",
          label: { type: "custom", custom: "Promo code or first-purchase offer" },
          type: "text",
          optional: true,
        },
      ],
      custom_text: {
        submit: {
          message: "Promo codes do not change the checkout total automatically. After purchase, someone from our team will contact you to verify the purchase and first-time customer eligibility for either the $500 credit or 15% offer. Offers cannot be combined.",
        },
      },
      return_url: `${origin}/#/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
    });
    const payload = checkoutLeadPayload({ body, line, session, origin });
    if (lead) {
      try {
        const updatedLead = await updateLeadCheckout(lead.id, payload.checkout, {
          checkout: payload.checkout,
          checkoutSessionCreatedAt: new Date().toISOString(),
        });
        await processLeadEmails(updatedLead, payload);
        sendJson(res, 200, { ok: true, clientSecret: session.client_secret, leadId: updatedLead.publicId });
        return;
      } catch (leadError) {
        console.warn("Checkout lead update failed; returning Stripe session without database recovery:", leadError?.message || leadError);
      }
    }
    let notificationWarning = "";
    try {
      await processFallbackEmails(payload);
    } catch (notificationError) {
      notificationWarning = " Checkout notification could not be sent automatically; Stripe still collected the customer and order details.";
      console.warn("Checkout fallback notification failed; returning Stripe session:", notificationError?.message || notificationError);
    }
    sendJson(res, 200, {
      ok: true,
      clientSecret: session.client_secret,
      leadWarning: `Checkout continued without database lead recovery.${notificationWarning}`,
    });
  } catch (error) {
    console.error("Checkout session creation failed:", error?.message || error);
    sendJson(res, 400, { ok: false, message: error.message || "Checkout could not be started." });
  }
};

module.exports._test = { ensurePromotionCode, PROMOTION_CODE, PROMOTION_COUPON_ID };
