const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const path = require('path');

const PORT = 3003;

app.use(express.static(path.join(__dirname,  '../public')));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// app.get('/', function (req, res) {
//   res.send('Hello World');
// });

app.get('/api/L1/reviews', (req, res) => {
  let input = `select id from restaurants where name='L1';`;

  db.query(input, (error, results) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      // console.log('results: ', results);
      // let reviewQuery = `select * from reviews where restaurant_id = '${results[0].id}';`
      let joinQuery = `SELECT * FROM Users JOIN Reviews ON Reviews.restaurant_id= '${results[0].id}' AND Reviews.user_id=Users.id;`
      db.query(joinQuery, (error, results) => {
        if (error) {
          console.log(error);
          res.send(error);
        } else {
          res.send(results);
        }
      })
    }
  });
});

app.get('/api/:restaurantName/reviews', (req, res) => {
  let input = `select id from restaurants where name='${req.params.restaurantName}';`;

  db.query(input, (error, results) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      // console.log('results: ', results);
      // let reviewQuery = `select * from reviews where restaurant_id = '${results[0].id}';`
      let joinQuery = `SELECT * FROM Users JOIN Reviews ON Reviews.restaurant_id= '${results[0].id}' AND Reviews.user_id=Users.id;`
      db.query(joinQuery, (error, results) => {
        if (error) {
          console.log(error);
          res.send(error);
        } else {
          res.send(results);
        }
      })
    }
  });
});

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});
