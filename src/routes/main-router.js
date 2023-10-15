// ************* Requires *************

const {Router} = require("express")
const mainController = require("../controllers/main-controller")
const {body} = require("express-validator")

// ************* Router *************

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

const registerValidations = [
  body("name").notEmpty().withMessage("Debes introducir tu nombre"),
  body("lastName").notEmpty().withMessage("Debes introducir tu apellido"),
  body("email").notEmpty().withMessage("Debes introducir una dirección de correo").isEmail().withMessage("Debes introducir un correo electrónico válido"),
  body("password").notEmpty().withMessage("Debes introducir una contraseña").isLength({min: 6}).withMessage("La contraseña debe contener al menos 6 caracteres"),
  body("imagenDePerfil").custom((value, {req}) => {
      let file = req.file
      let extencionesAceptadas = [".png", ".jpg"]

      if(!file){
          throw new Error("Tienes que subir una imagen")
      } else {
          let extensionFile = path.extname(file.originalname)

          if(!extencionesAceptadas.includes(extensionFile)){
              throw new Error(`Las extensiones de archivo que se aceptan son: ${extencionesAceptadas.join(", ")}`)
          }
      }

      return true
  })
]

// ************* Rutas *************


router.get("/", mainController.home)

router.get("/login", mainController.login)
router.post("/login", mainController.access)
router.get("/profile/:id", mainController.profile)

router.get("/registro", mainController.registro)
router.post("/registro", upload.single("imagenDePerfil"), registerValidations, mainController.procesoRegistro)

router.get("/carrito", mainController.carrito)

router.get("/products", mainController.products)

router.get("/products/create", mainController.createForm);
router.post("/products", upload.single("image"),mainController.productCreateProcess)

router.get("/products/:id", mainController.productDetail)

router.get("/products/:id/edit", mainController.productEditForm)
router.put("/products/:id", mainController.productEditProcess)

router.delete("/products/:id", mainController.productDelete)

// Export


module.exports = router;