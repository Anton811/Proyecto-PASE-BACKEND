const db = require("../config/db.config");
const bcrypt = require("bcrypt");

const usuario = {
  buscarRegistro: async (data) => {
    const { email, telefono } = data;
    const [result] = await db.query(
      "SELECT * from usuario WHERE correoUsuario = ? OR telUsuario = ?",
      [email, telefono],
    );

    return result.length > 0;
  },
  buscarLogin: async (data) => {
    const [result] = await db.query(
      "SELECT * FROM usuario WHERE correoUsuario = ?",
      [data],
    );

    return result[0];
  },
  registro: async (data) => {
    const {
      nombre,
      app,
      apm,
      telefono,
      email,
      idTypeUsuario,
      fecha,
      password,
    } = data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await db.query(
      "INSERT INTO usuario (nombreUsuario, appUsuario, apmUsuario, telUsuario, correoUsuario, idTipoUsuario, passwordUsuario) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        nombre,
        app,
        apm || null,
        telefono,
        email,
        idTypeUsuario,
        hashedPassword,
      ],
    );
    return result;
  },
  buscarId: async (data) => {
    const idNum = parseInt(data);
    const [result] = await db.query(
      "SELECT * FROM usuario WHERE idUsuario = ?",
      [idNum],
    );
    return result[0];
  },
};

module.exports = usuario;
