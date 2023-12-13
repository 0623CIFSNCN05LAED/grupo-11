// ************* Requires *************

const {Router} = require("express")
const userController = require("../controllers/user-controller")
const registerValidation = require("../middledware/registerValidations")
const multerUpload = require("./multer/multerConfig")
// ************* Router *************

const router = Router()

// ************* Middlewares *************

const guetsMiddleware = require("../middledware/guetsMiddleware")
const authMiddleware = require("../middledware/authMiddleware")

// ************* Rutas *************

//USERS ROUTERS

router.get("/login", guetsMiddleware, userController.login)
router.post("/login", userController.access)
router.get("/profile/:id", authMiddleware ,userController.profile)
router.post("/logout", userController.logout)

router.get("/registro", guetsMiddleware, userController.registro)
router.post("/registro", multerUpload.single("imagenDePerfil"), registerValidation, userController.procesoRegistro)

// Export
module.exports = router;