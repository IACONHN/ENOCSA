// ================================
// GALERÍAS DE PROYECTOS
// ================================
function configurarGalerias() {
  document.querySelectorAll('.project-gallery').forEach(gallery => {
    const images = Array.from(gallery.querySelectorAll('img'));
    const button = gallery.nextElementSibling?.matches('.gallery-toggle')
      ? gallery.nextElementSibling
      : null;
    const actualizarGaleria = expanded => {
      images.forEach((image, index) => {
        image.hidden = !expanded && index >= 6;
      });

      if (button) {
        button.setAttribute('aria-expanded', String(expanded));
        button.textContent = expanded ? 'Mostrar menos' : 'Ver todas las imágenes';
      }
    };

    if (images.length <= 6) {
      if (button) button.hidden = true;
      return;
    }

    actualizarGaleria(false);
    button?.addEventListener('click', () => {
      actualizarGaleria(button.getAttribute('aria-expanded') !== 'true');
    });
  });
}

// ================================
// FOOTER DE PROYECTOS
// ================================
function cargarFooter() {
  const footer = document.querySelector('#project-footer');
  if (!footer) return;

  footer.innerHTML = `
    <div class="project-footer-content">
      <div class="project-footer-brand">
        <img src="../images/logo_footer.png" alt="ENOCSA">
      </div>
      <nav aria-label="Navegación principal">
        <h2 class="project-footer-heading">Navegación</h2>
        <ul class="project-footer-links">
          <li><a href="../index.html#about">Nosotros</a></li>
          <li><a href="../index.html#services">Servicios</a></li>
          <li><a href="../index.html#portfolio">Portafolio</a></li>
        </ul>
      </nav>
      <div class="project-footer-contact">
        <h2 class="project-footer-heading">Contacto</h2>
        <p><i class="fa-solid fa-envelope" aria-hidden="true"></i> <a href="mailto:enocsateg@gmail.com">enocsateg@gmail.com</a></p>
        <p><i class="fa-solid fa-phone" aria-hidden="true"></i> <a href="tel:+50422134481">+504 2213-4481</a></p>
        <p><i class="fa-solid fa-mobile-screen" aria-hidden="true"></i> <a href="tel:+50499988909">+504 9734-3323</a></p>
        <address><i class="fa-solid fa-location-dot" aria-hidden="true"></i> Res. Lomas de Toncontin, Anillo Periferico Sur, A la par de Ferreteria Express, 100m antes del puente que conecta con FAH, Comayagüela, M.D.C., Honduras C.A.</address>
      </div>
    </div>
    <div class="project-footer-bottom"><p>© ENOCSA | Todos los derechos reservados.</p></div>`;
}

// ================================
// VISOR DE IMÁGENES
// ================================
function configurarVisorDeImagenes() {
  const modal = document.createElement('div');
  modal.className = 'project-lightbox';
  modal.hidden = true;
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', 'Visor de imágenes del proyecto');
  modal.innerHTML = `
    <div class="project-lightbox-content">
      <button class="project-lightbox-button project-lightbox-close" type="button" aria-label="Cerrar visor">×</button>
      <button class="project-lightbox-button project-lightbox-previous" type="button" aria-label="Imagen anterior">‹</button>
      <img class="project-lightbox-image" alt="">
      <button class="project-lightbox-button project-lightbox-next" type="button" aria-label="Imagen siguiente">›</button>
    </div>`;
  document.body.append(modal);

  const modalImage = modal.querySelector('.project-lightbox-image');
  const closeButton = modal.querySelector('.project-lightbox-close');
  const previousButton = modal.querySelector('.project-lightbox-previous');
  const nextButton = modal.querySelector('.project-lightbox-next');
  let images = [];
  let currentIndex = 0;

  const mostrarImagen = index => {
    currentIndex = (index + images.length) % images.length;
    modalImage.src = images[currentIndex].src;
    modalImage.alt = images[currentIndex].alt;
  };
  const cerrar = () => {
    modal.hidden = true;
    document.removeEventListener('keydown', manejarTeclado);
  };
  const manejarTeclado = event => {
    if (event.key === 'Escape') cerrar();
    if (event.key === 'ArrowLeft') mostrarImagen(currentIndex - 1);
    if (event.key === 'ArrowRight') mostrarImagen(currentIndex + 1);
  };
  const abrir = (gallery, image) => {
    images = Array.from(gallery.querySelectorAll('img'));
    mostrarImagen(images.indexOf(image));
    modal.hidden = false;
    document.addEventListener('keydown', manejarTeclado);
    closeButton.focus();
  };

  document.querySelectorAll('.project-gallery').forEach(gallery => {
    gallery.querySelectorAll('img').forEach(image => {
      image.addEventListener('click', () => abrir(gallery, image));
    });
  });
  closeButton.addEventListener('click', cerrar);
  previousButton.addEventListener('click', () => mostrarImagen(currentIndex - 1));
  nextButton.addEventListener('click', () => mostrarImagen(currentIndex + 1));
  modal.addEventListener('click', event => {
    if (event.target === modal) cerrar();
  });
}

configurarGalerias();
cargarFooter();
configurarVisorDeImagenes();
