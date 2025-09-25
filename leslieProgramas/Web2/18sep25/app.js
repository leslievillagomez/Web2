/**
 * Funciones anonimas y funciones flecha
 * Funciones anoimas que no necesitamos nombrar mas veces, solo 
 * se ejecutan cuando se mandan a llamar
 * Funciones expresadas se ejecutan hasta que las mandemos a 
 * llamar
 * Las funciones declraradas siempre estaran disponibles en 
 * tiempo de ejecucion
 */

//Funcion declarativa, siempre esta en ejecucion

function numeroAleatorio(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}
    console.log(numeroAleatorio(1,11));


//Funcion expresada, solo se ejecuta cuando 
// la mandas a llamar pq es constante para ahorrar memoria
const miNumero = function numeroAleatorio(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}
console.log(miNumero (2,20));