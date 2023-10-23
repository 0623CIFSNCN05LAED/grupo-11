const productoServices = require("../productServices/productServices")
const {validationResult} = require("express-validator")
const User = require("../data/User")
const bcrypt = require("bcryptjs")
const userServices = require("../productServices/userServices")

module.exports = {

    home: (req, res) =>{
        const products = productoServices.getAllProducts()
        res.render("index", {products})
    }
}