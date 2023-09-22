const productServices = require("../productServices/productServices")
const producto = require("../data/productos")

const productoServices = {

    getProductId: (id) => {
        return producto.find((product) => product.id == id)
    }
};



module.exports = productoServices;