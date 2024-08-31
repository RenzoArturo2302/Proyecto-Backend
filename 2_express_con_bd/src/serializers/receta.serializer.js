import Joi from "joi";

export const RecetaSerailizer = Joi.object({
  nombre: Joi.string().required(),
  descripcion: Joi.string().optional(),
  habilitado: Joi.boolean().optional().default(true),
});
