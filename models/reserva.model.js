const db = require("../config/db.config");

const reserva = {
  cargarReservasSucursal: async (id, horaEntrada, horaSalida) => {
    const [results] = await db.query(
      `SELECT reserva.*, estatusreserva.colorEstatus 
        FROM reserva 
        INNER JOIN zona ON reserva.idZona = zona.idZona
        INNER JOIN estatusreserva ON reserva.idEstatus = estatusreserva.idEstatus
        WHERE zona.idSucursal = ? AND reserva.horaInicio < ? AND reserva.horaFinal > ?`,
      [id, horaSalida, horaEntrada],
    );

    return results;
  },
  agregarReserva: async (usuario, auto, pago, zona, horaInicio, horaSalida) => {
    const [result] = await db.query(
      "INSERT INTO reserva (idUsuario,idAuto,idPago,idZona,idEstatus,horaInicio,horaFinal,fechaReserva) VALUES(?,?,?,?,?,?,?,NOW())",
      [usuario, auto, pago, zona, 2, horaInicio, horaSalida],
    );

    return result;
  },
  cargarReservaActiva: async (idUsuario, fecha) => {
    const [results] = await db.query(
      `SELECT reserva.*, zona.sectorZona, zona.numZona,
     sucursal.nombreSucursal, estatusreserva.nombreEstatus
     FROM reserva
     INNER JOIN zona ON reserva.idZona = zona.idZona
     INNER JOIN sucursal ON zona.idSucursal = sucursal.idSucursal
     INNER JOIN estatusreserva ON reserva.idEstatus = estatusreserva.idEstatus
     WHERE reserva.idUsuario = ? AND reserva.idEstatus = 2 AND fechaReserva = ?
     LIMIT 1`,
      [idUsuario, fecha],
    );
    console.log(results);
    return results[0];
  },
};

module.exports = reserva;
