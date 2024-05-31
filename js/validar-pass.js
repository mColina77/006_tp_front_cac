const inicioSesion = document.getElementById("formularioInicioSesion");

inicioSesion.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita el envío automático del formulario

    const correoElectronico = document.getElementById('email').value;
    const pass = document.getElementById('password').value;

    // Validamos el correo electrónico
    if (!validarEmail(correoElectronico)) {
        alert("Correo electrónico no válido");
        return;
    }

    // Validamos que la contraseña tenga una longitud mínima de 8 caracteres
    if (pass.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres");
        return;
    }

    // Si la validación es correcta, se puede enviar los datos a tu servidor
    console.log("¡Inicio de sesión exitoso!");
    alert("¡Inicio de sesión exitoso!");
});

function validarEmail(correo) {
    const expresionRegular = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return expresionRegular.test(correo);
}