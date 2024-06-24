import express from 'express';
const router = express.Router();
import { listarProdutos, criarProduto } from '../controllers/produtoController.js';

router.get('/produtos', listarProdutos);
router.post('/produtos', criarProduto);

// Implemente outras rotas CRUD para Produto conforme necessário

export default router;






