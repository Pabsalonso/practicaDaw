/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    var freq=5000;
    
    function startAjaxCalls(){
        setTimeout(function(){
                ('#menu #content').remove();
                loadMenu();
                startAjaxCalls();
            },
            freq
        );
    }
    
    loadMenu();
    startAjaxCalls();
    

    function loadMenu(){
        var menuMuestra ='';

        $.getJSON("./JS/datosMenu.json",function (menu){

            // Bucle que itera por el json
            $.each(menu,function(key,value){       
                // Como comprobar que esta vacio
                if(menu[key].length===0) 
                    return;
                
                menuMuestra += '<div class="row justify-content-center menu-section">';
                menuMuestra += '<div class="col-xs-12 col-sm-12 col-md-12 responsive-texts menu-section-title"><h3>' + key + '</h3></div>';

                $.each(this, function(foodType, values){    //bucle que itera por los arrays
                    menuMuestra += '<div col-xs-12 col-sm-6 col-md-2 item">';
                    menuMuestra += 
                                '<div class="menu-product responsive-texts">' +
                                '<h4>' + this['nombre']+ '</h4>' +
                                '<figure><img src="./images/menu/'+key+'/' + this['file'] + '" alt="Imagen de ' + this['nombre'] + '" width="355" height="240"></figure>' +//Aqui cambiar el nombre de la pizza en la ruta a this[nombre].jpg
                                '<a href="./product.html?productid=' + this['id'] + "&product-type=" + key + '" class="menu-more responsive-texts">Ver</a>' + //y aqui seria añadir el link a la pagina de articulo
                                '<a href="" class="menu-add responsive-texts">Añadir</a>'+    
                                '</div>';
                    menuMuestra += '</div>';
                });
                menuMuestra += '</div>';
            });
            $('#menu').append(menuMuestra); 
        });
    }
});

