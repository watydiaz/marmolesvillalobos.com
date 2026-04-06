window.abrirModalMaterial = abrirModalMaterial;
window.cerrarModalMaterial = cerrarModalMaterial;
// JS para modales de materiales
function abrirModalMaterial(cat) {
  const modal = document.getElementById('modal-material-' + cat);
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  // Cerrar con click fuera
  modal.addEventListener('mousedown', function handler(e) {
    if (e.target === modal) {
      cerrarModalMaterial(cat);
      modal.removeEventListener('mousedown', handler);
    }
  });
  // Cerrar con ESC
  function escHandler(e) {
    if (e.key === 'Escape') {
      cerrarModalMaterial(cat);
      document.removeEventListener('keydown', escHandler);
    }
  }
  document.addEventListener('keydown', escHandler);
}
function cerrarModalMaterial(cat) {
  const modal = document.getElementById('modal-material-' + cat);
  modal.hidden = true;
  document.body.style.overflow = '';
}
