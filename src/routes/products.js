const express=require("express");
const router=express.Router();

const productsController=require("../controllers/productsController");
 
/*** CREATE ONE PRODUCT ***/
router.get("/create/", productsController.create);//vista formulario


module.exports=router;
