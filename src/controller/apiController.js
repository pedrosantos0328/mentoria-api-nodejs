const ApiService = require("../service/apiService");
const apiService = new ApiService();
class ApiController{
somar(num1, num2){
    return apiService.somar(num1, num2);
}
mediaAluno(num1, num2, num3, num4, num5){
    return apiService.mediaAluno(num1, num2, num3,num4, num5);
}
}
module.exports=ApiController;