const { Sequelize, Model } = require('sequelize');

class Departamento extends Model {
    static init(sequelize) {
        super.init(
            {
                idDepartamento: {
                    type: Sequelize.BIGINT,
                    autoIncrement: true,
                    primaryKey: true,
                    field: 'ID_DEPARTAMENTO'
               
                },
                departamento: {
                    type: Sequelize.STRING(255),
                    field: 'DESC_DEPARTAMENTO',
                    allowNull: false
                }
            },
            {
                sequelize,
                modelName: 'DEPARTAMENTO_TB',
                timestamps: false

            }
        );
        return this;
    }
}
module.exports = Departamento