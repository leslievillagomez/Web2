/**
 * 
 */
let inventario =[];
function mostrarMenu(){
    return parseInt(prompt(
        `Opciones disponibles
        1.- Agregar producto
        2.- Mostrar todos los productos
        3.- Buscar productos por nombre
        4.- Salir
        Elige opcion:
        `
    ));
}

function agregarProducto(){
    let nombre= prompt("Ingresa el nombre del producto:");
    let cantidad=parseInt(prompt("Ingresa la cantidad del producto"));
    let precio= parseFloat(prompt("Ingresa el precio del producto:"));
    
    if(cantidad>0 && precio>0){
        let producto={
            nombre:nombre,
            cantidad:cantidad,
            precio:precio
        };
        inventario.push(producto);
        alert("Producto agregado :D");
    }else{
        alert("La cantidad y precio deben ser numeros positivos");
    }
}

function  mostrarProducto(){
    if(inventario.length===0){
        alert("Inventario vacio");
    }else{
    let mensaje="Productos del invetario \n";
    for(let i=0; i<inventario.length; i++){
        mensaje+=`Producto: ${i+1}\n`+
                 `Nombre: ${inventario[i].nombre}\n`+
                 `Precio: ${inventario[i].precio}\n`+
                 `Cantidad: ${inventario[i].cantidad}\n`+
                "------------------------------------------";
    }       
    alert(mensaje);
    }
}

//buscar producto
function buscarProducto(){
    let productoBuscado=prompt("¿Que producto quieres buscar? Escribe su nombre");
    if(inventario.filter(productoBuscado)){
        alert(`El producto buscado fue ${productoBuscado}`);
    }
}

//Menu
function menu(){
 let continuar=true;

    while(continuar){
        let opcion=mostrarMenu();
        switch(opcion){
            case 1:
                agregarProducto();
                break;
            case 2:
                mostrarProducto();
                break;
            case 3:
                tareaCompleta();
                break;
            case 4: 
                alert("Saliendo del programa");
                continuar=false;
                break;
            case 5: 
                eliminarTarea();
                break;

            default:
                alert("Opcion invalida, intenta de nuevo");
                
         }
        }
}