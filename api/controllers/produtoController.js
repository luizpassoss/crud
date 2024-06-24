import Produto from '../models/produto.js';

async function listarProdutos(req, res) {
    try {
        const produtos = await Produto.find();
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function criarProduto(req, res) {
    const { cod_produto, nome_produto, qtde_produto, categoria } = req.body;
    const produto = new Produto({
        cod_produto,
        nome_produto,
        qtde_produto,
        categoria
    });

    try {
        const novoProduto = await produto.save();
        res.status(201).json(novoProduto);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Implemente outras funções CRUD para Produto conforme necessário

export { listarProdutos, criarProduto };
