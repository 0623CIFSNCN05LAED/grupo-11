module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      "Products",
      {
        price: DataTypes.DECIMAL,
        discount: DataTypes.INTEGER,
        product_name: DataTypes.STRING,
        image: DataTypes.STRING,
      },
      {
        tableName: "products",
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );
  
    return Model;
  };