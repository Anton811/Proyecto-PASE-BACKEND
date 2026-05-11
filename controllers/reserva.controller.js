const zonaModel = require("../models/zona.model");
const reservaModel = require("../models/reserva.model");
const estatusReservaModel = require("../models/estatusReserva.model");

exports.cargarReservasSucursal = async (req, res) => {
  const { id, horaEntrada, horaSalida } = req.query;
  console.log("Params:", id, horaEntrada, horaSalida);
  const reservas = await reservaModel.cargarReservasSucursal(id, horaEntrada, horaSalida);
  console.log("Reservas encontradas:", reservas);
  if (!reservas) return res.json({ message: "No se cargaron o no hay reservas" });

  return res.json({ message: "Reservas cargadas exitosamente", content: reservas });
};
exports.agregarEstatusReserva = async (req, res) => {
  const { nombre, color } = req.body;

  const estatus = await estatusReservaModel.agregarEstatusReserva(nombre, color);

  if (!estatus) return res.json({ message: "No se logro enviar la informacion" });

  return res.json({ message: "Estatus cargado Correctamente" });
};
exports.agregarReserva = async (req, res) => {
  const { usuario, auto, pago, zona, horaInicio, horaSalida } = req.body;

  const result = reservaModel.agregarReserva(
    usuario,
    auto,
    pago,
    zona,
    horaInicio,
    horaSalida,
  );

  if (!result) return res.json("No se logro realizar la reserva, contactar a soporte");

  res.json("Reserva realizada exitosamente");
};
exports.cargarReservaActiva = async (req, res) => {
  try {
    const { idUsuario } = req.params;
    const reserva = await reservaModel.cargarReservaActiva(idUsuario);
    res.json({ content: reserva || null });
  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};
