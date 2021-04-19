const authController = require('../authController');

const express = require('express');

const router = express.Router();


router.post('/signup',authController.postSignup);
router.post('/login',authController.postLogin);

module.exports = router;