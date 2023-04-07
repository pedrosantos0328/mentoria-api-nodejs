const axios = require('axios');
const Database = require('../../database/conectDb');
const Funcionario = require('../../moldels/funcionariotb');
const Departamento = require('../../moldels/departamentotb');
const Gerencia = require('../../moldels/gerenciatb');
const { Sequelize } = require('../../config/DB');
const { Op } = require('../../config/DB');
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
                nomeFuncionario = nome;
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

            if (idade > 25 && cargo == 'analista de sistemas') {
                arrayFuncionarioDemitido.push(nome);
                qtdAnalistaSistemasIdade++
            }
        });

        return {
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

            if ((cargo == 'gerente executivo' || cargo == 'gerente executiva') && idade > 33 && (estadoCivil == 'casado' || estadoCivil == 'casada')) {
                qtdGerenteExecutivo++
                arrayFuncionarioGerente.push({
                    nomeFuncionario: nome,
                    idadeFuncionario: idade,
                    estadoCivilFuncionario: estadoCivil
                });

            }

        });

        return {
            qtdFuncionariosGerentesCasados: qtdGerenteExecutivo,
            nomeFuncinario: arrayFuncionarioGerente,
        }

    }

    consultarCarroFiat(arrayCarros) {
        let qtdCarroFiat = 0;
        let arrayCarroFiat = [];

        arrayCarros.forEach(item => {
            let marca = item.marca.toLowerCase();
            let modelo = item.modelo.toLowerCase();
            let ano = item.ano;

            if (marca == 'fiat' && ano >= 2015) {
                qtdCarroFiat++
                arrayCarroFiat.push({
                    marcaCarro: marca,
                    modeloCarro: modelo,
                    anoCarro: ano
                });
            }
        });

        return {
            qtdCarroFiat2015: qtdCarroFiat,
            carrosFiat: arrayCarroFiat
        }
    }


    agruparCarros(arrayCarros) {
        let carrosFiat = [];
        let carrosVolkswagem = [];
        let carrosChevrolet = [];
        let carrosToyota = [];

        arrayCarros.forEach(item => {


            if (item.marca.toLowerCase() === 'fiat') {
                carrosFiat.push(item);
            }
            else if (item.marca.toLowerCase() === 'volkswagem') {
                carrosVolkswagem.push(item);
            }
            else if (item.marca.toLowerCase() === 'chevrolet') {
                carrosChevrolet.push(item);
            }
            else if (item.marca.toLowerCase() === 'toyota') {
                carrosToyota.push(item);
            }
        });

        return {
            listaFiat: carrosFiat,
            listaChevrolet: carrosChevrolet,
            listaToyota: carrosToyota,
            listaVolkswagem: carrosVolkswagem
        }

    }

    consultarFiatChevrolet(arrayCarros) {
        let carrosFiltradosAno = [];
        carrosFiltradosAno = arrayCarros.filter(carro => (carro.marca.toLowerCase() === 'fiat' || carro.marca.toLowerCase() === 'chevrolet') && carro.ano >= 2018);

        return {
            carrosFiatChevrolet: carrosFiltradosAno,

        }
    }

    consultarEstado(estado, arrEstado) {
        let estadoFiltrado = [];
        estadoFiltrado = arrEstado.filter(objeto => objeto.estado.toLowerCase() === estado);

        return {
            cidade: estadoFiltrado
        }
    }

    verificarCarroMaisNovo(arrCarro) {
        let carroMaisNovo = 0;
        let marcaCarro = null;
        let modeloCarro = null;

        arrCarro.forEach(item => {
            let ano = item.ano;
            let marca = item.marca.toLowerCase();
            let modelo = item.modelo.toLowerCase();

            if (ano > carroMaisNovo) {
                carroMaisNovo = ano;
                marcaCarro = marca;
                modeloCarro = modelo;

            }
        }
        );

        return {
            anoCarroMaisNovo: carroMaisNovo,
            marcaCarromaisNovo: marcaCarro,
            modeloCarroMaisNovo: modeloCarro
        }

    }

    verificarCarroMaisVelho(arrCarro) {
        let carroMaisVelho = 999999999;
        let marcaCarro = null;
        let modeloCarro = null;

        arrCarro.forEach(item => {
            let ano = item.ano;
            let marca = item.marca.toLowerCase();
            let modelo = item.modelo.toLowerCase();

            if (ano < carroMaisVelho) {
                carroMaisVelho = ano;
                marcaCarro = marca;
                modeloCarro = modelo;
            }
        });

        return {
            anoCarroMaisVelho: carroMaisVelho,
            marcaCarroMaisVelho: marcaCarro,
            modeloCarroMaisVelho: modeloCarro
        }
    }

    async verificarCep(cep) {
        try {
            const result = await axios.get(`http://viacep.com.br/ws/${cep}/json/`);
            console.log(result);
            if (result.data.erro) {
                return {
                    message: 'erro ao consultar cep'
                }
            }
            return result.data;

        } catch (error) {
            console.log(error);
            return (`erro ao consultar cep:${error.message}`);
        }
    }

    async verificarListaCep(arrCep) {
        let cepsVerificados = [];
        let cepVerificado;
        let cepInvalido = [];
        for (let contador = 0; contador < arrCep.length; contador++) {
            cepVerificado = await axios.get(`http://viacep.com.br/ws/${arrCep[contador]}/json/`);
            if (!cepVerificado.data.erro) {
                cepsVerificados.push(cepVerificado.data);
            }
            else {
                cepInvalido.push(arrCep[contador]);
            }

        }
        return {
            cepsVerificados,
            cepInvalido
        }
    }

    async consultarUf(uf) {

        const arrEstado = await axios.get(`http://servicodados.ibge.gov.br/api/v1/localidades/estados/`);

        const ufFiltrada = arrEstado.data.filter(objeto => objeto.sigla.toLowerCase() === uf);

        return ufFiltrada;

    }

    async consultarRegiaoNorte(regiao) {
        let regiaoFiltrada = [];

        const arrEstado = await axios.get(`http://servicodados.ibge.gov.br/api/v1/localidades/estados/`);
        regiaoFiltrada = arrEstado.data.filter(objeto => objeto.regiao.nome.toLowerCase() === 'norte');

        return regiaoFiltrada;
    }

    async consultarEstado(estado) {
        const arrEstado = await axios.get(`http://servicodados.ibge.gov.br/api/v1/localidades/estados/`);
        const estadoFiltrado = arrEstado.data.filter(objeto => objeto.nome.toLowerCase() === estado);

        return estadoFiltrado;
    }

    async consultarMunicipios(sigla) {
        try {
            let arrRetornoFormatado = [];

            const result = await axios.get(`http://servicodados.ibge.gov.br/api/v1/localidades/estados/${sigla}/municipios`);
            if (result.data.erro) {
                return {
                    message: 'erro ao consultar municipio'
                }
            }

            for (let contador = 0; contador < result.data.length; contador++)
                arrRetornoFormatado.push({
                    nomeMunicipios: result.data[contador].nome,
                    Id: result.data[contador].id
                });

            return arrRetornoFormatado;

        } catch (error) {
            return (`erro ao consultar municipio:${error.message}`);
        }
    }

    async consultarRegiao(regiao) {
        try {
            let arrRetornoFormatado = [];

            const result = await axios.get(`http://servicodados.ibge.gov.br/api/v1/localidades/estados/`);
            if (result.data.erro) {
                return {
                    message: 'erro ao consultar municipio'
                }
            }

            let regiaoFiltrada = result.data.filter(objeto => objeto.regiao.nome.toLowerCase() === regiao);
            for (let contador = 0; contador < regiaoFiltrada.length; contador++) {
                arrRetornoFormatado.push({
                    nomeEstado: regiaoFiltrada[contador].nome,
                    Id: regiaoFiltrada[contador].id,
                    Regiao: regiaoFiltrada[contador].regiao.nome
                });
            }
            return arrRetornoFormatado;

        } catch (error) {
            return (`erro ao consultar municipio:${error.message}`);
        }
    }

    async consultarEstados(estado) {
        try {
            let arrRetornoFormatado = [];

            const result = await axios.get(`http://servicodados.ibge.gov.br/api/v1/localidades/estados/`);
            if (result.data.erro) {
                return {
                    message: 'erro ao consultar municipio'
                }
            }

            let estadoFiltrado = result.data.filter(objeto => objeto.nome.toLowerCase() === estado);
            for (let contador = 0; contador < estadoFiltrado.length; contador++) {
                arrRetornoFormatado.push({
                    nomeEstado: estadoFiltrado[contador].nome,
                    Id: estadoFiltrado[contador].id,
                    Regiao: estadoFiltrado[contador].regiao.nome
                });
            }
            return arrRetornoFormatado;

        } catch (error) {
            return (`erro ao consultar municipio:${error.message}`);
        }
    }


    async consultarPais(sigla) {
        try {
            let arrRetornoFormatado = [];

            const result = await axios.get(`http://servicodados.ibge.gov.br/api/v1/paises/${sigla}`);
            if (result.data.erro) {
                return {
                    message: 'erro ao consultar pais'
                }
            }


            return {
                pais: result.data[0].nome.abreviado,
                moeda: result.data[0]["unidades-monetarias"][0].nome,
                continente: result.data[0].localizacao["sub-regiao"].nome,
                lingua: result.data[0].linguas[0].nome,
                capital: result.data[0].governo.capital.nome


            };

        } catch (error) {
            return (`erro ao consultar pais:${error.message}`);
        }
    }

    async listarFuncionario() {
        const db = new Database();

        try {
            const result = await Funcionario.findAll();
            if (result) {
                return result;
            }
            return "Informação não encontrada!";
        }
        catch (erro) {
            console.log(erro);
            return erro;
        }
    }

    async consultarFuncionario(idFuncionario) {
        const db = new Database();

        try {
            const result = await Funcionario.findOne({
                where: {
                    idFuncionario: idFuncionario
                }
            });
            if (result) {
                return result;
            }
            return "Informação não encontrada!";
        }
        catch (erro) {
            return erro;
        }
    }

    async consultarNomeFuncionario(nome) {
        const db = new Database();

        try {
            const result = await Funcionario.findOne({
                where: {
                    nome: {
                        [Op.like]: `%${nome}%`
                    }
                }
            });
            if (result) {
                return result;
            }
            return "Informação não encontrada!";
        }
        catch (erro) {
            return erro;
        }
    }

    async consultarCargo(cargo) {
        const db = new Database();

        try {
            const result = await Funcionario.findAll({
                where: {
                    cargo: cargo
                }
            });
            if (result) {
                return result;
            }
            return "Informação não encontrada";
        }
        catch (erro) {
            return erro;
        }
    }

    async verificarFuncionarios(cargo, endereco) {
        const db = new Database();

        try {
            const result = await Funcionario.findAll({

                where: {
                    cargo: cargo,
                    endereco: {
                        [Op.like]: `%${endereco}%`
                    }
                }
            });
            if (result) {
                return {
                    quantidadeFuncionario: result.length,
                    listaFuncionarios: result
                }
            }
            return "Informação não encontrada!";
        }
        catch (erro) {
            return erro;
        }
    }

    async listarDepartamento() {
        const db = new Database();

        try {
            const result = await Departamento.findAll();
            if (result) {
                return result;
            }
            return "Informação não encontrada!";
        }
        catch (erro) {
            return erro;
        }
    }

    async verificarDepartamento(departamento) {
        const db = new Database();

        try {
            const result = await Departamento.findOne({
                where: {
                    departamento: departamento
                }
            });
            if (result) {
                return result;
            }
            return "Informação não encontrada!";
        }
        catch (erro) {
            return erro;
        }
    }

    async listaFuncionarioDepartamento() {
        const db = new Database();
        let arrRetornoFormatado = [];
        
        try {
            const result = await Funcionario.findAll({
                include: [
                    {
                        model: Departamento,
                        as: "departamento"
                    }
                ],
                nest: true,
                raw: true
            });
            if (result) {
                
                for (let contador = 0; contador < result.length; contador++) {
                    arrRetornoFormatado.push({
                        Id: result[contador].idFuncionario,
                        Nome: result[contador].nome,
                        Departamento: result[contador].departamento.departamento
                    });
                }
                return arrRetornoFormatado;
            }
            return {
                message: "Informação não encontrada!"
            }
        }
        catch (erro) {
            return erro;
        }
    }

    async consultarFuncionarioDepartamento(idFuncionario) {
        const db = new Database();

        try {
            const result = await Funcionario.findOne({
                include: [
                    {
                        model: Departamento,
                        as: "departamento"
                    }
                ],
                nest: true,
                raw: true,

                where: {
                    idFuncionario: idFuncionario
                }
            });
            if (result) {
                return {
                    id: result.idFuncionario,
                    nome: result.nome,
                    departamento: result.departamento.departamento
                }
            }
            return "Informação não encontrada!";
        }
        catch (erro) {
            return erro;
        }
        }

        async consultarDepartamentoFuncionario(idDepartamento) {
            const db = new Database();
    
            try {
                const result = await Funcionario.findOne({
                    include: [
                        {
                            model: Departamento,
                            as: "departamento"
                        }
                    ],
                    nest: true,
                    raw: true,
    
                    where: {
                        idDepartamento: idDepartamento
                    }
                });
                if (result) {
                    return {
                        id: result.idDepartamento,
                        nome: result.nome,
                        departamento: result.departamento.departamento
                    }
                }
                return "Informação não encontrada!";
            }
            catch (erro) {
                return erro;
            }
            }

            async listarGerencia() {
                const db = new Database();
        
                try {
                    const result = await Gerencia.findAll();
                    if (result) {
                        return result;
                    }
                    return "Informação não encontrada!";
                }
                catch (erro) {
                    return erro;
                }
            }
    }






module.exports = ApiService;