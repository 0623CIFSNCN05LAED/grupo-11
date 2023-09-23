// ************* Requires *************

const express = require ('express');
const path = require('path')
const methodOverride = require("method-override")

const app = express();

const mainRouter = require("./routes/main-router")

// ************* Middlewares *************

app.use(express.static(path.join(__dirname, '../public')))
app.use(methodOverride("_method"))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// ************* Template engine *************

app.set("view engine", "ejs")
app.set("views", "./src/views")

// ************* Start server *************

const PORT= process.env.PORT || 3011
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))

// ************* Router *************

app.use(mainRouter)