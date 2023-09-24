const fs = require("fs")
const path = require("path")
const { v4: uuidv4 } = require('uuid');

module.exports = {
    getProducts: function() {
        const filePath = path.join(__dirname, "./productos.json");
        const products = JSON.parse(fs.readFileSync(filePath, "utf-8"))
        return products
    },
    saveProduct: function(products) {
        const filePath = path.join(__dirname, "./productos.json")
        fs.writeFileSync(filePath, JSON.stringify(products, null, 2))
    },
    findAll: function(){
        return this.getProducts()
    },
    findById: function(id){
        return this.getProducts().find((product) => product.id == id)
    },
    create: function(product) {
        const products = this.getProducts()

        const newProduct = {
            id: uuidv4(),
            ...product
        }
        products.push(newProduct)
        this.saveProduct(products)
    }

}