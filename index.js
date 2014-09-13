// servidor base
var express = require('express');
var app = express();

// conteudo publico e estatico
app.use('/', express.static(__dirname + '/client'));

// iniciando a aplicacao
app.listen(Number(process.env.PORT || 5000));
console.log('Listening on port ' + Number(process.env.PORT || 5000) + '...');
