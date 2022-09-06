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
    timestamps: false,
  });

  Category.associate = (models) => {
    Category.hasMany(models.PostCategory, {
      as: 'categoryPost',
      foreignKey: 'categoryId',
    })
  }

  return Category;
};

module.exports = Category;
