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

            $.each(menu,function(key,value){       //bucle que itera por el json
                if(menu[key].length===0) //como comprobar que esta vacio
                return;
                menuMuestra += '<div id="content" class=' + 
                        '"row justify-content-center menu-section">' +
                        '<div class="col-xs-12 col-sm-12 col-md-12 menu-section-title"> <h3>' +
                        key+ 
                        '</h3> </div>'; 


                $.each(this, function(foodType, values){    //bucle que itera por los arrays
                    menuMuestra += 
                                '<div class="col-xs-12 col-sm-6 col-md-3 item">'+
                                '<div class="menu-product">' +
                                '<h4 id="nombre">' + this['nombre']+ '</h4>' +
                                '<img src="./images/carta/' +  'horizontal_pizza.jpg" alt="">' +//Aqui cambiar el nombre de la`pizza en la ruta a this[nombre].jpg
                                '<a href="./product.html?productid=' + this['id'] + '" class="menu-more">Ver</a>' + //y aqui seria añadir el link a la pagina de articulo
                                '<a href="" class="menu-add">Añadir</a>'+    
                                '</div> </div>';
                });
                menuMuestra+= '</div>';
            });
            $('#menu').append(menuMuestra); 
        });
    }
});

