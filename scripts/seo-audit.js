const assert = require("assert");
const fs = require("fs");

// Build-time SEO checks must be deterministic and must not consume or depend on
// the production database allowance. Runtime functions retain DATABASE_URL.
delete process.env.DATABASE_URL;

const seo = require("../server/seo-pages");

function response() {
  return {
    headers: {}, statusCode: 200, body: "", writableEnded: false,
    setHeader(name, value) { this.headers[name.toLowerCase()] = value; },
    end(value = "") { this.body += value; this.writableEnded = true; },
  };
}

async function request(url) {
  const res = response();
  await seo({ url, method: "GET", headers: {} }, res);
  return res;
}

(async () => {
  const pages = [
    "/", "/custom-engagement-rings", "/engagement-rings-allentown-pa", "/custom-jewelry-nyc", "/blog",
    "/custom-jewelry-pennsylvania", "/jewelry-store-easton-pa", "/engagement-rings-easton-pa",
    "/diamond-jewelry-pennsylvania", "/diamond-district-custom-jewelry-nyc",
  ];
  for (const pathname of pages) {
    const res = await request(`/api/index?route=seo&action=page&path=${encodeURIComponent(pathname.replace(/^\//, ""))}`);
    assert.equal(res.statusCode, 200, `${pathname} must return 200`);
    assert.match(res.body, /<title>[^<]+<\/title>/i, `${pathname} needs a title`);
    assert.match(res.body, /<link rel="canonical" href="https:\/\/www\.thedonjewelersandjewelrynyc\.com\//i, `${pathname} needs canonical`);
    assert.match(res.body, /application\/ld\+json/i, `${pathname} needs JSON-LD`);
    assert.doesNotMatch(res.body, /Store-level customer experience|Verified The Don Jewelers clients/, `${pathname} must not contain synthetic reviews`);
  }
  const home = await request("/api/index?route=seo&action=page&path=/");
  assert.equal((home.body.match(/<h1\b/gi) || []).length, 1, "homepage must ship exactly one server-rendered H1");
  assert.match(home.body, /Luxury custom jewelry\. Made personal\./);
  assert.match(home.body, /GIA (?:&|&amp;) IGI/);
  assert.match(home.body, /"@type":"WebSite"/);
  assert.match(home.body, /"@type":\["LocalBusiness","JewelryStore"\]/);
  const sitemap = await request("/api/index?route=seo&action=sitemap");
  assert.equal(sitemap.statusCode, 200);
  assert.match(sitemap.body, /<urlset/);
  for (const excluded of ["/admin", "/checkout", "/search", "/api/"]) assert(!sitemap.body.includes(`<loc>https://www.thedonjewelersandjewelrynyc.com${excluded}`));
  assert(!sitemap.body.includes("/diamonds/"), "volatile loose-diamond detail URLs must not consume sitemap crawl budget");
  assert((sitemap.body.match(/<loc>/g) || []).length <= 260, "sitemap must stay focused on strong, stable URLs");
  assert(sitemap.body.includes("/engagement-rings-easton-pa"));
  const robots = await request("/api/index?route=seo&action=robots");
  assert.match(robots.body, /Sitemap: https:\/\/www\.thedonjewelersandjewelrynyc\.com\/sitemap\.xml/);
  const article = await request("/api/index?route=seo&action=article&slug=custom-engagement-ring-timeline");
  assert.equal(article.statusCode, 200);
  assert.match(article.body, /"@type":"Article"/);
  assert.match(article.body, /datePublished/);
  assert(sitemap.body.includes("/blog/custom-engagement-ring-timeline"));
  const restored = await request("/api/index?route=seo&action=article&slug=how-to-protect-diamond-jewelry");
  assert.equal(restored.statusCode, 200, "previously reported 404 article must be restored");
  const richLanding = await request("/api/index?route=seo&action=page&path=engagement-rings-easton-pa");
  assert.match(richLanding.body, /\"@type\":\"FAQPage\"/);
  assert.match(richLanding.body, /\"@type\":\"WebSite\"/);
  const missing = await request("/api/index?route=seo&action=not-found");
  assert.equal(missing.statusCode, 404);
  assert.match(missing.body, /noindex,follow/);
  const main = fs.readFileSync("main.js", "utf8");
  const vercel = JSON.parse(fs.readFileSync("vercel.json", "utf8"));
  const customCollectionRewrite = vercel.rewrites.find((rule) => rule.source === "/category/custom-jewelry");
  assert.equal(customCollectionRewrite?.destination, "/index.html", "custom jewelry collection must load the storefront router");
  assert.equal((main.match(/gtag\("config"/g) || []).length, 1, "GA4 must have one config call");
  assert.match(main, /send_page_view: false/);
  console.log(`SEO checks passed for ${pages.length} priority pages, sitemap, robots, schema, and GA4 duplication guards.`);
})().catch((error) => { console.error(error); process.exitCode = 1; });
