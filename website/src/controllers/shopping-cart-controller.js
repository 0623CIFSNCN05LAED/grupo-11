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
        const user = req.session.userLogged
        const userId = user.id
        const size = req.body.size
        const quantity = req.body.quantity

        const productsInCart = await shoppingCartServices.getAtllShoppingCart()
        if(productsInCart < 1){
            productoServices.getProductId(idProducto).then(producto => {
                const total = producto.price * quantity
                shoppingCartServices.addToCart(producto, userId, size, quantity, total)
                res.redirect("/carrito")
            }
            )
        }else{
            productsInCart.forEach(product => {
                if(product.id_product == idProducto && product.size == size){
                    const newQuantity = product.quantity + quantity
                    shoppingCartServices.updateQuantity(newQuantity, producto.id)
                    res.redirect("/carrito")
                }else{
                    productoServices.getProductId(idProducto).then(producto => {
                        const total = producto.price * quantity
                        shoppingCartServices.addToCart(producto, userId, size, quantity, total)
                        res.redirect("/carrito")
                    }
                    )
                }
            });
        }

        // shoppingCartServices.getAtllShoppingCart().then(products => {
        //     products.forEach(product => {
        //         if(product.id_product === idProducto && product.size === size){
        //             console.log("si hay conincidencia");
        //             product.quantity += quantity
        //             res.redirect("/carrito")
        //         }else{
        //             console.log("no hay productos iguales");
                    
        //         }
        //     });

            // productoServices.getProductId(idProducto).then(producto => {
            //     const total = producto.price * quantity
            //     shoppingCartServices.addToCart(producto, userId, size, quantity, total)
            //     res.redirect("/carrito")
            // })

    },

    borrarProductoCarrito: async (req, res) => {
        const id = req.params.id
        shoppingCartServices.deleteProductFromCart(id).then(() => res.redirect("/carrito"))
    }

}