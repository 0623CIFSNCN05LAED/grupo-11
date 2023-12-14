const productoServices = require("../../services/productServices");

module.exports = {

    list: async (req, res) => {
    const products = await productoServices.getAllProducts();
    res.json({
      meta: {
        status: 201,
        url: req.originalUrl,
        total: products.length
      },
      data: products,
    })},

    productDetail: async (req, res) => {
      const product = await productoServices.getProductId(req.params.id);
      res.json({
        meta: {
          status: 201,
          id: req.params.id,
        },
        data: product,
      })},
  
     
};