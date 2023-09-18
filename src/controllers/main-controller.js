const producto = require("../data/productos")
const productoServices = require("../productServices/productServices")

module.exports = {
    home: (req, res) => res.render("index", {detalles: producto}),
    login: (req, res) => res.render("login"),
    registro: (req, res) => res.render("registro"),
    detalle: (req, res) => res.render("detalle_de_producto", {
        detalles: producto,
    }),
<<<<<<< HEAD
    carrito: (req, res) => res.render("carrito_de_compras",{
     detalle:producto,
    })
};
=======
    detalleId: (req, res) => {

        const id = req.params.id
        const product = productoServices.getProductId(id)


        res.render("detalle_de_producto", {product})
    },
    carrito: (req, res) => res.render("carrito_de_compras")
}
>>>>>>> 7e3be222312e329fdf7cda893f88b8a6486080ce
