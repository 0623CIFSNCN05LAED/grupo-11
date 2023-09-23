const producto = require("../data/productos")
const productoServices = require("../productServices/productServices")

module.exports = {
    home: (req, res) => res.render("index", {detalles: producto}),

    login: (req, res) => res.render("login"),

    registro: (req, res) => res.render("registro"),

    carrito:(req,res)=>{
        res.render("carrito_de_compras")
    },

    products:(req,res)=>{
        res.render("products",{detalles:producto})
    },

    createForm:(req, res) => {
        res.render("product-create-form")
    },

    productCreateProcess: (req, res) => {
        
    },

    productDetail: (req, res) => {
        const id = req.params.id
        const product = productoServices.getProductId(id)

        res.render("detalle_de_producto", {product})
    },

    productEditForm: (req, res) => {
        res.render("product-edit-form")
    },

    productEditProcess: (req, res) => {

    },

    productDelete: (req, res) => {

    }
}