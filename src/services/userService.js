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

const create = async ({ displayName, email, password, image }) => {
    const checkEmailExists = await User.findOne({ where: { email } });

    if (!checkEmailExists) {
        const createUser = await User.create({ displayName, email, password, image });
        const token = jwt.sign(
            { id: createUser.id },
            process.env.JWT_SECRET,
            { algorithm: 'HS256', expiresIn: '1d' },
        );
        return token;
    } 
    
    throw new Error('User already registered');
};

module.exports = { login, create };