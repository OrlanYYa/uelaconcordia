// 1. Array con los datos de las imágenes
const carouselImages = [
  { src: "../imagenes/imagencartur/1.jfif" },
];

// 2. Función para generar el HTML de las diapositivas
function generateSlides() {
  const swiperWrapper2 = document.querySelector(".swiper-wrapper2");
  if (!swiperWrapper2) {
    console.error("El elemento .swiper-wrapper2 no fue encontrado.");
    return;
  }

  let slidesHTML = "";
  carouselImages.forEach((image) => {
    // Creamos cada slide con la clase 'swiper-slide'
    slidesHTML += `
                <div class="swiper-slide2">
                    <img src="${image.src}" alt="${image.alt}">
                </div>
            `;
  });

  swiperWrapper2.innerHTML = slidesHTML;
}

// 3. Ejecutar la función y luego inicializar Swiper
generateSlides();

// 4. Inicialización de Swiper
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1, // Se ajusta a 1 para móviles
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  // Autoplay
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // Configuración de paginación y navegación
  pagination: { // <-- CORRECCIÓN: Usar 'pagination' en lugar de 'pagination2'
    el: ".swiper-pagination2",
    clickable: true,
  },

  navigation: { // <-- CORRECCIÓN: Usar 'navigation' en lugar de 'navigation2'
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  // Breakpoints para hacerlo responsivo
  breakpoints: {
    // Cuando el ancho de la ventana es >= 768px (tablets)
    768: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    // Cuando el ancho de la ventana es >= 991px (desktop)
    991: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
  },
});