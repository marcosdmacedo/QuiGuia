let mongoose = require("mongoose");

module.exports = function(){
   let schema = mongoose.Schema({
       nome: {
           type: String,
           required: true
       },
       descricao: {
           type: String,
           required: true
       },
       link: {
           type: String,
           required: true
       },
       horario: {
            type: String,
            required: true
        },
        local: {
            type: String,
            require: true
        }
   });
   return mongoose.model('Grupo', schema);
}();
