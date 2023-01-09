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


//ruta para formulaario post
ruta.post('/upload', async (req, res) => {
    const image = new Image();
    image.title = req.body.title;
    image.description = req.body.description;
    image.filename = req.file.filename;
    image.path = '/img/uploads/' + req.file.filename;
    image.originalname = req.file.originalname;
    image.mimetype = req.file.mimetype;
    image.size = req.file.size;

    await image.save();//para guardar la imagen*/

    res.redirect('/');
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