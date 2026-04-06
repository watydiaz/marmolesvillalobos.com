// JS extraído de index.html para el menú móvil

document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('site-nav-menu');
  const navOverlay = document.getElementById('nav-overlay');
  if (!navToggle || !navMenu || !navOverlay) return;
  function closeMenu() {
    navMenu.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
    document.querySelector('.site-header').classList.remove('menu-open');
  }
  navToggle.addEventListener('click', function () {
    const open = navMenu.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    navOverlay.classList.toggle('active', open);
    document.body.style.overflow = open ? 'hidden' : '';
    document.querySelector('.site-header').classList.toggle('menu-open', open);
  });
  navOverlay.addEventListener('click', closeMenu);
  // Cerrar menú al hacer click en un enlace
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});
