const express = require('express');//Requiero el modulo

const app = express();//Inicializo el modulo

app.set('port',  3000);//Configuramos un puerto en el 3000

app.listen(app.get('port'), () =>{
    console.log('Servidor en el puerto', app.get('port'));
});//EScucha mi app en algun puerto y me manda un msm por consola concatenado con el puerto 3000