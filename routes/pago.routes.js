const express = require("express");
const router = express.Router();
const pagoController = require("../controllers/pago.controller");

router.get("/usuario/cargarTarjetas/:id", pagoController.cargarTarjetasUsuario);
router.post("/agregarTarjeta", pagoController.agregarTarjeta);

module.exports = router;
