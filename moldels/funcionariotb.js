const { Sequelize, Model } = require('sequelize');

class Funcionario extends Model {
    static init(sequelize) {
        super.init(
            {
                idFuncionario: {
                    type: Sequelize.BIGINT,
                    autoIncrement: true,
                    primaryKey: true,
                    field: 'ID_FUNCIONARIO'

                },
                nome: {
                    type: Sequelize.STRING(255),
                    field: 'NOME',
                    allowNull: false
                },
                cargo: {
                    type: Sequelize.STRING(255),
                    field: 'CARGO',
                    allowNull: false
                },
                
                dataNascimento: {
                    type: Sequelize.DATE,
                    field: 'DATA_NASCIMENTO',
                    allowNull: false
                },

                endereco: {
                    type: Sequelize.STRING(255),
                    field: 'ENDERECO',
                    allowNull: false
                }
            },
            {
                sequelize,
                modelName: 'FUNCIONARIO_TB',
                timestamps: false

            }
        );
        return this;
    }
}
module.exports = Funcionario