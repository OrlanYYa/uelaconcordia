// 1. Array con los datos de las imágenes
const carouselImages = [
    //Autoridades y departamentos
    { src: "../imagenes/imagenescarrusel/Directora.jpg" },
    { src: "../imagenes/imagenescarrusel/" },
    { src: "../imagenes/imagenescarrusel/" },
    { src: "../imagenes/imagenescarrusel/" },
    //Docentes de Area
    { src: "../imagenes/imagenescarrusel/DocentesTecnicos.jpg" },
    //Docentes
    { src: "../imagenes/imagenescarrusel/Profesoras.jpg" },
    { src: "../imagenes/imagenescarrusel/Profesores.jpg" },
    //Colaboraciones
    { src: "../imagenes/imagenescarrusel/Colaboraciones.jpg" },
    { src: "../imagenes/imagenescarrusel/Colaboraciones1.jpg" },
    { src: "../imagenes/imagenescarrusel/colaboraciones2.jpg" },
    { src: "../imagenes/imagenescarrusel/Colaboraciones3.jpg" },
    //Estudiantes
    { src: "../imagenes/imagenescarrusel/Estudiantes.jpg" },
    { src: "../imagenes/imagenescarrusel/Estudiantes1.jpg" },
    { src: "../imagenes/imagenescarrusel/Estudiantes2.jfif" },
    //Eventos
    { src: "../imagenes/imagenescarrusel/Eventos.jpg" },
    { src: "../imagenes/imagenescarrusel/Eventos1.jpg" },
    { src: "../imagenes/imagenescarrusel/Eventos2.jpg" },
    { src: "../imagenes/imagenescarrusel/Eventos3.jpg" },
    { src: "../imagenes/imagenescarrusel/Eventos4.jpg" },
    { src: "../imagenes/imagenescarrusel/Eventos5.jpg" },
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
