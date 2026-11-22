// Fade sections in as they scroll into view (skipped on touch devices and for reduced motion).
(function () {
  const lite = matchMedia("(hover: none), (pointer: coarse), (max-width: 760px)").matches;
  if (lite) document.documentElement.classList.add("lite");
  const els = document.querySelectorAll(".reveal");
  if (lite || matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("in")); return; }
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 });
  els.forEach((el) => io.observe(el));
  setTimeout(() => els.forEach((el) => el.classList.add("in")), 2500);
})();
