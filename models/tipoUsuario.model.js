const db = require("../config/db.config");

const tipoUsuario = {
  getAllTipoUsuario: async () => {
    const [result] = db.query("SELECT nombreTipoUsuario from tipoUsuario");

    return [result];
  },
};

module.exports = tipoUsuario;
