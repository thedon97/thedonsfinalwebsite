const { databaseConfigured, query } = require("./_db");

async function getInventoryCache(cacheKey, { allowStale = false } = {}) {
  if (!databaseConfigured()) return null;
  const result = await query(`
    SELECT payload, fetched_at, expires_at
    FROM inventory_cache
    WHERE cache_key=$1 ${allowStale ? "" : "AND expires_at > NOW()"}
    LIMIT 1
  `, [cacheKey]);
  if (!result.rows[0]) return null;
  return {
    payload: result.rows[0].payload,
    fetchedAt: result.rows[0].fetched_at,
    expiresAt: result.rows[0].expires_at,
    stale: new Date(result.rows[0].expires_at).getTime() <= Date.now(),
  };
}

async function setInventoryCache(cacheKey, payload, ttlSeconds = 900) {
  if (!databaseConfigured()) return false;
  await query(`
    INSERT INTO inventory_cache(cache_key,payload,fetched_at,expires_at,updated_at)
    VALUES($1,$2::jsonb,NOW(),NOW()+($3::text || ' seconds')::interval,NOW())
    ON CONFLICT(cache_key) DO UPDATE SET
      payload=EXCLUDED.payload, fetched_at=NOW(), expires_at=EXCLUDED.expires_at, updated_at=NOW()
  `, [cacheKey, JSON.stringify(payload), String(ttlSeconds)]);
  return true;
}

module.exports = { getInventoryCache, setInventoryCache };
