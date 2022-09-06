const Joi = require('joi');

const categoryService = require('../services/categoryService');

const postSchema = Joi.object({
    title: Joi.string().min(1).required(),
    content: Joi.string().min(1).required(),
    categoryIds: Joi.array().min(1).required(),
});

const validatePost = (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    const { error } = postSchema.validate({ title, content, categoryIds });

    if (error) {
        res.status(400).json({ message: 'Some required fields are missing' });
    } else {
        next();
    }
};

const validateCategory = async (req, res, next) => {
    const { categoryIds } = req.body;
    const result = await categoryService.check(categoryIds);

    console.log(result);

    if (categoryIds.length !== result) {
        return res.status(400).json({ message: '"categoryIds" not found' });
    }

    next();
};

module.exports = { validatePost, validateCategory };