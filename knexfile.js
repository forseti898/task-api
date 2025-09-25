// Update with your config settings.

const { Knex } = require("knex");

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'tasks',
  },
});





module.exports = knex;
