const { ShoppingCart } = require("../database/models");

const shoppingCartServices = {
    
    getAtllShoppingCart: () => {
        return ShoppingCart.findAll()
    },

    addToCart: (producto, idUser) => {
        ShoppingCart.create({
            image: producto.image,
            product_name: producto.product_name,
            id_product: producto.id,
            total: producto.price,
            id_users: idUser
        })
    }

}

module.exports = shoppingCartServices