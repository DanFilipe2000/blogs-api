const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoincrement: true,
    },
    name: DataTypes.STRING,
  },
  { 
    tableName: 'Categories',
    timestamps: false,
  });
  
  return Category;
};

module.exports = Category;
