const { Router } = require('express');
const express= require('express');
const rutas = express.Router();

const Instagram = require('node-instagram');

rutas.get('/', (req, res) => {
<<<<<<< HEAD
    res.send('Index');
})


=======
    res.render('Index');
});

Router.get()
>>>>>>> 359a73b6b675de7508039a3e9fc748a4dd3c1b8a
module.exports = rutas;// exportando rutas.