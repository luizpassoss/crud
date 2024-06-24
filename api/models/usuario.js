import { DataTypes } from 'sequelize';

const usuarioModel = (sequelize) => {
  return sequelize.define('Usuario', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'usuarios',
    timestamps: false
  });
};

export default usuarioModel;
