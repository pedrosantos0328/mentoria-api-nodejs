const { Sequelize, Model } = require('sequelize');

class Gerencia extends Model {
    static init(sequelize) {
        super.init(
            {
                idGerente: {
                    type: Sequelize.BIGINT,
                    autoIncrement: true,
                    primaryKey: true,
                    field: 'ID_GERENTE'
               
                },
                nomeGerente: {
                    type: Sequelize.STRING(255),
                    field: 'NOME_GERENTE',
                    allowNull: false
                }
            },
            {
                sequelize,
                modelName: 'GERENCIA_TB',
                timestamps: false

            }
        );
        return this;
    }
}
module.exports = Gerencia