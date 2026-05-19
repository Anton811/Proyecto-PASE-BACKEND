const db = require("../config/db.config");

const reserva = {
  cargarReservasSucursal: async (id, horaEntrada, horaSalida, fechaReserva) => {
    const [results] = await db.query(
      `SELECT reserva.*, estatusreserva.colorEstatus 
        FROM reserva 
        INNER JOIN zona ON reserva.idZona = zona.idZona
        INNER JOIN estatusreserva ON reserva.idEstatus = estatusreserva.idEstatus
        WHERE zona.idSucursal = ? AND reserva.horaInicio < ? AND reserva.horaFinal > ? AND fechaReserva = ?`,
      [id, horaSalida, horaEntrada, fechaReserva],
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
  cargarReservasUsuario: async (id) => {
    const [results] = await db.query(
      `SELECT  r.idReserva, r.horaInicio, r.horaFinal,r.idZona, r.costo, r.fechaReserva, ma.nombreMarca AS marca, mo.nombreModelo AS modelo, a.matricula AS matricula, a.color, s.nombreSucursal AS sucursal FROM reserva AS r
      INNER JOIN auto AS a ON r.idAuto = a.idAuto
      INNER JOIN modeloauto AS mo ON a.idModeloAuto = mo.idModelo
      INNER JOIN marcaauto AS ma ON mo.idMarcaAuto = ma.idMarca
      INNER JOIN zona AS z ON r.idZona = z.idZona
      INNER JOIN sucursal AS s ON z.idSucursal = s.idSucursal 
      WHERE r.idUsuario = ?
      ORDER BY r.idReserva DESC;`,
      [id],
    );

    return results;
  },
};

module.exports = reserva;
