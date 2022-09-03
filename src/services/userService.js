const jwt = require('jsonwebtoken');
require('dotenv').config();

const { User } = require('../database/models');

const login = async (email, password) => {
    const data = await User.findOne({ where: { email } });
    if (!data || data.password !== password) throw new Error('Invalid fields');
    const token = jwt.sign(
        { id: data.id },
        process.env.JWT_SECRET,
        { algorithm: 'HS256', expiresIn: '1d' },
    );
    return token;
};

module.exports = { login };