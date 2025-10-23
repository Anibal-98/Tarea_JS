// Se pide un algoritmo que lea dos números desde teclado, calculando y escribiendo en pantalla el valor de su suma, resta, producto y división.


let num1 = parseFloat(prompt("Introduce el primer número:"));
let num2 = parseFloat(prompt("Introduce el segundo número:"));


if (isNaN(num1) || isNaN(num2)) {
  console.log("Error: Debes ingresar valores numéricos.");
} else {

  let suma = num1 + num2;
  let resta = num1 - num2;
  let producto = num1 * num2;

  
  let division;
  if (num2 !== 0) {
    division = num1 / num2;
  } else {
    division = "No se puede dividir entre 0";
  }

  // Resultados:
  console.log("Resultados:");
  console.log("Suma: " + suma);
  console.log("Resta: " + resta);
  console.log("Producto: " + producto);
  console.log("División: " + division);
}
