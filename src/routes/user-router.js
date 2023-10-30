// ************* Requires *************

const {Router} = require("express")
const userController = require("../controllers/user-controller")
const {body} = require("express-validator")
const userLogin = require("../middledware/userLogin");
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

//USERS ROUTERS

router.get("/login", userController.login)
router.post("/login", userController.access)
router.get("/profile/:id", authMiddleware ,userController.profile)
router.post("/logout", userController.logout)

router.get("/registro", userController.registro)
router.post("/registro", upload.single("imagenDePerfil"), registerValidations, guetsMiddleware ,userController.procesoRegistro)

// Export


module.exports = router;