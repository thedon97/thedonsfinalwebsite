const manualCatalog = require("./data/manual-products.json");
const customerCatalog = require("./data/customer-products-20260819.json");
const jewelrySnapshot = require("./data/jewelry.json");
const { databaseConfigured, query } = require("./_db");

const HIDDEN_MANUAL_IDS = new Set([
  "marquise-surround-engagement-ring",
  "marquise-diamond-surround-engagement-ring",
]);
const BRACELET_FEATURED_IDS = [
  "ever-band",
  "lgd-jewelry-TJ6417TBC",
  "lgd-jewelry-LGD3645BFC",
  "lgd-jewelry-LGD3624BFC",
  "lgd-jewelry-LGD3602BFC",
];
let manualSeedPromise;
let snapshotSeedPromise;
const LGD_RETAIL_MULTIPLIER = 1.6;

function applyRetailPricing(product) {
  if (!product || product.source !== "lgd-jewelry" || !Number(product.priceCents)) return product;
  const basePriceCents = Number(product.priceCents);
  const priceCents = Math.round(basePriceCents * LGD_RETAIL_MULTIPLIER);
  return {
    ...product,
    priceCents,
    price: priceCents / 100,
    metadata: { ...(product.metadata || {}), supplierBasePriceCents: basePriceCents, retailMarkupPercent: 60 },
  };
}

function normalizeCategory(value) {
  const text = String(value || "").trim();
  if (text === "Pendants / Charms") return "Pendants & Charms";
  return text;
}

function manualProducts() {
  return [...manualCatalog.items, ...customerCatalog.items]
    .filter((item) => !HIDDEN_MANUAL_IDS.has(item.id) && !/marquise surround/i.test(item.name))
    .map((item) => ({
      ...item,
      category: normalizeCategory(item.category),
      priceCents: Math.round(Number(item.price ?? item.estimate ?? 0) * 100) || null,
      imageUrl: item.imageUrl || (item.image ? `/${item.image}` : ""),
      availability: item.available === false ? "Unavailable" : item.madeToOrder ? "Made to order" : "Available",
    }));
}

function snapshotProducts() {
  return jewelrySnapshot.items.map((item) => ({
    id: item.id,
    externalId: item.stockNumber,
    source: "lgd-jewelry",
    name: item.name,
    category: normalizeCategory(item.category),
    priceCents: Math.round(Number(item.price || 0) * 100) || null,
    imageUrl: item.imageUrl,
    gallery: item.gallery || [],
    description: item.remarks || "",
    specs: {
      metal: item.metal,
      diamondType: "CVD Lab-Grown Diamond",
      caratWeight: item.diamondWeight,
      color: item.color,
      clarity: item.clarity,
      size: item.size,
      availability: item.availability,
      stockNumber: item.stockNumber,
      shape: item.shape,
    },
    available: !/unavailable|sold out/i.test(item.availability || ""),
    hidden: false,
    madeToOrder: false,
    metadata: item,
  }));
}

function rowToProduct(row) {
  return applyRetailPricing({
    id: row.id,
    externalId: row.external_id,
    source: row.source,
    name: row.name,
    category: row.category,
    priceCents: row.price_cents,
    price: row.price_cents ? row.price_cents / 100 : null,
    currency: row.currency,
    imageUrl: row.image_url,
    gallery: row.gallery || [],
    description: row.description || "",
    specs: row.specs || {},
    available: row.available,
    hidden: row.hidden,
    madeToOrder: row.made_to_order,
    metadata: row.metadata || {},
    availability: row.available ? (row.made_to_order ? "Made to order" : "Available") : "Unavailable",
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    sourceUpdatedAt: row.source_updated_at,
  });
}

async function seedManualProducts() {
  if (!databaseConfigured()) return { seeded: 0 };
  if (manualSeedPromise) return manualSeedPromise;
  manualSeedPromise = (async () => {
  const items = manualProducts().map((item) => ({
    ...item,
    specsJson: { fields: item.fields || [], specs: item.specs || "" },
  }));
  await query(`
    INSERT INTO products (
      id, source, name, category, price_cents, image_url, gallery, description,
      specs, available, hidden, made_to_order, metadata, updated_at
    )
    SELECT x.id, 'manual', x.name, x.category, x.price_cents, x.image_url,
      x.gallery, x.description, x.specs, x.available, FALSE, x.made_to_order,
      x.metadata, NOW()
    FROM jsonb_to_recordset($1::jsonb) AS x(
      id text, name text, category text, price_cents integer, image_url text,
      gallery jsonb, description text, specs jsonb, available boolean,
      made_to_order boolean, metadata jsonb
    )
    ON CONFLICT (id) DO UPDATE SET
      name=EXCLUDED.name, category=EXCLUDED.category, price_cents=EXCLUDED.price_cents,
      image_url=EXCLUDED.image_url, gallery=EXCLUDED.gallery, description=EXCLUDED.description,
      specs=EXCLUDED.specs, available=EXCLUDED.available, made_to_order=EXCLUDED.made_to_order,
      metadata=EXCLUDED.metadata, updated_at=NOW()
    WHERE products.source='manual'
  `, [JSON.stringify(items.map((item) => ({
    id: item.id, name: item.name, category: item.category, price_cents: item.priceCents,
    image_url: item.imageUrl, gallery: item.gallery || [], description: item.description || "",
    specs: item.specsJson, available: item.available !== false,
    made_to_order: item.madeToOrder !== false, metadata: item,
  })))]);
  return { seeded: items.length };
  })().catch((error) => {
    manualSeedPromise = null;
    throw error;
  });
  return manualSeedPromise;
}

async function seedSnapshotProducts() {
  if (!databaseConfigured()) return { seeded: 0 };
  if (snapshotSeedPromise) return snapshotSeedPromise;
  snapshotSeedPromise = (async () => {
  const count = await query("SELECT COUNT(*)::int AS count FROM products WHERE source='lgd-jewelry'");
  if (count.rows[0].count > 0) return { seeded: 0 };
  const items = snapshotProducts();
  await query(`
    INSERT INTO products (
      id, external_id, source, name, category, price_cents, image_url, gallery,
      description, specs, available, hidden, made_to_order, metadata,
      source_updated_at, updated_at
    )
    SELECT x.id, x.external_id, 'lgd-jewelry', x.name, x.category, x.price_cents,
      x.image_url, x.gallery, x.description, x.specs, x.available, FALSE, FALSE,
      x.metadata, NOW(), NOW()
    FROM jsonb_to_recordset($1::jsonb) AS x(
      id text, external_id text, name text, category text, price_cents integer,
      image_url text, gallery jsonb, description text, specs jsonb,
      available boolean, metadata jsonb
    )
    ON CONFLICT (id) DO NOTHING
  `, [JSON.stringify(items.map((item) => ({
    id: item.id, external_id: item.externalId, name: item.name, category: item.category,
    price_cents: item.priceCents, image_url: item.imageUrl, gallery: item.gallery,
    description: item.description, specs: item.specs, available: item.available,
    metadata: item.metadata,
  })))]);
  return { seeded: items.length };
  })().catch((error) => {
    snapshotSeedPromise = null;
    throw error;
  });
  return snapshotSeedPromise;
}

function productSearchText(product) {
  return [
    product.id,
    product.externalId,
    product.name,
    product.category,
    product.description,
    product.lede,
    product.specs,
    product.metadata,
    product.badges,
    product.fields,
  ].map((value) => {
    if (Array.isArray(value)) return value.map((item) => JSON.stringify(item)).join(" ");
    if (value && typeof value === "object") return JSON.stringify(value);
    return String(value || "");
  }).join(" ").toLowerCase();
}

async function listProducts({ category = "", page = 1, limit = 24, sort = "price-asc", source = "", search = "" } = {}) {
  const safePage = Math.max(1, Number(page) || 1);
  const safeLimit = Math.min(48, Math.max(1, Number(limit) || 24));
  const cleanSearch = String(search || "").trim().toLowerCase();
  if (!databaseConfigured()) {
    let items = [...manualProducts(), ...snapshotProducts()].filter((item) => item.available !== false && !item.hidden);
    if (category) items = items.filter((item) => item.category === normalizeCategory(category));
    if (source) items = items.filter((item) => item.source === source);
    if (cleanSearch) items = items.filter((item) => productSearchText(item).includes(cleanSearch));
    items.sort((a, b) => {
      if (normalizeCategory(category) === "Bracelets") {
        const aRank = BRACELET_FEATURED_IDS.indexOf(a.id);
        const bRank = BRACELET_FEATURED_IDS.indexOf(b.id);
        if (aRank >= 0 || bRank >= 0) return (aRank >= 0 ? aRank : 999) - (bRank >= 0 ? bRank : 999);
      }
      const aMissing = !a.priceCents;
      const bMissing = !b.priceCents;
      if (aMissing !== bMissing) return aMissing ? 1 : -1;
      const aPrice = a.priceCents || 0;
      const bPrice = b.priceCents || 0;
      return sort === "price-desc" ? bPrice - aPrice : aPrice - bPrice;
    });
    return {
      items: items.slice((safePage - 1) * safeLimit, safePage * safeLimit).map(applyRetailPricing),
      total: items.length,
      page: safePage,
      limit: safeLimit,
      fallback: true,
    };
  }
  const values = [];
  const where = ["available=TRUE", "hidden=FALSE"];
  if (category) {
    values.push(normalizeCategory(category));
    where.push(`category=$${values.length}`);
  }
  if (source) {
    values.push(source);
    where.push(`source=$${values.length}`);
  }
  if (cleanSearch) {
    values.push(`%${cleanSearch}%`);
    where.push(`(
      LOWER(COALESCE(id, '')) LIKE $${values.length}
      OR LOWER(COALESCE(external_id, '')) LIKE $${values.length}
      OR LOWER(COALESCE(name, '')) LIKE $${values.length}
      OR LOWER(COALESCE(category, '')) LIKE $${values.length}
      OR LOWER(COALESCE(description, '')) LIKE $${values.length}
      OR LOWER(specs::text) LIKE $${values.length}
      OR LOWER(metadata::text) LIKE $${values.length}
    )`);
  }
  const priceOrder = sort === "price-desc"
    ? "price_cents DESC NULLS LAST, name ASC"
    : "price_cents ASC NULLS LAST, name ASC";
  const featuredOrder = normalizeCategory(category) === "Bracelets"
    ? `CASE id ${BRACELET_FEATURED_IDS.map((id, index) => `WHEN '${id}' THEN ${index}`).join(" ")} ELSE 999 END ASC, `
    : "";
  const order = `${featuredOrder}${priceOrder}`;
  values.push(safeLimit, (safePage - 1) * safeLimit);
  const result = await query(`
    SELECT *, COUNT(*) OVER()::int AS full_count
    FROM products WHERE ${where.join(" AND ")}
    ORDER BY ${order} LIMIT $${values.length - 1} OFFSET $${values.length}
  `, values);
  return {
    items: result.rows.map(rowToProduct),
    total: result.rows[0]?.full_count || 0,
    page: safePage,
    limit: safeLimit,
    fallback: false,
  };
}

async function listVisibleProducts({ source = "" } = {}) {
  if (!databaseConfigured()) {
    let items = [...manualProducts(), ...snapshotProducts()].filter((item) => item.available !== false && !item.hidden);
    if (source) items = items.filter((item) => item.source === source);
    return items.map(applyRetailPricing).map((item) => ({
      ...item,
      updatedAt: item.updatedAt || item.metadata?.updatedAt || item.metadata?.lastUpdated || null,
    }));
  }
  const values = [];
  const where = ["available=TRUE", "hidden=FALSE"];
  if (source) {
    values.push(source);
    where.push(`source=$${values.length}`);
  }
  const result = await query(`
    SELECT *
    FROM products
    WHERE ${where.join(" AND ")}
    ORDER BY updated_at DESC NULLS LAST, name ASC
  `, values);
  return result.rows.map(rowToProduct);
}

async function getProduct(id) {
  const clean = String(id || "").trim();
  if (!clean) return null;
  if (!databaseConfigured()) {
    return applyRetailPricing([...manualProducts(), ...snapshotProducts()].find((item) => item.id === clean || item.externalId === clean) || null);
  }
  const result = await query("SELECT * FROM products WHERE (id=$1 OR external_id=$1) LIMIT 1", [clean]);
  return result.rows[0] ? rowToProduct(result.rows[0]) : null;
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

function productSlug(product) {
  const id = slugify(product?.externalId || product?.id || "");
  const name = slugify(product?.name || "jewelry");
  if (!name) return id;
  if (!id || id === name) return name;
  return `${name}-${id}`;
}

async function getProductBySlug(slug) {
  const clean = String(slug || "").trim();
  if (!clean) return null;
  const direct = await getProduct(clean);
  if (direct) return direct;
  const products = await listVisibleProducts();
  return products.find((product) => productSlug(product) === clean
    || slugify(product.id) === clean
    || slugify(product.externalId) === clean) || null;
}

module.exports = {
  databaseConfigured,
  getProduct,
  getProductBySlug,
  listProducts,
  listVisibleProducts,
  manualProducts,
  normalizeCategory,
  productSlug,
  rowToProduct,
  seedManualProducts,
  seedSnapshotProducts,
  slugify,
  snapshotProducts,
};
