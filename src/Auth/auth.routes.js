const router = require('express').Router();
const authCrotroller = require('./auth.controller');

router.post('/login', authCrotroller.authLoginController);

module.exports = router;
