class ApiService {
    somar(num1, num2) {
        const soma = num1 + num2;
        return soma;
    }
    mediaAluno(num1, num2, num3, num4, num5) {
        const soma = num1 + num2 + num3 + num4 + num5;
        const media = (num1 + num2 + num3 + num4 + num5) / 5;
        if (media >= 6) {
            return ("Aluno aprovado");
        }
        if (media < 6 && media >= 4) {
            return ("Aluno de recuperação");
        }
        else {
            return ("Aluno reprovado");
        }
    }
    calculadora(operacao, num1, num2) {
        if (operacao === 'soma') {
            const soma = num1 + num2;
            return soma;
        }
        else if (operacao === 'div') {
            const div = num1 / num2;
            return div;
        }
        else if (operacao === 'mult') {
            const mult = num1 * num2;
            return mult;
        }
        else if (operacao === 'sub') {
            const sub = num1 - num2;
            return sub;
        }
    }
    reqFuncionario(expJava, expBanco, expProgramar, expLidera) {
        let naoPreenche = '';
        if (expJava >= 5 && expBanco >= 3 && expProgramar >= 6 && expLidera >= 2) {
            return ("Você preenche os requisitos");
        }
        else {
            if (expJava < 5) {
                naoPreenche = "Java ";
            }
            if (expBanco < 3) {
                naoPreenche += "Banco ";
            }
            if (expProgramar < 6){
                naoPreenche += "Programar ";
            }
            if (expLidera < 2){
                naoPreenche += "Lidera ";
            }
            return {
                message: "O candidato não preencheu os requisitos",
                requisitos: naoPreenche
            };
        }
    }
    jogador(idade, peso, posicao){
        let naoPreenche = '';
        if (idade == 20 && peso>80 && peso<85 && posicao == 'atacante'){
            return ("O canditado preenche os requisitos");
        }
        else {
            if (idade != 20){
                naoPreenche = "Idade ";
            }
            if (peso < 80, peso > 85){
                naoPreenche += "Peso ";
            }
            if (posicao != 'atacante'){
                naoPreenche += "Atacante ";
            }
            return {
                message: "O candidato não preencheu os requisitos",
                requisitos: naoPreenche
            };

        }
    }
    
    verificarCor(numCor){
        numCor= Number(numCor);
        let result = null;
        
        switch (numCor) {
            case 1:
                result = 'azul';
                break;
            case 2:
                result ='verde';
                break;
            case 3:
                result = 'amarelo';
                break;
            case 4:
                result = 'branco';
                break;

            default:
                result = "cor inválida";
                break;

        }

        return result;
    }

    calculadora2(operacao, num1, num2){
        let result = null;
        num1 = Number(num1);
        num2 = Number(num2);
        switch(operacao) {
            case 'soma':
                result = num1+num2;
                break;
            case 'mult':
                result = num1*num2;
                break;
            case 'div':
                result = num1/num2;
                break;
            case 'sub':
                result = num1-num2;
                break;

            default:
                result = "operação invalida";
                break;
            }

            return result;
    }

}
module.exports = ApiService;