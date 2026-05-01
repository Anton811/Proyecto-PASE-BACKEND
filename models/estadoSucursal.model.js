const db = require("../config/db.config");

const estado = {
  cargarEstado: async () => {
    const [result] = await db.query("SELECT nombreEstado FROM estadosucursal");
    return result;
  },
};

module.exports = estado;
