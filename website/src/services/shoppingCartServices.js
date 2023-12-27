const { ShoppingCart } = require("../database/models");

const shoppingCartServices = {
    
    getAtllShoppingCart: () => {
        return ShoppingCart.findAll()
    },

    addToCart: (producto, idUser, size, quantity, total) => {
        ShoppingCart.create({
            image: producto.image,
            product_name: producto.product_name,
            id_product: producto.id,
            total: total,
            id_users: idUser,
            quantity: quantity,
            size: size
        })
    },

    deleteProductFromCart: (id) => {
        return ShoppingCart.destroy({
            where: {id: id}
        })
    },

    productsFilter: (productos, req) => {
            const user = req.session.userLogged
            const userId = user.id
            const productosUsuario = []

            productos.forEach(producto => {
                if(userId === producto.id_users){
                    productosUsuario.push(producto)
                }
            });

            return productosUsuario
    },

    getTotalPrice: (productosUsuario) => {
        let total = 0

        productosUsuario.forEach(producto => {
            total += producto.total
        });

        return total
    },

    updateQuantity:(quantity, id) => {
        return ShoppingCart.update({
            quantity: quantity
        },{
            where: {id:id}
        })
    }

}

module.exports = shoppingCartServices