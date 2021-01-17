$(document).ready(function(){
        
    function checkEmailValidity() {
        var inputEmail = document.getElementById("input-edit-email");
        if (inputEmail.patternMismatch) {
            alert("Por favor, introduce un email válido (p.e. abc3@email.com)");
        }
    }
    
    
});