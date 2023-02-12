class ApiService{
somar(num1, num2){
const soma = num1+num2;
    return soma;    
}
mediaAluno(num1, num2, num3, num4, num5){
    const soma = num1+num2+num3+num4+num5;
    const media = (num1+num2+num3+num4+num5)/5;
    if(media>=6){
        return  ("Aluno aprovado");
}
    if(media<6 && media>=4){
        return ("Aluno de recuperação");
}
    else{
        return ("Aluno reprovado");
    }
}
}
module.exports=ApiService;