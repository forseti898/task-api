const connection = require('../server/db');
const knex = require('../knexfile');

// Criar uma nova tarefa
const createTask = async(req, res) => {
    const { title,content, prioridade, dataVenc } = req.body;

    if (!title ||!content || !prioridade || !dataVenc) {
        return res.status(400).json({ error: 'Campos obrigatórios: title, status, content' });
    }

    const Id = Date.now().toString();
    try{
        await knex("tarefas").insert({
            idtarefas: Id,
            title: title,
            content: content,
            prioridade: prioridade,
            dataVenc: dataVenc
        });
        res.status(201).json({Mensagem: "Registro criado com sucesso!"});
    }
    catch(error){
         res.status(500).json({error});
    }
   
};

// Exibir todas as tarefas
const showTask = async (req, res) => {

    try{
        const tasks = await knex.select('*').from("tarefas");

        res.status(200).json({tasks});
    }catch(err){

        res.status(500).json({Erro: "Erro ao buscar tarefas"});
    }



    


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
