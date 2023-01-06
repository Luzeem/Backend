const express = require('express');//Requiero el modulo
const morg = require('morgan');
const path = require('path');
const engine = require('ejs-mate');
const db = require('./tables');

const app = express();//Inicializo el modulo


app.set('port', process.env.PORT || 3000);//Configuramos un puerto en el 3000
app.engine('ejs',engine);//un nuevo motor de plantilla.
app.set('vista engine', 'ejs');//utilizar el motor de plantilla para enviar html con funcionalidades.
app.set('vistas', path.join(__dirname,'vistas'))//devuelve la carpeta vistas



app.use(morg('dev'));//te muestra x consola cada vez q un usuario hace una peticion q es lo q estan pidiendo.
db.connectdb();
///RUTAS
app.use(require('./rutas/index'));//usando la ruta q creamos en carpeta rutas



app.listen(app.get('port'), () =>{
    console.log('Servidor en el puerto', app.get('port'));
});//EScucha mi app en algun puerto y me manda un msm por consola concatenado con el puerto 3000