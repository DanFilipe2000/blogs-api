const Joi = require('joi');

const userSchema = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

const validateLogin = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }

    next();
};

const validateUser = (req, res, next) => {
    const { displayName, email, password } = req.body;

    try {
        userSchema.validate(displayName, email, password);
        next();
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports = { validateLogin, validateUser };