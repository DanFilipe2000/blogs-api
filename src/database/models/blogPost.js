const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  { 
    timestamps: false 
  })

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { as: 'user', foreignKey: 'userId' }
    );
  }

  return BlogPost;
};

module.exports = BlogPost;