$(document).ready(function(){
    var freq=100;
    
    function startAjaxCalls(){
        setTimeout(function(){
                checkSession();
                startAjaxCalls();
            },
            freq
        );
    }
    
    checkSession();
    startAjaxCalls();
    
    function checkSession(){
        var prueba = $.session.get('id');
        if(prueba){
            $("#cesta").show();
            $("#iniciaSesion").hide();
            $("#registrarse").hide();
            $("#miCuenta").show();

        }
        else{
            $("#cesta").hide();
            $("#iniciaSesion").show();
            $("#registrarse").show();
            $("#miCuenta").hide();

        }
    }
});

