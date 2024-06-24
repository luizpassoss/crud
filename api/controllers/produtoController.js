import { Produto, Pedido, Categoria } from '../models/index.js';

const verificarQuantidadeERegistrarPedido = async (produto) => {
  let qtde_pedido;
  if (produto.qtde_produto <= 3) {
    qtde_pedido = 4;
  } else if (produto.qtde_produto > 3 && produto.qtde_produto < 7) {
    qtde_pedido = 3;
  }

  if (qtde_pedido) {
    await Pedido.create({ cod_produto: produto.cod_produto, qtde_pedido });
  }
};

export const createProduto = async (req, res) => {
  try {
    const produto = await Produto.create(req.body);
    await verificarQuantidadeERegistrarPedido(produto);
    res.status(201).json(produto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const findAllProdutos = async (req, res) => {
  try {
    const produtos = await Produto.findAll({ include: Categoria });
    res.status(200).json(produtos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const findProdutoById = async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id, { include: Categoria });
    if (produto) {
      res.status(200).json(produto);
    } else {
      res.status(404).json({ error: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateProduto = async (req, res) => {
  try {
    const [updated] = await Produto.update(req.body, { where: { cod_produto: req.params.id } });
    if (updated) {
      const produtoAtualizado = await Produto.findByPk(req.params.id);
      await verificarQuantidadeERegistrarPedido(produtoAtualizado);
      res.status(200).json(produtoAtualizado);
    } else {
      res.status(404).json({ error: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteProduto = async (req, res) => {
  try {
    const deleted = await Produto.destroy({ where: { cod_produto: req.params.id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const findProdutosByCategoria = async (req, res) => {
  try {
    const produtos = await Produto.findAll({ where: { id_categoria: req.params.categoriaId } });
    res.status(200).json(produtos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const findPedidosByQuantidade = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll({ where: { qtde_pedido: req.params.qtde } });
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
