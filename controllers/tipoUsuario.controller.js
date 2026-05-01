const tipoUsuario = require("../models/tipoUsuario.model");

exports.buscarTipoUsuario = async (req, res) => {
  lista = await tipoUsuario.getAllTipoUsuario();
  if (!lista) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  return res.status(200).json({ content: lista });
};

exports.agregarTipoUsuario = async (req, res) => {
  const { nombre } = req.body;

  resultado = await tipoUsuario.agregarTipoUsuario(nombre);

  if (!resultado) {
    return res
      .status(500)
      .json({ message: "Error al agregar al nuevo Usuario" });
  }

  return res.status(200).json({ message: "usuario cargado exitosamente" });
};
