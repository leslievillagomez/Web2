/**
 * Diseñar un arreglo en donde se puedan agregar y almacenar nombres
 * Arrego y despues estructura
 * nombres.forEach
 * ForEach: Funcion flecha
 * nombre va a ir iterando 
 * index va a tomar el indice en donde esta 0,1,2,3
 * Esta estructura mantiene 3 elementos
 */

//arreglo vacio
let nombre =[];

//Funcion para agregar un nombre al arreglo
function agregarNombre(){
    let nombre= prompt("Ingresa el nombre");
    if(nombre){
        nombres.push(nombre);
        alert(`El nombre es ${nombre}. agregado exitosamente`);
    }else{
        alert(`El nombre esta vacio :(())`);
    }
}


function mostrarNombre(){

    if(nombres.lenght===0){
        alert(`No hay nombres almacenados`);
    }else{
        let mensaje = "Nombres almacenados: \n";
        nombres.forEach((nombre, index)=>{
            mensaje += `${index+1}. ${nombre} \n`;
        });
        alert(mensaje);
    }
}
    
/*
function mostrarNombre(){
    if(nombres.lenght===0){
        alert(`No hay nombres almacenados`);
    }else{
    for(let mensaje in nombres){
        console.log(`Nombres lmacenados: \n ${nombres}`);
    }
    }
}
*/

function mostrarMenu(){
    let opcion;
}