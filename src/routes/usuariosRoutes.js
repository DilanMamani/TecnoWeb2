const express = require("express");
const { obtenerUsuarios, crearUsuario, actualizarUsuario, eliminarUsuario } = require("../controllers/usuariosController");

const router = express.Router();

router.get("/", obtenerUsuarios);
router.post("/", crearUsuario);
router.put("/:id", actualizarUsuario);
router.delete("/:id", eliminarUsuario);

module.exports = router;