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
})
module.exports = app;