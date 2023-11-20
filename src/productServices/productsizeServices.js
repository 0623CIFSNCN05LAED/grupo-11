const { Productsize } = require("../database/models");
const Sequelize = require("sequelize");

const productosizeServices = {

    getAllProductsize:()=>{
        return Productsize.findAll()
    },

    getProductsizeId: (id) => {
        return Productsize.findByPk(id)
    },

       
};

module.exports = productosizeServices;