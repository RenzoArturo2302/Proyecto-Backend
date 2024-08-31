function restar(numero1, numero2) {
  return numero1 - numero2;
}

// Funciones anonimas
// se almacena en una variable

const multiplicacion = (numero1, numero2) => {
  return numero1 * numero2;
};

// En una función anonima si solamente voy a tener una linea de codigo y esa linea la voy a retornar
const division = (numero1, numero2) => numero1 / numero2;

export default { division, multiplicacion, restar };
