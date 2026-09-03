const contenedorRanking = document.getElementById("lista-ranking");

for (let i = 0; i < ranking.length; i++) {

    const equipoRanking = document.createElement("article");

    equipoRanking.innerHTML = `
        <h3>#${ranking[i].posicion} - ${ranking[i].equipo}</h3>

        <p>Puntos: ${ranking[i].puntos}</p>

        <p>Victorias: ${ranking[i].victorias}</p>

        <p>Derrotas: ${ranking[i].derrotas}</p>
    `;

    contenedorRanking.appendChild(equipoRanking);
}