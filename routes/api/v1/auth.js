const express = require('express');
const router = express.Router();

const AuthController = require('../../../controllers/api/v1/auth_controller');

router.post('/login',AuthController.login);
router.post('/signup',AuthController.register);

module.exports = router;