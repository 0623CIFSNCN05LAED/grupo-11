
const productoServices = require("../productServices/productServices")



module.exports = {
    home: (req, res) =>{
        const products = productoServices.getAllProducts()
        res.render("index", {products})
    },
        
    login: (req, res) => res.render("login"),

    registro: (req, res) => res.render("registro"),

    carrito:(req,res)=>{
        res.render("carrito_de_compras")
    },

    products:(req,res)=>{
        const products = productoServices.getAllProducts()
        res.render("products",{products})
    },

    createForm:(req, res) => {
        res.render("product-create-form",)
    },

    productCreateProcess: (req, res) => {
        const product = {
           name: req.body.name,
           price: Number(req.body.price),
           discount: Number(req.body.discount),
           image: req.file ? req.file.filename : "defaul-image.png"
        }
        productoServices.createProduct(product)
        res.redirect("/products")
    },

    productDetail: (req, res) => {
        const id = req.params.id
        const product = productoServices.getProductId(id)
        

        res.render("detalle_de_producto", {product})
    },

    productEditForm: (req, res) => {
        const id = req.params.id
        const product = productoServices.getProductId(id)
        res.render("product-edit-form", {product})
    },

    productEditProcess: (req, res) => {
        const product = req.body
        const id = req.params.id

        let productoEditado = {
            ...product,
            price: Number(req.body.price),
            discount: Number(req.body.discount)
        }
        // const image = req.file
        //     ? req.file.filename
        //     : productoServices.getProductId(id).image
        // product.image = image;

        productoServices.updateProduct(id, productoEditado)
        res.redirect("/products")
    },

    productDelete: (req, res) => {
        const id = req.params.id
        productoServices.deleteProduct(id)
        res.redirect("/products")
      
    }
}