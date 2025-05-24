// register.js

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aqui reemplazar con backend .NET y base de datos SQL
    if (fullname && email && username && password) {
        document.getElementById('registerMsg').classList.remove('d-none');
        document.getElementById('registerForm').reset();
    } else {
        alert('Todos los campos son obligatorios.');
    }
});
