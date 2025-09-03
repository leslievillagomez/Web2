//3 num, cual es mayor, menor y cuales son iguales

let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let num3 = parseFloat(prompt("Ingresa el tercer número:"));

if(num1 === num2 && num2 ===num3){
    console.log("Todos los números son iguales");
}else{
    if(num1 > num2 && num1 > num3){
    console.log("El primer numero el mayor de todos");    
} else{
    if(num2 > num3 && num2 > num1){
        console.log("El segundo numero es  el mayor que todos");
    }else{
        if(num3 > num2 && num3 > num1){
            console.log("El tercer numero es el mayor de todos");
        }
        
}
}
}
        if(num1 < num3 && num1 < num2){
            console.log("El primer numero es menor que todos");
        }
            else{
        if(num2 < num3 && num2 < num1){
            console.log("El segundo numero el menor que todos");
        }
                else{
        if(num3 < num1 && num3 < num2){
            console.log("El tercer numero es el menor que todos");
        }
        }
    }
/*
explicaion para comprender
||- solo uno debe ser verdadero
&&- los dos deben ser verdaderos

1 mayor que 2 x
1 mayor que 3 x
1 menor que 2 x
1 menor que 3 x

2 mayor que 1 x
2 mayor que 3 x
2 menor que 1 x
2 menor que 3 x

3 mayor que 2 x
3 mayor que 1 x
3 menor que 2 x
3 menor que 1 x

*/