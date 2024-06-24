import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js';
import produtoRoutes from './routes/produtoRoutes.js';
import pedidoRoutes from './routes/pedidoRoutes.js';
import { mongoose } from './db.js';

const app = express();
const PORT = process.env.PORT || 8800;

// Middleware para parsing de JSON
app.use(express.json());

// Rotas da API
app.use('/api/auth', authRoutes);
app.use('/api/produtos', produtoRoutes);
app.use('/api/pedidos', pedidoRoutes);

// Rota padrão
app.get('/', (req, res) => {
    res.send('API em funcionamento');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

