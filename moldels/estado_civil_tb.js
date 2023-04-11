const { Sequelize, Model } = require('sequelize');

class estado_civil extends Model {
    static init(sequelize) {
        super.init(
            {
                idEstadoCivil: {
                    type: Sequelize.BIGINT,
                    autoIncrement: true,
                    primaryKey: true,
                    field: 'ID_ESTADO_CIVIL'
               
                },
                estadoCivil: {
                    type: Sequelize.STRING(255),
                    field: 'DESC_ESTADO_CIVIL',
                    allowNull: false
                }
            },
            {
                sequelize,
                modelName: 'ESTADO_CIVIL_TB',
                timestamps: false

            }
        );
        return this;
    }
}
module.exports = estado_civil