// ************* Requires *************

const {Router} = require("express")
const userController = require("../controllers/user-controller")
const registerValidation = require("../middledware/registerValidations")
const multerUpload = require("./multer/multerConfig")
// ************* Router *************

const guetsMiddleware = require("../middledware/guetsMiddleware")
const authMiddleware = require("../middledware/authMiddleware")

const router = Router()
// HEAD
// ******* MULTER ******* //
// const multer = require("multer")

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, path.join(__dirname, "../../public/images/usersProfile"))
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//     }
//   })

// const upload = multer({storage})

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