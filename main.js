/* ============================================
   main.js — All JavaScript (merged for GitHub Pages)
   Includes: navbar, animations, contact form
   ============================================ */

/* ── NAVBAR ── */
function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('open');
    });
  });
}

/* ── SCROLL ANIMATIONS ── */
function initScrollAnimations() {
  const TARGETS = '.skill-card, .project-card, .timeline-item';

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity   = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(TARGETS).forEach((el, i) => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(24px)';
    el.style.transition = `opacity 0.5s ease ${i * 60}ms, transform 0.5s ease ${i * 60}ms`;
    observer.observe(el);
  });
}

/* ── CONTACT FORM ── */
function initContactForm() {
  const form  = document.getElementById('contactForm');
  const toast = document.getElementById('toast');

  if (!form || !toast) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    toast.classList.add('show');
    form.reset();
    setTimeout(() => toast.classList.remove('show'), 4000);
  });
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollAnimations();
  initContactForm();
});
