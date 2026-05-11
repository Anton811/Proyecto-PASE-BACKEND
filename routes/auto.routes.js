const express = require("express");
const router = express.Router();
const autoController = require("../controllers/auto.controller");

router.post("/marca/agregarMarca", autoController.agregarMarca);
router.get("/marca/cargarMarcas", autoController.cargarMarcas);
router.post("/modelo/agregarModelo", autoController.agregarModelo);
router.get("/modelo/cargarModelos", autoController.cargarModelos);
router.get("/usuario/:id", autoController.cargarAutosUsuario);
router.post("/agregarAuto", autoController.agregarAuto);

module.exports = router;
