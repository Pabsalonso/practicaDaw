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
    
    var freq=1000;
    
    function startAjaxCalls(){
        setTimeout(function(){
                loadProduct();
                startAjaxCalls();
            },
            freq
        );
    }
    
    loadProduct();
    startAjaxCalls();
    

    
    function loadProduct(){
        var idURL = getUrlParameter('productid');
        var productTypeURL =getUrlParameter('product-type');
        $.getJSON("./JS/datosMenu.json",function (menu){

            $.each(menu,function(key,value){       //bucle que itera por el json
                if(menu[key].length===0) //como comprobar que esta vacio
                return;
                
                $.each(this, function(foodType, values){    //bucle que itera por los arrays
                    if(parseInt(this['id'],10) === parseInt(idURL,10)){
                        // Imagen del producto
                        document.getElementById("img-product").src = './images/menu/'+key+'/' + this['file']; 
                        document.getElementById("img-product").alt = '" alt="Imagen de ' + this['nombre'];
                        //document.getElementById("img-product").width = '';
                        //document.getElementById("img-product").height = '';
                        

                        
                        // Título de la página
                        var element=document.getElementById("tituloPage");
                        element.innerHTML=this['nombre']+" - Informacion de producto";

                        // Título del producto
                        element =document.getElementById("tituloProducto");
                        element.innerHTML=this['nombre'];

                        // Ingedientes
                        element =document.getElementById("ingredientesProducto");
                        element.innerHTML=this['ingredientes'];
                        
                        element =document.getElementById("descripcionProducto");
                        element.innerHTML=this['descripcion'];
                        return false;
                    }
                });
            });
        });
    }
    
});
