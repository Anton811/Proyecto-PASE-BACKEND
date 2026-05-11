const db = require("../config/db.config");

const estado = {
  cargarEstado: async () => {
    const [result] = await db.query(
      "SELECT * FROM estadosucursal ORDER BY nombreEstado",
    );
    return result;
  },
  agregarEstado: async (data) => {
    const [result] = await db.query(
      "INSERT INTO estadosucursal (nombreEstado) VALUES (?)",
      [data],
    );

    return result;
  },
};

module.exports = estado;
