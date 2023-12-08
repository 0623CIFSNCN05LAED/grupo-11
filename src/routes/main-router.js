// ************* Requires *************

const {Router} = require("express")
const mainController = require("../controllers/main-controller")
const apiRouter = require('./api/index')

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



// ************* Rutas *************

router.use('/api', apiRouter )

router.get("/", mainController.home)

// Export


module.exports = router;