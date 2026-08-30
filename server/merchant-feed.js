const { listVisibleProducts, productSlug, seedManualProducts, seedSnapshotProducts, databaseConfigured } = require("./_product-store");

const SITE_URL = "https://www.thedonjewelersandjewelrynyc.com";
const BUSINESS_NAME = "The Don Jewelers & Jewelry";

function xml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function absoluteImage(value) {
  const text = String(value || "").trim();
  if (!text) return `${SITE_URL}/don-logo.jpg`;
  if (/^https?:\/\//i.test(text)) return text;
  return `${SITE_URL}/${text.replace(/^\/+/, "")}`;
}

function productUrl(product) {
  return `${SITE_URL}/products/${productSlug(product)}`;
}

function price(product) {
  const cents = Number(product.priceCents);
  if (Number.isFinite(cents) && cents > 0) return `${(cents / 100).toFixed(2)} USD`;
  const amount = Number(product.price);
  if (Number.isFinite(amount) && amount > 0) return `${amount.toFixed(2)} USD`;
  return "";
}

function description(product) {
  const specs = product.specs || {};
  const details = [
    product.description,
    specs.metal && `Metal: ${specs.metal}`,
    specs.diamondType && `Diamond type: ${specs.diamondType}`,
    specs.caratWeight && `Carat weight: ${specs.caratWeight}`,
    specs.color && `Color: ${specs.color}`,
    specs.clarity && `Clarity: ${specs.clarity}`,
    product.madeToOrder && "Made to order by The Don Jewelers & Jewelry.",
  ].filter(Boolean).join(" ");
  return details || `${product.name} from ${BUSINESS_NAME}, available for private jeweler quote, custom jewelry consultation, and insured shipping where appropriate.`;
}

async function productsForFeed() {
  if (databaseConfigured()) {
    try {
      await Promise.all([seedManualProducts(), seedSnapshotProducts()]);
    } catch (error) {
      console.warn("Product database unavailable while refreshing the merchant feed; using the local catalog.", error.message);
    }
  }
  return (await listVisibleProducts()).filter((product) => product.available !== false && !product.hidden);
}

async function xmlFeed(req, res) {
  const products = (await productsForFeed()).filter((product) => price(product)).slice(0, 4000);
  const items = products.map((product) => {
    const productPrice = price(product);
    const gallery = (Array.isArray(product.gallery) ? product.gallery : [])
      .filter(Boolean)
      .slice(0, 8)
      .map((image) => `<g:additional_image_link>${xml(absoluteImage(image))}</g:additional_image_link>`)
      .join("\n        ");
    return `
      <item>
        <g:id>${xml(product.id || product.externalId)}</g:id>
        <g:title>${xml(product.name)}</g:title>
        <g:description>${xml(description(product)).slice(0, 5000)}</g:description>
        <g:link>${xml(productUrl(product))}</g:link>
        <g:image_link>${xml(absoluteImage(product.imageUrl || product.image))}</g:image_link>
        ${gallery}
        <g:availability>${product.available === false ? "out_of_stock" : "in_stock"}</g:availability>
        ${productPrice ? `<g:price>${xml(productPrice)}</g:price>` : ""}
        <g:condition>new</g:condition>
        <g:brand>${xml(BUSINESS_NAME)}</g:brand>
        <g:google_product_category>Apparel &amp; Accessories &gt; Jewelry</g:google_product_category>
        <g:product_type>${xml(product.category || "Jewelry")}</g:product_type>
        <g:shipping_label>insured-jewelry</g:shipping_label>
        <g:custom_label_0>${product.madeToOrder || product.source === "lgd-jewelry" ? "made-to-order" : "ready-made"}</g:custom_label_0>
        <g:custom_label_1>insured-shipping</g:custom_label_1>
        <g:identifier_exists>no</g:identifier_exists>
      </item>
    `;
  }).join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>${xml(BUSINESS_NAME)} Product Feed</title>
    <link>${SITE_URL}</link>
    <description>Products from ${xml(BUSINESS_NAME)} for Google Merchant Center.</description>
    ${items}
  </channel>
</rss>
`;
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.end(body);
}

module.exports = async function handler(req, res) {
  try {
    await xmlFeed(req, res);
  } catch (error) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end(`Merchant feed unavailable: ${error.message}`);
  }
};
