const connection = require('../server/db');
const knex = require('../knexfile');

const getUsers = async (req, res)=>{

    try{
        const Users = await knex.select('*').from("userLogin");
        res.status(200).json({Users});
    }
    catch(error){
        res.status().json({error});
    }

}

const createUserLogin = async (req, res)=>{
    const {userName, passwd} = req.body;
    const values = [userName, passwd];
    try{
        await knex("userLogin").insert({
            userName: userName,
            passwd: passwd
        });

        res.status(201).json({"Mensagem": "Registro criado com sucesso!"});
    }
    catch(error){
        res.status(500).json({error});

    }
}



module.exports = {
    getUsers,
    createUserLogin
}