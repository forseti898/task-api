const tarefas = [];

const createTask = (req, res) =>{
    const {Id, title, status, content} = req.body

    tarefas.push({Id, title, status, content})
    res.status(201).send("Salvo!")

}




const showTask = (req, res) =>{
    res.send(tarefas);
}


module.exports = {
    createTask,
    showTask
}