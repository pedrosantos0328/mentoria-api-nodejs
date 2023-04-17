const ApiService = require("../service/apiService");
const apiService = new ApiService();
class ApiController {
    somar(num1, num2) {
        return apiService.somar(num1, num2);
    }

    mediaAluno(num1, num2, num3, num4, num5) {
        return apiService.mediaAluno(num1, num2, num3, num4, num5);
    }

    calculadora(operacao, num1, num2) {
        return apiService.calculadora(operacao, num1, num2);
    }

    reqFuncionario(expJava, expBanco, expProgramar, expLidera) {
        return apiService.reqFuncionario(expJava, expBanco, expProgramar, expLidera);
    }

    jogador(idade, peso, posicao) {
        return apiService.jogador(idade, peso, posicao);
    }

    verificarCor(numCor) {
        return apiService.verificarCor(numCor);
    }
    
    calculadora2(operacao, num1, num2) {
        return apiService.calculadora2(operacao, num1, num2);
    }

    copaDoMundo(ano) {
        return apiService.copaDoMundo(ano);
    }
    
    consultarCarro(marca) {
        return apiService.consultarCarro(marca);
    }

    verificarCarro(arrayCarros) {
        return apiService.verificarCarro(arrayCarros);
    }

    verificarFuncionarioMaisVelho(arrayFuncionarios) {
        return apiService.verificarFuncionarioMaisVelho(arrayFuncionarios);
    }

    verificarFuncionarioMaisNovo(arrayFuncionarios) {
        return apiService.verificarFuncionarioMaisNovo(arrayFuncionarios);
    }

    verificarDemissoes(arrayFuncionarios) {
        return apiService.verificarDemissoes(arrayFuncionarios);        
    }

    verificarFuncionarios(arrayFuncionarios) {
        return apiService.verificarFuncionarios(arrayFuncionarios);
    }

    consultarCarroFiat(arrayCarros) {
        return apiService.consultarCarroFiat(arrayCarros);
    }

    agruparCarros(arrayCarros) {
        return apiService.agruparCarros(arrayCarros);
    }

    consultarFiatChevrolet(arrayCarros) {
        return apiService.consultarFiatChevrolet(arrayCarros);
    }

    consultarEstado(estado, arrEstado) {
        return apiService.consultarEstado(estado, arrEstado);
    }

    verificarCarroMaisNovo(arrCarro) {
        return apiService.verificarCarroMaisNovo(arrCarro);
    }

    verificarCarroMaisVelho(arrCarro) {
        return apiService.verificarCarroMaisVelho(arrCarro);
    }

    async verificarCep(cep) {
        return await apiService.verificarCep(cep);
    }

    async verificarListaCep(arrCep) {
        return await apiService.verificarListaCep(arrCep);
    }

    async consultarUf(uf) {
        return await apiService.consultarUf(uf);
    }

    async consultarRegiaoNorte(regiao) {
        return await apiService.consultarRegiaoNorte(regiao);
    }

    async consultarEstado(estado) {
        return await apiService.consultarEstado(estado);
    }

    async consultarMunicipios(sigla) {
        return await apiService.consultarMunicipios(sigla);
    }

    async consultarRegiao(regiao) {
        return await apiService.consultarRegiao(regiao);
    }
    
    async consultarEstados(estado) {
        return await apiService.consultarEstados(estado);
    }

    async consultarPais(sigla) {
        return await apiService.consultarPais(sigla);
    }
  
    async listarFuncionario() {
        return await apiService.listarFuncionario();
    }

    async consultarFuncionario(idFuncionario) {
        return await apiService.consultarFuncionario(idFuncionario);
    }

    async consultarNomeFuncionario(nome) {
        return await apiService.consultarNomeFuncionario(nome);
    }

    async consultarCargo(cargo) {
        return await apiService.consultarCargo(cargo);
    }

    async verificarFuncionarios(cargo, endereco) {
        return await apiService.verificarFuncionarios(cargo, endereco);
    }

    async listarDepartamento() {
        return await apiService.listarDepartamento();
    }

    async verificarDepartamento(departamento) {
        return await apiService.verificarDepartamento(departamento);
    }

    async listaFuncionarioDepartamento() {
        return await apiService.listaFuncionarioDepartamento();
    }

    async consultarFuncionarioDepartamento(idFuncionario) {
        return await apiService.consultarFuncionarioDepartamento(idFuncionario);
    }

    async consultarDepartamentoFuncionario(idDepartamento) {
        return await apiService.consultarDepartamentoFuncionario(idDepartamento);
    }

    async listarGerencia() {
        return await apiService.listarGerencia();
    }

    async listarFuncionarioGerente() {
        return await apiService.listarFuncionarioGerente();
    }

    async listarFuncionarioGerentePorId(idGerente) {
        return await apiService.listarFuncionarioGerentePorId(idGerente);
    }

    async listarEstadoCivil() {
        return await apiService.listarEstadoCivil();
    }

    async listarFuncionarioEstadoCivil() {
        return await apiService.listarFuncionarioEstadoCivil();
    }

    async criarFuncionario(body) {
        return await apiService.criarFuncionario(body);
    }

    async criarDepartamento(body) {
        return await apiService.criarDepartamento(body);
    }

    async criarGerente(body) {
        return await apiService.criarGerente(body);
    }
}
module.exports = ApiController;