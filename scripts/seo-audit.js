const assert = require("assert");
const fs = require("fs");
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
  const pages = ["/", "/custom-engagement-rings", "/engagement-rings-allentown-pa", "/custom-jewelry-nyc", "/blog"];
  for (const pathname of pages) {
    const res = await request(`/api/index?route=seo&action=page&path=${encodeURIComponent(pathname.replace(/^\//, ""))}`);
    assert.equal(res.statusCode, 200, `${pathname} must return 200`);
    assert.match(res.body, /<title>[^<]+<\/title>/i, `${pathname} needs a title`);
    assert.match(res.body, /<link rel="canonical" href="https:\/\/www\.thedonjewelersandjewelrynyc\.com\//i, `${pathname} needs canonical`);
    assert.match(res.body, /application\/ld\+json/i, `${pathname} needs JSON-LD`);
    assert.doesNotMatch(res.body, /Store-level customer experience|Verified The Don Jewelers clients/, `${pathname} must not contain synthetic reviews`);
  }
  const sitemap = await request("/api/index?route=seo&action=sitemap");
  assert.equal(sitemap.statusCode, 200);
  assert.match(sitemap.body, /<urlset/);
  for (const excluded of ["/admin", "/checkout", "/search", "/api/"]) assert(!sitemap.body.includes(`<loc>https://www.thedonjewelersandjewelrynyc.com${excluded}`));
  const robots = await request("/api/index?route=seo&action=robots");
  assert.match(robots.body, /Sitemap: https:\/\/www\.thedonjewelersandjewelrynyc\.com\/sitemap\.xml/);
  const article = await request("/api/index?route=seo&action=article&slug=custom-engagement-ring-timeline");
  assert.equal(article.statusCode, 200);
  assert.match(article.body, /"@type":"Article"/);
  assert.match(article.body, /datePublished/);
  assert(sitemap.body.includes("/blog/custom-engagement-ring-timeline"));
  const missing = await request("/api/index?route=seo&action=not-found");
  assert.equal(missing.statusCode, 404);
  assert.match(missing.body, /noindex,follow/);
  const main = fs.readFileSync("main.js", "utf8");
  assert.equal((main.match(/gtag\("config"/g) || []).length, 1, "GA4 must have one config call");
  assert.match(main, /send_page_view: false/);
  console.log(`SEO checks passed for ${pages.length} priority pages, sitemap, robots, schema, and GA4 duplication guards.`);
})().catch((error) => { console.error(error); process.exitCode = 1; });
