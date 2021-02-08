const express = require("express");
const {agregarCliente} = require("../controllers/cliente");

const router = express.Router();

router.post("/clientes", agregarCliente);
// router.get("/membresia", obtenerMembresia);

module.exports = router;