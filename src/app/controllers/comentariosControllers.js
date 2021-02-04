const Comentario = require('../models/comentario');
const { listar } = require('./produtosControllers');

module.exports = {
    criarComentario: function (request, response) {
        Comentario.criar(request.body, function () {
            return response.json({sucesso: 'mensagem cadastrada no banco'});
        });
    },

    listarComentarios: function (request, response) {
        Comentario.listar(function(comentarios){
            if (!comentarios){
                return response.json({erro: 'Nenhum Comentario'})
            }

            return response.json(comentarios);
        });
    },
};










