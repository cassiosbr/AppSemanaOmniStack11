const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes'); // importar a rota

const app = express(); 

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

//app.listen(3333);
module.exports = app;

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/listar informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetro nomeados enviados na rota após "?" (Filtros, Paginação)
   * Route Params: Parâmetros urilizados para indentificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft, SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */