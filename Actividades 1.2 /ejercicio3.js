// 3. El  juego de adivinar un número. El valor a adivinar lo tendremos puesto en una variable el valor que nosotros queramos.

//El número será entre 1 y 100. El programa debe dar pistas de si el número a adivinar es mayor o menor que el introducido.

//Tendremos que hacer los siguientes subprocesos (funciones):

//leerNumero(): Pide un numero y hasta que el usuario no escribe un valor entre 1 y 100,   vuelve a pedir el valor.

// comprobarValor(numeroUsuario, numeroCorrecto): comprueba si el número es correcto; éste  devuelve un número que puede ser:  0: los dos numeros son iguales  1: el numeroUsuario es mayor que el numeroCorrecto  -1: el numeroUsuario es menor que el numeroCorrecto. (3,3 puntos)
const prompt = require('prompt-sync')({ sigint: true });

function leerNumero() {
    let numero;
    do {
        numero = parseInt(prompt("Introduce un número entre 1 y 100: "), 10);
    } while (Number.isNaN(numero) || numero < 1 || numero > 100);
    return numero;
}       
function comprobarValor(numeroUsuario, numeroCorrecto) {
    if (numeroUsuario === numeroCorrecto) {
        return 0;
    } else if (numeroUsuario > numeroCorrecto) {
        return 1;
    } else {
        return -1;
    }
}       
// Programa principal
const numeroCorrecto = Math.floor(Math.random() * 100) + 1; // Número aleatorio entre 1 y 100
let numeroUsuario;
let resultado;

console.log("¡Bienvenido al juego de adivinar el número!");

do {
    numeroUsuario = leerNumero();
    resultado = comprobarValor(numeroUsuario, numeroCorrecto);

    if (resultado === 0) {
        console.log("¡Felicidades! Has adivinado el número correcto: " + numeroCorrecto);
    } else if (resultado === 1) {
        console.log("El número a adivinar es menor que " + numeroUsuario + ". Intenta de nuevo.");
    } else {
        console.log("El número a adivinar es mayor que " + numeroUsuario + ". Intenta de nuevo.");
    }
} while (resultado !== 0);

leerNumero();
comprobarValor();
