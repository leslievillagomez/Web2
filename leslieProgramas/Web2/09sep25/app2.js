
//Se puede agregar sandia
const frutas= ["Fresa"];
frutas.push("sandia", "limon"); //final
frutas.unshift("mango", "platano"); //inicio
console.log(frutas);

console.log(frutas.length); //imprime 5

for(let fruta of frutas){
    console.log(fruta);// imprime mango
                    }

//eliminar
console.log("------------------------------------")
frutas.pop();
for(let fruta of frutas){
    console.log(fruta);
                    }

console.log("------------------------------------")
frutas.shift();
for(let fruta of frutas){
    console.log(fruta);
                    }


/**
 * BD no relacional tiene los mismos datos pero son 
 * independientes y se generan datos de un solo objeto JSON
 * Metoodo push agrega elementos a un array al final
 * Unshift: Agrega a uno o mas elementos al inicio de un array
 * Pop: elimina el ultimo elemento
 * Shift: elimina el primer elemento
 */

//MAL
//No se puede agregar porque es un arreglo
//y porque solo es el espacio asignaado a 1 valor, no un array
// const puerto=3306;
// puerto=3308;
// console.log(puerto);