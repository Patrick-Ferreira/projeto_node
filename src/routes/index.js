const express = require('express');

const routes = express.Router();

const produtosControllers = require('../app/controllers/produtosControllers');
const comentariosControllers = require('../app/controllers/comentariosControllers');

routes.get('/', produtosControllers.listar);
routes.post('/comentario', comentariosControllers.criarComentario);
routes.get('/comentario', comentariosControllers.listarComentarios);

module.exports = routes;