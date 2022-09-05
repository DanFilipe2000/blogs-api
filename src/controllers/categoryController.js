const categoryService = require('../services/categoryService');

const create = async (req, res) => {
    const { name } = req.body;

    if (!name) return res.status(400).json({ message: '"name" is required' });
    
    const data = await categoryService.create(name);
    res.status(201).json(data);
};

const getAll = async (req, res) => {
    const data = await categoryService.getAll();
    res.status(200).json(data);
};

module.exports = { create, getAll };
