const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const port = 3000;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send('Hello World');
});


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

