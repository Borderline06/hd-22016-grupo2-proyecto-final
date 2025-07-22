
function actualizarFechaHora() {
    const ahora = new Date();
    const fecha = ahora.getFullYear() + '-' + 
                  ('0' + (ahora.getMonth() + 1)).slice(-2) + '-' + 
                  ('0' + ahora.getDate()).slice(-2);
    const hora = ('0' + ahora.getHours()).slice(-2) + ':' + 
                 ('0' + ahora.getMinutes()).slice(-2) + ':' + 
                 ('0' + ahora.getSeconds()).slice(-2);
    document.getElementById('fecha-hora').textContent = fecha + ' ' + hora;
}

setInterval(actualizarFechaHora, 1000);
