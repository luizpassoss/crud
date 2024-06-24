import { DataTypes } from ('sequelize');
import sequelize  from ('../db');

const Categoria = sequelize.define('Categoria', {
    id_categoria: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_categoria: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Categoria;
