const { Pool, Client } = require('pg');

const pool = new Pool({
  database: 'reviewsmodule',
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) console.log('DB connnect error', err);
  console.log(res.rows[0].now + ' DB connect started');
});

module.exports = pool;