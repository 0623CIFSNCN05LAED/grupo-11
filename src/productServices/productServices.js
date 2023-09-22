const producto = require("../data/productos")

const productoServices = {
    getAllProducts:()=>{
        const productos = producto
        return productos;
    },

    getProductId: (id) => {
        return producto.find((product) => product.id == id)
    }
};

module.exports = productoServices;