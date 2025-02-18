import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"
import { auth } from './firebase.js';

function registerUser() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const distrito = document.getElementById('distrito').value;
    const rol = document.querySelector('input[name="rol"]:checked') ? document.querySelector('input[name="rol"]:checked').id : 'no_rol';
    const rolOtro = document.getElementById('rol-otro').value;

    if (!nombre || !apellido || !email || !password || !distrito) {
        alert("Por favor complete todos los campos.");
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            const userData = {
                nombre: nombre,
                apellido: apellido,
                email: email,
                distrito: distrito,
                rol: rol,
                rolOtro: rolOtro || null
            };

            db.collection("usuarios").doc(user.uid).set(userData)
                .then(() => {
                    alert("Cuenta creada con éxito.");
                    window.location.href = "home.html";
                })
                .catch((error) => {
                    console.error("Error al guardar los datos: ", error);
                    alert("Error al guardar los datos. Intenta nuevamente.");
                });
        })
        .catch((error) => {
            console.error("Error al crear la cuenta: ", error);
            alert("Error al crear la cuenta: " + error.message);
        });
}

document.querySelector('.btn-crear').addEventListener('click', function (e) {
    e.preventDefault();
    registerUser();
});
