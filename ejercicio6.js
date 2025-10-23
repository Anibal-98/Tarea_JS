// Se pide un algoritmo que lea dos números desde teclado e indique cuál de los dos es el mayor, o si son iguales.


let num1 = prompt("Introduce el primer número:");
let num2 = prompt("Introduce el segundo número:");


num1 = Number(num1);
num2 = Number(num2);


if (isNaN(num1) || isNaN(num2)) {
  console.log("Debes escribir solo números.");
} else {
  
  if (num1 > num2) {
    console.log("El número mayor es " + num1);
  } else if (num2 > num1) {
    console.log("El número mayor es " + num2);
  } else {
    console.log("Los dos números son iguales.");
  }
}

