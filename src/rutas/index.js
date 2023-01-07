const { Router } = require('express');
const express= require('express');
const rutas = express.Router();


rutas.get('/', (req, res) => {
    res.send('Index');
});

Router.get()
module.exports = rutas;// exportando rutas.