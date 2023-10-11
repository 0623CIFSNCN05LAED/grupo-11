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
    },
    updateProduct: (id, product) => {
        return db.products.update(id, product)
    },
    deleteProduct: (id) => {
        return db.products.delete(id)
    }
};

module.exports = productoServices;