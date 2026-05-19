const db = require("../config/db.config");

const sucursal = {
  agregarSucursal: async (data) => {
    const { municipio, nombre, direccion, costo, piso, numZona } = data.body;

    const [result] = await db.query(
      "INSERT INTO sucursal (idMunicipio,nombreSucursal,direccionSucursal,pisoSucursal,sectorSucursal,numZonaSucursal,costoHora) VALUES (?,?,?,?,?,5,?)",
      [municipio, nombre, direccion, piso, numZona, costo],
    );

    return result.insertId;
  },
  cargarSucursales: async () => {
    const [result] = await db.query(`
    SELECT 
      s.idSucursal,
      s.nombreSucursal,
      s.direccionSucursal,
      s.idMunicipio,
      s.costoHora,
      m.nombreMunicipio,
      e.nombreEstado
    FROM sucursal s
    INNER JOIN municipiosucursal m ON s.idMunicipio = m.idMunicipio
    INNER JOIN estadosucursal e ON m.idEstado = e.idEstado
    ORDER BY s.nombreSucursal
  `);
    return result;
  },
  cargarSucursal: async (id) => {
    const [result] = await db.query("SELECT * FROM sucursal WHERE idSucursal = ?", [id]);

    return result;
  },
};

module.exports = sucursal;
