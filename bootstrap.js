(() => {
  "use strict";

  const path = location.pathname.replace(/\/+$/, "") || "/";
  if (path !== "/") {
    const application = document.createElement("script");
    application.src = "/main.min.js?v=mobile-split-20260811";
    application.async = false;
    document.head.appendChild(application);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };

  function event(name, parameters = {}) {
    window.gtag("event", name, {
      page_path: "/",
      page_location: location.href,
      business_name: "The Don Jewelers & Jewelry",
      ...parameters,
    });
  }

  async function initializeAnalytics() {
    let id = "G-68DJH1C3QF";
    let enabled = location.hostname === "www.thedonjewelersandjewelrynyc.com";
    let debug = false;
    try {
      const response = await fetch("/api/site-config", { cache: "force-cache" });
      if (response.ok) {
        const config = await response.json();
        id = String(config?.analytics?.gaMeasurementId || id).trim();
        enabled = Boolean(config?.analytics?.enabled);
        debug = Boolean(config?.analytics?.debug);
      }
    } catch {}
    if (!enabled || !/^G-[A-Z0-9]+$/i.test(id) || navigator.doNotTrack === "1") return;
    window.gtag("js", new Date());
    window.gtag("config", id, {
      send_page_view: true,
      page_path: "/",
      anonymize_ip: true,
      debug_mode: debug,
    });
  }

  document.addEventListener("click", (clickEvent) => {
    const link = clickEvent.target.closest("a[href]");
    if (!link) return;
    const href = link.getAttribute("href") || "";
    const label = (link.textContent || link.getAttribute("aria-label") || "link").trim().slice(0, 80);
    if (href.startsWith("tel:")) event("phone_click", { link_text: label });
    else if (href.startsWith("mailto:")) event("email_click", { link_text: label });
    else if (/start-custom|request\//.test(href)) event("generate_lead", { link_text: label, link_url: href });
    else if (/select-diamond|products|category\//.test(href)) event("select_content", { content_type: "storefront_link", item_id: href });
    else if (/jewelry-financing/.test(href)) event("financing_interest", { link_text: label });
    else if (/google|instagram|facebook/i.test(href)) event("outbound_social_click", { link_url: href });
  }, { passive: true });

  initializeAnalytics();
})();
