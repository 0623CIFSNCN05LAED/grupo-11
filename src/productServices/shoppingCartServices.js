const { ProductsShoppingCart } = require("../database/models");
const Sequelize = require("sequelize");

const shoppingCartServices = {
    
    getAtllShoppingCart: () => {
        return ProductsShoppingCart.findAll()
    },
    getShoppingCartId: () => {
        return ProductsShoppingCart.findByPk(id)
    }

}