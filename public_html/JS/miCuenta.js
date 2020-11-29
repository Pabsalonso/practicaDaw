$(document).ready(function(){
    
    muestraMainInfo();
    
    $('#cierraSesion').click(function(){
         $.session.clear();
         window.location.replace("./index.html");
    });
   
    $('#infoCuenta').click(function(){
        muestraMainInfo();

    });//fin boton infocuenta
    
    $(document).on('submit', '#formularioLogin', function() {
        checkEmailValidity();
        $.getJSON("./JS/datosUsers.json",function (data){
            var idCliente=$.session.get('id');
            var form = $('#formularioEditInfo').serializeArray();

            $.each(data.User,function(key,value){
                if(parseInt(idCliente)=== parseInt(data.User[key]['id'])){
                    data.User[key]['correo'] = form[0]['value'];
                    data.User[key]['nombre'] = form[1]['value'];
                    data.User[key]['apellido'] = form[2]['value'];
                    data.User[key]['telefono'] = form[3]['value'];
                    return false;
                }
            });
            var newData = JSON.stringify(data);
            jQuery.post('./JS/datosUsers.json', {
                newData: newData
            }, function(response){
                // response could contain the url of the newly saved file
            });
        });
    });
    
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