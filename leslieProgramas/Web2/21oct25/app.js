//Juego de gato a traves de una tabla, q el usuario seleccione
//  una casilla y que escriba x u o
//Fila 1,2,3
//Columna 1,2,3
// Diagonal normal y reversa

var turno = "X";
var juegando = true;

function obtenerValor(id) {
    return document.getElementById(id).textContent;
}

function revisarGanador() {
    let ganador = null;

    // Filas
    for (let fila = 0; fila < 3; fila++) {
        let i = fila * 3;
        if (obtenerValor("c" + i) !== "" &&
            obtenerValor("c" + i) === obtenerValor("c" + (i + 1)) &&
            obtenerValor("c" + i) === obtenerValor("c" + (i + 2))) {
            ganador = obtenerValor("c" + i);
        }
    }

    //Columnas
    for (let col = 0; col < 3; col++) {
        if (obtenerValor("c" + col) !== "" &&
            obtenerValor("c" + col) === obtenerValor("c" + (col + 3)) &&
            obtenerValor("c" + col) === obtenerValor("c" + (col + 6))) {
            ganador = obtenerValor("c" + col);
        }
    }

    //Diagonales
    if (obtenerValor("c0") !== "" &&
        obtenerValor("c0") === obtenerValor("c4") &&
        obtenerValor("c0") === obtenerValor("c8")) {
        ganador = obtenerValor("c0");
    }

    if (obtenerValor("c2") !== "" &&
        obtenerValor("c2") === obtenerValor("c4") &&
        obtenerValor("c2") === obtenerValor("c6")) {
        ganador = obtenerValor("c2");
    }

    if (ganador) {
        alert("Ganador: " + ganador);
        juegando = false;
    }

    // --- Verificar empate ---
    let lleno = true;
    for (let i = 0; i < 9; i++) {
        if (obtenerValor("c" + i) === "") {
            lleno = false;
            break;
        }
    }

    if (lleno) {
        alert("Empate :/");
        juegando = false;
    }
}


for (var i = 0; i < 9; i++) {
    document.getElementById("c" + i).onclick = function() {
        if (!juegando) return;
        if (this.textContent === "") {
            this.textContent = turno;
            revisarGanador();
            turno = turno === "X" ? "O" : "X";
        }
    }
}