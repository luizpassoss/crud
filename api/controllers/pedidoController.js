import Pedido from '../models/pedido.js';

async function criarPedido(req, res) {
    const { num_pedido, cod_produto, qtde_produto } = req.body;

    try {
        let qtde_pedido;
        if (qtde_produto <= 3) {
            qtde_pedido = 4;
        } else if (qtde_produto > 3 && qtde_produto < 7) {
            qtde_pedido = 3;
        } else {
            res.status(400).json({ message: 'Quantidade inválida para pedido' });
            return;
        }

        const pedido = new Pedido({
            num_pedido,
            cod_produto,
            qtde_pedido
        });

        const novoPedido = await pedido.save();
        res.status(201).json(novoPedido);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Implemente outras funções CRUD para Pedido conforme necessário

export { criarPedido };
