const express=require("express");
const router=express.Router();

const productsController=require("../controllers/productsController");
 
/*** CREATE ONE PRODUCT ***/
router.get("/create/", productsController.create);//vista formulario
router.post("/", productsController.store);//store es el metodo que va a hacer el create, ruta a la cual el formulario va a ir 


