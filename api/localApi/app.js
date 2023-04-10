const express = require("express");
const app = express();
const ApiController = require("../../src/controller/apiController");
const apiController = new ApiController();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/primeira-rota", function (request, response) {
    return response.json("hello word");
});

app.get("/soma/:num1/:num2", function (request, response) {
    const num1 = Number(request.params.num1);
    const num2 = Number(request.params.num2);
    return apiController.somar(num1, num2);
});

app.get("/sub/:num1/:num2", function (request, response) {
    const num1 = Number(request.params.num1);
    const num2 = Number(request.params.num2);
    const sub = num1 - num2;
    return response.json(sub);
});

app.get("/mult/:num1/:num2", function (request, response) {
    const num1 = Number(request.params.num1);
    const num2 = Number(request.params.num2);
    const mult = num1 * num2;
    return response.json(mult);
});

app.get("/div/:num1/:num2", function (request, response) {
    const num1 = Number(request.params.num1);
    const num2 = Number(request.params.num2);
    const div = num1 / num2;
    return response.json(div);
});
app.get("/mediaAluno/:num1/:num2/:num3/:num4/:num5", function (request, response) {
    const num1 = Number(request.params.num1);
    const num2 = Number(request.params.num2);
    const num3 = Number(request.params.num3);
    const num4 = Number(request.params.num4);
    const num5 = Number(request.params.num5);
    const media = (num1 + num2 + num3 + num4 + num5) / 5;
    const result = apiController.mediaAluno(num1, num2, num3, num4, num5);
    return response.json(result);
});
app.get("/verificar-nome/:nome", function (request, response) {
    const nome = request.params.nome;
    if (nome.toLowerCase() == 'pedro') {
        return response.json("Você digitou meu nome");
    }
    else {
        return response.json("Você digitou o nome incorreto");
    }
});
app.get("/calculadora/:operacao/:num1/:num2", function (request, response) {
    const num1 = Number(request.params.num1);
    const num2 = Number(request.params.num2);
    const operacao = request.params.operacao;
    const result = apiController.calculadora(operacao, num1, num2);
    return response.json(result);

});
app.get("/reqFuncionario/:expJava/:expBanco/:expProgramar/:expLidera", function (request, response) {
    console.log("Chegou aqui");
    const expJava = request.params.expJava;
    const expBanco = request.params.expBanco;
    const expProgramar = request.params.expProgramar;
    const expLidera = request.params.expLidera;
    const result = apiController.reqFuncionario(expJava, expBanco, expProgramar, expLidera);
    return response.json(result);
});

app.get("/jogador/:idade/:peso/:posicao", function (request, response) {
    const idade = request.params.idade;
    const peso = request.params.peso;
    const posicao = request.params.posicao;
    const result = apiController.jogador(idade, peso, posicao);
    return response.json(result);
});

app.get("/verificar-cor/:numCor", function (request, response) {
    const numCor = request.params.numCor;
    const result = apiController.verificarCor(numCor);
    return response.json(result);
});

app.get("/calculadora2/:operacao/:num1/:num2", function (request, response) {
    const operacao = request.params.operacao;
    const num1 = Number(request.params.num1);
    const num2 = Number(request.params.num2);
    const result = apiController.calculadora2(operacao, num1, num2);
    return response.json(result);
});

app.get("/copaDoMundo/:ano", function (request, response) {
    const ano = request.params.ano;
    const nome = request.query.nome;
    console.log(nome);
    const result = apiController.copaDoMundo(ano);
    return response.json(result);
});

app.get("/consultarCarro", function (request, response) {
    const marca = request.query.marca;
    const result = apiController.consultarCarro(marca);
    return response.json(result);
});

app.get("/verificarCarro", function (request, response) {
    const body = request.body;
    const result = apiController.verificarCarro(body);
    return response.json(result);
});

app.get("/verificarFuncionarioMaisVelho", function (request, response) {
    const body = request.body;
    const result = apiController.verificarFuncionarioMaisVelho(body);
    return response.json(result);
});

app.get("/verificarFuncionarioMaisNovo", function (request, response) {
    const body = request.body;
    const result = apiController.verificarFuncionarioMaisNovo(body);
    return response.json(result);
});

app.get("/verificarDemissoes", function (request, response){
    const body = request.body;
    const result = apiController.verificarDemissoes(body);
    return response.json(result);
});

app.get("/verificarFuncionarios", function (request, response) {
    const body = request.body;
    const result = apiController.verificarFuncionarios(body);
    return response.json(result);
});

app.get("/consultarCarroFiat", function (request, response) {
    const body = request.body;
    const result = apiController.consultarCarroFiat(body);
    return response.json(result);
});

app.get("/agruparCarros", function (request, response) {
    const body = request.body;
    const result = apiController.agruparCarros(body);
    return response.json(result);
});

app.get("/consultarFiatChevrolet", function (request, response) {
    const body = request.body;
    const result = apiController.consultarFiatChevrolet(body);
    return response.json(result);
});

app.get("/consultarEstado", function (request, response) {
    const estado = request.query.estado;
    const arrEstado = request.body;
    const result = apiController.consultarEstado(estado, arrEstado);
    return response.json(result); 
    
});

app.get("/verificarCarroMaisNovo", function (request, response) {
    const arrCarro = request.body;
    const result = apiController.verificarCarroMaisNovo(arrCarro);
    return response.json(result);
});

app.get("/verificarCarroMaisVelho", function (request, response) {
    const arrCarro = request.body;
    const result = apiController.verificarCarroMaisVelho(arrCarro);
    return response.json(result);
});

app.get("/verificarCep/:cep", async function (request, response) {
    const cep = Number(request.params.cep);
    const result = await apiController.verificarCep(cep);
    return response.json(result);
});

app.get("/verificarListaCep", async function (request, response) {
    const arrCep = request.body;
    const result = await apiController.verificarListaCep(arrCep);
    return response.json(result);
});

app.get("/consultarUf/:uf", async function (request, response) {
    const uf = request.params.uf;
    const result = await apiController.consultarUf(uf);
    return response.json(result);
});

app.get("/consultarRegiaoNorte/:regiao", async function (request, response) {
    const regiao = request.params.regiao;
    const result = await apiController.consultarRegiaoNorte(regiao);
    return response.json(result);
});

app.get("/consultarEstado/:estado", async function (request, response) {
    const estado = request.params.estado;
    const result = await apiController.consultarEstado(estado);
    return response.json(result);
});

app.get("/consultarMunicipios", async function (request, response) {
    const sigla = request.query.sigla;
    const result = await apiController.consultarMunicipios(sigla);
    return response.json(result);
});

app.get("/consultarRegiao/:regiao", async function (request, response) {
    const regiao = request.params.regiao;
    const result = await apiController.consultarRegiao(regiao);
    return response.json(result);
});

app.get("/consultarEstados/:estado", async function (request, response) {
    const estado = request.params.estado;
    const result = await apiController.consultarEstados(estado);
    return response.json(result);
});

app.get("/consultarPais/:sigla", async function (request, response) {
    const sigla = request.params.sigla;
    const result = await apiController.consultarPais(sigla);
    return response.json(result);
});

app.get("/listar-funcionario", async function (request, response) {
    const result = await apiController.listarFuncionario();
    return response.json(result);
});

app.get("/consultarFuncionario/:idFuncionario", async function (request, response) {
    const idFuncionario = request.params.idFuncionario;
    const result = await apiController.consultarFuncionario(idFuncionario);
    return response.json(result);
});

app.get("/consultarNomeFuncionario/:nome", async function (request, response) {
    const nome = request.params.nome;
    const result = await apiController.consultarNomeFuncionario(nome);
    return response.json(result);
});

app.get("/consultarCargo/:cargo", async function (request, response) {
    const cargo = request.params.cargo;
    const result = await apiController.consultarCargo(cargo);
    return response.json(result);
});

app.get("/verificarFuncionarios/:cargo/:endereco", async function (request, response) {
    const cargo = request.params.cargo;
    const endereco = request.params.endereco;
    const result = await apiController.verificarFuncionarios(cargo, endereco);
    return response.json(result);
});

app.get("/listar-departamento", async function (request, response) {
    const result = await apiController.listarDepartamento();
    return response.json(result);
});

app.get("/verificarDepartamento/:departamento", async function (request, response) {
    const departamento = request.params.departamento;
    const result = await apiController.verificarDepartamento(departamento);
    return response.json(result);
});

app.get("/lista-funcionario-departamento", async function (request, response) {
    const result = await apiController.listaFuncionarioDepartamento();
    return response.json(result);
});

app.get("/consultarFuncionarioDepartamento/:idFuncionario", async function (request, response) {
    const idFuncionario = request.params.idFuncionario;
    const result = await apiController.consultarFuncionarioDepartamento(idFuncionario);
    return response.json(result);
});

app.get("/consultarDepartamentoFuncionario/:idDepartamento", async function (request, response) {
    const idDepartamento = request.params.idDepartamento;
    const result = await apiController.consultarDepartamentoFuncionario(idDepartamento);
    return response.json(result);
});

app.get("/listar-gerencia", async function (request, response) {
    const result = await apiController.listarGerencia();
    return response.json(result);
});

app.get("/listar-funcionario-gerente", async function (request, response) {
    const result = await apiController.listarFuncionarioGerente();
    return response.json(result);
});
module.exports = app;