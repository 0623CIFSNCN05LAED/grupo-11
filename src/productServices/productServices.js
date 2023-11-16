const { Products } = require("../database/models");
const Sequelize = require("sequelize");

const productoServices = {

    getAllProducts:()=>{
        return Products.findAll()
    },
    // getProductId: (id) => {
    //     return db.products.findById(id)
    // },
    // createProduct: (product) => {
    //     return db.products.create(product)
    // },
    // updateProduct: (id, product) => {
    //     return db.products.update(id, product)
    // },
    // deleteProduct: (id) => {
    //     return db.products.delete(id)
    // },
    
};

module.exports = productoServices;