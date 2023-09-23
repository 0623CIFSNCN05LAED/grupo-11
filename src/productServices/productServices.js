const db = require("../data/db")

const productoServices = {

    getAllProducts:()=>{
        return db.products.findAll()
    },

    getProductId: (id) => {
        return db.products.findById(id)
    },
    createProduct: (product) => {
        return db.products.create(product)
    }
};

module.exports = productoServices;