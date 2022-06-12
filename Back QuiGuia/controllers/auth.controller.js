let jwt = require("jsonwebtoken");
let Contato = require("../models/contatos.model.js");
// POST/contatos/signin
module.exports.logar = function(req, res){
    let nome = req.body.nome;
    let promise = Contato.findOne({nome: req.body.nome})
    .then(
        function(contato){
            if(req.body.tel, contato.tel){
                let token = jwt.sign({
                    id_contato: contato._id,
                    nome: contato.nome
                },"senha")
                res.status(200).json({token: token});
            }else {
                res.status(401).send("credenciais erradas!")
        }
    }).catch(
        function(error){
            res.status(401).send("não credenciadas!")
        }
    )
}
// Checar Token
module.exports.checar = function(req, res, next){
    let token = req.headers.token;
    jwt.verify(token,"senha", function(err, decoded){
        if(err){
            res.status(401).json("Token inválido!")
        }else{
        next();
        }
    })
};