const userService = require('../services/userService');

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }

    try {
        const result = await userService.login(email, password);
        return res.status(200).json({ token: result });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const create = async (req, res) => {
    const { displayName, email, password, image } = req.body;

    try {
        const result = await userService.create({ displayName, email, password, image });
        return res.status(201).json({ token: result });
    } catch (err) {
        return res.status(409).json({ message: err.message });
    }
};

const getAll = async (_req, res) => {
    const result = await userService.getAll();
    res.status(200).json(result);
};

module.exports = { login, create, getAll };