var mysql = require('mysql');

// local mysql db conn 
var mysql_conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1q2w3e4r',
  database: 'shopping_mall'
});

mysql_conn.connect(function (err) {
  if (err) throw err;
}));

module.exports = mysql_conn;
