const { fetchVendor } = require("./_live-inventory-utils");
const { databaseConfigured, ensureSchema, getPool, query } = require("./_db");
const { normalizeCategory, seedManualProducts } = require("./_product-store");

function productValues(item) {
  const specs = {
    metal: item.metal,
    diamondType: "CVD Lab-Grown Diamond",
    caratWeight: item.diamondWeight,
    color: item.color,
    clarity: item.clarity,
    size: item.size,
    availability: item.availability,
    stockNumber: item.stockNumber,
    shape: item.shape,
    diamondPieces: item.diamondPieces,
    grossWeight: item.grossWeight,
  };
  return {
    id: item.id,
    externalId: item.stockNumber,
    name: item.name,
    category: normalizeCategory(item.category),
    priceCents: Math.round(Number(item.price || 0) * 100) || null,
    imageUrl: item.imageUrl,
    gallery: item.gallery || [],
    description: item.remarks || "",
    specs,
    available: !/unavailable|sold out/i.test(item.availability || ""),
    metadata: item,
  };
}

function changed(existing, product) {
  return (
    existing.name !== product.name
    || existing.category !== product.category
    || existing.price_cents !== product.priceCents
    || existing.image_url !== product.imageUrl
    || existing.description !== product.description
    || existing.available !== product.available
    || JSON.stringify(existing.specs || {}) !== JSON.stringify(product.specs)
  );
}

async function syncJewelryProducts(trigger = "manual") {
  if (!databaseConfigured()) throw new Error("DATABASE_URL is not configured.");
  await ensureSchema();
  await seedManualProducts();
  const run = await query(
    "INSERT INTO product_sync_runs(source,status,metadata) VALUES('lgd-jewelry','running',$1::jsonb) RETURNING id, started_at",
    [JSON.stringify({ trigger })],
  );
  const runId = run.rows[0].id;
  const stats = { added: 0, updated: 0, hidden: 0, failed: 0, errors: [] };
  try {
    const vendor = await fetchVendor("jewelry", 1);
    const client = await getPool().connect();
    try {
      await client.query("BEGIN");
      const existingResult = await client.query("SELECT * FROM products WHERE source='lgd-jewelry'");
      const existing = new Map(existingResult.rows.map((row) => [row.external_id, row]));
      const seen = new Set();
      for (const raw of vendor.items) {
        const product = productValues(raw);
        seen.add(product.externalId);
        try {
          const prior = existing.get(product.externalId);
          if (!prior) stats.added += 1;
          else if (changed(prior, product) || prior.hidden) stats.updated += 1;
          await client.query(`
            INSERT INTO products (
              id, external_id, source, name, category, price_cents, image_url, gallery,
              description, specs, available, hidden, made_to_order, metadata,
              source_updated_at, updated_at
            ) VALUES ($1,$2,'lgd-jewelry',$3,$4,$5,$6,$7::jsonb,$8,$9::jsonb,$10,FALSE,FALSE,$11::jsonb,NOW(),NOW())
            ON CONFLICT (id) DO UPDATE SET
              external_id=EXCLUDED.external_id, name=EXCLUDED.name, category=EXCLUDED.category,
              price_cents=EXCLUDED.price_cents, image_url=EXCLUDED.image_url, gallery=EXCLUDED.gallery,
              description=EXCLUDED.description, specs=EXCLUDED.specs, available=EXCLUDED.available,
              hidden=FALSE, metadata=EXCLUDED.metadata, source_updated_at=NOW(), updated_at=NOW()
            WHERE products.source='lgd-jewelry'
          `, [
            product.id, product.externalId, product.name, product.category, product.priceCents,
            product.imageUrl, JSON.stringify(product.gallery), product.description,
            JSON.stringify(product.specs), product.available, JSON.stringify(product.metadata),
          ]);
        } catch (error) {
          stats.failed += 1;
          stats.errors.push({ stockNumber: product.externalId, error: error.message });
        }
      }
      const removed = existingResult.rows.filter((row) => !seen.has(row.external_id) && !row.hidden);
      if (removed.length) {
        const ids = removed.map((row) => row.id);
        const hidden = await client.query(
          "UPDATE products SET available=FALSE, hidden=TRUE, updated_at=NOW() WHERE source='lgd-jewelry' AND id=ANY($1::text[]) RETURNING id",
          [ids],
        );
        stats.hidden = hidden.rowCount;
      }
      await client.query("COMMIT");
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }
    await query(`
      UPDATE product_sync_runs SET status=$2, completed_at=NOW(), added_count=$3,
        updated_count=$4, hidden_count=$5, failed_count=$6, errors=$7::jsonb,
        metadata=metadata || $8::jsonb WHERE id=$1
    `, [
      runId, stats.failed ? "completed_with_errors" : "completed", stats.added, stats.updated,
      stats.hidden, stats.failed, JSON.stringify(stats.errors),
      JSON.stringify({ trigger, vendorTotal: vendor.vendorTotal, cvdItems: vendor.items.length }),
    ]);
    return { ok: true, runId, ...stats, total: vendor.items.length };
  } catch (error) {
    stats.failed += 1;
    stats.errors.push({ error: error.message });
    await query(
      "UPDATE product_sync_runs SET status='failed', completed_at=NOW(), failed_count=$2, errors=$3::jsonb WHERE id=$1",
      [runId, stats.failed, JSON.stringify(stats.errors)],
    );
    throw error;
  }
}

async function latestSync() {
  if (!databaseConfigured()) return { configured: false, latest: null };
  const result = await query("SELECT * FROM product_sync_runs WHERE source='lgd-jewelry' ORDER BY started_at DESC LIMIT 1");
  return { configured: true, latest: result.rows[0] || null };
}

module.exports = { latestSync, syncJewelryProducts };
