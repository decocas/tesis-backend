const c={};
 
const mercancia=require('../esquema/eschema');
 
 

 
c.crear= async (req,res)=>{
    const m= new mercancia(req.body);
    await m.save();
    console.log('entrada existosa');
     
    res.json('Entrada exitosa');
};

 

c.listar= async (req, res)=>{
    const m= await mercancia.find();
    res.json(m);
}

c.Eliminar= async(req, res)=>{
await mercancia.deleteOne({"_id":req.params.id});
res.json({status:'borrado ok'});
console.log('borrado ok');
};

c.Editar= async(req, res)=>{
    const a={ cantidad_buen_estado: req.body.cantidad_buen_estado ,
                 };
                 const salida={salida:{f_salida:req.body.f_salida,
                    responsable:req.body.responsable,   
                    id_cliente:req.body.id_cliente,
                    telefono:req.body.telefono,
                    mail:req.body.mail}
            };
                
   await mercancia.updateOne({"_id":req.params.id},{$set:a, $addToSet:salida},{upsert:true},(err, doc)=>{
        if(err){
            console.log('algo esta mal');
        } 
        console.log(mercancia);
        console.log(doc);
    });
    res.json({status:'ok'});
}

c.getId= async (req,res)=>{
    const merca= await mercancia.findById(req.params.id, (err,doc)=>{
        if (err){
            console.log('error');
        }
        console.log(doc);
    });
       res.json(merca); 
  };

  
module.exports=c;
