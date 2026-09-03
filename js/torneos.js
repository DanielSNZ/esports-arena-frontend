const contenedorTorneos = document.getElementById("lista-torneos");

for (let i = 0; i < torneos.length; i++) {

    const torneo = document.createElement("article");

    let boton = "";
    let claseEstado = "";

    // Revisamos el estado del torneo
    if (torneos[i].estado === "ABIERTO") {

    const perfilActual = localStorage.getItem("perfil");

    if (perfilActual === "JUGADOR") {
        boton = `<button onclick="irAInscripcion()">Inscribirse</button>`;
    } else {
        boton = `<button disabled>Solo jugadores</button>`;
    }

    claseEstado = "estado-abierto";

    } else if (torneos[i].estado === "EN CURSO") {

        boton = `<button disabled>Inscripciones cerradas</button>`;
        claseEstado = "estado-curso";

    } else {

        boton = `<button>Ver resultados</button>`;
        claseEstado = "estado-finalizado";
    }

    // Creamos el contenido de cada torneo
    torneo.innerHTML = `
        <h3>${torneos[i].nombre}</h3>

        <p>Juego: ${torneos[i].juego}</p>

        <p>Modalidad: ${torneos[i].modalidad}</p>

        <p>Cupos: ${torneos[i].cupos}</p>

        <p class="${claseEstado}">
            Estado: ${torneos[i].estado}
        </p>

        ${boton}
    `;

    // Agregamos el torneo a la página
    contenedorTorneos.appendChild(torneo);
}

// Esta función nos lleva a la página de inscripción
function irAInscripcion() {
    window.location.href = "inscripcion.html";
}