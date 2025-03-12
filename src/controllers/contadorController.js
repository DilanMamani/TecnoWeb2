const Usuario = require("../models/Usuario");
const Producto = require("../models/Producto");

const obtenerContadores = async (req, res) => {
    try {
        const totalUsuarios = await Usuario.countDocuments();
        const totalProductos = await Producto.countDocuments();

        res.json({
            usuarios: totalUsuarios,
            productos: totalProductos
        });
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los contadores" });
    }
};

module.exports = { obtenerContadores };