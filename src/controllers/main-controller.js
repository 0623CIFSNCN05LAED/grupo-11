module.exports = {
    home: (req, res) => res.render("index"),
    login: (req, res) => res.render("login"),
    registro: (req, res) => res.render("registro"),
    detalle: (req, res) => res.render("detalle_de_producto"),
    carrito: (req, res) => res.render("carrito_de_compras")
}