const express = require('express');

const app = express();
//toda vez qu eo usuário acessar a rota
app.get('/', (req, res)=>{
    res.send('Hello Rocketseat');

});

app.listen(3001);