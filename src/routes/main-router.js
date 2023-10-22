// ************* Requires *************

const {Router} = require("express")
const mainController = require("../controllers/main-controller")
const {body} = require("express-validator")
const userLogin= require("../middlewares/userLogin");

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


router.get("/", mainController.home);


<<<<<<< HEAD
router.get("/registro", mainController.registro)
router.post("/registro",upload.single("imagenDePerfil"), registerValidations, mainController.procesoRegistro)
=======
//USERS ROUTERS

router.get("/login", guetsMiddleware ,mainController.login)
router.post("/login", mainController.access)
router.get("/profile/:id", authMiddleware , mainController.profile)
router.get("/logout", mainController.logout)

router.get("/registro", guetsMiddleware ,mainController.registro)
router.post("/registro", upload.single("imagenDePerfil"), registerValidations ,mainController.procesoRegistro)


//PRODUCTS ROUTERS
>>>>>>> 10085a0391ee801a41b6bbe39732b5025bcd5306

router.get("/carrito", mainController.carrito)

router.get("/products", mainController.products)

router.get("/products/create",userLogin, mainController.createForm);
router.post("/products", upload.single("image"),mainController.productCreateProcess)

router.get("/products/:id", mainController.productDetail)

router.get("/products/:id/edit",userLogin, mainController.productEditForm)
router.put("/products/:id", mainController.productEditProcess)

router.delete("/products/:id", mainController.productDelete)

// Export


module.exports = router;