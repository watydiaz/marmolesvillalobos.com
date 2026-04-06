// JS para lightbox de galería
(function () {
  const images = [
    { src: 'img/Trabajos/1.png', cap: 'Proyecto 1' },
    { src: 'img/Trabajos/2.jpeg', cap: 'Proyecto 2' },
    { src: 'img/Trabajos/3.jpeg', cap: 'Proyecto 3' },
    { src: 'img/Trabajos/4.png', cap: 'Proyecto 4' },
    { src: 'img/Trabajos/5.png', cap: 'Proyecto 5' },
    { src: 'img/Trabajos/6.png', cap: 'Proyecto 6' },
    { src: 'img/Trabajos/7.png', cap: 'Proyecto 7' },
    { src: 'img/Trabajos/8.png', cap: 'Proyecto 8' },
    { src: 'img/Trabajos/9.png', cap: 'Proyecto 9' },
    { src: 'img/Trabajos/10.png', cap: 'Proyecto 10' },
  ];

  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbCap = document.getElementById('lb-caption');
  const lbClose = document.getElementById('lb-close');
  const lbPrev = document.getElementById('lb-prev');
  const lbNext = document.getElementById('lb-next');
  let current = 0;

  function show(index) {
    current = (index + images.length) % images.length;
    lbImg.src = images[current].src;
    lbImg.alt = images[current].cap;
    lbCap.textContent = images[current].cap + ' — Marmoleria Villalobos';
    lb.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function close() {
    lb.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.collage-item').forEach((btn) => {
    btn.addEventListener('click', () => show(Number(btn.dataset.index)));
  });

  lbClose.addEventListener('click', close);
  lbPrev.addEventListener('click', () => show(current - 1));
  lbNext.addEventListener('click', () => show(current + 1));

  lb.addEventListener('click', (e) => { if (e.target === lb) close(); });

  document.addEventListener('keydown', (e) => {
    if (lb.hasAttribute('hidden')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
})();
