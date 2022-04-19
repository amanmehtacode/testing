(self.__BUILD_MANIFEST = (function (s) {
  return {
    __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
    "/": [
      s,
      "static/chunks/854-6191b46ea91a8c1b.js",
      "static/css/2938144a7ebb5c19.css",
      "static/chunks/pages/index-40a932c25867cd2e.js",
    ],
    "/404": [s, "static/chunks/pages/404-2984f848dc347914.js"],
    "/_error": ["static/chunks/pages/_error-2280fa386d040b66.js"],
    "/imprint": [s, "static/chunks/pages/imprint-8058e44043c1ac99.js"],
    "/privacy": [s, "static/chunks/pages/privacy-dfad7ff9861be5ce.js"],
    sortedPages: ["/", "/404", "/_app", "/_error", "/imprint", "/privacy"],
  };
})("static/chunks/61-30b36970a2c3f31d.js")),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
