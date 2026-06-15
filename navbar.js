/* ============================================
   navbar.js — Sticky Nav & Hamburger Menu
   ============================================ */

export function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.querySelectorAll('.nav-links a');

  /* Scroll shadow effect */
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  /* Toggle mobile menu */
  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('open');
  });

  /* Close menu on nav link click */
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('open');
    });
  });
}
