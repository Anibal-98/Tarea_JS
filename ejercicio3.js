// Se pide un algoritmo que lea dos números desde teclado e indique cuál de los dos es el mayor.
let num1 = parseFloat(prompt("Introduce el primer número:"));
let num2 = parseFloat(prompt("Introduce el segundo número:"));


if (isNaN(num1) || isNaN(num2)) {
  console.log("Error: Debes ingresar valores numéricos.");
} else {

  if (num1 > num2) {
    console.log("El número mayor es: " + num1);
  } else if (num2 > num1) {
    console.log("El número mayor es: " + num2);
  } else {
    console.log("Ambos números son iguales.");
  }
}