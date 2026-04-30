const tipoUsuario = require("../models/tipoUsuario.model");

exports.buscarTipoUsuario = async (req, res) => {
  lista = await tipoUsuario.getAllTipoUsuario();
  if (!lista) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  return res.status(200).json({ content: lista });
};
