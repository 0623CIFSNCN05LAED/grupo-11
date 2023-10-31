// ************* Requires *************

const {Router} = require("express")
const productController = require("../controllers/product-controller")
// ************* Router *************

const authMiddleware = require("../middledware/authMiddleware")

const router = Router()
// HEAD
// ******* MULTER ******* //

const path = require("path")
const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "../../public/images/products"))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })

const upload = multer({storage})

// ************* Rutas *************

//PRODUCTS ROUTERS

router.get("/carrito", productController.carrito)

router.get("/products", productController.products)

router.get("/products/create", authMiddleware, productController.createForm);
router.post("/products", upload.single("image"),productController.productCreateProcess)

router.get("/products/:id", productController.productDetail)

router.get("/products/:id/edit", productController.productEditForm)
router.put("/products/:id", productController.productEditProcess)

router.delete("/products/:id", productController.productDelete)

// Export


module.exports = router;