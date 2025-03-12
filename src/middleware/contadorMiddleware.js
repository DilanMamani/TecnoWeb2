let totalOperaciones = 0;

const contarOperaciones = (req, res, next) => {
    totalOperaciones++;
    next();
};

const obtenerOperaciones = (req, res) => {
    res.json({ totalOperaciones });
};

module.exports = { contarOperaciones, obtenerOperaciones };