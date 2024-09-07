
document.getElementById('registerBtn')?.addEventListener('click', function() {
    window.location.href = 'register.html';
});

document.getElementById('loginBtn')?.addEventListener('click', function() {
    window.location.href = 'login.html';
});

document.getElementById('catalogoBtn')?.addEventListener('click', function() {
    window.location.href = 'catalogo.html';
});

document.getElementById('backBtn')?.addEventListener('click', function() {
    window.location.href = 'index.html';
});

document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
    }

    console.log("Registro exitoso");
    window.location.href = 'catalogo.html';
});

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    alert("Inicio de sesión exitoso");
});