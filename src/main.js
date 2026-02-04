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


//Menú hamburguesa móvil//
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});


// Smooth scroll//
document.querySelectorAll('.nav-links a, .footer-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });

    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
});


// Carrusel y Modal Portafolio//
const modal = document.getElementById('imgModal');
const modalImg = modal.querySelector('img');
const closeModalBtn = modal.querySelector('.close-modal');
const prevModalBtn = modal.querySelector('#prevModal');
const nextModalBtn = modal.querySelector('#nextModal');

let modalImages = [];
let currentModalIndex = 0;

function openModal(index, images) {
  modalImages = Array.from(images).map(img => img.src);
  currentModalIndex = index;
  modalImg.src = modalImages[currentModalIndex];
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

function showModalImage(index) {
  currentModalIndex = (index + modalImages.length) % modalImages.length;
  modalImg.src = modalImages[currentModalIndex];
}

closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

prevModalBtn.addEventListener('click', e => {
  e.stopPropagation();
  showModalImage(currentModalIndex - 1);
});

nextModalBtn.addEventListener('click', e => {
  e.stopPropagation();
  showModalImage(currentModalIndex + 1);
});

//Carrusel por tarjeta//
document.querySelectorAll('.portfolio-card').forEach(card => {
  const slides = card.querySelectorAll('.card-images img');
  const prevBtn = card.querySelector('.prev');
  const nextBtn = card.querySelector('.next');
  let index = 0;

  function showSlide(i) {
    slides.forEach((img, idx) => img.classList.toggle('active', idx === i));
  }

  prevBtn.addEventListener('click', e => {
    e.stopPropagation();
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });

  nextBtn.addEventListener('click', e => {
    e.stopPropagation();
    index = (index + 1) % slides.length;
    showSlide(index);
  });

  slides.forEach((img, i) => {
    img.addEventListener('click', e => {
      e.stopPropagation();
      openModal(i, slides);
    });
  });

  showSlide(index);
});

let scale = 1;
let startDist = 0;

//Reset zoom al abrir modal//
function resetZoom() {
  scale = 1;
  modalImg.style.transform = 'scale(1)';
}

//Ajustar openModal//
const originalOpenModal = openModal;
openModal = function(index, images) {
  originalOpenModal(index, images);
  resetZoom();
};

modalImg.addEventListener('wheel', e => {
  e.preventDefault();

  scale += e.deltaY * -0.001;
  scale = Math.min(Math.max(1, scale), 3);

  modalImg.style.transform = `scale(${scale})`;
}, { passive: false });

//ZOOM TÁCTIL (PINCH)//
modalImg.addEventListener('touchstart', e => {
  if (e.touches.length === 2) {
    startDist = getDistance(e.touches[0], e.touches[1]);
  }
});

modalImg.addEventListener('touchmove', e => {
  if (e.touches.length === 2) {
    e.preventDefault();
    const newDist = getDistance(e.touches[0], e.touches[1]);
    scale *= newDist / startDist;
    scale = Math.min(Math.max(1, scale), 3);
    modalImg.style.transform = `scale(${scale})`;
    startDist = newDist;
  }
}, { passive: false });

function getDistance(t1, t2) {
  return Math.hypot(
    t2.clientX - t1.clientX,
    t2.clientY - t1.clientY
  );
}
