// Scripts - Form validation 

var inputEmail = document.getElementById("input-email");
var inputReEmail = document.getElementById("input-re-email");
var inputPass = document.getElementById("input-pass");
var inputRePass = document.getElementById("input-re-pass");

var button = document.querySelector(".form-button");

function checkEmailValidity() {
    if (inputEmail.patternMismatch) {
        inputReEmail.setCustomValidity("Por favor, introduce un email válido (p.e. abc3@email.com)");
    }
    if (inputEmail.value !== inputReEmail.value) {
        inputReEmail.setCustomValidity("¡Los correos no coinciden!");
    } else {
        inputReEmail.setCustomValidity("");
    }
}

var pass_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,32}$/;

function checkPasswordValidity() {
    if (pass_regex.test(inputPass.value) !== true) {
        inputPass.setCustomValidity("Complejidad insuficiente: Entre 8-32 caracteres. Al menos una letra mayúscula. "
            + "Al menos una letra minúscula. Al menos un dígito. No espacios en blanco. Al menos un caracter especial. ");
    } else {
        inputPass.setCustomValidity("");
    }

    if (inputRePass.value !== inputPass.value) {
        inputRePass.setCustomValidity("¡Las contraseñas no coinciden!");
    } else {
        inputRePass.setCustomValidity("");
    }
}