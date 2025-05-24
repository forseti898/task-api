const express = require('express');
const router = express.Router();
const controller = require('../controller/app.controller');

// Criar tarefa
router.post('/tarefas', controller.createTask);

// Listar todas as tarefas
router.get('/tarefas', controller.showTask);

// Atualizar tarefa por ID
router.put('/tarefas/:id', controller.updateTask);

// Deletar tarefa por ID
router.delete('/tarefas/:id', controller.deleteTask);

module.exports = router;
