import { auth } from './firebase.js';

function logoutUser() {
    auth.signOut()
        .then(() => {
            console.log("Usuario desconectado.");
            window.location.href = "index.html";  // Redirige a la página de inicio
        })
        .catch((error) => {
            console.error("Error al cerrar sesión: ", error);
        });
}

document.querySelector('.btn-logout').addEventListener('click', function (e) {
    e.preventDefault();
    logoutUser();
});