const productoServices = require("../productServices/productServices")

module.exports = {

    home: (req, res) =>{
        const products = productoServices.getAllProducts()
        res.render("index", {products})
    }
}