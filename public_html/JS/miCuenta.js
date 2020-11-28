$(document).ready(function(){
    
    muestraMainInfo();
    
    $('#cierraSesion').click(function(){
         $.session.clear();
         window.location.replace("./index.html");
    });
   
    $('#infoCuenta').click(function(){
        muestraMainInfo();
//        $.getJSON("./JS/datosUsers.json",function (data){
//            var idCliente=$.session.get('id');
//            $.each(data.User,function(key,value){
//                if(parseInt(idCliente)=== parseInt(data.User[key]['id'])){
//                    alert("funciono");
//                    
//                    document.getElementById("bienvenidoCliente").innerHTML = "Bienvenido, " + data.User[key]['nombre'];
//                    $("#input-edit-email").attr("value",data.User[key]['email']);
//
//                    return false;
//                }
//            });
//            
//        });
    });//fin boton infocuenta
    
    function checkEmailValidity() {
        var inputEmail = document.getElementById("input-edit-email");
        if (inputEmail.patternMismatch) {
            alert("Por favor, introduce un email válido (p.e. abc3@email.com)");
        }
    }
    
    function muestraMainInfo(){
        $.getJSON("./JS/datosUsers.json",function (data){
            var idCliente=$.session.get('id');
            $.each(data.User,function(key,value){
                if(parseInt(idCliente)=== parseInt(data.User[key]['id'])){
                    
                    document.getElementById("bienvenidoCliente").innerHTML = "Bienvenido, " + data.User[key]['nombre'];
                    $("#input-edit-email").attr("value",data.User[key]['correo']);
                    $("#input-edit-name").attr("value",data.User[key]['nombre']);
                    $("#input-edit-surname").attr("value",data.User[key]['apellido']);
                    $("#input-edit-phone").attr("value",data.User[key]['telefono']);
                    return false;
                }
            });
            
        });
    }
    
    
});
