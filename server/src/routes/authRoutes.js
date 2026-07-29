const express = require('express');
const router = express.Router();
const { getCaptcha, login } = require('../controllers/authController');

router.get('/captcha', getCaptcha);
router.post('/login', login);

module.exports = router;
