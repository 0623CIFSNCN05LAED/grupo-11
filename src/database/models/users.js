module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      "Users",
      {
        price: DataTypes.DECIMAL,
        discount: DataTypes.INTEGER,
        produt_name: DataTypes.STRING,
        image: DataTypes.STRING,
      },
      {
        //como se llama la tabla en la base de datos
        tableName: "users",
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );
    
    
    return Model;
  };