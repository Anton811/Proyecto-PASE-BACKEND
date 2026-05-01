const express = require("express");
const router = express.Router;
const sucursalControl = require("../controllers/sucursal.controller");

router.get("/cargarEstados", sucursalControl.buscarEstado);

module.exports = router;
