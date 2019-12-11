const eqm = require('mongoose');
  
const {Schema} = eqm; // constructor siempre en mayusculas

 

const esquema=new Schema({
    _id:{type:String, required:true},
    nombre:{type:String, required:true},
    tipo_mercancia:{type:String, required:true},
    cantidad_mal_estado:{type:Number, default:0 ,required:false},
    cantidad_buen_estado:{type:Number, required:true},
    f_entrada:{type:String, default:Date.now ,required:true},
    fecha_caducidad:{type:String, required:false},
    responsable:{type:String, required:true},
    id_cliente:{type:String, required:true},
    telefono:{type:String, required:true},
    mail:{type:String, required:true},
    serial_container:{type:String, required:true},
    salida:[{f_salida:{type:String},
            responsable:{type:String},   
            id_cliente:{type:String},
            telefono:{type:String},
            mail:{type:String},required:false}]
});

 
module.exports= eqm.model('mercancia',esquema);
 