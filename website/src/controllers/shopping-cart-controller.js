const shoppingCartServices = require("../services/shoppingCartServices")
const productoServices = require("../services/productServices")

module.exports = {

    carrito: async (req,res)=>{
        const productos = await shoppingCartServices.getAtllShoppingCart()

        const productosUsuario = await shoppingCartServices.productsFilter(productos, req)

        const total = await shoppingCartServices.getTotalPrice(productosUsuario)

        res.render("carrito_de_compras", {productosUsuario, total})
    },

    agregarACarrito: async (req, res) => {
        const idProducto = req.params.id
        console.log("ID DEL PRODUCTO ===>>>", idProducto)
        const user = req.session.userLogged
        console.log("USUARIO ===>>>", user);
        const userId = user.id
        console.log("USUARIO ID ===>>>", userId);
        const data = req.body
        console.log("DATA FORMULARIO ===>>>", data)

        productoServices.getProductId(idProducto).then(producto => {
            shoppingCartServices.addToCart(producto, userId)
            res.redirect("/carrito")
        })
    },

    borrarProductoCarrito: async (req, res) => {
        const id = req.params.id
        shoppingCartServices.deleteProductFromCart(id).then(() => res.redirect("/carrito"))
    }

}