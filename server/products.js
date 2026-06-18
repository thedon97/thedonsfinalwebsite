const { sendJson } = require("./_http");
const { databaseConfigured, getProduct, listProducts, seedManualProducts, seedSnapshotProducts } = require("./_product-store");

module.exports = async function handler(req, res) {
  try {
    if (databaseConfigured()) {
      await Promise.all([seedManualProducts(), seedSnapshotProducts()]);
    }
    const params = new URL(req.url, "http://localhost").searchParams;
    const id = params.get("id") || "";
    if (id) {
      const product = await getProduct(id);
      if (!product || product.hidden) {
        sendJson(res, 404, { ok: false, message: "Product not found." });
        return;
      }
      sendJson(res, 200, { ok: true, product, databaseConfigured: databaseConfigured() }, "public, s-maxage=120, stale-while-revalidate=600");
      return;
    }
    const result = await listProducts({
      category: params.get("category") || "",
      page: params.get("page") || 1,
      limit: params.get("limit") || 24,
      sort: params.get("sort") || "price-asc",
      source: params.get("source") || "",
    });
    sendJson(res, 200, {
      ok: true,
      ...result,
      totalPages: Math.max(1, Math.ceil(result.total / result.limit)),
      databaseConfigured: databaseConfigured(),
    }, "public, s-maxage=120, stale-while-revalidate=600");
  } catch (error) {
    sendJson(res, 500, { ok: false, message: "Products are temporarily unavailable.", error: error.message });
  }
};
