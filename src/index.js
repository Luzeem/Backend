const express = require('express');//Requiero el modulo
const morg = require('morgan');
const path = require('path');
const engine = require('ejs-mate');
const db = require('./db');

const app = express();//Inicializo el modulo


app.set('port', process.env.PORT || 3000);//Configuramos un puerto en el 3000
app.engine('ejs',engine);//un nuevo motor de plantilla.
app.set('vista engine', 'ejs');//utilizar el motor de plantilla para enviar html con funcionalidades.
app.set('vistas', path.join(__dirname,'vistas'))//devuelve la carpeta vistas


const{
    userController,
    getUserController,
    loginController,
} = require('./users');

const{
    getImagenesController,
    newImagenesController,
    getImagenController,
    deleteImagenesController 
} = require('./imagenes');



app.use(morg('dev'));//te muestra x consola cada vez q un usuario hace una peticion q es lo q estan pidiendo.
db.connectdb();


///RUTAS de usuario.
app.use(require('./rutas/index'));//usando la ruta q creamos en carpeta rutas
app.post('/user', userController);
app.get('/user/:id', getUserController);
app.post('/login', loginController)

//rutas de las fotos.
app.get('/', getImagenesController);
app.post('/', newImagenesController);
app.get('/imagenes/:id', getImagenController);
app.delete('/imagenes/:id', deleteImagenesController);




//Middleware de 404
app.use((req, res) =>{
    res.status(404).send({
        status: 'error',
        message: 'Not found',
    });
});

//Middleware de errores
app.use((error,req, res,next )=>{
    console.error(error);

    res.status(error.httpStatus || 500).send({
        status:'error',
        message: error.message,
    });
});






app.listen(app.get('port'), () =>{
    console.log('Servidor en el puerto', app.get('port'));
});//EScucha mi app en algun puerto y me manda un msm por consola concatenado con el puerto 3000