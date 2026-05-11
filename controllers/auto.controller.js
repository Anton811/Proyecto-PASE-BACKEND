const { json } = require("express");
const autoModel = require("../models/auto.model");
const marcaModel = require("../models/marca.model");
const modeloModel = require("../models/modelo.model");

exports.agregarMarca = async (req, res) => {
  const { nombre } = req.body;
  const result = await marcaModel.agregarMarca(nombre);

  if (!result) {
    return res.json({ message: "No se logro guardar la informacion" });
  }

  return res.json({ message: "Marca guardada Exitosamente" });
};
exports.cargarMarcas = async (req, res) => {
  const results = await marcaModel.cargarMarcas();

  if (!results) {
    return res.json({ message: "Informacion no cargada" });
  }

  return res.json({
    message: "Informacion cargada exitosamente",
    content: results,
  });
};
exports.agregarModelo = async (req, res) => {
  const result = await modeloModel.agregarModelo(req);

  if (!result) return res.json({ message: "Modelo no guardado" });

  return res.json({ message: "Modelo guardado exitosamente" });
};
exports.cargarModelos = async (req, res) => {
  const result = await modeloModel.cargarModelos();

  if (!result) return res.json({ message: "Modelo no cargado" });

  return res.json({ message: "Modelo cargado exitosamente", content: result });
};
exports.cargarAutosUsuario = async (req, res) => {
  const id = req.params.id;
  const result = await autoModel.cargarAutosUsuario(id);

  if (!result)
    return res.json({ message: "No se cargo la informacion correctamente", body: [] });

  return res.json({ message: "Se cargo la informacion correctamente", body: result });
};
exports.agregarAuto = async (req, res) => {
  const { modelo, usuario, color, matricula } = req.body;

  const auto = await autoModel.agregarAuto(modelo, usuario, color, matricula);

  if (!auto) return res.json("Auto no registrado");
  res.json("Auto cargado exitosamente");
};
