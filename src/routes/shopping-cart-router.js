// ************* Requires *************

const {Router} = require("express")
const shoppingCartController = require("../controllers/shopping-cart-controller")
// ************* Router *************

const router = Router()

// ************* Rutas *************

router.get("/carrito", shoppingCartController.carrito)
router.post("/carrito/:id", shoppingCartController.agregarACarrito)

// Export


module.exports = router;