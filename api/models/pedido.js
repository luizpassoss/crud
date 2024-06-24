import { DataTypes } from 'sequelize';

const pedidoModel = (sequelize) => {
  return sequelize.define('Pedido', {
    num_pedido: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    cod_produto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'produto',
        key: 'cod_produto'
      }
    },
    qtde_pedido: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'pedido',
    timestamps: false
  });
};

export default pedidoModel;
