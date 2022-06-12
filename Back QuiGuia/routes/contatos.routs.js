//chamar o controle dos contatos
let controller_contatos = require("../controllers/contatos.controllers.js");
let controller_auth = require("../controllers/auth.controller.js");

module.exports = function (app){  
    // // endpoint POST de logar >> signin   
    app.post("/contatos/signin", controller_auth.logar);
    // Adcionar os contatos > endpoint (POST)
    app.post("/contatos", controller_contatos.inserir_contatos);
    // Use >> token, chegar o token 
    app.use("/contatos", controller_auth.checar);
    // Listar os contatos > endpoint (GET)
    app.get("/contatos", controller_contatos.listar_contatos);
    // Remover os contatos > endpoint (DELETE)
    app.delete("/contatos/:id", controller_contatos.remover_contatos);
}