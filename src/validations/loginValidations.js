const {body} = require("express-validator")
const path = require("path")


module.exports = [
    body("email")
    .notEmpty()
    .withMessage("Debe completar este campo")
    .bail()
    .isEmail()
    .withMessage("Debe ser un email válido"),
    body("password").notEmpty().withMessage("Debes introducir una contraseña").isLength({min: 6}).withMessage("La contraseña debe contener al menos 6 caracteres"),
    
]