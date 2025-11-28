// 1. Array con los datos de las imágenes
const carouselImages = [
  { src: "../imagenes/imagencartur/1.jfif" },
  { src: "../imagenes/imagencartur/2.jfif" },
  { src: "../imagenes/imagencartur/3.jfif" },
  { src: "../imagenes/imagencartur/4.jfif" },
  { src: "../imagenes/imagencartur/5.jfif" },
  { src: "../imagenes/imagencartur/6.jfif" },
  { src: "../imagenes/imagencartur/7.jfif" },
  { src: "../imagenes/imagencartur/8.jfif" },
  { src: "../imagenes/imagencartur/9.jfif" },
  { src: "../imagenes/imagencartur/10.jfif" },
];

// 2. Función para generar el HTML de las diapositivas
function generateSlides() {
  const swiperWrapper = document.querySelector(".swiper-wrapper");
  if (!swiperWrapper) {
    console.error("El elemento .swiper-wrapper no fue encontrado.");
    return;
  }

  let slidesHTML = "";
  carouselImages.forEach((image) => {
    // Creamos cada slide con la clase 'swiper-slide'
    slidesHTML += `
                <div class="swiper-slide">
                    <img src="${image.src}" alt="${image.alt}">
                </div>
            `;
  });

  swiperWrapper.innerHTML = slidesHTML;
}

// 3. Ejecutar la función y luego inicializar Swiper
generateSlides();

// 4. Inicialización de Swiper
var swiper = new Swiper(".mySwiper", {
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
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
