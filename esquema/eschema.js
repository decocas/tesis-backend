const eqm = require('mongoose');
const {Schema} = eqm; // constructor siempre en mayusculas

const esquema=new Schema({
    _id:{type:String, require:false},
    nombre:{type:String, require:true},
    tipo_mercancia:{type:String, require:true},
    cantidad_mal_estado:{type:Number, require:false},
    cantidad_buen_estado:{type:Number, require:true},
    f_entrada:{type:String, require:true},
    f_salida:{type:String, require:false},
    fecha_caducidad:{type:String, require:false},
    responsable:{type:String, require:true},
    id_cliente:{type:String, required:true},
    telefono:{type:String, required:true},
    mail:{type:String, required:true},
    serial_container:{type:String, require:true}

});
module.exports= eqm.model('mercancia',esquema);