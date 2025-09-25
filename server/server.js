const express = require('express');
const apiRouter = require('../router/router');
const loginRouter = require('../router/login.router')
//const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());


// Prefixar as rotas da API
app.use('/info', loginRouter);
app.use('/api', apiRouter);


module.exports = app;
