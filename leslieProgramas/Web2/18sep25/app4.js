/**
//Funcion que muestre el menu y 
// otra que vaya sumando 
//TAREA HACER FUNCION DE MOSTRAR MENU
//ACTUALIZAR LA COMPRA DEL USUARIO, ELIMINAR Y AGREGAR AL CARRITO
//MENU DE ADMINISTRADOR, DONDE SE PUEDAN AGREGAR PRODUCTOS AL CATALOGO
//chaval
*/

var productos =[
    {nombre: 'camisa',precio:300},
    {nombre: 'pantalon', precio: 500},
    {nombre: 'zapatos',precio:400},
    {nombre:'sombrero',precio:200}
];

var carrito=[];

// Función para mostrar el menú de productos
function mostrarMenu() {
    var menu = "Seleccione un producto para agregar al carrito:\n";
    for (var i = 0; i < productos.length; i++) {
        menu += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }

    menu += (productos.length + 1) + ". Ver Carrito y Total\n";
    menu += (productos.length + 2) + ". Salir\n";
    menu += (productos.length + 3) + ". Borrar del carrito\n";
    menu += (productos.length + 4) + ". Administrador\n";
    return menu;

}


// Función para agregar un producto al carrito
function agregarAlCarrito(index) {
    var productoSeleccionado = productos[index];
    carrito.push(productoSeleccionado);
    console.log('Producto "' + productoSeleccionado.nombre + '" agregado al carrito.');
}

// Función para mostrar el carrito y el total
function mostrarCarritoYTotal() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        var mensajeCarrito = "Carrito de compras:\n";
        var total = 0;
        for (var i = 0; i < carrito.length; i++) {
            mensajeCarrito += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
            total += carrito[i].precio;
        }
        mensajeCarrito += "\nTotal: $" + total;
        console.log(mensajeCarrito);
    }
}

function borrar(){
    if (carrito.length === 0){
        console.log("No hay ningun articulo que borrar");
    }else {
        var eleccion = prompt("Elige que articulo borrar");
        eleccion = Number(eleccion)-1; // se hace numeroo

        if (eleccion >= 0 && eleccion < carrito.length) {
            var eliminado = carrito.splice(eleccion, 1);
            console.log("El artículo borrado fue " + eliminado[0].nombre);
        } else {
            var error =! carrito.length;
            while (prompt("Valor no valido, intente de nuevo")){

            }
        }
    }
}

function administrador(){
    var nombreProduc=prompt("Cual es el nombre del producto que agregaras?");
    var precioPoduc= prompt("Cual es el precio del producto?");
    precioPoduc=Number(precioPoduc);

    var productoNuevo= {nombre: nombreProduc, precio: precioPoduc};
    productos.push(productoNuevo);
}

// Bucle principal de la tienda
var opcion;
do {
    opcion = prompt(mostrarMenu());

    // Convertir la opción ingresada a un número
    opcion = Number(opcion);

    // Verificar si la opción es válida
    if (isNaN(opcion) || opcion < 1 || opcion > productos.length + 4) {
        console.log("Opción no válida, por favor intenta de nuevo.");
    } else if (opcion >= 1 && opcion <= productos.length) {
        // Si la opción es válida y corresponde a un producto, agregar al carrito
        agregarAlCarrito(opcion - 1);
    } else if (opcion === productos.length + 1) {
        // Si elige ver el carrito y el total
        mostrarCarritoYTotal();
    } else if (opcion === productos.length +3){
        borrar();
    } else if (opcion === productos.length +4){
        administrador();
    }
} while (opcion !== productos.length + 2); // El bucle continúa hasta que elige "Salir"

console.log("Gracias por visitar la tienda.");