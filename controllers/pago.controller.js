const pagoModel = require("../models/pago.model");

exports.cargarTarjetasUsuario = async (req, res) => {
  const id = req.params.id;

  const tarjetas = await pagoModel.cargarTarjetasUsuario(id);

  if (!tarjetas) return res.json({ message: "No se cargaron los datos", body: [] });

  res.json({ message: "Se cargo la tarjeta correctamente", body: tarjetas });
};
exports.agregarTarjeta = async (req, res) => {
  const { id, nombre, mes, anio, numero } = req.body;

  const result = await pagoModel.agregarTarjeta(id, nombre, mes, anio, numero);

  if (!result) return res.json("Error al guardar la tarjeta");

  res.json("tarjeta guardada exitosamente");
};
exports.eliminarTarjeta = async (req, res) => {
  try {
    const { id } = req.params;
    await pagoModel.eliminarTarjeta(id);
    res.json({ message: "Tarjeta eliminada correctamente" });
  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};
