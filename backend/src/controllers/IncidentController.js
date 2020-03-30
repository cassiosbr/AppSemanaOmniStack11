const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count(); // colocado [count] para pegar o resultado da primeira posicao
        
        //console.log(count);

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidents.*', 
                'ongs.name', 
                'ongs.email', 
                'ongs.whatsapp', 
                'ongs.city', 
                'ongs.uf'
            ]);

            response.header('X-Total-Cound', count['count(*)']);

        return response.json(incidents);
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization; // guarda informações do contexto da requisição // Dados da autenticação/localização/idioma/etc do usuário
   
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        })

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incidents.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not permitted'}); //401 = Não autorizado
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send(); // 204 = É uma resposta que da sucesso mas não tem conteudo / send() é para enviar a resposta sem corpo ou seja, vazio.
    }
};