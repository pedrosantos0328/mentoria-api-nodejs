const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/primeira-rota", function (request, response) {
    return response.json("hello word");
});

app.get("/soma/:num1/:num2", function (request, response) {
    const num1 = Number(request.params.num1);
    const num2 = Number(request.params.num2);
    const soma= num1+num2;
    return response.json(soma);
});

app.get("/sub/:num1/:num2", function (request, response){
    const num1 = Number(request.params.num1);
    const num2 = Number(request.params.num2);
    const sub = num1-num2;
    return response.json(sub);
});

app.get("/mult/:num1/:num2", function (request, response){
    const num1 = Number(request.params.num1);
    const num2 = Number(request.params.num2);
    const mult = num1*num2;
    return response.json(mult);
});

app.get("/div/:num1/:num2", function (request, response){
    const num1 = Number(request.params.num1);
    const num2 = Number(request.params.num2);
    const div = num1/num2;
    return response.json(div);
});
app.get("/media/:num1/:num2/:num3/:num4/:num5", function (request, response){
    const num1 = Number(request.params.num1);
    const num2 = Number(request.params.num2);
    const num3 = Number(request.params.num3);
    const num4 = Number(request.params.num4);
    const num5 = Number(request.params.num5); 
    const media = (num1+num2+num3+num4+num5)/5;
    return response.json(media);
});
app.get("/verificar-nome/:nome", function (request, response){
    const nome = request.params.nome;
    if(nome.toLowerCase()== 'pedro'){
        return response.json("Você digitou meu nome");
    }
    else{
        return response.json("Você digitou o nome incorreto");
    }
})
module.exports = app;