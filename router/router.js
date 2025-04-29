const express = require('express');
const path = require('path');

const router = express.Router();
const controller = require('../controller/app.controller')


router.post('/tarefas', controller.createTask);

router.get('/view',controller.showTask)



module.exports = router;