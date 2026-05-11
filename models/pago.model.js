const db = require("../config/db.config");

const pago = {
  cargarTarjetasUsuario: async (id) => {
    const [result] = await db.query("SELECT * FROM pago WHERE idUsuario = ?", [id]);

    return result;
  },
  agregarTarjeta: async (id, nombre, mes, anio, numero) => {
    const result = await db.query(
      "INSERT INTO pago (idUsuario,pagoNombre,pagoMes,pagoAnio,numeroTarjeta) VALUES (?,?,?,?,?)",
      [id, nombre, mes, anio, numero],
    );

    return result;
  },
};

module.exports = pago;
