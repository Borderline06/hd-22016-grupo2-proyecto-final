// Variable que mantiene el estado visible del carrito
var carritoVisible = false;

// Esperamos que todos los elementos de la página cargen para ejecutar el script
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

function ready() {
    //Agregremos funcionalidad a los botones eliminar del carrito
    var botonesEliminarItem = document.getElementsByClassName('btn-eliminar');
    for(var i=0;i<botonesEliminarItem.length; i++){
        var button = botonesEliminarItem[i];
        button.addEventListener('click',eliminarItemCarrito);
    }

    //Agrego funcionalidad al boton sumar cantidad
    var botonesSumarCantidad = document.getElementsByClassName('sumar-cantidad');
    for(var i=0;i<botonesSumarCantidad.length; i++){
        var button = botonesSumarCantidad[i];
        button.addEventListener('click',sumarCantidad);
    }

    //Agrego funcionalidad al buton restar cantidad
    var botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
    for(var i=0;i<botonesRestarCantidad.length; i++){
        var button = botonesRestarCantidad[i];
        button.addEventListener('click',restarCantidad);
    }

    //Agregamos funcionalidad al boton Agregar al carrito
    var botonesAgregarAlCarrito = document.getElementsByClassName('boton-item');
    for(var i=0; i<botonesAgregarAlCarrito.length;i++){
        var button = botonesAgregarAlCarrito[i];
        button.addEventListener('click', agregarAlCarritoClicked);
    }

    // Agregamos funcionalidad al botón comprar
    document.getElementsByClassName('btn-pagar')[0].addEventListener('click',pagarClicked)

    // Inicializar filtrado por categoría
    inicializarFiltradoPorCategoria();
    mostrarTodosLosProductos(); // Mostrar todos los productos al inicio
}

// Eliminamos todos los elementos del carrito y lo ocultamos
function pagarClicked(){
    
    //Elimino todos los elmentos del carrito
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    while (carritoItems.hasChildNodes()){
        carritoItems.removeChild(carritoItems.firstChild)
    }
    actualizarTotalCarrito();
    ocultarCarrito();
}

// Función que controla el botón clickeado de agregar al carrito
function agregarAlCarritoClicked(event){
    var button = event.target;
    var item = button.parentElement;
    var titulo = item.getElementsByClassName('titulo-item')[0].innerText;
    var precio = item.getElementsByClassName('precio-item')[0].innerText;
    var imagenSrc = item.getElementsByClassName('img-item')[0].src;
    console.log(imagenSrc);

    agregarItemAlCarrito(titulo, precio, imagenSrc);

    hacerVisibleCarrito();
}


// Función que hace visible el carrito
function hacerVisibleCarrito(){
    carritoVisible = true;
    var carrito = document.getElementsByClassName('carrito')[0];
    carrito.style.marginRight = '0';
    carrito.style.opacity = '1';

    var items =document.getElementsByClassName('contenedor-items')[0];
    items.style.width = '60%';
}

// Función que agrega un item al carrito
function agregarItemAlCarrito(titulo, precio, imagenSrc){
    var item = document.createElement('div');
    item.classList.add = ('item');
    var itemsCarrito = document.getElementsByClassName('carrito-items')[0];

    //controlamos que el item que intenta ingresar no se encuentre en el carrito
    var nombresItemsCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');
    for(var i=0;i < nombresItemsCarrito.length;i++){
        if(nombresItemsCarrito[i].innerText==titulo){
            alert("El item ya se encuentra en el carrito");
            return;
        }
    }

    var itemCarritoContenido = `
        <div class="carrito-item">
            <img src="${imagenSrc}" width="80px" alt="">
            <div class="carrito-item-detalles">
                <span class="carrito-item-titulo">${titulo}</span>
                <div class="selector-cantidad">
                    <i class="fa-solid fa-minus restar-cantidad"></i>
                    <input type="text" value="1" class="carrito-item-cantidad" disabled>
                    <i class="fa-solid fa-plus sumar-cantidad"></i>
                </div>
                <span class="carrito-item-precio">${precio}</span>
            </div>
            <button class="btn-eliminar">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `
    item.innerHTML = itemCarritoContenido;
    itemsCarrito.append(item);

    //Agregamos la funcionalidad eliminar al nuevo item
     item.getElementsByClassName('btn-eliminar')[0].addEventListener('click', eliminarItemCarrito);

    //Agregmos al funcionalidad restar cantidad del nuevo item
    var botonRestarCantidad = item.getElementsByClassName('restar-cantidad')[0];
    botonRestarCantidad.addEventListener('click',restarCantidad);

    //Agregamos la funcionalidad sumar cantidad del nuevo item
    var botonSumarCantidad = item.getElementsByClassName('sumar-cantidad')[0];
    botonSumarCantidad.addEventListener('click',sumarCantidad);

    //Actualizamos total
    actualizarTotalCarrito();
}

// Aumento en uno la cantidad del elemento seleccionado
function sumarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    console.log(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual++;
    selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
    actualizarTotalCarrito();
}

// Resto en uno la cantidad del elemento seleccionado
function restarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    console.log(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual--;
    if(cantidadActual>=1){
        selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
        actualizarTotalCarrito();
    }
}

// Elimino el item seleccionado del carrito
function eliminarItemCarrito(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    //Actualizamos el total del carrito
    actualizarTotalCarrito();

    //la siguiente funciòn controla si hay elementos en el carrito
    //Si no hay elimino el carrito
    ocultarCarrito();
}

// Función que controla si hay elementos en el carrito. Si no hay, oculto el carrito.
//Funciòn que controla si hay elementos en el carrito. Si no hay oculto el carrito.
function ocultarCarrito(){
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    if(carritoItems.childElementCount==0){
        var carrito = document.getElementsByClassName('carrito')[0];
        carrito.style.marginRight = '-100%';
        carrito.style.opacity = '0';
        carritoVisible = false;
    
        var items =document.getElementsByClassName('contenedor-items')[0];
        items.style.width = '100%';
    }
}

// Actualizamos el total de Carrito
function actualizarTotalCarrito(){
    // Seleccionamos el contenedor carrito
    var carritoContenedor = document.getElementsByClassName('carrito')[0];
    var carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
    var total = 0;

    // Recorremos cada elemento del carrito para actualizar el total
    for (var i = 0; i < carritoItems.length; i++) {
        var item = carritoItems[i];
        var precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
        var precio = obtenerPrecioComoNumero(precioElemento.innerText);
        var cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
        var cantidad = Number(cantidadItem.value);
        total += precio * cantidad;
    }

    total = Math.round(total * 100) / 100;

    // Actualizamos el total visible en el carrito
    document.getElementsByClassName('carrito-precio-total')[0].innerText =
      'S/ ' + total.toLocaleString("es-PE", {minimumFractionDigits: 2, maximumFractionDigits: 2});

    // Guardamos el total calculado en localStorage para su uso en la página de pago
    localStorage.setItem('totalCarrito', total.toFixed(2));
}


// Función para inicializar el filtrado por categoría
function inicializarFiltradoPorCategoria() {
    var categoriaButtons = document.getElementsByClassName('categoria-btn');

    for (var i = 0; i < categoriaButtons.length; i++) {
        categoriaButtons[i].addEventListener('click', function(event) {
            var categoriaSeleccionada = event.target.getAttribute('data-categoria');
            filtrarProductosPorCategoria(categoriaSeleccionada);
        });
    }
}

// Función para filtrar los productos por la categoría seleccionada
function filtrarProductosPorCategoria(categoria) {
    var items = document.getElementsByClassName('item');

    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var categoriaItem = item.getAttribute('data-categoria');

        if (categoria === 'todos' || categoriaItem === categoria) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    }
}

// Función para mostrar todos los productos
function mostrarTodosLosProductos() {
    var items = document.getElementsByClassName('item');
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        item.style.display = 'block';
    }
}

function obtenerPrecioComoNumero(precioString) {
  // Elimina símbolos de moneda y espacios
  let valorLimpio = precioString.replace(/[^0-9.,]/g, '').trim();

  // Si tiene coma como separador decimal, conviértela en punto
  if (valorLimpio.indexOf(',') > -1 && valorLimpio.indexOf('.') === -1) {
    valorLimpio = valorLimpio.replace(',', '.');
  } else if (valorLimpio.indexOf(',') > -1 && valorLimpio.indexOf('.') > -1) {
    // Para formatos tipo 20.000,00
    valorLimpio = valorLimpio.replace(/\./g, '').replace(',', '.');
  }

  let numero = parseFloat(valorLimpio);
  return isNaN(numero) ? 0 : numero;
}


const btnPagar = document.querySelector('.btn-pagar');
const modalCompraExitosa = document.getElementById('modal-compra-exitosa');
const modalAceptarBtn = document.getElementById('modal-aceptar-btn');
const modalCancelarBtn = document.getElementById('modal-cancelar-btn');
btnPagar.addEventListener('click', function(event){
    event.preventDefault();
    modalCompraExitosa.style.display = 'flex';
});

modalAceptarBtn.addEventListener('click', function(){
    const carritoItems = document.querySelector('.carrito-items');
    while(carritoItems.firstChild){
        carritoItems.removeChild(carritoItems.firstChild);
    }
    actualizarTotalCarrito();
    modalCompraExitosa.style.display = 'none';
    window.location.href = 'login.html'; // ajusta esta ruta
});
modalCancelarBtn.addEventListener('click', function(){
    // Solo cierra el modal para que el usuario pueda seguir navegando sin pagar
    modalCompraExitosa.style.display = 'none';
});


document.getElementById('btn-volver-menu').addEventListener('click', function() {
  window.location.href = 'index.html'; // Cambia 'index.html' por la URL de tu menú o página de inicio
});

