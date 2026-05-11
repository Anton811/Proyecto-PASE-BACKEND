const db = require("../config/db.config");

const auto = {
  cargarAutosUsuario: async (id) => {
    const [results] = await db.query(
      `SELECT auto.*, modeloauto.nombreModelo, marcaauto.nombreMarca
        FROM auto 
        INNER JOIN modeloauto ON auto.idModeloAuto = modeloauto.idModelo 
        INNER JOIN marcaauto ON modeloauto.idMarcaAuto = marcaauto.idMarca 
        WHERE auto.idUsuario = ?`,
      [id],
    );

    return results;
  },
  agregarAuto: async (modelo, usuario, color, matricula) => {
    const result = await db.query(
      "INSERT INTO auto (idModeloAuto,idUsuario,color,matricula) VALUES (?,?,?,?)",
      [modelo, usuario, color, matricula],
    );

    return result;
  },
};

module.exports = auto;
