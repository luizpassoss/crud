import { DataTypes } from 'sequelize';

const categoriaModel = (sequelize) => {
  return sequelize.define('Categoria', {
    id_categoria: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nome_categoria: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'categoria',
    timestamps: false
  });
};

export default categoriaModel;
