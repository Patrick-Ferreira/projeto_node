const db = require('../../config/database');

module.exports = {
    listarProdutos: function(callback) {

        const consulta = 'SELECT * FROM produtos';
    
        db.query(consulta, function(erro, resultado) {
            if (erro) {
                return  new Error(`Erro no Banco de Dados: ${erro}`);
            }
        
            callback(resultado);
        })
    } 
    
}