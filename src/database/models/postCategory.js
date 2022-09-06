const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
      postId: {
        type: DataTypes.INTEGER,
        primeryKey:true,
        foreignKey: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true,
      }
    },
    { timestamps: false },
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'post-category',
      through: PostCategory,
      foreignKey: 'id',
      otherKey: 'id',
    })
    models.Category.belongsToMany(models.BlogPost, {
      as: 'category-post',
      through: PostCategory,
      foreignKey: 'id',
      otherKey: 'id',
    })
  }

  return PostCategory;
};

module.exports = PostCategory;