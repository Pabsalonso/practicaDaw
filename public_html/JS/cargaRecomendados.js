$(document).ready(function () {
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

    var freq = 1000;

    function startAjaxCalls() {
        setTimeout(function () {
            loadProduct();
            startAjaxCalls();
        },
            freq
        );
    }

    loadMenu();
    startAjaxCalls();

    function loadMenu() {
        var menuMuestra = '';

        $.getJSON("./JS/datosMenu.json", function (menu) {

            // Bucle que itera por el json
            $.each(menu, function (key, value) {
                // Como comprobar que esta vacio
                if (menu[key].length === 0)
                    return;

                // Vamos a cargar solamente los productos que recomendamos
                if (key === 'nuestras recomendaciones') {

                    menuMuestra += '<div class="row justify-content-center menu-section">';

                    //bucle que itera por los arrays
                    $.each(this, function (foodType, values) {    
                        menuMuestra += '<div col-xs-12 col-sm-6 col-md-2 item">';
                        menuMuestra +=
                            '<div class="menu-product recommendation-product responsive-texts">' +
                            '<h4>' + this['nombre'] + '</h4>' +
                            '<figure><img src="./images/menu/' + key + '/' + this['file'] + '" alt="Imagen de ' + this['nombre'] + '" width="355" height="240"></figure>' +//Aqui cambiar el nombre de la pizza en la ruta a this[nombre].jpg
                            '<a href="./product.html?productid=' + this['id'] + "&product-type=" + key + '" class="menu-more responsive-texts">Ver</a>' + //y aqui seria añadir el link a la pagina de articulo
                            '<a href="" class="menu-add responsive-texts">Añadir</a>' +
                            '</div>';
                        menuMuestra += '</div>';
                    });
                    menuMuestra += '</div>';
                }
                
            });
            $('#menu').append(menuMuestra);

        });
    }
});
