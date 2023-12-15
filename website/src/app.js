// ************* Requires *************

const express = require ('express');
const path = require('path')
const methodOverride = require("method-override");



// *********** session ************

const session = require ('express-session');

// ********** Cookies ***********
const cookies = require("cookie-parser");

const app = express();

const cors = require("cors");
app.use(
  cors(
    (corsOptions = {
      origin: "*",
    })
  )
);

const mainRouter = require("./routes/main-router")
const productRouter = require("./routes/product-router")
const userRouter = require("./routes/user-router")
const shoppingCartRouter = require("./routes/shopping-cart-router")
const userLoggedMiddleware = require("./middledware/userLoggedMiddleware")


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
app.use(cookies())
app.use(userLoggedMiddleware)

app.set("view engine", "ejs")
app.set("views", "./src/views")

// ************* Start server *************

const PORT= process.env.PORT || 3011
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))

// ************* Router *************npm

app.use(mainRouter)
app.use(productRouter)
app.use(userRouter)
app.use(shoppingCartRouter)