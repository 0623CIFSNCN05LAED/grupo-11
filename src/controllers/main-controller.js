module.exports = {
    home: () => res.render("index"),
    login: () => res.render("login"),
    registro: () => res.render("registro"),
    detalle: () => res.render("detalle_del_producto"),
    carrito: () => res.render("carrito_de_compras"),
}