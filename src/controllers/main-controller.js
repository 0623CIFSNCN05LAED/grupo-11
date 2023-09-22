const producto = require("../data/productos")
const productoServices = require("../productServices/productServices")

module.exports = {
    home: (req, res) => res.render("index", {detalles: producto}),

    login: (req, res) => res.render("login"),

    registro: (req, res) => res.render("registro"),

    detalleId: (req, res) => {

        const id = req.params.id
        const product = productoServices.getProductId(id)

        res.render("detalle_de_producto", {product})
    },

    carrito:(req,res)=>{
        res.render("carrito_de_compras")
    },

    create:(req, res) => {
        res.render("product-create-form")
    },

    products:(req,res)=>{
        res.render("products")
    },

    productCreate: (req, res) => {

    },

    productEditForm: (req, res) => {

    },

    productEdit: (req, res) => {

    },

    productDelete: (req, res) => {

    }
}


