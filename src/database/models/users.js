module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      "Users",
      {
        name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        profile_picture: DataTypes.STRING
      },
      {
        //como se llama la tabla en la base de datos
        tableName: "users",
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );
    Model.associate = (model) => {

      Model.hasOne(model.ShoppingCart, {
        as:"users",
        foreignKey:"id_users"
      });
  
    }
    return Model;
  };