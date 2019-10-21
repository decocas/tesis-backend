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
await mercancia.findOneAndDelete(req.params.id);
res.json({status:'borrado ok'});
console.log('borrado ok');
};

c.Editar= async(req, res)=>{
    const a={ cantidad_buen_estado: req.body.cantidad_buen_estado};
    const query=await mercancia.findOneAndUpdate(req.params._id,{$set:a},{new:false},(err, doc)=>{
        if(err){
            console.log('algo esta mal');
        } 
        console.log(doc);
    });
    res.json({status:'ok'});
}

c.getId= async (req,res)=>{
    const merca= await mercancia.findById(req.params.id);
       res.json(merca); 
  };

module.exports=c;
