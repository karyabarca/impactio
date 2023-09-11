window.addEventListener("load", function () {
    const saludo = document.getElementById("saludo");

    // Agregar un retraso de 2 segundos para ocultar el saludo
    setTimeout(function () {
        saludo.style.opacity = "0"; // Cambiar la opacidad a 0 para ocultar el saludo
        saludo.style.pointerEvents = "none"; // Desactivar interacciones con el saludo
    }, 1000); // 2000 milisegundos (2 segundos)
});


document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todas las imágenes con la clase .image-link
    const imageLinks = document.querySelectorAll('.image-link');

    // Recorre cada enlace de imagen y agrega un evento de clic
    imageLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Evita que el enlace abra una nueva página

            // Crea un div modal para mostrar la imagen en pantalla completa
            const modal = document.createElement('div');
            modal.classList.add('modal');

            // Crea una imagen en el modal y establece su src
            const modalImage = document.createElement('img');
            modalImage.src = link.getAttribute('data-src');
            modalImage.alt = link.querySelector('img').alt;

            // Agrega la imagen al modal
            modal.appendChild(modalImage);

            // Agrega el modal al cuerpo del documento
            document.body.appendChild(modal);

            // Cierra el modal al hacer clic en él
            modal.addEventListener('click', () => {
                modal.remove();
            });
        });
    });

    // Obtiene todas las imágenes que tienen la clase "image-link"
    var images = document.querySelectorAll('.image-link');

    // Obtiene el modal
    var modal = document.getElementById('myModal');

    // Obtiene la imagen en el modal
    var modalImg = document.getElementById('imgModal');

    // Recorre todas las imágenes y agrega un evento clic a cada una
    images.forEach(function (image) {
        image.addEventListener('click', function () {
            // Muestra el modal
            modal.style.display = 'block';

            // Coloca la imagen de la miniatura en el modal
            modalImg.src = this.getAttribute('data-src');
        });
    });

    // Obtiene el botón de cierre del modal
    var closeBtn = document.getElementsByClassName('close')[0];

    // Agrega un evento clic al botón de cierre para cerrar el modal
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none'; // Oculta el modal al hacer clic en el botón de cierre
    });
});



// Variables para el control de imágenes
let currentImageIndex = 0;
const images = document.querySelectorAll('.image-link');
const modal = document.getElementById('myModal');
const modalImage = document.getElementById('imgModal');

// Función para mostrar el modal con una imagen específica
function showModal(imageIndex) {
    currentImageIndex = imageIndex;
    modal.style.display = 'block';
    modalImage.src = images[imageIndex].getAttribute('data-src');
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = 'none';
}

// Función para mostrar la imagen siguiente
function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Vuelve al principio si llegamos al final
    }
    showModal(currentImageIndex);
}

// Función para mostrar la imagen anterior
function prevImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; // Vuelve al final si estamos al principio
    }
    showModal(currentImageIndex);
}

// Agrega eventos de clic a las imágenes para abrir el modal
images.forEach(function (image, index) {
    image.addEventListener('click', function () {
        showModal(index);
    });
});
