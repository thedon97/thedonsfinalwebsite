const assert = require("node:assert/strict");

const origin = process.env.SITE_ORIGIN || "https://www.thedonjewelersandjewelrynyc.com";

async function read(path, type = "text") {
  const response = await fetch(`${origin}${path}`, { redirect: "follow", signal: AbortSignal.timeout(20000) });
  assert(response.ok, `${path} returned HTTP ${response.status}`);
  return type === "json" ? response.json() : response.text();
}

async function main() {
  const [home, diamondsPage, sitemap, robots, config, status, merchantFeed, inventory] = await Promise.all([
    read("/"),
    read("/select-diamond"),
    read("/sitemap.xml"),
    read("/robots.txt"),
    read("/api/site-config", "json"),
    read("/api/system-status", "json"),
    read("/merchant-feed.xml"),
    read("/api/diamonds?page=1", "json"),
  ]);

  assert(home.includes("G-68DJH1C3QF"), "Production homepage is missing the GA4 measurement ID.");
  assert(diamondsPage.includes("Live Diamond Selection"), "Live diamond landing page did not render its SEO shell.");
  assert(sitemap.includes("<urlset") && sitemap.includes("/select-diamond"), "Sitemap is missing required URLs.");
  assert(robots.includes("/sitemap.xml"), "robots.txt is missing the sitemap directive.");
  assert(config?.analytics?.enabled && /^G-/.test(config?.analytics?.gaMeasurementId || ""), "GA4 runtime configuration is disabled or missing.");
  assert(status?.resendConfigured, "Resend is not configured in production.");
  assert(status?.stripeConfigured, "Stripe is not configured in production.");
  assert(status?.stripeWebhookConfigured, "Stripe webhook verification is not configured in production.");
  assert(status?.lgdConfigured, "The LGD supplier integration is not configured in production.");
  assert(merchantFeed.includes("<rss") && merchantFeed.includes("<item>"), "Google Merchant feed is empty or invalid.");

  if (!inventory?.ok || !Number(inventory?.count)) {
    console.warn(`Supplier inventory warning: ${inventory?.error || inventory?.message || "No live diamonds returned."}`);
  }
  if (!status?.databaseConfigured) console.warn("Lead recovery warning: DATABASE_URL is not configured.");

  console.log("Production health checks passed for pages, SEO, analytics, commerce, email, and integrations.");
}

main().catch((error) => {
  console.error(error.stack || error.message || error);
  process.exitCode = 1;
});
