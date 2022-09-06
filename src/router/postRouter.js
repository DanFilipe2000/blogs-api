const { Router } = require('express');

const postController = require('../controllers/postController');
// const postMiddleware = require('../middlewares/postMiddleware');

const auth = require('../middlewares/auth');

const router = Router();

// router.post(
//     '/',
//     auth.tokenValidation,
//     postMiddleware.validatePost,
//     postMiddleware.validateCategory,
//     postController.create,
// );
router.get('/', auth.tokenValidation, postController.getAll);

module.exports = { router };
