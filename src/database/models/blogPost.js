const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoincrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
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
    BlogPost.hasMany(models.PostCategory,
      { as: 'blogPost', foreignKey: 'postId' }
    );
  }

  return BlogPost;
};

module.exports = BlogPost;