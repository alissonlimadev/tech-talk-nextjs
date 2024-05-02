const express = require('express');
const app = express();
const port = 3005;
const dotenv = require('dotenv');
dotenv.config();
const livros = require('./books.json');

const basicAuth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
  
    if (!authHeader) {
      return res.status(401).json({ error: 'Credenciais não fornecidas' });
    }
    if (authHeader !== process.env.AUTH_TOKEN) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }
    next();
  };

// Rota simples
app.get('/', (req, res) => {
  res.send('API Livraria do Dev');
});

// Rota com parâmetros
app.get('/livros',basicAuth, (req, res) => {
    res.json(livros);
});

// Rota com query parameters
app.get('/livros/:codigo',basicAuth, (req, res) => {
    const codigo = req.params.codigo;
    const livro =livros.find(livro => livro.codigo === codigo);
    res.json(livro);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
