(function () {
  "use strict";

  // Skip when embedded in the index shell iframe
  if (window.self !== window.top) return;

  var PORTFOLIOS = window.PORTFOLIOS || [];
  var pathParts = location.pathname.split("/").filter(Boolean);
  var currentFile = (pathParts[pathParts.length - 1] || "index.html").toLowerCase();
  var inPages = pathParts.indexOf("pages") !== -1;
  var rootPrefix = inPages ? "../" : "";

  var nav = document.createElement("nav");
  nav.className = "pf-nav";
  nav.setAttribute("aria-label", "포트폴리오 탭");

  var brand = document.createElement("a");
  brand.className = "pf-nav__brand";
  brand.href = rootPrefix + "index.html";
  brand.innerHTML = "<span>doobeom</span> Portfolio";
  nav.appendChild(brand);

  var tabs = document.createElement("div");
  tabs.className = "pf-nav__tabs";
  tabs.setAttribute("role", "tablist");

  PORTFOLIOS.forEach(function (item) {
    var a = document.createElement("a");
    var href = inPages ? item.file.replace(/^pages\//, "") : item.file;
    var itemFile = item.file.split("/").pop().toLowerCase();
    a.href = href;
    a.textContent = item.label;
    a.setAttribute("role", "tab");
    if (currentFile === itemFile) {
      a.className = "is-active";
      a.setAttribute("aria-selected", "true");
    } else {
      a.setAttribute("aria-selected", "false");
    }
    tabs.appendChild(a);
  });

  nav.appendChild(tabs);
  document.body.insertBefore(nav, document.body.firstChild);
  document.body.classList.add("has-pf-nav");
})();
