const express = require('express');
const router = express.Router();
const loginController = require('../controller/login.controller.js');

router.get('/login', loginController.getUsers);
router.post('/login', loginController.createUserLogin);


module.exports = router; 