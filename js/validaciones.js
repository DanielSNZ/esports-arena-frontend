const formulario = document.getElementById("form-inscripcion");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombreEquipo = document.getElementById("nombre-equipo");
    const correoCapitan = document.getElementById("correo-capitan");
    const torneo = document.getElementById("torneo");
    const cantidadJugadores = document.getElementById("cantidad-jugadores");

    const errorEquipo = document.getElementById("error-equipo");
    const errorCorreo = document.getElementById("error-correo");
    const errorTorneo = document.getElementById("error-torneo");
    const errorJugadores = document.getElementById("error-jugadores");

    let formularioValido = true;

    // Limpiamos mensajes anteriores
    errorEquipo.textContent = "";
    errorCorreo.textContent = "";
    errorTorneo.textContent = "";
    errorJugadores.textContent = "";

    // Validar nombre del equipo
    if (nombreEquipo.value.trim() === "") {
        errorEquipo.textContent = "Debes ingresar el nombre del equipo.";
        formularioValido = false;
    }

    // Validar correo
    if (correoCapitan.value.trim() === "") {
        errorCorreo.textContent = "Debes ingresar el correo del capitán.";
        formularioValido = false;
    } else if (!correoCapitan.value.includes("@")) {
        errorCorreo.textContent = "Ingresa un correo válido.";
        formularioValido = false;
    }

    // Validar torneo
    if (torneo.value === "") {
        errorTorneo.textContent = "Debes seleccionar un torneo.";
        formularioValido = false;
    }

    // Validar cantidad de jugadores
    if (cantidadJugadores.value === "") {
        errorJugadores.textContent = "Debes ingresar la cantidad de jugadores.";
        formularioValido = false;
    } else if (
        cantidadJugadores.value < 1 ||
        cantidadJugadores.value > 10
    ) {
        errorJugadores.textContent = "La cantidad debe estar entre 1 y 10.";
        formularioValido = false;
    }

    // Si todo está correcto
    if (formularioValido) {
        alert("Inscripción enviada correctamente.");
        formulario.reset();
    }

});