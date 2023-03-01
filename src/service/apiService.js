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
            if (expProgramar < 6) {
                naoPreenche += "Programar ";
            }
            if (expLidera < 2) {
                naoPreenche += "Lidera ";
            }
            return {
                message: "O candidato não preencheu os requisitos",
                requisitos: naoPreenche
            };
        }
    }
    jogador(idade, peso, posicao) {
        let naoPreenche = '';
        if (idade == 20 && peso > 80 && peso < 85 && posicao == 'atacante') {
            return ("O canditado preenche os requisitos");
        }
        else {
            if (idade != 20) {
                naoPreenche = "Idade ";
            }
            if (peso < 80, peso > 85) {
                naoPreenche += "Peso ";
            }
            if (posicao != 'atacante') {
                naoPreenche += "Atacante ";
            }
            return {
                message: "O candidato não preencheu os requisitos",
                requisitos: naoPreenche
            };

        }
    }

    verificarCor(numCor) {
        numCor = Number(numCor);
        let result = null;

        switch (numCor) {
            case 1:
                result = 'azul';
                break;
            case 2:
                result = 'verde';
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

    calculadora2(operacao, num1, num2) {
        let result = null;
        num1 = Number(num1);
        num2 = Number(num2);
        switch (operacao) {
            case 'soma':
                result = num1 + num2;
                break;
            case 'mult':
                result = num1 * num2;
                break;
            case 'div':
                result = num1 / num2;
                break;
            case 'sub':
                result = num1 - num2;
                break;

            default:
                result = "operação invalida";
                break;
        }

        return result;
    }

    copaDoMundo(ano) {
        let result = null;
        ano = Number(ano);
        switch (ano) {
            case 1958:
                result = 'Campeão';
                break;
            case 1962:
                result = 'Bicampeão';
                break;
            case 1970:
                result = 'Tricampeão';
                break;
            case 1994:
                result = 'Tetracampeão';
                break;
            case 2002:
                result = 'Pentacampeão';
                break;
            default:
                result = "Nesta copa o Brasil perdeu";
                break;
        }
        return result;
    }

    consultarCarro(marca) {
        let result = null;
        marca = marca.toLowerCase()
        switch (marca) {
            case 'toyota':
                result = 'corolla, hilux, sw4, yaris, camry';
                break;
            case 'fiat':
                result = 'strada, uno, mobi, fiorino, doblo';
                break;
            case 'chevrolet':
                result = 'onix, cruze, camaro, prisma, equinox';
                break;
            case 'volkswagem':
                result = 'polo, jetta, gol, voyage, cross';
                break;
            default:
                result = "Marca indisponível";
                break;
        }
        return result;
    }

    verificarCarro(arrayCarros) {
        let qtdFiat = 0;
        let qtdToyota = 0;
        let qtdBmw = 0;
        let qtdChevrolet = 0;
        for (let contador = 0; contador < arrayCarros.length; contador++) {
            let marca = arrayCarros[contador].marca.toLowerCase();
            if (marca === 'fiat') {
                qtdFiat++
            }
            else if (marca === 'toyota') {
                qtdToyota++
            }
            else if (marca === 'bmw') {
                qtdBmw++
            }
            else if (marca === 'chevrolet') {
                qtdChevrolet++
            }
        }
        return {
            quantidadeFiat: qtdFiat,
            quantidadeToyota: qtdToyota,
            quantidadeBmw: qtdBmw,
            quantidadeChevrolet: qtdChevrolet
        }

    }

    verificarFuncionarioMaisVelho(arrayFuncionarios) {
        let maiorIdade = 0
        let nomeFuncionario = null;


        arrayFuncionarios.forEach(item => {
            let idade = item.idade;
            let nome = item.nome;

            if (idade > maiorIdade) {
                maiorIdade = idade;
                nomeFuncionario= nome;
            }
        });

        return {
            funcionarioMaisVelho: maiorIdade,
            nomeDoFuncionario: nomeFuncionario
        }
    }

    verificarFuncionarioMaisNovo(arrayFuncionarios) {
        let menorIdade = 9999999999;
        let nomeFuncionario = null;
        for (let contador = 0; contador < arrayFuncionarios.length; contador++) {
            let idadeFuncionario = arrayFuncionarios[contador].idade;
            if (idadeFuncionario < menorIdade) {
                menorIdade = idadeFuncionario;
                nomeFuncionario = arrayFuncionarios[contador].nome;
            }
        }
        return {
            funcionarioMaisNovo: menorIdade,
            nomeDoFuncionario: nomeFuncionario
        }
    }

    verificarDemissoes(arrayFuncionarios) {
        let qtdAnalistaSistemasIdade = 0;
        let nomeFuncionario = null;

        let arrayFuncionarioDemitido = [];

        arrayFuncionarios.forEach(item => {
            let idade = item.idade;
            let nome = item.nome;
            let cargo = item.cargo.toLowerCase();
        
            if(idade > 25 && cargo == 'analista de sistemas') {
                arrayFuncionarioDemitido.push(nome);
                qtdAnalistaSistemasIdade++
            }
        });

        return{
            analistasDemitidos: qtdAnalistaSistemasIdade,
            nomeDosFuncionarios: arrayFuncionarioDemitido
        }
    }

    verificarFuncionarios(arrayFuncionarios) {
        let qtdGerenteExecutivo = 0;
        let nomeFuncionario = null;
        let arrayFuncionarioGerente = [];
        
        
        

        arrayFuncionarios.forEach(item => {
            let idade = item.idade;
            let nome = item.nome;
            let cargo = item.cargo.toLowerCase();
            let estadoCivil = item.estadoCivil.toLowerCase();

            if((cargo == 'gerente executivo' || cargo == 'gerente executiva') && idade > 33 && (estadoCivil == 'casado' || estadoCivil == 'casada')) {
                qtdGerenteExecutivo++
                arrayFuncionarioGerente.push(nome);
                arrayFuncionarioGerente.push(idade);
            }               
           
        });

        return{
            qtdFuncionariosGerentesCasados: qtdGerenteExecutivo,
            nomeFuncinario: arrayFuncionarioGerente,
        }

    }





}
module.exports = ApiService;