// *Algoritmo que lea un número por teclado. En caso de que ese número sea 0 o menor que 0, se saldrá del programa imprimiendo antes un mensaje de error. Si es mayor que 0, 
// se deberá calcular su cuadrado y la raíz cuadrada del mismo, visualizando el número que ha tecleado el usuario y su resultado («Del número X, su potencia es X y su raíz X» ). 
//Para calcular la raíz cuadrada se puede usar la función interna RAIZ(X)  o con una potencia de 0,5. 

let numero = parseFloat(prompt("Introduce un número:"));

if (isNaN(numero)) {
  console.log("Error: Debes ingresar un valor numérico.");
} else {
  if (numero <= 0) {
    console.log("Error: El número debe ser mayor que 0.");
  } else {
    let cuadrado = Math.pow(numero, 2);
    let raiz = Math.sqrt(numero);
    console.log("Del número " + numero + ", su potencia es " + cuadrado + " y su raíz " + raiz);
  }
}
