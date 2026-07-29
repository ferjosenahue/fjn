/* =========================
   MENU HAMBURGUESA
========================= */
function toggleMenu(){
  document.getElementById("menu").classList.toggle("active");
}

/* cerrar menú al hacer click en link (UX mejor) */
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("menu").classList.remove("active");
  });
});

/* =========================
   GSAP ENTRADA SECCIONES
========================= */
gsap.utils.toArray(".anim").forEach(el => {
  gsap.from(el, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%"
    }
  });
});

/* =========================
   SMOOTH UX (opcional)
========================= */
document.documentElement.style.scrollBehavior = "smooth";

/* =========================
   FANCYBOX CONFIG (opcional)
========================= */
if (window.Fancybox) {
  Fancybox.bind("[data-fancybox='gallery']", {
    animated: true,
    dragToClose: true,
    hideScrollbar: true
  });
}

/* =========================
   OPCIONAL: ESC para cerrar menú
========================= */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("menu").classList.remove("active");
  }
});