const { Router } = require('express');

const userController = require('../controllers/userController');
const userMiddleware = require('../middlewares/userMiddleware');

const loginRouter = Router();

loginRouter.post('/', userMiddleware.validateLogin, userController.login);

module.exports = { loginRouter };
