// ************* Requires *************

const {Router} = require("express")
const mainController = require("../controllers/main-controller")

// ************* Router *************

const router = Router()

// Rutas

router.get("/", mainController.home)

router.get("/login", mainController.login)

router.get("/registro", mainController.registro)

router.get("/carrito", mainController.carrito)

router.get("/products", mainController.products)

router.get("/products/create", mainController.create);
router.post("/products", mainController.productCreate)

router.get("/products/:id", mainController.detalleId)

router.get("/products/:id/edit", mainController.productEditForm)
router.put("/products/:id", mainController.productEdit)
router.delete("/products/:id", mainController.productDelete)

// Export

module.exports = router;