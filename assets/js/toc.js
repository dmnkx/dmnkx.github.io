(function () {
  "use strict";
  var tocLinks = Array.prototype.slice.call(document.querySelectorAll(".toc nav a, .toc-mobile nav a"));
  if (!tocLinks.length) return;

  var sections = tocLinks
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);

  // dedupe sections while keeping order
  var seen = {};
  sections = sections.filter(function (s) {
    if (seen[s.id]) return false;
    seen[s.id] = true;
    return true;
  });

  function setActive() {
    var current = sections[0];
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top <= 120) current = sections[i];
    }
    if (!current) return;
    var id = "#" + current.id;
    document.querySelectorAll(".toc nav a, .toc-mobile nav a").forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === id);
    });
  }

  window.addEventListener("scroll", setActive, { passive: true });
  setActive();
})();
