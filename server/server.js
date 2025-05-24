const express = require('express');
const router = require('../router/router');

const app = express();

app.use(express.json());

// Prefixar as rotas da API
app.use('/api', router);

module.exports = app;
