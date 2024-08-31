// Si una variable va a cambiar su valor mas de una vez entonces no se usa const sino se usa let
const funciones = require("./2_funciones");

let x = "eduardo";

x = "ramiro";
x = "Juan";
x = 20;

console.log("hola");

function sumar(numero1, numero2) {
  const resultado = numero1 + numero2;

  return resultado;
}

const sumatoria = sumar(10, 20);

console.log(sumatoria);

const resta = funciones.restar(50, 30);
console.log(resta);
