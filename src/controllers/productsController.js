const productServices=require("../productServices/productServices");
const controller={
    create:(req,res)=>{
        res.render("product-create-form");
    },
}

module.exports= controller;