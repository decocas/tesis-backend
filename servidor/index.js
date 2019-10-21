const express= require('express');
var aplicacion=express();
const {db}= require('./database');
const cors=require('cors');
aplicacion.listen(3000,()=>{
    console.log('escuchando por el puerto 3000');
});
/*
aplicacion.get('/', (req,res)=>{
    res.send('cargado..');
});*/

aplicacion.use(express.json());
aplicacion.use(cors());
aplicacion.use('/index',require('../ruta/ruta'));
