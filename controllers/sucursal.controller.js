const estado = require("../models/estadoSucursal.model");

exports.buscarEstado = async (req, res) => {
  estados = await estado.cargarEstado();

  if (!estados) {
    return res.status(404).json({ message: "Estados no encontrados" });
  }

  return res
    .status(200)
    .json({ message: "Estaos encontrados exitosamente", content: estados });
};
