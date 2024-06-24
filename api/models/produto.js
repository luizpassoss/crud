import mongoose from 'mongoose';

const produtoSchema = new mongoose.Schema({
    cod_produto: { type: String, required: true },
    nome_produto: { type: String, required: true },
    qtde_produto: { type: Number, required: true },
    categoria: {
        id_categoria: { type: String },
        nome_categoria: { type: String }
    }
});

const Produto = mongoose.model('Produto', produtoSchema);

export default Produto;

