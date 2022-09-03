const { Router } = require('express');

const userController = require('../controllers/userController');
const userMiddleware = require('../middlewares/userMiddleware');

const router = Router();

router.post('/', userMiddleware.validateUser, userController.create);

module.exports = { router };
