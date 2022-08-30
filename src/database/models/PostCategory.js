const PostCategories = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define('PostCategories', {
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
  })

  // PostCategories.associate = (models) => {
  //   PostCategories.belongsTo(models.BlogPost, {
  //     as: 'post',
  //     foreignKey: 'postId'
  //   })
  //   PostCategories.belongsTo(models.Category, {
  //     as: 'category',
  //     foreignKey: 'categoryId'
  //   })
  // }

  return PostCategories;
};

module.exports = PostCategories;