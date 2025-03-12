const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const usuariosRoutes = require("./routes/usuariosRoutes");
const productosRoutes = require("./routes/productosRoutes");
const { contarOperaciones, obtenerOperaciones } = require("./middleware/contadorMiddleware");
const contadorRoutes = require("./routes/contadorRoutes");


dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(contarOperaciones);

app.get("/operaciones", obtenerOperaciones);

app.use("/contadores", contadorRoutes);


app.use("/usuarios", usuariosRoutes);
app.use("/productos", productosRoutes);

app.get("/", (req, res) => {
    res.send("API funcionando...");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});