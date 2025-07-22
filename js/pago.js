(function(){
  const form = document.getElementById('form-pago');
  const botonPagar = document.getElementById('btn-pagar');
  const mensajeExito = document.getElementById('mensaje-exito');
  const botonCancelar = document.getElementById('btn-cancelar');

  const campos = {
    nombre: {
      input: document.getElementById('nombre'),
      error: document.getElementById('error-nombre'),
      validar: val => val.trim().length > 2,
      mensajeError: 'Por favor, ingresa tu nombre completo (mínimo 3 caracteres).'
    },
    correo: {
      input: document.getElementById('correo'),
      error: document.getElementById('error-correo'),
      validar: val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
      mensajeError: 'Por favor, ingresa un correo válido.'
    },
    tarjeta: {
      input: document.getElementById('tarjeta'),
      error: document.getElementById('error-tarjeta'),
      validar: val => {
        const numeros = val.replace(/\s+/g, '');
        return /^\d{13,19}$/.test(numeros);
      },
      mensajeError: 'Ingresa un número de tarjeta válido (13-19 dígitos).'
    },
    expiracion: {
      input: document.getElementById('expiracion'),
      error: document.getElementById('error-expiracion'),
      validar: val => {
        if(!val) return false;
        const hoy = new Date();
        const [year, month] = val.split('-').map(Number);
        // Crear fecha primer día del mes siguiente a expiracion para permitir todo el mes
        const fechaExp = new Date(year, month, 1);
        return fechaExp > new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
      },
      mensajeError: 'Selecciona una fecha válida (no expirada).'
    },
    cvv: {
      input: document.getElementById('cvv'),
      error: document.getElementById('error-cvv'),
      validar: val => /^\d{3,4}$/.test(val),
      mensajeError: 'Ingresa un CVV válido (3 o 4 dígitos).'
    }
  };

  function validarCampo(campo){
    const valor = campo.input.value;
    if(campo.validar(valor)){
      campo.error.textContent = '';
      return true;
    } else {
      campo.error.textContent = campo.mensajeError;
      return false;
    }
  }

  function validarFormulario(){
    let valido = true;
    for(let key in campos){
      if(!validarCampo(campos[key])){
        valido = false;
      }
    }
    //console.log('Formulario válido:', valido); // para debug si quieres
    return valido;
  }

  function actualizarEstadoBoton(){
    if(validarFormulario()){
      botonPagar.disabled = false;
      botonPagar.classList.add('enabled');
    } else {
      botonPagar.disabled = true;
      botonPagar.classList.remove('enabled');
    }
  }

  // Escuchar input y change para los campos, así capturamos mejor todos los eventos
  for(let key in campos){
    const input = campos[key].input;
    input.addEventListener('input', () => {
      validarCampo(campos[key]);
      actualizarEstadoBoton();
      mensajeExito.textContent = '';
    });
    input.addEventListener('change', () => {
      validarCampo(campos[key]);
      actualizarEstadoBoton();
      mensajeExito.textContent = '';
    });
  }

  // Evento para botón cancelar
  if(botonCancelar){
    botonCancelar.addEventListener('click', () => {
      window.location.href = 'user.html';  // Ajusta según tu ruta
    });
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    if(validarFormulario()){
      botonPagar.disabled = true;
      botonPagar.classList.remove('enabled');
      mensajeExito.textContent = 'Procesando pago... ☕️';

      setTimeout(() => {
        mensajeExito.textContent = '¡Pago realizado con éxito! Gracias por elegir El Rincón del Aroma ☕️';
        form.reset();
        actualizarEstadoBoton();

        setTimeout(() => {
          window.location.href = 'agradecimiento.html';  // Ajusta al URL que uses
        }, 2000);
      }, 2000);
    }
  });

  // Inicializar estado correcto al inicio (por si hay valores pre-cargados)
  actualizarEstadoBoton();
})();
