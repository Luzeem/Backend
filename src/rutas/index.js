const express= require('express');
const rutas = express.Router();

rutas.get('/', (req, res) => {
    res.send('Index');
})
module.exports = rutas;// exportando rutas.