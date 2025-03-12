const Producto = require("../models/Producto");

const obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los productos" });
    }
};

const crearProducto = async (req, res) => {
    try {
        const nuevoProducto = new Producto(req.body);
        await nuevoProducto.save();
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(400).json({ error: "Error al crear el producto" });
    }
};

const actualizarProducto = async (req, res) => {
    try {
        const productoActualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!productoActualizado) return res.status(404).json({ error: "Producto no encontrado" });
        res.json(productoActualizado);
    } catch (error) {
        res.status(400).json({ error: "Error al actualizar el producto" });
    }
};

const eliminarProducto = async (req, res) => {
    try {
        const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
        if (!productoEliminado) return res.status(404).json({ error: "Producto no encontrado" });
        res.json({ mensaje: "Producto eliminado correctamente" });
    } catch (error) {
        res.status(400).json({ error: "Error al eliminar el producto" });
    }
};

module.exports = { obtenerProductos, crearProducto, actualizarProducto, eliminarProducto };