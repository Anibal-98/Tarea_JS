// 2. Escribe una función en que dibuje una pirámide invertida en pantalla como la de la figura. La altura se pasará como parámetro. Si se pasa una altura =0 o negativa, la función devolverá –1; en caso contrario devolverá 0 (éxito) y pintará la pirámide.
function dibujarPiramideInvertida(altura) {
    if (altura <= 0) {
        return -1; 
    }

    for (let i = altura; i >= 1; i--) {
        let espacios = ' '.repeat(altura - i);
        let asteriscos = '*'.repeat(2 * i - 1);
        console.log(espacios + asteriscos);
    }

    return 0; 
}


let altura = parseInt(prompt("Ingrese la altura de la pirámide invertida: "), 10);
let resultado = dibujarPiramideInvertida(altura);
if (resultado === -1) {
    console.log("Altura no válida. Debe ser un número positivo.");
}   
else {
    console.log("Pirámide invertida dibujada con éxito.");
}
