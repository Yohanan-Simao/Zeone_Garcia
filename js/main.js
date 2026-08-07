/* ==========================================================================
   Centro Educacional Zeone Garcia — Interações
   ========================================================================== */

(function () {
  "use strict";

  /* ---- Header: sombra ao rolar ---- */
  var header = document.querySelector(".header");

  function onScrollHeader() {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 10);
    }
  }

  window.addEventListener("scroll", onScrollHeader, { passive: true });
  onScrollHeader();

  /* ---- Menu mobile ---- */
  var navToggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");

  function closeMenu() {
    if (nav && navToggle) {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Abrir menu");
    }
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        closeMenu();
      }
    });
  }

  /* ---- Fechar menu ao redimensionar para desktop ---- */
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });

  /* ---- Botão voltar ao topo ---- */
  var backtop = document.querySelector(".backtop");

  function onScrollBacktop() {
    if (backtop) {
      backtop.hidden = window.scrollY < 600;
    }
  }

  window.addEventListener("scroll", onScrollBacktop, { passive: true });
  onScrollBacktop();

  if (backtop) {
    backtop.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  }

  /* ---- Reveal on scroll ---- */
  var revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();
