// ************* Requires *************

const express = require ('express');
const path = require('path')
const methodOverride = require("method-override")

const app = express();

const mainRouter = require("./routes/main-router")

// ************* Middlewares *************

app.use(express.static(path.join(__dirname, '../public')))
app.use(methodOverride("_method"))

// ************* Start server *************

const PORT= process.env.PORT || 3011
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))

// ************* Template engine *************

app.set("view engine", "ejs")
app.set("views", "./src/views")

// ************* Router *************

app.use(mainRouter)