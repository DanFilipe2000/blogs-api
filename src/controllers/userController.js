const userService = require('../services/userService');

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }

    try {
        const result = await userService.login(email, password);
        return res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { login };