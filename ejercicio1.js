/*Lee desde entrada dos variables numéricas A y B. Con ellas se pide realizar un algoritmo que intercambie los valores de ambas variables y muestre cuánto valen al final las dos variables.
*/
// Función intercambio de valores.  
function intercambiarValores() {
    // Leer las variables A y B desde la entrada del usuario
    let A = parseFloat(prompt("Ingrese el valor de A:"));
    let B = parseFloat(prompt("Ingrese el valor de B:"));

   
    let temp = A;
    A = B;
    B = temp;

    console.log("Al final A vale: " + A);
    console.log("Al final B vale: " + B);
}
