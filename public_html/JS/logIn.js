$(document).ready(function(){
    $("#bienvenido").hide();
    
    $(document).on('submit', '#formularioLogin', function() {
      // do your things
      $.getJSON("./JS/datosUsers.json",function (data){
            var form = $('#formularioLogin').serializeArray();
            
            $.each(data.User,function(key,value){ 
                if(form[0]['value']=== data.User[key]['correo']|| form[0]['value'] === data.User[key]['nick']){
                    if(form[1]['value'] === data.User[key]['passwd']){
                        
                        $("#bienvenido").show();
                        $("#formularioLogin").hide();
                        var element=document.getElementById("bienvenidoCliente");
                        element.innerHTML= "Bienvenido de nuevo, " + data.User[key]['nick'];
                        $.session.set('id',data.User[key]['id']);
                        return false;
                    }
                    //luego cambiar la interfaz y todo. Crear script que detecte si hay sesion iniciada
                }
            }); //end loop over users
            //aqui alertar de que no ha funcionado
        });
    return false;
    });
});//end doc ready