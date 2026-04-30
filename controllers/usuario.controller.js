const usuario = require("../models/usuario.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.registro = async (req, res) => {
  try {
    const data = req.body;
    const busqueda = await usuario.buscarRegistro(data);
    if (!busqueda) {
      const resultado = await usuario.registro(data);
      res.status(201).json({
        mensaje: "Usuario registrado con éxito",
        id: resultado.insertId,
      });
    } else {
      res.json({
        mensaje: "Usuario registrado previamente con el correo y/o telefono",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al registrar el usuario" });
  }
};

exports.login = async (req, res) => {
  try {
    const { correo, password } = req.body;

    const user = await usuario.buscarLogin(correo);

    if (!user) {
      return res.json({ mensaje: "Usuario y/o contraseña no valida" });
    }

    const coinciden = await bcrypt.compare(password, user.passwordUsuario);
    if (!coinciden) {
      return res.json({ mensaje: "Usuario y/o contraseña no valida" });
    }

    const token = jwt.sign(
      { id: user.idUsuario, rol: user.idTipoUsuario },
      process.env.JWT_SECRET,
      { expiresIn: "2h" },
    );

    res.json({
      mensaje: "Bienvenido a PASE",
      token,
      user: { nombre: user.nombreUsuario, rol: user.idTipoUsuario },
    });
  } catch (error) {
    console.error("ERROR LOGIN:", error); // 👈 agrega esto
    res.status(500).json({ error: error.message }); // 👈 cambia esto
  }
};

exports.getUsuario = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await usuario.buscarId(id);

    if (!user) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    res.json(user);
  } catch (error) {
    console.error("ERROR PERFIL:", error);
    res.status(500).json({ error: error.message });
  }
};
