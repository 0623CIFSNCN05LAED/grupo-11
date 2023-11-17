const { Products } = require("../database/models");
const Sequelize = require("sequelize");

const productoServices = {

    getAllProducts:()=>{
        return Products.findAll()
    },

    getProductId: (id) => {
        return Products.findByPk(id)
    },

    createProduct: (product) => {
        return Products.create({
            price: product.price,
            discount: product.discount,
            product_name: product.name,
            image: product.image
        })
        // return db.products.create(product)
    },

    updateProduct: (product, id) => {
        return Products.update({
            price: product.price,
            discount: product.discount,
            product_name: product.name
        }, {
            where: {id: id}
        })
    },

    deleteProduct: (id) => {
        return Products.destroy({
            where: {id: id}
        })
    },
    
};

module.exports = productoServices;