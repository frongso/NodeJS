var sql = require('../database/dbConnection');

// ตอนนี้เราต้องใช้ตัวนี้มั้ย
// var User = function (user) {
//   this.id = user.id;
//   this.usename = user.username;
//   this.password = user.password;
//   this.firstname = user.firstname;
//   this.lastname = user.lastname;
// };

exports.getData = function (req, res) {
  sql.query('SELECT * FROM msm_user', function (err, rows) {
    console.log('Getting data');
    res.send(rows);
  });
}; 