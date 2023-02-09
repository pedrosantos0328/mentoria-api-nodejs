const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/primeira-rota", function(request,response){
    return response.json("hellow word");
});
module.exports = app;