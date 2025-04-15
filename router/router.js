const express = require('express');
const path = require('path');

const router = express.Router();

const tarefas = [];

router.post('/tarefas', (req, res,)=>{
    const {mensagem} = req.body

    tarefas.push(mensagem);
    res.status(201).send("Salvo!")

})

router.get('/view', (req, res)=>{
    res.send(tarefas);
})



module.exports = router;