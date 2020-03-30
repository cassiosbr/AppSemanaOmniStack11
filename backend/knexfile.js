// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: { // linha criada para salvar os arquivos no ditetorio abaixo
      directory: './src/database/migrations'
    },
    useNullAsDefault: true, // define que os valores padrão seja nulo/vazio
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.sqlite'
    },
    migrations: { // linha criada para salvar os arquivos no ditetorio abaixo
      directory: './src/database/migrations'
    },
    useNullAsDefault: true, // define que os valores padrão seja nulo/vazio
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
