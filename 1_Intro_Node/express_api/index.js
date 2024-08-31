import express from "express";

const servidor = express();

servidor.use(express.json());

servidor.get("/", (req, res) => {
  res.status(201).json({
    message: "Bienvenido a mi API de express",
  });
});

servidor.post("/registro", (req, res) => {
  // Express tenemos que indicar que body va a poder recepcionar
  // Si va a recepcionar json | xml | txt | otros

  console.log(req.body);
  res.json({
    message: "Registro completado exitosamente",
  });
});

servidor.listen(3000, () => {
  console.log("Servidor levantado exitosamente");
});
