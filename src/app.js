// ************* Requires *************

const express = require ('express');
const path = require('path')
const methodOverride = require("method-override");

// *********** session ************

const session = require ('express-session');

// ********** Cookies ***********
const cookies = require("cookie-parser");

const app = express();

const mainRouter = require("./routes/main-router")


// ************* Middlewares *************

app.use(express.static(path.join(__dirname, '../public')))
app.use(methodOverride("_method"))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(
    session({
        secret:"sessionGeneral",
        resave:false,
        saveUninitialized:false,
    })
);

app.set("view engine", "ejs")
app.set("views", "./src/views")

// ************* Start server *************

const PORT= process.env.PORT || 3011
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))

// ************* Router *************

app.use(mainRouter)