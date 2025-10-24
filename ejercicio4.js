//Solicita por teclado tres números; si el primero es negativo, muestra el producto de los tres y si no lo es, muestra la suma.
let num1 = parseFloat(prompt("Introduce el primer número:"));
let num2 = parseFloat(prompt("Introduce el segundo número:"));
let num3 = parseFloat(prompt("Introduce el tercer número:"));   
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  console.log("Error: Debes ingresar valores numéricos.");
} else {

  if (num1 < 0) {
    let producto = num1 * num2 * num3;
    console.log("El producto de los tres números es: " + producto);
  } else {
    let suma = num1 + num2 + num3;
    console.log("La suma de los tres números es: " + suma);
  }     
}
