const productoServices = require("../productServices/productServices")
const {validationResult} = require("express-validator")
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const userServices = require("../productServices/userServices")

module.exports = {
    home: (req, res) =>{
        const products = productoServices.getAllProducts()
        res.render("index", {products})
    },
        
    login: (req, res) => res.render("login"),

    profile: (req, res) => res.render("user_profile"),

    access: (req, res) => {
        const user = userServices.findUserEmail("email", req.body.email)
       
        if(!user){
           return res.render("login", {
                errors: {
                    email: {
                        msg: "Email incorrecto"
                    }
                }
           })
        }
        if(!bcrypt.compareSync(req.body.password, user.password)){
            return res.render("login", {
                errors: {
                    password: {
                        msg: "Contraseña incorrecta"
                    }
                }
            })
        }
        return res.render("user_profile", {user})
    },

    registro: (req, res) => res.render("registro"),

    procesoRegistro: (req, res) => {
        let errors = validationResult(req)

        if(errors.errors.length > 0){
            return res.render("registro", {errors: errors.mapped(), oldData: req.body})
        }

        let userInDB = User.findByField("email", req.body.email)

        if(userInDB){
            return res.render("registro", {errors: {email: {msg: "El email ingresado ya está en uso"}}, oldData: req.body})
        }

        let nuevoUsuario = {
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10),
            imagenDePerfil: req.file.filename
        }

        User.create(nuevoUsuario)

        return res.redirect("/")
    },

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
