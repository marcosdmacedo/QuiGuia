// importando modulo express
let express = require('express');
// rotas
let routes_contatos = require("../routes/contatos.routs");
let routes_grupos = require("../routes/grupos.routs");
// bilbioteca para o POST
let bodyParser = require("Body-parser");

// exportando modulo
function setup(){
    let app = express();
    // definindo variavéis de aplicações
    app.set("port", 3000);
    // Para o post (segundo aulas antigas)
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    
    app.use(express.static("./public"))

    routes_contatos(app);
    routes_grupos(app);

    return app;
};
module.exports.setup = setup;
