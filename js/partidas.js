const contenedorPartidas = document.getElementById("lista-partidas");

for (let i = 0; i < partidas.length; i++) {

    const partida = document.createElement("article");

    partida.innerHTML = `
        <h3>${partidas[i].torneo}</h3>

        <p>Equipo local: ${partidas[i].equipoLocal}</p>

        <p>Equipo visitante: ${partidas[i].equipoVisitante}</p>

        <p>Fecha: ${partidas[i].fecha}</p>

        <p>Estado: ${partidas[i].estado}</p>
    `;

    contenedorPartidas.appendChild(partida);
}