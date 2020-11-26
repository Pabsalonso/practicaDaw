/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
    };
    
    loadProduct();
    
    function loadProduct(){
        var menuMuestra ="";
        var idURL =getUrlParameter('productid');
        $.getJSON("./JS/datosMenu.json",function (menu){

            $.each(menu,function(key,value){       //bucle que itera por el json
                if(menu[key].length===0) //como comprobar que esta vacio
                return;
                
                $.each(this, function(foodType, values){    //bucle que itera por los arrays
                    if(parseInt(this['id'],10) === parseInt(idURL,10)){
                        var element =document.getElementById("tituloProducto");
                        element.innerHTML=this['nombre'];
                        return false;
                    }
                });
            });
            $('#menu').append(menuMuestra); 
        });
    }
    
});

