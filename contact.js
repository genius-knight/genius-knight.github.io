/* ============================================
   contact.js — Contact Form & Toast
   ============================================ */

export function initContactForm() {
  const form  = document.getElementById('contactForm');
  const toast = document.getElementById('toast');

  if (!form || !toast) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast();
    form.reset();
  });

  function showToast() {
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  }
}
