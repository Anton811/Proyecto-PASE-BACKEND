const db = require("../config/db.config");

const tipoUsuario = {
  getAllTipoUsuario: async () => {
    const [result] = await db.query(
      "SELECT nombreTipoUsuario from tipousuario",
    );

    return result;
  },
  agregarTipoUsuario: async (data) => {
    const [result] = await db.query(
      "INSERT INTO tipousuario (nombreTipoUsuario) VALUES (?)",
      [data],
    );

    return result;
  },
};

module.exports = tipoUsuario;
