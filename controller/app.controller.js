const tarefas = [];

// Criar uma nova tarefa
const createTask = (req, res) => {
    const { title, status, content } = req.body;

    if (!title || !status || !content) {
        return res.status(400).json({ error: 'Campos obrigatórios: title, status, content' });
    }

    const Id = Date.now().toString();
    tarefas.push({ Id, title, status, content });
    res.status(201).json({ message: 'Tarefa criada com sucesso!', Id });
};

// Exibir todas as tarefas
const showTask = (req, res) => {
    res.json(tarefas);
};

// Atualizar uma tarefa
const updateTask = (req, res) => {
    const { id } = req.params;
    const { title, status, content } = req.body;

    const tarefa = tarefas.find(t => t.Id === id);
    if (!tarefa) {
        return res.status(404).json({ error: 'Tarefa não encontrada' });
    }

    if (title) tarefa.title = title;
    if (status) tarefa.status = status;
    if (content) tarefa.content = content;

    res.json({ message: 'Tarefa atualizada com sucesso' });
};

// Deletar uma tarefa
const deleteTask = (req, res) => {
    const { id } = req.params;
    const index = tarefas.findIndex(t => t.Id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Tarefa não encontrada' });
    }

    tarefas.splice(index, 1);
    res.json({ message: 'Tarefa deletada com sucesso' });
};

module.exports = {
    createTask,
    showTask,
    updateTask,
    deleteTask
};
