const Produto = require('../models/produto')


module.exports = {
    listar: function(request, response) {
        Produto.listarProdutos(function(produtos){
            if (!produtos) {
                return response.json({ erro: "Nao tem produtos cadatrados"})
            }

            return response.json(produtos);
        });
    }
}