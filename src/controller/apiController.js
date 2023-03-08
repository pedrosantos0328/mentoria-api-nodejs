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
}
module.exports = ApiController;