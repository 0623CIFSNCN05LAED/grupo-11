// ************* Requires *************

const {Router} = require("express")
const productController = require("../controllers/product-controller")
const multerUpload = require("./multer/multerProductsConfig")
const productsValidations = require("../middledware/productsValidations")
// ************* Router *************

const router = Router()

// ************* Middlewares *************

const authMiddleware = require("../middledware/authMiddleware")

// ************* Rutas *************

//PRODUCTS ROUTERS

router.get("/products", productController.list)

router.get("/products/create", authMiddleware, productController.createForm);
router.post("/products", multerUpload.single("image"), productsValidations , productController.productCreateProcess)


router.get("/products/:id", productController.productDetail)

router.get("/products/:id/edit", authMiddleware,productController.productEditForm)
router.put("/products/:id", multerUpload.single("image"),productsValidations, productController.productEditProcess)

router.delete("/products/:id", productController.productDelete)

// Export

module.exports = router;