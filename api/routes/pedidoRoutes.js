import express from 'express';
const router = express.Router();
import { criarPedido } from '../controllers/pedidoController.js';

router.post('/pedidos', criarPedido);

// Implemente outras rotas CRUD para Pedido conforme necessário

export default router;
