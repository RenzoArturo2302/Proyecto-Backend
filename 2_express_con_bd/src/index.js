import express from "express";
import { config } from "dotenv";
import { enrutador } from "./router.js";
const servidor = express();

config();

// Puedan entender la información proveniente del body en formato json
servidor.use(express.json());
const PUERTO = process.env.PORT;

// Un middleware --> Intermediario en el cual se va a gestionar los errores emitidos por prima o por ootros factores
function errorHandler(err, req, res, next) {
  console.log(err);
  let mensajePersonalizado;
  let status;
  switch (err.message) {
    case "No Receta found":
      mensajePersonalizado = "La receta no existe";
      status = 404;
      break;
    case "No Preparacion found":
      mensajePersonalizado = "La preparación no existe";
      status = 404;
      break;
    case "No Ingrediente found":
      mensajePersonalizado = "El ingrediente no existe";
      status = 404;
      break;

    default:
      mensajePersonalizado = err.message;
      status = 400;
  }

  res.status(status).json({
    message: "Error al hacer la operación",
    content: mensajePersonalizado,
  });
}

// Estamos agregando todas las rutas de nuestro enrutador a nuestro proyecto de express
servidor.use(enrutador);
// Agregamos la función como middleware
servidor.use(errorHandler);

servidor.listen(PUERTO, () => {
  console.log(`Servidor corriendo exitosamente en el puerto ${PUERTO}`);
});
