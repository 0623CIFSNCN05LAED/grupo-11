module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      "ProductsSize",
      {
        
        id_products: DataTypes.DECIMAL,
        id_size: DataTypes.DECIMAL,
      },
      {
        tableName: "productssize",
      }
    );
  
    return Model;
  };