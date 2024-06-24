import express from 'express';
import bodyParser from 'body-parser';
import { sequelize } from './models/index.js';
import produtoRoutes from './routes/produtoRoutes.js';
import authRoutes from './routes/authRoutes.js';

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
