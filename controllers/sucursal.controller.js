const estado = require("../models/estadoSucursal.model");
const municipio = require("../models/municipioSucursal.model");
const sucursal = require("../models/sucursal.model");
const zona = require("../models/zona.model");

exports.buscarEstado = async (req, res) => {
  estados = await estado.cargarEstado();

  if (!estados) {
    return res.status(404).json({ message: "Estados no encontrados" });
  }

  return res
    .status(200)
    .json({ message: "Estaos encontrados exitosamente", content: estados });
};

exports.agregarEstado = async (req, res) => {
  const { nombre } = req.body;

  result = await estado.agregarEstado(nombre);

  if (!result) {
    return res.json({ message: "Estado no logro agregarse" });
  }

  return res.json({ message: "Estado Agregado Exitosamente" });
};

exports.agregarMunicipio = async (req, res) => {
  const data = req.body;

  const result = await municipio.agregarMunicipio(data);

  if (!result) {
    return res.json({ message: "Municipio no se logro ingresar al sistema" });
  }
  return res.json({
    message: "Municipio ingresado exitosamente al sistema",
  });
};

exports.cargarMunicipios = async (req, res) => {
  const result = await municipio.cargarMunicipios();

  if (!result) {
    return res.json({ message: "Municipios no encontrados" });
  }
  return res.json({ message: "Municipios cargados", content: result });
};

exports.agregarSucursal = async (req, res) => {
  try {
    const { nombre, direccion, municipio, piso, numZona } = req.body;
    const e = await sucursal.agregarSucursal(req);
    if (!e) {
      return res.json({ message: "Sucursal no cargada" });
    }
    for (let i = 1; i <= piso; i++) {
      for (let j = 1; j <= numZona; j++) {
        for (let k = 1; k <= 5; k++) {
          await zona.agregarZona(i, j, k, e);
        }
      }
    }

    return res.json({ message: "Sucursal ingresada correctamente" });
  } catch (error) {
    console.error("ERROR agregarSucursal:", error);
    res.status(500).json({ error: error.message });
  }
};

exports.cargarSucursales = async (req, res) => {
  try {
    const result = await sucursal.cargarSucursales();
    return res.json({ content: result });
  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};

exports.cargarZonas = async (req, res) => {
  try {
    const { idSucursal } = req.params;
    const result = await zona.cargarZonas(idSucursal);
    return res.json({ content: result });
  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};

exports.cargarMunicipioId = async (req, res) => {
  const id = req.params.id;

  const result = await municipio.cargarMunicipio(id);

  if (!result) {
    return res.json({ message: "Municipios no cargados" });
  }
  return res.json({
    message: "Municipios cargados correctamente",
    content: result,
  });
};

exports.cargarSucursalId = async (req, res) => {
  const id = req.params.id;
  const e = await sucursal.cargarSucursal(id);

  if (!e) {
    return res.json({ message: "no se pudieron cargar sucursales" });
  }

  return res.json({ message: "Sucursales cargadas correctamente", content: e });
};
