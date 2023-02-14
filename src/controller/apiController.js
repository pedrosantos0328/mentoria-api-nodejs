const ApiService = require("../service/apiService");
const apiService = new ApiService();
class ApiController{
somar(num1, num2){
    return apiService.somar(num1, num2);
}
mediaAluno(num1, num2, num3, num4, num5){
    return apiService.mediaAluno(num1, num2, num3,num4, num5);
}
calculadora(operacao, num1, num2){
    return apiService.calculadora(operacao, num1, num2);
}
reqFuncionario(expJava, expBanco, expProgramar, expLidera){
    return apiService.reqFuncionario(expJava, expBanco, expProgramar, expLidera);
}
jogador(idade, peso, posicao){
    return apiService.jogador(idade, peso, posicao);
}
}
module.exports=ApiController;