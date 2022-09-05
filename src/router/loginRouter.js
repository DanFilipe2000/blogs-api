const { Router } = require('express');

const userController = require('../controllers/userController');
const userMiddleware = require('../middlewares/userMiddleware');

const router = Router();

router.post('/', userMiddleware.validateLogin, userController.login);

module.exports = { router };
