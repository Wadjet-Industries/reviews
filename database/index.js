const { Pool, Client } = require('pg');
const pswd = require('./dbpswd.js');

const pool = new Pool({
  database: 'reviewsmodule',
  // host: '54.215.140.208',
  // user: 'postgres',
  // password: pswd
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) { 
    console.log('DB connnect error', err);
  } else {
    console.log(res.rows[0].now + ' DB connect started');
  }
});

module.exports = pool;