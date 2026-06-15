/* ============================================
   animations.js — Scroll-triggered Fade In
   ============================================ */

export function initScrollAnimations() {
  const TARGETS = '.skill-card, .project-card, .timeline-item';

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity   = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target); /* fire once only */
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
