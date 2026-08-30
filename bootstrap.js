(() => {
  "use strict";

  const isHome = (location.pathname === "/" || location.pathname === "/index.html")
    && (!location.hash || location.hash === "#" || location.hash === "#/");
  let applicationPromise;

  function loadApplication() {
    if (applicationPromise) return applicationPromise;
    applicationPromise = new Promise((resolve, reject) => {
      const application = document.createElement("script");
      application.src = "/main.min.js?v=checkout-offer-verification-20260830";
      application.async = true;
      application.addEventListener("load", resolve, { once: true });
      application.addEventListener("error", reject, { once: true });
      document.head.appendChild(application);
    });
    return applicationPromise;
  }

  // Every transactional and catalog route receives the full application at
  // once. The homepage is already complete server-rendered HTML, so parsing the
  // entire catalog there only delays the first useful interaction on phones.
  if (!isHome) {
    loadApplication();
    return;
  }

  // Preserve the familiar header menu without making every homepage visitor
  // pay the cost of the complete catalog/router bundle.
  const menuTrigger = document.querySelector(".brand-menu-button");
  menuTrigger?.addEventListener("click", async (event) => {
    event.preventDefault();
    await loadApplication();
    document.getElementById("sidebar-open")?.click();
  }, { once: true });

  // GA4 remains enabled, but its library no longer competes with the hero image
  // and navigation during the critical rendering window. A real interaction
  // starts it immediately; otherwise it begins after the page is settled.
  let analyticsStarted = false;
  function startAnalytics() {
    if (analyticsStarted || navigator.doNotTrack === "1") return;
    analyticsStarted = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag(){ window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", "G-68DJH1C3QF", {
      page_path: location.pathname,
      page_location: location.href,
      send_page_view: true,
    });
    window.__DON_INITIAL_PAGEVIEW_SENT__ = location.pathname;
    const analytics = document.createElement("script");
    analytics.async = true;
    analytics.src = "https://www.googletagmanager.com/gtag/js?id=G-68DJH1C3QF";
    analytics.dataset.ga4 = "G-68DJH1C3QF";
    document.head.appendChild(analytics);
  }

  ["pointerdown", "keydown", "touchstart"].forEach((eventName) => {
    window.addEventListener(eventName, startAnalytics, { once: true, passive: true });
  });
  window.setTimeout(startAnalytics, 10000);
})();
