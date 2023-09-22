const producto = require("../data/productos")

const productoServices = {
<<<<<<< HEAD
=======
    getAllProducts:()=>{
        const productos = producto
        return productos;
    },
>>>>>>> bee9bf44fd07e45352a7e70998d24d7313e3a5ad

    getProductId: (id) => {
        return producto.find((product) => product.id == id)
    }
};



module.exports = productoServices;