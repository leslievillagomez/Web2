/**
 * Funcion flecha iterar sobre un arreglo
 * 
 
//Fncion tradicional
function numero(a){
    return a+100;
}

//Funcion flecha
(a)=> {
    return a+100;
}

//2
(a)=> a+100;

//3
a=>  a+100;

//4
(a,b)=> {a+100};
*/

const miNumeroFlecha = (max)=>{
    return Math.floor(Math.random()*(max-1)+1);
}
console.log(miNumeroFlecha(50));

//Convertir en 