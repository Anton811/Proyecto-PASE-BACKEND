const express = require("express");
const router = express.Router();
const sucursalController = require("../controllers/sucursal.controller");

router.get("/cargarEstados", sucursalController.buscarEstado);
router.post("/agregarEstado", sucursalController.agregarEstado);
router.post("/agregarMunicipio", sucursalController.agregarMunicipio);
router.get("/cargarMunicipio", sucursalController.cargarMunicipios);
router.post("/agregarSucursal", sucursalController.agregarSucursal);
router.get("/cargarSucursales", sucursalController.cargarSucursales);
router.get("/zonas/:idSucursal", sucursalController.cargarZonas);
router.get("/municipio/:id", sucursalController.cargarMunicipioId);
router.get("/CargarSucursal/:id", sucursalController.cargarSucursalId);

module.exports = router;
