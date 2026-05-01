const express = require("express");
const router = express.Router();
const tipoUsuarioControl = require("../controllers/tipoUsuario.controller");

router.get("/buscarTiposUsuario", tipoUsuarioControl.buscarTipoUsuario);

module.exports.router;
