const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const path = require('path');
const compression = require('compression');

const PORT = 3003;


app.use(express.static(path.join(__dirname,  '../public')));

app.use(bodyParser.json());

app.use(compression());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/listing/:restaurantName', (req, res) => { 
  let joinQuery = `SELECT * FROM people JOIN reviews ON reviews.restaurant_id= '${req.params.restaurantName}' AND reviews.user_id=people.id`;
  db.query(joinQuery, (error, results) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      res.send(results.rows);
    }
  });
});

app.post('/api/listing', (req, res) => { 
  let insertQuery = `INSERT INTO reviews (user_id,review,overall,food,service,ambience,value,noise,would_recommend,date,restaurant_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`;
  db.query(insertQuery, req.body, (error, results) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      res.send(results.rows[0]);
    }
  });
});

// user_id,review,overall,food,service,ambience,value,noise,would_recommend,date,restaurant_id

app.put('/api/listing/:restaurantName', (req, res) => { 
  let query = `UPDATE reviews SET review=$1,
    overall=$2,
    food=$3,
    service=$4,
    ambience=$5,
    value=$6,
    noise=$7,
    would_recommend=$8,
    date=$9 
    WHERE id = ${req.params.reviewId} RETURNING *`;
  db.query(query, (error, results) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      res.send(results.rows[0]);
    }
  });
});

app.delete('/api/listing/:restaurantName', (req, res) => { 
  let query = `DELETE FROM reviews WHERE id = ${req.params.reviewId}`;
  db.query(query, (error, results) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      res.send(results.rows[0]);
    }
  });
});

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});
