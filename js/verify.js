document.addEventListener("DOMContentLoaded", function() {
  const inputs = document.querySelectorAll('.code-inputs input');
  const form = document.getElementById('verifyForm');

  // Manejo de inputs para el código de verificación
  inputs.forEach((input, idx) => {
    input.addEventListener('input', function(e) {
      // Solo permite dígitos
      this.value = this.value.replace(/[^0-9]/g, '');

      // Auto-mover foco al siguiente input si se ingresó un dígito
      if (this.value.length === 1 && idx < inputs.length - 1) {
        inputs[idx + 1].focus();
      }
    });

    input.addEventListener('keydown', function(e) {
      if (e.key === "Backspace") {
        if (this.value === "" && idx > 0) {
          inputs[idx - 1].focus();
        }
      } else if (e.key >= "0" && e.key <= "9") {
        // Permite ingreso de números
      } else if (e.key !== "Tab") {
        e.preventDefault();
      }
    });
  });

  // Enfocar el primer input al cargar la página
  if (inputs.length > 0) {
    inputs[0].focus();
  }

  // Captura el submit del formulario
  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const correo = document.getElementById('correo').value.trim();
    const codigo = Array.from(inputs).map(input => input.value).join('');

    // Validaciones básicas
    if (!correo) {
      alert('Por favor, ingresa tu correo.');
      return;
    }
    if (codigo.length !== inputs.length) {
      alert(`Por favor, ingresa el código completo de ${inputs.length} dígitos.`);
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/auth/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo, codigo })
      });

      if (response.ok) {
        alert('Usuario verificado correctamente. Serás redirigido al login.');
        window.location.href = 'login.html'; // Ajusta la ruta al login si es necesario
      } else {
        const errorText = await response.text();
        alert('Error: ' + errorText);
      }
    } catch (error) {
      alert('Error de conexión: ' + error.message);
    }
  });
});
