const router = require('express').Router();
const userController = require('./users.controller.js');

router.post('/create', userController.userControllerCreate);
router.get('/', userController.userControllerFind);

module.exports = router;
