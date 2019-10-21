const express =require('express');
const rout= express.Router();

const control= require ('../control/controlador');
/*rout.get('/', (req, res)=>{
    res.json({
        status:'ok'
    }) esto es una prueba
});*/ 


rout.get('/', control.listar);
rout.post('/', control.crear);
rout.delete('/',control.Eliminar);
rout.put('/:id',control.Editar);
rout.get('/:id',control.getId);
module.exports=rout;