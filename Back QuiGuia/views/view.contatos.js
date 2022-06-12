function render (contato){
    return {
        nome: contato.nome,
        endereco: contato.endereco,
        tel: contato.tel,
        // id_contato: contato.id.contato
    }
}
module.exports.render = render;
module.exports.renderMany = function(contatos){
    return contatos.map(render)
}