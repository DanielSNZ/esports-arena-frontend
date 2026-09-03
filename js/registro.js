const formularioRegistro = document.getElementById("form-registro");

formularioRegistro.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre");
    const nickname = document.getElementById("nickname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmarPassword = document.getElementById("confirmar-password");

    const errorNombre = document.getElementById("error-nombre");
    const errorNickname = document.getElementById("error-nickname");
    const errorEmail = document.getElementById("error-email");
    const errorPassword = document.getElementById("error-password");
    const errorConfirmar = document.getElementById("error-confirmar");

    let formularioValido = true;

    errorNombre.textContent = "";
    errorNickname.textContent = "";
    errorEmail.textContent = "";
    errorPassword.textContent = "";
    errorConfirmar.textContent = "";

    if (nombre.value.trim() === "") {
        errorNombre.textContent = "Debes ingresar tu nombre.";
        formularioValido = false;
    }

    if (nickname.value.trim() === "") {
        errorNickname.textContent = "Debes ingresar un nickname.";
        formularioValido = false;
    }

    if (email.value.trim() === "") {
        errorEmail.textContent = "Debes ingresar tu correo.";
        formularioValido = false;
    } else if (!email.value.includes("@")) {
        errorEmail.textContent = "Ingresa un correo válido.";
        formularioValido = false;
    }

    if (password.value.length < 8) {
        errorPassword.textContent = "La contraseña debe tener mínimo 8 caracteres.";
        formularioValido = false;
    }

    if (password.value !== confirmarPassword.value) {
        errorConfirmar.textContent = "Las contraseñas no coinciden.";
        formularioValido = false;
    }

    if (formularioValido) {
        alert("Cuenta creada correctamente.");
        formularioRegistro.reset();
    }

});