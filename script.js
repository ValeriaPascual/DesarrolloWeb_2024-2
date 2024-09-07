// Navegación entre paginas
document.getElementById('registerBtn')?.addEventListener('click', function() {
    window.location.href = 'register.html';
});

document.getElementById('loginBtn')?.addEventListener('click', function() {
    window.location.href = 'login.html';
});

document.getElementById('backBtn')?.addEventListener('click', function() {
    window.location.href = 'index.html';
});

// Validacion del registro
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();  // Prevenir el envio del formulario

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
    }

    // Aquí es donde se enviarian los datos a la API
    console.log("Registro exitoso");
    window.location.href = 'login.html';  // Redirige a la pagina de login despues del registro
});

// Validación de login
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();  // Prevenir el envío del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aquí es donde se validarian los datos con la API
    console.log("Inicio de sesión exitoso");
    alert("Inicio de sesión exitoso");  // Mensaje de ejemplo confirmacion
});