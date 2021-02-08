const express = require("express");
const {agregarMembresia,obtenerMembresia} = require("../controllers/membresia");

const router = express.Router();

router.post("/membresia", agregarMembresia);
router.get("/membresia", obtenerMembresia);

module.exports = router;