const { Router } = require('express');

const categoryController = require('../controllers/categoryController');

const auth = require('../middlewares/auth');

const router = Router();

router.post('/', auth.tokenValidation, categoryController.create);

module.exports = { router };
