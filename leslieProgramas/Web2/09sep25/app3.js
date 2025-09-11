/**
 * Carrito de frutas
 */
var fruta = prompt("Ingresa la fruta que desees en tu carrito");
const frutas =[];
frutas.push(fruta);

while (confirm("Quieres agregar otra fruta?")){
    var fruta = prompt("Ingresa el nombre de la fruta");
        frutas.push(fruta);  
}
 console.log(`Usted compro`);
 for (let fruta of frutas){
    console.log(fruta);
 }

