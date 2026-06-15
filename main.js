/* ============================================
   main.js — Entry Point
   Imports all modules
   ============================================ */

import { initNavbar } from './navbar.js';
import { initScrollAnimations } from './animations.js';
import { initContactForm } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollAnimations();
  initContactForm();
});
