const express = require('express');
const router = express.Router();
const passport = require('passport');

const ContactController = require('../../../controllers/api/v1/contact_controller');

router.post('/add',passport.authenticate('jwt', { session: false }),ContactController.add);

module.exports = router;