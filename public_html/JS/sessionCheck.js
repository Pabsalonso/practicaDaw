/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    var freq=1000;
    
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
        if(prueba !== null){
            $("#cesta").show();
            $("#iniciaSesion").hide();
            $("#registrarse").hide();
            $("#micuenta").show();

        }
        else{
            $("#cesta").hide();
            $("#iniciaSesion").show();
            $("#registrarse").show();
            $("#micuenta").hide();

        }
    }
});

