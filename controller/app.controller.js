const tarefas = [];

const createTask = (req, res) =>{
    const {mensagem} = req.body

    tarefas.push(mensagem);
    res.status(201).send("Salvo!")

}


const showTask = (req, res) =>{
    res.send(tarefas);
}


module.exports = {
    createTask,
    showTask
}