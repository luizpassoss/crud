import express from 'express';
import { createProduto, findAllProdutos, findProdutoById, updateProduto, deleteProduto, findProdutosByCategoria, findPedidosByQuantidade } from '../controllers/produtoController.js';
import authenticate from '../middleware/authenticate.js';

const router = express.Router();

router.post('/', authenticate, createProduto);
router.get('/', findAllProdutos);
router.get('/:id', findProdutoById);
router.put('/:id', authenticate, updateProduto);
router.delete('/:id', authenticate, deleteProduto);
router.get('/categoria/:categoriaId', findProdutosByCategoria);
router.get('/pedido/quantidade/:qtde', findPedidosByQuantidade);

export default router;
