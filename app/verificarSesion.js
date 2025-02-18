import { auth } from './firebase.js';

auth.onAuthStateChanged(function(user) {
    if (user) {
        console.log("Usuario autenticado:", user);
        // Puedes redirigir al usuario a una página de bienvenida si ya está autenticado
    } else {
        console.log("Usuario no autenticado.");
        // Puedes redirigir al usuario a la página de inicio de sesión si no está autenticado
        window.location.href = "index.html";
    }
});