const db = require("../config/db.config");

const municipio = {
  agregarMunicipio: async (data) => {
    const { nombre, idEstado } = data;

    const [result] = await db.query(
      "INSERT INTO municipiosucursal (idEstado,nombreMunicipio) VALUES(?,?)",
      [idEstado, nombre],
    );

    return result.insertId;
  },
  cargarMunicipios: async () => {
    const [result] = await db.query(
      "SELECT municipiosucursal.idMunicipio, municipiosucursal.idEstado, estadosucursal.nombreEstado, municipiosucursal.nombreMunicipio FROM municipiosucursal INNER JOIN estadosucursal ON municipiosucursal.idEstado=estadosucursal.idEstado ORDER BY nombreMunicipio",
    );

    return result;
  },
  cargarMunicipio: async (municipio) => {
    const [result] = await db.query(
      "SELECT * FROM municipiosucursal WHERE idEstado=?",
      [municipio],
    );

    return result;
  },
};

module.exports = municipio;
