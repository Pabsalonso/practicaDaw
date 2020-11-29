# Práctica DAW 1 - Sprint 2

Segundo sprint del proyecto de la asignatura Diseño de Aplicaciones Web I

**Grupo**: G6

**Alumnos**:

* Alberto Corredera Romero
* Pablo Alonso Galván
* Francisco Javier López-Dufour Morales



## Objetivos Sprint 2

* **Responsive Web Design**. Añadir **_Responsible Design_** a las páginas del aplicativo web para permitir que se adaptan a los diferentes tamaños de pantalla.

    Para llevar a cabo el diseño adaptable hemos utilizado principalmente Bootstrap, un framework CCS dedicado al front-end de las páginas web.

* **Native Client Side Validation for Web Forms**. Validación formularios web en el lado del cliente.

    Para llevar a cabo la validación hemos utilizado JavaScript y la característica introducida a partir de HTML5 conocida como **constraint validation** que utiliza atributos como `min`, `max`, `step`, `pattern`, `required`, `maxlength` y `type` para determinar la validez de formularios cuando estos son enviados.

* Uso de **JavaScript**, **jQuery **y **JSON **para **añadir contenido de manera dinámica** al aplicativo web. 

    * Manipulación de ficheros JSON usando jQuery.
    * Manipulación del DOM usando JavaScript.

## Enlaces

* Repositorio **Github**: https://github.com/Pabsalonso/practicaDaw
* Tablero Kanban (**Trello**): https://trello.com/b/EuROSxDL/sprint-2
* Mockups (**Figma**): https://www.figma.com/file/1UGICNYUV99Y6sTSCFdL7B/Mockups



---



# Práctica DAW 1 - Sprint 1 

## Aplicativo Web: La casa de la πzza

### Requisitos de Software

Nuestro aplicativo web consistirá en un servicio web de una cadena de comida rápida (una pizzería) que ofrece diferentes funcionalidades. 

La aplicación consta de una página principal, en la que se mostrarán artículos y enlaces con información de servicios ofrecidos por el restaurante. Todas las páginas del portal web constaran de un _header_ con el nombre del restaurante y el logo, una pantalla de navegación principal para acceder a los servicios y un _footer_. 

Existen 3 tipos de usuarios: 

1. **Usuario No Identificado**: 
   * Un usuario no identificado tendrá la opción de identificarse como usuario o crear una cuenta, donde deberá añadir sus datos como nombre, apellido y domicilio. 
   * Podrá acceder a la carta del restaurante, además de poder ver información más detallada de productos individuales y su precio. 
   * Podrá acceder a información sobre menús, pero no podrá aplicar ofertas en sus pedidos. 
   * Tendrá acceso a una lista de restaurantes con sus horarios y números de teléfono, al que deberá llamar si desea pedir a domicilio. 

2. **Usuario Administrador**:

   *  Un usuario que tenga el rol de administrador podrá modificar información de la carta, las ofertas o los restaurantes. 
   * Por ejemplo, añadir, eliminar o modificar productos, promociones, obtener información de pedidos en curso, modificar dirección, teléfono y horario de restaurantes, etc.

3. **Usuario Identificado**:

   Los usuarios identificados tendrán acceso a todos los servicios disponibles para los no identificados, y además podrán: 

   * Al consultar los diferentes productos de la carta, podrá añadir al carrito aquellos que desea comprar. 
   * Gestionar su carrito de manera que pueda consultar los productos que va a pedir, además de modificar la información. Por ejemplo: añadir uno a un tipo de producto, quitar uno o eliminarlo directamente. 
   * En la información de su carrito el usuario podrá ver el precio total del carrito además de poder decidir pedirlo, y el método de pedido, sí a domicilio o recoger en un plazo predeterminado. 
   * El usuario podrá acceder a sus pedidos pasados donde tendrá la opinión de repetir un pedido, y a sus pedidos activos. 
   * El usuario tiene la posibilidad de aplicar códigos de oferta del restaurante a la hora de hacer el pedido. 
   * El usuario puede modificar su información de contacto, nombre, apellido, domicilio, método de pago favorito, etc. 
   * Al igual que los registros de pedido, el usuario tendrá un registro de las ubicaciones a las que ha pedido comida anteriormente, pudiendo eliminar del registro o añadir nuevas. 
