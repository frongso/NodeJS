'user strict';
var sql = require('./db.js');

var read_homepage = function (req, res) {
  console.log('Home');
  res.send("Home");
}

var get_data = function (req, res) {
  console.log('Get Data');
  mysql_conn.query('SELECT * FROM msm_user', function (err, rows) {
    console.log('Getting data');
    res.send(rows);
  });
};
var not_found = function (req, res) {
  console.log('Not found');
  res.send("Not found");
};

module.exports = Task;