import { DataTypes } from 'sequelize';

const produtoModel = (sequelize) => {
  return sequelize.define('Produto', {
    cod_produto: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nome_produto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    qtde_produto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'categoria',
        key: 'id_categoria'
      }
    }
  }, {
    tableName: 'produto',
    timestamps: false
  });
};

export default produtoModel;
