//Estructura switch
let optUser =prompt(`
    Selecciona una opcion
    1. Libros
    2. Peliculas
    3. Juegos
    `);

switch (optUser){
    case "1":
        console.log("Principito");
        break;
    case "2":
        console.log("HTTYD");
        break;
    case "3":
        console.log("Roblox");
        break;
    default:
        console.log("Opcion no valida");
        break;
}