const selectorPerfil = document.getElementById("perfil");
const mensajePerfil = document.getElementById("mensaje-perfil");

// Recuperar perfil guardado
const perfilGuardado = localStorage.getItem("perfil");

if (perfilGuardado) {
    selectorPerfil.value = perfilGuardado;
    mensajePerfil.textContent = "Perfil actual: " + perfilGuardado;
}

// Guardar perfil cuando cambie
selectorPerfil.addEventListener("change", function() {

    const perfilSeleccionado = selectorPerfil.value;

    mensajePerfil.textContent = "Perfil actual: " + perfilSeleccionado;

    localStorage.setItem("perfil", perfilSeleccionado);
});