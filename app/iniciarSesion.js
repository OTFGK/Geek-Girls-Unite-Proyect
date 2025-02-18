import { auth } from './firebase.js';

function loginUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert("Por favor complete ambos campos.");
        return;
    }

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Usuario logueado: ", user);
            window.location.href = "pagina_bienvenida.html";  // Redirige a una página de bienvenida
        })
        .catch((error) => {
            console.error("Error al iniciar sesión: ", error);
            alert("Error al iniciar sesión: " + error.message);
        });
}

document.querySelector('.btn-login').addEventListener('click', function (e) {
    e.preventDefault();
    loginUser();
});