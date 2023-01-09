const { Router} = require('express');
const ruta = Router();

const Image = require('../archivos/image');

ruta.get('/', (req, res) => {
   res.send('Index');
});

//ruta para mostrar el formulario
ruta.get('/upload', (req, res) =>{

  res.render('upload');
});


//mostrar una imagen
ruta.get('/image/:id', (req, res)=>{

    res.send('Perfil de imagen')
});


//ruta para eliminar imagen

ruta.get('/image/:id/delete',(req, res)=>{
    res.send('eliminado')
});





module.exports = ruta;