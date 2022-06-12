function render (grupo){
    return {
        nome: grupo.nome,
        descricao: grupo.descricao,
        link: grupo.link,
        horario: grupo.horario,
        local: grupo.local
    }
}
module.exports.render = render;
module.exports.renderMany = function(grupos){
    return grupos.map(render)
}