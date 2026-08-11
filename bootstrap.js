(() => {
  "use strict";

  // Load the complete storefront on every route. The homepage previously used
  // a static-only performance shell, which prevented the side menu, product
  // carousel, live catalog behavior, and client-side navigation from working.
  const application = document.createElement("script");
  application.src = "/main.min.js?v=storefront-restored-20260811";
  application.async = false;
  document.head.appendChild(application);
})();
