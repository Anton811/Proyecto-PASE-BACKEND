const db = require("../config/db.config");

const estatusReserva = {
  agregarEstatusReserva: async (nombre, color) => {
    const result = await db.query(
      "INSERT INTO estatusreserva (nombreEstatus,colorEstatus) VALUES(?,?)",
      [nombre, color],
    );

    return result;
  },
};

module.exports = estatusReserva;
