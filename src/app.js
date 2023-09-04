const express = require ('express');
const path = require('path')

const app = express();

const mainRouter = require("./routes/main-router")

// RUTA PÚBLICA

app.use(express.static(path.join(__dirname, '../public')))

// INICIAR SERVIDOR

const PORT= process.env.PORT || 3011
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))

// SETS

app.set("view engine", "ejs")
app.set("views", "./src/views")

// RUTAS

app.use(mainRouter)