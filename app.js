//Requires
var express = require('express');
var mongoose = require('mongoose');

//Inicializar variables
var app = express();

//Conexión a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospilalDB', (err, res) => {
    if (err) throw err;
    console.log('conectado a la base de datos');
})

//Rutas
app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: "Petición realizada correctamente"
    })
})

//Escuchar peticiones
app.listen(3000, () => {
    console.log('Express Server corriendo en puerto 3000');
})