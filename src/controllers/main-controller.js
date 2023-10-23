const productoServices = require("../productServices/productServices")
const {validationResult} = require("express-validator")
const User = require("../data/User")
const bcrypt = require("bcryptjs")
const userServices = require("../productServices/userServices")

module.exports = {

    home: (req, res) =>{
        const products = productoServices.getAllProducts()
        res.render("index", {products})
    },
        
    login: (req, res) => res.render("login"),
    

// USERS

    login: (req, res) =>  {
        res.render("login")
    },

    profile: (req, res) => {
        console.log(req.cookies.userEmail);
        const user = req.session.userLogged
        res.render("user_profile", {user})
    },

    logout: (req, res) => {
        req.session.destroy()
        return res.redirect("/")
    },

    access: (req, res) => {

        const user = userServices.findUserEmail("email", req.body.email)
<<<<<<< HEAD
        const data= req.body;
        req.session.userData=data;
       
=======

>>>>>>> 10085a0391ee801a41b6bbe39732b5025bcd5306
        if(!user){
           return res.render("login", {
                errors: {
                    email: {
                        msg: "Email incorrecto"
                    }
                }
           })
        }
        
        if(req.body.remember_user) {
            res.cookie("userEmail", req.body.email, {maxAge: (1000 * 60) * 2})
        }

        if(!bcrypt.compareSync(req.body.password, user.password)){
            return res.render("login", {
                errors: {
                    password: {
                        msg: "Contraseña incorrecta"
                    }
                }
            })

        } else {
            //userLogged es el nombre que le doy a la propiedad del session
            req.session.userLogged = user
            return res.redirect("/profile/" + user.id)
        }
        
    },

    registro: (req, res) => {
        res.render("registro")
    },

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


// PRODUCTOS

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
