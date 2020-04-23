var express = require("express");
var app = express();
var app = require('../confiq/confiq');

app.mysqlConnected();

app.get('/get', function (req, res) {
  console.log('Home');
  res.send("Home");
});

app.get('/getalldata', function (req, res) {
  console.log('Get Data');
  res.send(app.getMyData());
});

app.get('*', function (req, res) {
  console.log('Not found');
  res.send("Not found");
});

app.listen(3000);
console.log("listening to port 3000.");