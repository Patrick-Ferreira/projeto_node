const db = require('../../config/database');

module.exports = {
    criar: function (dados, callback) {
        const { nome, mensagem } = dados;

        const consulta = `INSERT INTO comentarios (nome, mensagem) VALUES ('${nome}', '${mensagem}')`;

        db.query(consulta, function (err, resultado) {
            if (err) {
                return new Error(`Erro no banco de dados: ${err}`);
            }

            callback();
        });
    },

    
    listar: function(callback) {

        const consulta = 'SELECT * FROM comentarios';
    
        db.query(consulta, function(erro, resultado) {
            if (erro) {
                return  new Error(`Erro no Banco de Dados: ${erro}`);
            }
        
            callback(resultado);
        });
    }, 
   
};


