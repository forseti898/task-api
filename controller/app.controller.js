const connection = require('../server/db');

// Criar uma nova tarefa
const createTask = (req, res) => {
    const { title, status, content } = req.body;

    if (!title || !status || !content) {
        return res.status(400).json({ error: 'Campos obrigatórios: title, status, content' });
    }

    const Id = Date.now().toString();
    const sql = 'INSERT INTO tarefas (idtarefas, title, content, status) VALUES (?, ?, ?, ?)';
    const values = [Id, title, content, status];

    connection.query(sql, values, function(err, results){
        if(err){
            console.error('Erro ao inserir dados no Banco: ', err);
            return res.status(500).json({ error: 'Erro ao salvar no banco' });
        }

        res.status(201).json({ message: 'Tarefa criada com sucesso!'});   
    })
   
};

// Exibir todas as tarefas
const showTask = (req, res) => {
    const sql = 'SELECT * FROM tarefas';

    connection.query(sql, function(err, results){
        if(err){
            console.log('Erro ao exibir dados do banco de dados: ', err);
            return res.status(500).json({ erro: 'Erro ao buscar tarefas' });
        }

        res.status(200).json(results);
    })


};

// Atualizar uma tarefa
const updateTask = (req, res) => {
    const { id } = req.params;
    const { title, status, content, prioridade, dataVenc } = req.body;

    const sql = 'UPDATE tarefas SET title = ?, content = ?, status = ?, prioridade = ?, dataVenc = ? WHERE idtarefas = ?';
    const values = [title, content, status, prioridade, dataVenc, id];
    
    connection.query(sql, values, function(err){
        if(err){
            console.error('Erro ao atualizar dados no Banco: ', err);
            return res.status(500).json({ error: 'Erro ao atualizar no banco' });
        }

        res.json({ message: 'Tarefa atualizada com sucesso' });
    })

    
};

// Deletar uma tarefa
const deleteTask = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM tarefas WHERE idtarefas = ?';

    connection.query(sql, [id], function(err){
        if(err){
            return res.status(500).json({ error: 'Erro ao deletar no banco' });
        }
        res.json({ message: 'Tarefa deletada com sucesso' });
    });
    
};

module.exports = {
    createTask,
    showTask,
    updateTask,
    deleteTask
};
