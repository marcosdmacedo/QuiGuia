let Contato =  require("../models/contatos.model.js");
let view_contato = require("../views/view.contatos.js");
let jwt = require("jsonwebtoken");
// Funções que vão tratar as requisições (contatos)
// Modulo de listar os contato (mostrar)
module.exports.listar_contatos = function (req, res){
    let promise = Contato.find().populate("contato").exec();
    promise.then(
        function(contatos){
            res.status(200).json(view_contato.renderMany(contatos));
        }
    ).catch(
        function(error){
            res.status(501).json(error);
        }
    )
};
// Modulo de inserir os contatos (adcionar)
module.exports.inserir_contatos = function(req, res){
    let contato = new Contato ({
        nome: req.body.nome,
        endereco: req.body.endereco,
        tel: req.body.tel
    })
    let promise = Contato.create(contato);
    promise.then(
        function(contato){
            res.status(201).json(contato);
        }
    ).catch(
        function(error){
            res.status(404).json(error);
        }
    )
};

module.exports.remover_contatos = function(req, res){
    let id = req.params.id;
    let token = req.headers.token
    let id_contato = jwt.decode(token).id_contato;
    
    if(id == id_contato){
        let promise = Contato.findByIdAndDelete(id).exec();
        promise.then(
            function(){
                res.status(200).json("Contato Removido!");
            }
        ).catch(
            function(error){
                res.status(200).json("Não Autorizado!")      
            }
        ) 
    }else{   
        res.status(401).json("Não Autorizado");
    }
};
