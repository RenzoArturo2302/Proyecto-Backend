import { IngredienteSerializer } from "../serializers/ingrediente.serializer.js";
import { prisma } from "../cliente.js";

export const crearIngrediente = async (req, res) => {
  const { error, value } = IngredienteSerializer.validate(req.body);

  if (error) {
    return res.status(404).json({
      message: "Error al crear el ingrediente ",
      content: error.details,
    });
  }

  const recetaEncontrada = await prisma.receta.findUniqueOrThrow({
    where: { id: value.recetaId },
    select: { id: true },
  });

  const resultado = await prisma.ingrediente.create({
    data: {
      titulo: value.titulo,
      recetaId: recetaEncontrada.id,
    },
  });

  return res.status(201).json({
    message: "Ingrediente creado exitosamente",
    content: resultado,
  });
};

export const listaIngrediente = async (req, res) => {
  const resultado = await prisma.ingrediente.findMany();
  return res.json({
    content: resultado,
  });
};
