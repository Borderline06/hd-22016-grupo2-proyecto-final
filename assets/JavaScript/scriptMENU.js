document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones con la clase 'btn-primary'
    const buttons = document.querySelectorAll('.btn-primary');

    // Iterar sobre cada botón y agregar el evento de clic
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtener la URL del atributo 'data-url'
            const url = this.getAttribute('data-url');
            
            // Redireccionar a la URL especificada
            window.location.href = url;
        });
    });
});