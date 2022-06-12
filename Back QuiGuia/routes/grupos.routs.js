//chamar  o controle dos grupos
let controller_grupos = require("../controllers/grupos.controllers.js");
let controller_auth = require("../controllers/auth.controller.js");

module.exports = function(app){
    // Adcionar os grupos > endpoint (POST)
    app.post("/grupos", controller_grupos.inserir_grupos);
    // Use >> token, chegar o token 
    app.use("/grupos", controller_auth.checar);
    // Listar os grupos > endpoint (GET)
    app.get("/grupos", controller_grupos.listar_grupos);
    // Remover os grupos > endpoint (DELETE)
    app.delete("/grupos/:id", controller_grupos.remover_grupos);
}