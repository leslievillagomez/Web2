/*
let nombre =(prompt("Ingresa tu nombre:"));

function saludo(nombreUsuario){
    console.log("Holaam " + nombreUsuario);

}
saludo(" "+ nombre);
*/

/*
function sumar (n1, n2){
    return parseInt(n1) + parseInt(n2);
}
var num1 = prompt("Numero 1:");
var num2 = prompt("Numero 2:");

var resultado = sumar(num1, num2);
console.log("El resultado es: "+ resultado);
*/

var num1 = prompt("Numero 1:");
var num2 = prompt("Numero 2:");

function sumar (n1, n2){
    return parseInt(n1) + parseInt(n2);
}
var resultado = sumar(num1, num2);
console.log("El resultado es: "+ resultado);


function restar (n1, n2){
    return parseInt(n1) - parseInt(n2);
}
var resultado1 = restar(num1, num2);
console.log("El resultado es: "+ resultado1);


function multi (n1, n2){
    return parseInt(n1) * parseInt(n2);
}
var resultado2 = multi(num1, num2);
console.log("El resultado es: "+ resultado2);

function division (n1, n2){
    return parseInt(n1) / parseInt(n2);
}
var resultado3 = division(num1, num2);
console.log("El resultado es: "+ resultado3);