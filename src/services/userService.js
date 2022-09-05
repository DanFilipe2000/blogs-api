const { User } = require('../database/models');
const { createToken } = require('../helpers/token');

const login = async (email, password) => {
    const data = await User.findOne({ where: { email } });
    if (!data || data.password !== password) throw new Error('Invalid fields');
    const token = createToken(data.id);
    return token;
};

const create = async ({ displayName, email, password, image }) => {
    const checkEmailExists = await User.findOne({ where: { email } });

    if (!checkEmailExists) {
        const createUser = await User.create({ displayName, email, password, image });
        const token = createToken(createUser.id);
        return token;
    } 
    
    throw new Error('User already registered');
};

const getAll = async () => {
    const results = await User.findAll({ attributes: { exclude: 'password' } });
    return results;
};

const findByPk = async (id) => {
    const results = await User.findByPk(id, { attributes: { exclude: 'password' } });

    if (!results) {
        return null;
    }

    return results;
};

module.exports = { login, create, getAll, findByPk };