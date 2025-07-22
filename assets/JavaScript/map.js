function iniciarMap(){
    var coord = {lat:-11.972117 , lng:-77.074692 };
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 10,
        center: coord
    });
    var marker= new google.maps.marker({
        position: coord,
        map: map
    })
}

// Información de cada local
const localesData = {
  "lima-centro": {
    nombre: "Lima Centro",
    direccion: "Av. Principal 123, Lima Centro",
    info: "Horario: 7:00 am - 9:00 pm",
    img: "img/CENTRO.png"
  },
  "miraflores": {
    nombre: "Miraflores",
    direccion: "Calle Céntrica 456, Miraflores",
    info: "Horario: 7:30 am - 10:00 pm",
    img: "img/MIRAFLORES.png"
  },
  "la-molina": {
    nombre: "La Molina",
    direccion: "Av. La Molina 789, La Molina",
    info: "Horario: 8:00 am - 9:00 pm",
    img: "img/MOLINA.png"
  },
  "san-isidro": {
    nombre: "San Isidro",
    direccion: "Av. El Bosque 101, San Isidro",
    info: "Horario: 7:00 am - 8:30 pm",
    img: "img/SAN.png"
  },
  // Agrega más locales aquí
};

// Inicialización
const buttons = document.querySelectorAll('.btn-localidad');
const details = document.getElementById('localesDetails');

// Muestra el primer local por defecto
function mostrarLocal(clave) {
  const local = localesData[clave];
  details.innerHTML = `
    <img class="locales-img" src="${local.img}" alt="${local.nombre}">
    <div class="locales-direccion"><b>${local.nombre}</b>: ${local.direccion}</div>
    <div class="locales-info">${local.info}</div>
  `;
}

buttons.forEach(btn => {
  btn.addEventListener('click', function(){
    document.querySelector('.btn-localidad.active').classList.remove('active');
    this.classList.add('active');
    mostrarLocal(this.dataset.localidad);
  });
});

// Muestra el primer local de la lista por defecto
mostrarLocal(document.querySelector('.btn-localidad.active').dataset.localidad);
