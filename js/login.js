document.getElementById('loginForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const correo = document.getElementById('correo').value;
  const password = document.getElementById('password').value;

  try {
    const res = await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ correo, password })
    });

    if (res.ok) {
      // La respuesta ahora es JSON con nombre y correo
      const usuario = await res.json();
      // Guardamos los datos en localStorage para usarlos en el dashboard
      localStorage.setItem('usuario', JSON.stringify(usuario));
      alert('Login exitoso.');
      window.location.href = 'user.html'; // Redirige a dashboard
    } else {
      // Si hay error, mostramos el texto que envía el backend
      const errorMsg = await res.text();
      alert(errorMsg);
    }
  } catch (error) {
    alert('Error en la conexión: ' + error.message);
  }
});
