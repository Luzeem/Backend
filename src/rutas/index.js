const { Router } = require('express');
const express= require('express');
const rutas = express.Router();

const Instagram = require('node-instagram');

rutas.get('/', (req, res) => {
    res.render('Index');
});

Router.get()
module.exports = rutas;// exportando rutas.