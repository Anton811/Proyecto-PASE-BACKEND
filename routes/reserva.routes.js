const express = require("express");
const router = express.Router();
const reservaController = require("../controllers/reserva.controller");

router.get("/sucursal/cargarReservas", reservaController.cargarReservasSucursal);
router.post("/estatus/agregarEstatusReserva", reservaController.agregarEstatusReserva);
router.post("/agregarReserva", reservaController.agregarReserva);
router.get("/reservaActiva/:idUsuario", reservaController.cargarReservaActiva);

module.exports = router;
