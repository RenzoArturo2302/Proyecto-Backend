import { Router } from "express";
import {
  actualizarReceta,
  crearReceta,
  eliminarReceta,
  listaRecetaPorId,
  listarRecestas,
} from "./controllers/receta.controller.js";

import {
  crearIngrediente,
  listaIngrediente,
} from "./controllers/ingrediente.controller.js";

import asyncHandler from "express-async-handler";
import { crearPreparacion } from "./controllers/preparacion.controller.js";

export const enrutador = Router();

enrutador
  .route("/recetas")
  .post(asyncHandler(crearReceta))
  .get(asyncHandler(listarRecestas));
enrutador
  .route("/receta/:id")
  .put(asyncHandler(actualizarReceta))
  .delete(asyncHandler(eliminarReceta))
  .get(asyncHandler(listaRecetaPorId));

enrutador
  .route("/ingrediente")
  .post(asyncHandler(crearIngrediente))
  .get(asyncHandler(listaIngrediente));

enrutador.route("/preparacion").post(asyncHandler(crearPreparacion));
