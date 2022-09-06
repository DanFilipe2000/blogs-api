const { Router } = require('express');

const postController = require('../controllers/categoryController');

const auth = require('../middlewares/auth');

const router = Router();

router.post('/', auth.tokenValidation, postController.create);

module.exports = { router };
