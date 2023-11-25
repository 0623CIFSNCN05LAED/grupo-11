const productoServices = require("../productServices/productServices")
const shoppingCartServices = require("../productServices/shoppingCartServices")

module.exports = {

// PRODUCTOS

    createForm:(req, res) => {
        res.render("product-create-form",)
    },

    list: (req, res) => {
        productoServices.getAllProducts()
            .then((products) => {
            res.render("products", {products});
        })
    },

    productCreateProcess: (req, res) => {
        productoServices.createProduct(req.body, req.file.filename).then(productos => {res.redirect("/products")})
    },

    productDetail: (req, res) => {
        const id = req.params.id
        return productoServices.getProductId(id).then(product => {
            res.render("detalle_de_producto", {product})
    })
    },

    productEditForm: (req, res) => {
        const id = req.params.id
        return productoServices.getProductId(id).then(product => res.render("product-edit-form", {product}))
    },

    productEditProcess: (req, res) => {
        const product = req.body
        const id = req.params.id
        return productoServices.updateProduct(product, id).then(product => res.redirect("/products"))
    },

    productDelete: (req, res) => {
        const id = req.params.id
        productoServices.deleteProduct(id).then(() => res.redirect("/products"))
    },
}