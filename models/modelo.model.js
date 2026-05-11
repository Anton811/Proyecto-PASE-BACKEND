const db = require("../config/db.config");

const modelo = {
  agregarModelo: async (e) => {
    const { marca, nombre } = e.body;
    const [result] = await db.query(
      "INSERT INTO modeloauto (idMarcaAuto,nombreModelo) VALUES (?,?)",
      [marca, nombre],
    );

    return result;
  },
  cargarModelos: async () => {
    const [results] = await db.query(
      "SELECT modeloauto.*, marcaauto.nombreMarca FROM modeloauto INNER JOIN marcaauto ON modeloauto.idMarcaAuto = marcaauto.idMarca ORDER BY modeloauto.nombreModelo",
    );

    return results;
  },
};

module.exports = modelo;
