// ************* Requires *************

const {Router} = require("express")
const mainController = require("../controllers/main-controller")
const productController = require("../controllers/product-controller")
const userController = require("../controllers/user-controller")
const {body} = require("express-validator")

// ************* Router *************

const guetsMiddleware = require("../middledware/guetsMiddleware")
const authMiddleware = require("../middledware/authMiddleware")

const router = Router()
// HEAD
// ******* MULTER ******* //

const path = require("path")
const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "../../public/images"))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })

const upload = multer({storage})

// Validaciones

const registerValidations = require("../middledware/registerValidations")

// ************* Rutas *************


router.get("/", mainController.home)


//USERS ROUTERS

router.get("/login", userController.login)
router.post("/login", userController.access)
router.get("/profile/:id", authMiddleware ,userController.profile)
router.post("/logout", userController.logout)

router.get("/registro", userController.registro)
router.post("/registro", upload.single("imagenDePerfil"), registerValidations, guetsMiddleware ,userController.procesoRegistro)


//PRODUCTS ROUTERS

router.get("/carrito", productController.carrito)

router.get("/products", productController.products)

router.get("/products/create", productController.createForm);
router.post("/products", upload.single("image"),productController.productCreateProcess)

router.get("/products/:id", productController.productDetail)

router.get("/products/:id/edit", productController.productEditForm)
router.put("/products/:id", productController.productEditProcess)

router.delete("/products/:id", productController.productDelete)

// Export


module.exports = router;