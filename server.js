const express = require('express');

const server = express();

const routes = require('./src/routes');

server.use(express.json());

server.use(routes);




server.listen(3333, function(){
    console.log('Servidor Ativo')
});
