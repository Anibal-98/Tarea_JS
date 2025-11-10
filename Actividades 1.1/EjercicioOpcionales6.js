// Teniendo en cuenta que la clave es “eureka”, escribir un algoritmo que nos pida una clave.
//  Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos nos mostrará un mensaje indicándonos que hemos agotado esos 3 intentos. Si acertamos la clave, saldremos directamente del programa.
const prompt = require('prompt-sync')();

let clave;

let contador = 0;
do {
    clave = prompt("Ingrese la clave: ");
    contador++;
} while (clave !== "eureka" && contador < 3);

if (clave === "eureka") {
    console.log("Clave correcta. Acceso concedido.");
} else {
    console.log("Has agotado los 3 intentos. Acceso denegado.");
}   



