//Programa que calcula el total a pagar aplicando un descuento del 15% en octubre


let mes = prompt("Introduce el mes de la compra:");
let importe = prompt("Introduce el importe total de la compra:");


importe = Number(importe);


if (isNaN(importe) || importe <= 0) {
  console.log("Debes escribir un importe válido.");
} else {
  //Pasamos el mes a minúsculas para evitar errores (por ejemplo, 'Octubre' o 'octubre')
  mes = mes.toLowerCase();

  
  if (mes === "octubre") {
    let descuento = importe * 0.15;
    let total = importe - descuento;
    console.log("Durante octubre tienes un 15% de descuento.");
    console.log("El total a pagar es: " + total);
  } else {
    console.log("No hay descuento este mes.");
    console.log("El total a pagar es: " + importe);
  }
}
