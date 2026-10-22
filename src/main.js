import './styles/main.less';

import navbar from './partials/navbar.html?raw';
import header from './partials/header.html?raw';
import about from './partials/about.html?raw';
import services from './partials/services.html?raw';
import portfolio from './partials/portfolio.html?raw';
import footer from './partials/footer.html?raw';

const app = document.querySelector('#app');

app.innerHTML = `
  ${navbar}
  ${header}
  ${about}
  ${services}
  ${portfolio}
  ${footer}
`;

// ================================
// Menú móvil
// ================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

function cerrarMenu() {
  navLinks.classList.remove('active');
  hamburger.classList.remove('active');
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.setAttribute('aria-label', 'Abrir menú');
  document.body.classList.remove('menu-open');
}

hamburger.addEventListener('click', () => {
  const menuAbierto = navLinks.classList.toggle('active');

  hamburger.classList.toggle('active', menuAbierto);
  hamburger.setAttribute('aria-expanded', String(menuAbierto));
  hamburger.setAttribute('aria-label', menuAbierto ? 'Cerrar menú' : 'Abrir menú');
  document.body.classList.toggle('menu-open', menuAbierto);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navLinks.classList.contains('active')) {
    cerrarMenu();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    cerrarMenu();
  }
});

// ================================
// Navegación entre secciones
// ================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const destino = document.querySelector(link.getAttribute('href'));

    if (!destino) return;

    event.preventDefault();
    destino.scrollIntoView({ behavior: 'smooth' });
    cerrarMenu();
  });
});

// ================================
// Tarjetas volteables
// ================================
document.querySelectorAll('[data-project-card]').forEach(card => {
  const front = card.querySelector('.featured-project-card-front');
  const back = card.querySelector('.featured-project-card-back');

  front.addEventListener('click', () => card.classList.add('is-flipped'));
  back.addEventListener('click', event => {
    if (!event.target.closest('a')) card.classList.remove('is-flipped');
  });
});

// ================================
// Modal del portafolio
// ================================
const modal = document.getElementById('imgModal');
const modalImg = modal.querySelector('img');
const closeModalBtn = modal.querySelector('.close-modal');
const prevModalBtn = modal.querySelector('#prevModal');
const nextModalBtn = modal.querySelector('#nextModal');

let modalImages = [];
let currentModalIndex = 0;
let scale = 1;
let startDist = 0;

function resetZoom() {
  scale = 1;
  modalImg.style.transform = 'scale(1)';
}

function openModal(index, images) {
  modalImages = Array.from(images).map(img => img.src);
  currentModalIndex = index;
  modalImg.src = modalImages[currentModalIndex];
  modalImg.alt = images[currentModalIndex]?.alt || 'Imagen ampliada del proyecto';
  resetZoom();
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  closeModalBtn.focus();
}

function closeModal() {
  modal.style.display = 'none';
  modalImg.src = '';
  document.body.style.overflow = '';
  resetZoom();
}

function showModalImage(index) {
  currentModalIndex = (index + modalImages.length) % modalImages.length;
  modalImg.src = modalImages[currentModalIndex];
  resetZoom();
}

closeModalBtn.addEventListener('click', closeModal);

modal.addEventListener('click', event => {
  if (event.target === modal) closeModal();
});

prevModalBtn.addEventListener('click', event => {
  event.stopPropagation();
  showModalImage(currentModalIndex - 1);
});

nextModalBtn.addEventListener('click', event => {
  event.stopPropagation();
  showModalImage(currentModalIndex + 1);
});

// ================================
// Teclado para el modal
// ================================
document.addEventListener('keydown', event => {
  if (modal.style.display !== 'flex') return;

  if (event.key === 'Escape') closeModal();
  if (event.key === 'ArrowLeft') showModalImage(currentModalIndex - 1);
  if (event.key === 'ArrowRight') showModalImage(currentModalIndex + 1);
});

// ================================
// Zoom con rueda del mouse
// ================================
modalImg.addEventListener('wheel', event => {
  event.preventDefault();

  scale += event.deltaY * -0.001;
  scale = Math.min(Math.max(1, scale), 3);
  modalImg.style.transform = `scale(${scale})`;
}, { passive: false });

// ================================
// Zoom táctil
// ================================
modalImg.addEventListener('touchstart', event => {
  if (event.touches.length === 2) {
    startDist = getDistance(event.touches[0], event.touches[1]);
  }
});

modalImg.addEventListener('touchmove', event => {
  if (event.touches.length !== 2) return;

  event.preventDefault();

  const newDist = getDistance(event.touches[0], event.touches[1]);
  scale *= newDist / startDist;
  scale = Math.min(Math.max(1, scale), 3);
  modalImg.style.transform = `scale(${scale})`;
  startDist = newDist;
}, { passive: false });

function getDistance(touch1, touch2) {
  return Math.hypot(
    touch2.clientX - touch1.clientX,
    touch2.clientY - touch1.clientY
  );
}
