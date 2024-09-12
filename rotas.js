const express = require("express");
const router = express.Router();
const controlador = require('./controlador.js');

router.get("", controlador.listCompras)
router.get("/totalCompras", controlador.totalCompras)
router.post("/", controlador.cadastrarCompra)
router.delete("/:Id", controlador.deletarCompra)

module.exports = router