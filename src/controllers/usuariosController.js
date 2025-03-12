const Usuario = require("../models/Usuario");

const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los usuarios" });
    }
};

const crearUsuario = async (req, res) => {
    try {
        const nuevoUsuario = new Usuario(req.body);
        await nuevoUsuario.save();
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(400).json({ error: "Error al crear el usuario" });
    }
};

const actualizarUsuario = async (req, res) => {
    try {
        const usuarioActualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!usuarioActualizado) return res.status(404).json({ error: "Usuario no encontrado" });
        res.json(usuarioActualizado);
    } catch (error) {
        res.status(400).json({ error: "Error al actualizar el usuario" });
    }
};

const eliminarUsuario = async (req, res) => {
    try {
        const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id);
        if (!usuarioEliminado) return res.status(404).json({ error: "Usuario no encontrado" });
        res.json({ mensaje: "Usuario eliminado correctamente" });
    } catch (error) {
        res.status(400).json({ error: "Error al eliminar el usuario" });
    }
};

module.exports = { obtenerUsuarios, crearUsuario, actualizarUsuario, eliminarUsuario };