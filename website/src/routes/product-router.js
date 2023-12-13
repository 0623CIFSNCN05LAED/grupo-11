// ************* Requires *************

const {Router} = require("express")
const productController = require("../controllers/product-controller")
const multerUpload = require("./multer/multerConfig")
// ************* Router *************

const router = Router()

// ************* Middlewares *************

const authMiddleware = require("../middledware/authMiddleware")

// ************* Rutas *************

//PRODUCTS ROUTERS

router.get("/products", productController.list)

router.get("/products/create", authMiddleware, productController.createForm);
router.post("/products", multerUpload.single("image"), productController.productCreateProcess)

router.get("/products/:id", productController.productDetail)

router.get("/products/:id/edit", productController.productEditForm)
router.put("/products/:id", productController.productEditProcess)

router.delete("/products/:id", productController.productDelete)

// Export

module.exports = router;