'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PostCategories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PostCategories.init({
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
  }, {
    sequelize,
    modelName: 'PostCategories',
    timestamps: false,
  });
  return PostCategories;
};