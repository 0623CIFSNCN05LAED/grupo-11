const productoServices = require("../services/productServices")

module.exports = {

    home: (req, res) =>{
        return productoServices.getAllProducts().then(products => res.render("index", {products})
        )
    }
}