const {Router} = require("express")

const router = Router()

const mainController = require("../controllers/main-controller")

// RUTAS

router.get("/", mainController.home)

router.get("/login", mainController.login)

router.get("/registro", mainController.registro)

router.get("/detalle", mainController.detalle)

router.get("/carrito", mainController.carrito)

// EXPORTACIÓN

module.exports = router