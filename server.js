const express = require('express');
const mongoose = require('mongoose');
//iniciando o app
const app = express();

//Iniciando o BD


//Primeira rota
app.get('/', (req, res)=>{
    res.send('Hello Rocketseat');

});

app.listen(3001);