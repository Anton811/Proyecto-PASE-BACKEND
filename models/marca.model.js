const db = require("../config/db.config");

const marca = {
  agregarMarca: async (e) => {
    const [result] = await db.query(
      "INSERT INTO marcaauto (nombreMarca) VALUES(?)",
      [e],
    );

    return result;
  },
  cargarMarcas: async () => {
    const [result] = await db.query(
      "SELECT * FROM marcaauto ORDER BY nombreMarca",
    );

    return result;
  },
};

module.exports = marca;
