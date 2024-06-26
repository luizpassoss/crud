// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const produtoRoutes = require('./routes/produtoRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/api/produtos', produtoRoutes);
app.use('/api/auth', authRoutes);

sequelize.authenticate().then(() => {
  console.log('Conexão com o banco de dados foi estabelecida com sucesso.');
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch(err => {
  console.error('Não foi possível conectar ao banco de dados:', err);
});
