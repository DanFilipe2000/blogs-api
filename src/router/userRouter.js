const { Router } = require('express');

const userController = require('../controllers/userController');
const userMiddleware = require('../middlewares/userMiddleware');

const auth = require('../middlewares/auth');

const router = Router();

router.post('/', userMiddleware.validateUser, userController.create);
router.get('/', auth.tokenValidation, userController.getAll);
router.get('/:id', auth.tokenValidation, userController.findByPk);

module.exports = { router };
