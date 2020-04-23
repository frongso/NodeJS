var express = require("express");
var mysql = require("mysql")
var app = express();
app.use(express.json())

app.get('/get', function (req, res) {
  console.log('get data');
  res.send("Hello World");
});

app.post('/post', function (req, res) {
  console.log('add data');
  var name = req.body.name
  res.send("Hello " + name);
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
}

app.listen(3000);
console.log("listening to port 3000.");