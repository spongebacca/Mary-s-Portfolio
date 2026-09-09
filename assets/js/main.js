// Minimal progressive enhancement. The site works fully without JS.

// Set the current year in the footer.
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Mark the active nav link based on the current path.
const path = location.pathname.replace(/index\.html$/, "").replace(/\/$/, "");
document.querySelectorAll(".nav a").forEach((a) => {
  const href = a.getAttribute("href").replace(/index\.html$/, "").replace(/\/$/, "");
  const isHome = href === "" || href === "/" || href === ".";
  if ((isHome && (path === "" || path.endsWith("/Mary-s-Portfolio"))) || (href && path.endsWith(href))) {
    a.setAttribute("aria-current", "page");
  }
});
