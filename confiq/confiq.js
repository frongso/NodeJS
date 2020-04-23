var mysql = require('mysql');
var express = require("express");
app = express();

exports.mysqlConnected = function () {
  mysql_conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1q2w3e4r',
    database: 'shopping_mall'
  });
  mysql_conn.connect(function (err) {
    if (err) throw err;
    console.log("Connected to database");
  });
};

exports.getMyData = function () {
  mysql_conn.query('SELECT * FROM msm_user', function (err, rows) {
    console.log("Getting data");
    return rows;
  });
}