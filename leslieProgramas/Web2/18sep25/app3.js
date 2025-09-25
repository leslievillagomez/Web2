/**
 * Objetos
 * Es una coleccion de propiedades
 * una propiedad es una asociacion entre valores
 * Los objetos son como arrays pero accede a los objetos a traves
 * de sus propiedades
 * sensibles a mayusc y min
 * En un objeto si se pueden meter arreglos
 * Los arreglos estan limintados
 * 
 */

/*
var miCarro = new Object();
miCarro.marca= `Toyota`;
miCarro.modelo=`Supra`;
miCarro.color=`Rosa`;
console.log(miCarro);
*/
//Son el mismo objeto declarado de la misma forma
var miCarro={
    marca: `Toyota`,
    modelo:`Supra`,
    color:`Rosa`

}
console.log(miCarro);

var perro={
    nombre: `Meme`,
    color:`negro`,
    edad: 8,
    talla:`pequeño`,
    enemigos:["Gatos", "Otros perros", "Limpia parabrisas"]
}
console.log(perro);
//leer
//console.log(perro.color);
//console.log(perro.enemigos[1]);

//Agregar
perro.raza=`chino`;

//actualizar
perro.edad=9;
console.log(perro.edad);

//eliminar
delete perro.edad;
console.log(perro);