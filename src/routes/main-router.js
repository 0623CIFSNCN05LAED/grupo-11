const {Router} = require("express")

const router = Router()

const mainController = require("../controllers/main-controller")

// RUTAS

router.get("/", mainController.home)

router.get("/login", mainController.login)

router.get("/registro", mainController.registro)

router.get("/detalle", mainController.detalle)
router.get("/detalle/:id", mainController.detalleId)

router.get("detalle/carrito",mainController.detalle)

router.get("/carrito", mainController.carrito)
router.get("/carrito/",mainController.carrito)
router.get("/create/", mainController.create);//vista formulario

router.get("/products",mainController.products)



// EXPORTACIÓN

module.exports = router;