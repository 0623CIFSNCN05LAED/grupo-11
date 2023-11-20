module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      "Size",
      {
       
        size_name: DataTypes.STRING,
        
      },
      {
        tableName: "size",
     
      }
    );
  
    return Model;
  };
