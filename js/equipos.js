const contenedorEquipos = document.getElementById("lista-equipos");

for (let i = 0; i < equipos.length; i++) {

    const equipo = document.createElement("article");

    equipo.innerHTML = `
        <h3>${equipos[i].nombre}</h3>

        <p>Juego: ${equipos[i].juego}</p>

        <p>Capitán: ${equipos[i].capitan}</p>

        <p>Estado: ${equipos[i].estado}</p>
    `;

    contenedorEquipos.appendChild(equipo);
}