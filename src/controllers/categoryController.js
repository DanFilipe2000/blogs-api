const categoryService = require('../services/categoryService');

const create = async (req, res) => {
    const { name } = req.body;

    if (!name) return res.status(400).json({ message: '"name" is required' });
    
    const data = await categoryService.create(name);
    res.status(201).json(data);
};

module.exports = { create };
