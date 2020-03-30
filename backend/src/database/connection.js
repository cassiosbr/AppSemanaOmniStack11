const knex = require('knex');
const configuration = require('../../knexfile');

//variavies de ambientes no node,  depois é importante pequisar
const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development;

const connection = knex(config); //conexao de desenvolvimento

module.exports = connection; // exportar a conexao com o banco de dados