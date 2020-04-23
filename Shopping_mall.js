var mysql = require('mysql');
var express = require("express");
var mysql = require("mysql")
var app = express();


var mysql_conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1q2w3e4r',
  database: 'shopping_mall'
});

mysql_conn.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database");
});

app.get('/', function (req, res) {
  console.log('Home');
  res.send("Hello World");
});

app.get('/getalldata', function (req, res) {
  console.log('Get Data');
  mysql_conn.query('SELECT * FROM msm_user', function (err, rows) {
    console.log("Getting data")
    res.send(rows);
  });
});

app.listen(3000);
console.log("listening to port 3000.");

