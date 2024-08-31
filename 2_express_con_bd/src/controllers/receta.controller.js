import { prisma } from "../cliente.js";
import { RecetaSerailizer } from "../serializers/receta.serializer.js";

export async function crearReceta(req, res) {
  const body = req.body;
  const resultado = await prisma.receta.create({
    data: {
      nombre: body.nombre,
      descripcion: body.descripcion,
    },
  });

  return res.json({
    message: "receta creada exitosamente",
    content: resultado,
  });
}

export const listarRecestas = async (req, res) => {
  const resultado = await prisma.receta.findMany();

  return res.json({
    content: resultado,
  });
};

export const actualizarReceta = async (req, res) => {
  const body = req.body;
  const { id } = req.params;
  const { error, value } = RecetaSerailizer.validate(body);

  if (error) {
    return res.status(400).json({
      message: "Error al actualizar la receta",
      content: error.details,
    });
  }

  const recetaEncontrada = await prisma.receta.findUniqueOrThrow({
    where: { id: +id }, // +id == parseInt(id)
    select: { id: true },
  });

  const recetaActualizada = await prisma.receta.update({
    where: { id: recetaEncontrada.id },
    data: {
      nombre: value.nombre,
      descripcion: value.descripcion,
      habilitado: value.habilitado,
    },
  });

  return res.json({
    message: "Receta actualizada exitosamente",
    content: recetaActualizada,
  });
};

export const eliminarReceta = async (req, res) => {
  const { id } = req.params;
  const recetaEncontrada = await prisma.receta.findFirstOrThrow({
    where: { id: +id },
    select: { id: true },
  });

  const resultado = await prisma.receta.delete({
    where: { id: recetaEncontrada.id },
  });

  return res.json({
    message: "Receta eliminada",
    content: resultado,
  });
};

export const listaRecetaPorId = async (req, res) => {
  const { id } = req.params;
  const recetaEncontrada = await prisma.receta.findFirstOrThrow({
    where: { id: +id },
    include: {
      Ingrediente: true,
      Preparacion: { orderBy: { orden: "asc" } },
    },
  });
  return res.json({ content: recetaEncontrada });
};
