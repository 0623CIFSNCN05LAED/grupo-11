const { ShoppingCart } = require("../database/models");
const Sequelize = require("sequelize");

const shoppingCartServices = {
    
    getAtllShoppingCart: () => {
        return ShoppingCart.findAll()
    },

    // getShoppingCartId: () => {
    //     return ProductsShoppingCart.findByPk(id)
    // }

    addToCart: (producto) => {
        console.log(producto)
        ShoppingCart.create({
            image: producto.image,
            product_name: producto.product_name,
            id_product: producto.id,
            total: producto.price
        })
    }

}

module.exports = shoppingCartServices