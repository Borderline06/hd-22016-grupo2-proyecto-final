document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button-frap-transparent-delivery');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Clic en el botón:', this); // Verifica en la consola si se detecta el clic y el botón clicado
            this.classList.toggle('active');
            buttons.forEach(btn => {
                if (btn !== this) {
                    btn.classList.remove('active');
                }
            });
        });
    });
});