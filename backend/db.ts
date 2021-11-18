export const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : process.env.DB_URL,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : "sys",
    dateStrings: true,
    pool:{},
    log:{
      debug: console.log,
    }
  }
});