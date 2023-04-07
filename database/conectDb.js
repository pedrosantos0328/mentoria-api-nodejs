const Sequelize = require('sequelize');
const databaseConfig = require('../config/DB');
const FuncionarioTb = require('../moldels/funcionariotb');
const DepartamentoTb = require('../moldels/departamentotb');
const GerenciaTb = require('../moldels/gerenciatb');
const models = [FuncionarioTb, DepartamentoTb, GerenciaTb];
 
class Database {
  constructor() {
    this.init();
  }
 
  init() {
    this.connection = new Sequelize(databaseConfig.get());
    models
      .map((model) => model.init(this.connection))
      .map((model) => model.associate &&
        model.associate(this.connection.models));
  }
 
  close() {
    return this.connection.close();
  }
}
 
module.exports = Database;
