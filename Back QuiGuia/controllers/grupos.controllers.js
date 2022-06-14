let Grupo = require("../models/grupos.model.js");
let view_grupo = require("../views/view.grupo")
let jwt = require("jsonwebtoken");

module.exports.listar_grupos = function(req, res){
    let promise = Grupo.find().populate("grupo").exec();
    promise.then(
        function(grupos){
            res.status(201).json(view_grupo.renderMany(grupos));
        }
    ).catch(
        function(error){
            res.status(501).json(error)
        }
    )
}

module.exports.inserir_grupos = function(req, res){
    // let usuario = req.body;
    let grupo = new Grupo ({
        nome: req.body.nome,
        descricao: req.body.descricao,
        link: req.body.link,
        horario: req.body.horario,
        local: req.body.local
    })
    let promise = Grupo.create(grupo);
    promise.then(
        function(grupo){
            res.status(201).json(grupo)
        }
    ).catch(
        function(error){
            res.status(404).json(error);
        }
    )
};

module.exports.remover_grupos = function(req, res){
    let id = req.params.id;
    let token = req.headers.token
    let id_grupos = jwt.decode(token).id_grupos;
    
    if(id == id_grupos){
        let promise = Contato.findByIdAndDelete(id).exec();
        promise.then(
            function(){
                res.status(200).json("Grupo removido!");
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
