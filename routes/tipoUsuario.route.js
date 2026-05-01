const express = require("express");
const router = express.Router();
const tipoUsuarioControl = require("../controllers/tipoUsuario.controller");

router.get("/buscarTipoUsuario", tipoUsuarioControl.buscarTipoUsuario);
router.post("/agregarTipoUsuario", tipoUsuarioControl.agregarTipoUsuario);

module.exports = router;
