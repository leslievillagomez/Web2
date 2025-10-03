//Iniciamos areglo para almacenar tareas
let tareas =[];

//funcion para mostrar el menu de opciones
function mostrarTareas(){
    return parseInt(prompt(`
        Opcines
        1.-Agregar tarea
        2.-Ver todas las tareas
        3.-Marcar como completada
        4.-Salir
        5.-Eliminar tarea
        "Elige una opcion"
        `));
}

//Funcion para agregartarea
function agregarTarea(){
    let nombre= prompt(`Introduce el nombre de la tarea`);
    if(nombre){
        //agegar una tarea objeto tipo json
        let tarea= {
            nombre :nombre,
            completado : false
        };
        tareas.push(tarea);
        alert("La tarea se agrego de manera exitosa");

    }else{
        alert("El nombre de la tarea no puede estar vacio");
    }
}

//Funcion para ver todas las tareas
function verTareas(){
    if(tareas.length===0){
        alert("No hay tareas en la lista\n");
    }else{
        let mensaje= "Lista de tareas\n";
        tareas.forEach((tarea,index)=>{
            mensaje +=`${index+1}.- ${tarea.nombre} [${tarea.completado ?"Completada": "Pendiente"}]\n`;
        });
        alert(mensaje);
    }
}

//funcion de tarea completada acceda como true y 
// diga q esta completada y
//tambien si la tarea esta completada
function tareaCompleta(){
    let mensaje= "Lista de tareas\n";
        tareas.forEach((tarea,index)=>{
            mensaje +=`${index+1}.- ${tarea.nombre} [${tarea.completado ?"Completada": "Pendiente"}]\n`;
        });
        alert(mensaje);
   let seleccion= parseInt(prompt("Escribe el numero de la tarea que quieras marcar como completada"));
         if (seleccion > 0 && seleccion <= tareas.length) {
        tareas[seleccion - 1].completado = true; 
        alert(`La tarea "${tareas[seleccion - 1].nombre}" fue marcada como completada`);
    } else {
        alert("El número ingresado no corresponde a una tarea");
    }
}

function eliminarTarea(){
    let mensaje= "Lista de tareas\n";
        tareas.forEach((tarea,index)=>{
            mensaje +=`${index+1}.- ${tarea.nombre} [${tarea.completado ?"Completada": "Pendiente"}]\n`;
        });
        alert(mensaje);
    let eliminar=parseInt(prompt("Elige la tarea que deseas eliminar"));
    if(eliminar>0 && eliminar<=tareas.length){
        let nombreEliminada=tareas.splice(eliminar-1,1)[0]; //Se le pone el 0 para q de el primer elemento del array
         alert(`La tarea "${nombreEliminada.nombre}" fue eliminada`);
    }else{
        alert("El número ingresado no corresponde a una tarea");
    }
}


function iniciarPrograma(){
    let continuar=true;

    while(continuar){
        let opcion=mostrarTareas();
        switch(opcion){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTareas();
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

//Iniciar programa
iniciarPrograma();

//TAREA GENERAR UNA FUNCION PARA ELIMINAR UNA TAREA NO.4
//BUSCAR LA FUNCION COMO MARCARLA COMO CPMLETADO Y AL 
//ENCONTRARLA ELIMINARLA
//EN LUGAR DE PUSH ELIMINAR
