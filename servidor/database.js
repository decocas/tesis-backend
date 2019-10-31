const datos=require('mongoose');
const url='mongodb://localhost/data';
datos.set('useNewUrlParser', true);
datos.set('useFindAndModify', false);
datos.set('useUnifiedTopology', true);
datos.connect(url,{useNewUrlParser: true}).then(data=>console.log('db conectada')).catch(err=>console.log(err));
datos.connect(url,{ useFindAndModify: false }).then(data=>console.log('db conectada')).catch(err=>console.log(err));
datos.connect(url,{ useUnifiedTopology: true }).then(data=>console.log('db conectada')).catch(err=>console.log(err));