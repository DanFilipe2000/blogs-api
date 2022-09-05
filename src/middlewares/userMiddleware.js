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

    const { error } = userSchema.validate({ displayName, email, password });

    if (error) {
        const { details } = error;
        console.log(details);
        res.status(400).json({ message: details[0].message });
    } else {
        next();
    }
};

module.exports = { validateLogin, validateUser };
