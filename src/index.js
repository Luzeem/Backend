const express = require('express');//Requiero el modulo
const morg = require('morgan');
const path = require('path');
const multer = require('multer');
const uuid = require('uuidv4');
const db = require('./db');
const morgan = require("morgan")

const app = express();//Inicializo el modulo

app.set('port', process.env.PORT || 3000);//Configuramos un puerto en el 3000

app.set('views', path.join(__dirname, 'views'))//devuelve la carpeta vistas
app.set('view engine', 'ejs');

/*const{
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


app.use(express.json());//cuando la peticion pase por aqui va a convertir los datos a json.
app.use(morg('dev'));//te muestra x consola cada vez q un usuario hace una peticion q es lo q estan pidiendo.
db.connectdb();


///RUTAS de usuario.
/*app.use(require('./rutas/index'));//usando la ruta q creamos en carpeta rutas
app.post('/user', userController);
app.get('/user/:id', getUserController);
app.post('/login', loginController)

//rutas de las fotos.
/*
app.get('/', getImagenesController);
app.post('/', newImagenesController);
app.get('/imagenes/:id', getImagenController);
app.delete('/imagenes/:id', deleteImagenesController);*/

console.log("iniciando la base de datos")
db.connectdb()

//middlewares(primero pasa por aqui antes de pasar x las rutas)
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));//Para los datos de los formularios
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img/uploads'),
    filename: (req, file, cb, filename) => {
        cb(null, uuid + path.extname(file.originalname));
    }
});
app.use(multer({ storage: storage }).single('image'));




//Middleware de 404
app.use((req, res) => {
    res.status(404).send({
        status: 'error',
        message: 'Not found',
    });
});

//Middleware de errores
app.use((error, req, res, next) => {
    console.error(error);

    res.status(error.httpStatus || 500).send({
        status: 'error',
        message: error.message,
    });
});
//Rutas
app.use(require('./rutas/index'));

//Start servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')}`);
});



