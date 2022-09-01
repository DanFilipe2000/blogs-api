const { User } = require('../database/models');

const login = async (email, password) => {
    const data = await User.findOne({ where: { email } });
    if (!data || data.password !== password) throw new Error('Invalid fields');
    return 'token-user';
};

module.exports = { login };