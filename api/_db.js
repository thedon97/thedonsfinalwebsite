const { Pool } = require("pg");

let pool;
let schemaPromise;

function databaseConfigured() {
  return Boolean(process.env.DATABASE_URL);
}

function getPool() {
  if (!databaseConfigured()) throw new Error("Missing server environment variable: DATABASE_URL");
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : undefined,
      max: 3,
      idleTimeoutMillis: 10000,
      connectionTimeoutMillis: 8000,
    });
  }
  return pool;
}

async function ensureSchema() {
  if (!databaseConfigured()) return false;
  if (!schemaPromise) {
    schemaPromise = getPool().query(`
      CREATE TABLE IF NOT EXISTS products (
        id TEXT PRIMARY KEY,
        external_id TEXT,
        source TEXT NOT NULL DEFAULT 'manual',
        name TEXT NOT NULL,
        category TEXT NOT NULL,
        price_cents INTEGER,
        currency TEXT NOT NULL DEFAULT 'usd',
        image_url TEXT,
        gallery JSONB NOT NULL DEFAULT '[]'::jsonb,
        description TEXT,
        specs JSONB NOT NULL DEFAULT '{}'::jsonb,
        available BOOLEAN NOT NULL DEFAULT TRUE,
        hidden BOOLEAN NOT NULL DEFAULT FALSE,
        made_to_order BOOLEAN NOT NULL DEFAULT FALSE,
        metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
        source_updated_at TIMESTAMPTZ,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
      CREATE UNIQUE INDEX IF NOT EXISTS products_source_external_id
        ON products(source, external_id) WHERE external_id IS NOT NULL;
      CREATE INDEX IF NOT EXISTS products_category_price
        ON products(category, price_cents, id);
      CREATE INDEX IF NOT EXISTS products_visibility
        ON products(available, hidden, source);

      CREATE TABLE IF NOT EXISTS product_sync_runs (
        id BIGSERIAL PRIMARY KEY,
        source TEXT NOT NULL,
        status TEXT NOT NULL,
        started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        completed_at TIMESTAMPTZ,
        added_count INTEGER NOT NULL DEFAULT 0,
        updated_count INTEGER NOT NULL DEFAULT 0,
        hidden_count INTEGER NOT NULL DEFAULT 0,
        failed_count INTEGER NOT NULL DEFAULT 0,
        errors JSONB NOT NULL DEFAULT '[]'::jsonb,
        metadata JSONB NOT NULL DEFAULT '{}'::jsonb
      );

      CREATE TABLE IF NOT EXISTS inventory_cache (
        cache_key TEXT PRIMARY KEY,
        payload JSONB NOT NULL,
        fetched_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        expires_at TIMESTAMPTZ NOT NULL,
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `).then(() => true).catch((error) => {
      schemaPromise = null;
      throw error;
    });
  }
  return schemaPromise;
}

async function query(text, values = []) {
  await ensureSchema();
  return getPool().query(text, values);
}

module.exports = { databaseConfigured, ensureSchema, getPool, query };
