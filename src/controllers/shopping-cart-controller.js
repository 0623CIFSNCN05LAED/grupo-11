const shoppingCartServices = require("../productServices/shoppingCartServices")
const productoServices = require("../productServices/productServices")

module.exports = {

    carrito:(req,res)=>{
        shoppingCartServices.getAtllShoppingCart().then(productos => {
            let total = 0
            productos.forEach(producto => {
                total += producto.total
            });
            res.render("carrito_de_compras", {productos, total})
        })
    },

    agregarACarrito: (req, res) => {
        const idProducto = req.params.id
        const user = req.session.userLogged
        const userId = user.id
        productoServices.getProductId(idProducto).then(producto => {
            shoppingCartServices.addToCart(producto, userId)
            res.redirect("/carrito")
        })
    },

}