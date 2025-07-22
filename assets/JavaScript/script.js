var lastScrollTop = 0; // Inicializa la variable lastScrollTop

function toggleContactInfo() {
    var btnContact = document.querySelector(".btn-contact");
    var dropdownContent = document.getElementById("contactoContent");
    var isOpen = dropdownContent.style.display === "block";

    // Cambiar la imagen del botón según si el menú desplegable está abierto o cerrado
    if (isOpen) {
        btnContact.style.backgroundImage = "url('img/vivo.png')"; // Cambia la imagen del botón a XDD.png
    } else {
        btnContact.style.backgroundImage = "url('img/muerto.png')"; // Cambia la imagen del botón a muerto.png
    }

    // Alternar la visibilidad del menú desplegable
    dropdownContent.style.display = isOpen ? "none" : "block";
}

window.addEventListener('scroll', function () {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > lastScrollTop) {
        // Desplazamiento hacia abajo
        document.querySelector('.menu-container').classList.add('menu-hidden');
    } else {
        // Desplazamiento hacia arriba
        document.querySelector('.menu-container').classList.remove('menu-hidden');
    }

    lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition; // Para manejar el desplazamiento en dispositivos móviles
}, false);


window.addEventListener('scroll', function () {
    var footer = document.getElementById('footer');
    var distanceFromTop = window.scrollY + window.innerHeight;
    var documentHeight = document.body.offsetHeight;

    if (distanceFromTop >= documentHeight) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// Variable
const gallery = document.querySelectorAll('.gallery-content .img-card img');
const modal = document.querySelector('.modal');
const imgModal = document.querySelector('#imgModal');
const caption = document.querySelector('#caption');
const closeModal = document.querySelector('#closeModal');

// Función para abrir el modal con la imagen correspondiente
function openModal(image) {
    modal.style.display = "block";
    imgModal.src = image.src;
    caption.textContent = image.alt; // Utilizamos textContent para establecer el texto del párrafo
}

// Función para cerrar el modal
function closeModalHandler() {
    modal.style.display = "none";
}

// Agregar evento de clic a cada imagen de la galería
gallery.forEach((image) => {
    image.addEventListener('click', () => {
        openModal(image);
    });
});

// Agregar evento de clic al botón de cierre del modal
closeModal.addEventListener('click', () => {
    closeModalHandler();
});

// Agregar evento de clic al modal para cerrarlo al hacer clic fuera de la imagen
modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target === imgModal) {
        closeModalHandler();
    }
});

// Agregar evento de teclado para cerrar el modal con la tecla Esc
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModalHandler();
    }
});




// Gallery
gallery.forEach((images) => {

    images.addEventListener('click', (event) => {
        modal.style.display = "block";

        let srcImg = event.target.src;
        let altImg = event.target.alt;

        imgModal.src = srcImg;
        caption.innerHTML = altImg;

    });

});


















