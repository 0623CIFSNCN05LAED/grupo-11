const db = require("../data/db")

const productoServices = {

    getAllProducts:()=>{
        return db.products.findAll()
    },
<<<<<<< HEAD

=======
>>>>>>> 9e2e01f1c308cdb09cb337716601cf5fd46d6dc0

    getProductId: (id) => {
        return db.products.findById(id)
    },
    createProduct: (product) => {
        return db.products.create(product)
    }
};

module.exports = productoServices;