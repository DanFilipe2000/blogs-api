const postService = require('../services/postService');

// const create = async (req, res) => {
//     const { userId } = req;
//     const { title, content } = req.body;

//     const result = await postService.create({ title, content, userId });
//     return res.status(201).json(result);
// };

const getAll = async (_req, res) => {
    const result = await postService.findAll();
    res.status(200).json(result);
};

module.exports = { getAll };
