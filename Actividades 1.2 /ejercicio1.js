const prompt = require('prompt-sync')({ sigint: true });

console.log("Cuenta de hijos por persona.");

// Pedir número de personas
let n = parseInt(prompt("¿Cuántas personas vas a registrar? "), 10);
while (Number.isNaN(n) || n < 0) {
  console.log("Introduce un número entero válido (>= 0).");
  n = parseInt(prompt("¿Cuántas personas vas a registrar? "), 10);
}

let totalHijos = 0;
let conHijos = 0;
let sinHijos = 0;
let max = -1;
let min = -1;

for (let i = 1; i <= n; i++) {
  let h = parseInt(prompt("Número de hijos de la persona " + i + ": "), 10);
  while (Number.isNaN(h) || h < 0) {
    console.log("Introduce un número entero válido (>= 0).");
    h = parseInt(prompt("Número de hijos de la persona " + i + ": "), 10);
  }

  totalHijos += h;
  if (h > 0) conHijos++; else sinHijos++;

  if (i === 1) { // primer valor inicializa max/min
    max = h;
    min = h;
  } else {
    if (h > max) max = h;
    if (h < min) min = h;
  }
}

let promedio = n === 0 ? 0 : (totalHijos / n);

console.log("\nResultado:");
console.log("Personas: " + n);
console.log("Con hijos: " + conHijos);
console.log("Sin hijos: " + sinHijos);
console.log("Total de hijos: " + totalHijos);
console.log("Promedio de hijos por persona: " + promedio.toFixed(2));
console.log("Máximo hijos (una persona): " + max);
console.log("Mínimo hijos (una persona): " + min);


