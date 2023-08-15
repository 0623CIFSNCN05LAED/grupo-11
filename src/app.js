const express = require ('express');
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname, '../public')))

const port=3003
app.listen(port,()=> {
    console.log(`Se prendio en el puerto ${port}`)
});

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/registro",(req,res)=>{
    res.sendFile(path.join(__dirname, "views/registro.html"));
});

app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname, "views/login.html"));
});


app.get("/detalle_de_producto",(req,res)=>{
    res.sendFile(path.join(__dirname, "views/detalle_de_producto.html"));
});


app.get("/carrito_de_compras",(req,res)=>{
    res.sendFile(path.join(__dirname, "views/carrito_de_compras.html"));
});