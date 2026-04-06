window.abrirModalVideo = abrirModalVideo;
window.cerrarModalVideo = cerrarModalVideo;
// JS extraído de index.html para el modal de video y tabs de galería

// Modal de video
function abrirModalVideo(src) {
  const modal = document.getElementById('video-lightbox');
  const player = document.getElementById('video-modal-player');
  player.src = src;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  player.currentTime = 0;
  player.play();
  setTimeout(() => player.focus(), 200);
}
function cerrarModalVideo() {
  const modal = document.getElementById('video-lightbox');
  const player = document.getElementById('video-modal-player');
  player.pause();
  player.src = '';
  modal.hidden = true;
  document.body.style.overflow = '';
}
document.getElementById('video-lb-close').onclick = cerrarModalVideo;
document.getElementById('video-lightbox').addEventListener('click', function (e) {
  if (e.target === this) cerrarModalVideo();
});
document.addEventListener('keydown', function (e) {
  const modal = document.getElementById('video-lightbox');
  if (modal.hidden) return;
  if (e.key === 'Escape') cerrarModalVideo();
});

// Tabs galería
function mostrarGaleria(tipo) {
  const btnImg = document.getElementById('tab-imagenes');
  const btnVid = document.getElementById('tab-videos');
  const galImg = document.getElementById('galeria-imagenes');
  const galVid = document.getElementById('galeria-videos');
  if (tipo === 'imagenes') {
    galImg.style.display = '';
    galVid.style.display = 'none';
    btnImg.classList.add('button-primary');
    btnImg.classList.remove('button-secondary');
    btnVid.classList.remove('button-primary');
    btnVid.classList.add('button-secondary');
  } else {
    galImg.style.display = 'none';
    galVid.style.display = '';
    btnVid.classList.add('button-primary');
    btnVid.classList.remove('button-secondary');
    btnImg.classList.remove('button-primary');
    btnImg.classList.add('button-secondary');
  }
}
document.addEventListener('DOMContentLoaded', function () {
  mostrarGaleria('imagenes');
});
