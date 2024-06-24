import mongoose from 'mongoose';

const pedidoSchema = new mongoose.Schema({
    num_pedido: { type: String, required: true },
    cod_produto: { type: String, required: true },
    qtde_pedido: { type: Number, required: true }
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

export default Pedido;

