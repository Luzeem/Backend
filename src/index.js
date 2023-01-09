const express = require('express');
const path = require('path');
const multer = require('multer');
const uuid = require('uuidv4');
const db = require("./database")

const morgan = require('morgan');


//incializacion
const app = express();
db.connectdb();

//Configuraciones

app.set('port', process.env.PORT || 3000); 
app.set('views', path.join(__dirname, 'views'));//unir carpeta vistas
app.set('view engine', 'ejs');


//middlewares(primero pasa por aqui antes de pasar x las rutas)
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));//Para los datos de los formularios
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img/uploads'),
    filename: (req, file, cb, filename) => {
        cb(null, uuid + path.extname(file.originalname));
    }
});
app.use(multer({storage : storage }).single('image'));

//Variables Globales


//Rutas
app.use(require('./rutas/index')); 

//Archivos estaticos (donde van las imagenes subidas)


//Start servidor
app.listen(app.get('port'), ()=> {
    console.log(`Servidor en el puerto ${app.get('port')}`);
});