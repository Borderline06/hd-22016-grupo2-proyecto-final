// Simula usuario
const usuario = { nombre: "" };

// Simula beneficios
const beneficios = [
  {icon:"img/25.png", texto: "25 puntos acumulados"},
  {icon:"img/2x1.png", texto: "Cupón: 2x1 en Frappuccino"},
  {icon:"img/gold.png", texto: "Miembro Gold"}
];

// Ofertas del día (productos destacados)
const ofertas = [
  {img:"img/oferta1.png", nombre: "Frappuccino® de Caramelo", descr: "Refrescante y cremoso.", precio:"S/ 15.90"},
  {img:"img/oferta2.png", nombre: "Latte Vainilla", descr: "Vainilla + espresso suave.", precio:"S/ 13.50"},
];

// Novedades
const novedades = [
  {img:"img/nove1.png", nombre:"Nitro Cold Brew", descr:"Nuevo café frío con textura cremosa."},
  {img:"img/nove2.png", nombre:"Avena con Frutos", descr:"Ideal para empezar tu día."}
];

// Comunidad / noticias
const comunidad = [
  {img:"img/taller1.png", titulo:"Taller de Latte Art", texto:"Inscríbete para una experiencia única, sábado 20, Miraflores."},
  {img:"img/taller2.png", titulo:"Comparte tu momento Starbucks", texto:"Sube tu foto con #StarbucksLovers y gana premios."}
];

// Renderizar bienvenida
document.getElementById('saludo').textContent = `¡Bienvenida, ${usuario.nombre}!`;

// Renderizar beneficios
document.getElementById('beneficios').innerHTML = "<h2>Beneficios</h2>" + beneficios.map(b =>
  `<div class="card"><img src="${b.icon}" alt="">${b.texto}</div>`
).join("");

// Renderizar ofertas del día
document.getElementById('ofertas').innerHTML = "<h2>Ofertas del día</h2>" + ofertas.map(p =>
  `<div class="card">
      <img src="${p.img}" alt="">
      <div>
        <b>${p.nombre}</b><br>${p.descr}<br><span>${p.precio}</span>
      </div>
      <button class="boton-comprar" onclick="window.location.href='carrito.html'">Comprar en línea</button>
   </div>`
).join("");

// Renderizar novedades
document.getElementById('novedades').innerHTML = "<h2>Novedades</h2>" + novedades.map(d =>
  `<div class="card"><img src="${d.img}" alt=""><div><b>${d.nombre}</b><br>${d.descr}</div></div>`
).join("");

// Renderizar comunidad
document.getElementById('comunidad').innerHTML = "<h2>Comunidad</h2>" + comunidad.map(c =>
  `<div class="card"><img src="${c.img}" alt=""><div><b>${c.titulo}</b><br>${c.texto}</div></div>`
).join("");
