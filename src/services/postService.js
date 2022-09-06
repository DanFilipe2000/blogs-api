const { BlogPost, User, Category } = require('../database/models');

// const create = ({ title, content, userId }) => {
//     const date = new Date('2011-08-01T19:58:00.000Z');
//     const result = BlogPost.create({ title, content, userId, updated: date, published: date });

//     return result;
// };

const findAll = async () => {
    const result = await BlogPost.findAll({
        include: [{
            model: User,
            as: 'user',
            attributes: {
                exclude: ['password'],
            },
        }, {
            model: Category,
            as: 'categories',
            through: { attributes: [] },
        }],
    });

    return result;
};

module.exports = { findAll };
