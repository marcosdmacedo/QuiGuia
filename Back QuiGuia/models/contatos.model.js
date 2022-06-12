let mongoose = require("mongoose");

module.exports = function(){
   let schema = mongoose.Schema({
       nome: {
           type: String,
           required: true
       },
       endereco: {
           type: String,
           required: true
       },
       tel: {
            type: String,
            required: true
        }
   });
   return mongoose.model('Contato', schema);
}();
