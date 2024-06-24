import { Sequelize } from 'sequelize';
import categoriaModel from './categoria.js';
import produtoModel from './produto.js';
import pedidoModel from './pedido.js';
import usuarioModel from './usuario.js';

const sequelize = new Sequelize('aplicação', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const Categoria = categoriaModel(sequelize);
const Produto = produtoModel(sequelize);
const Pedido = pedidoModel(sequelize);
const Usuario = usuarioModel(sequelize);

Produto.belongsTo(Categoria, { foreignKey: 'id_categoria' });
Pedido.belongsTo(Produto, { foreignKey: 'cod_produto' });

sequelize.sync();

export { Categoria, Produto, Pedido, Usuario, sequelize };
