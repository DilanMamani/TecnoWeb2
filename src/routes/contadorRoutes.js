const express = require("express");
const { obtenerContadores } = require("../controllers/contadorController");

const router = express.Router();

router.get("/", obtenerContadores);

module.exports = router;