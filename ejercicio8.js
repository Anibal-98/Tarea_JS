//Realizar un algoritmo que dado un número entero, visualice en pantalla si es par o impar. En el caso de ser 0, debe visualizar
// “el número no es par ni impar” (para que un número sea par, se debe dividir entre dos y que su resto sea 0).

let numero = prompt("Introduce un número entero:");

if (isNaN(numero)) {
  console.log("Debes introducir un número válido.");
} else {
  numero = parseInt(numero);
  if (numero === 0) {
    console.log("El número no es par ni impar.");
  } else if (numero % 2 === 0) {
    console.log("El número es par.");
  } else {
    console.log("El número es impar.");
  }
}
