// login.js

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Lógica simulada, reemplazar por llamada al backend con .NET y SQL
    if (username === 'admin' && password === 'admin123') {
        window.location.href = 'dashboard.html'; // Redireccionar si el login es exitoso
    } else {
        const errorMsg = document.getElementById('errorMsg');
        errorMsg.classList.remove('d-none');
    }
});
