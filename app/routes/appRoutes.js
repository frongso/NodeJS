'use strict';

module.exports = function (app) {

  var express = require("express");
  var app = express();

  var todoList = require('../controller/appController.js');

  app.route('/')
    .get(todoList.read_homepage);

  app.route('/getdata')
    .get(todoList.get_data);

  app.route('*')
    .get(todoList.not_found)

  port = process.env.PORT || 3000;
  app.listen(3000);
  console.log("listening to port 3000.");

  // app.get('/', );

  // app.get('/getalldata', function (req, res) {
  //   console.log('Get Data');
  //   console.log(confic.getMyData());
  //   res.send(confic.getMyData());
  // });

  // app.get('/getdata', async function (req, res) {
  //   console.log('Get Data');
  //   mysql_conn.query('SELECT * FROM msm_user', function (err, rows) {
  //     console.log('Getting data');
  //     res.send(rows);
  //   });
  // });

  // app.get('*', function (req, res) {
  //   console.log('Not found');
  //   res.send("Not found");
  // });
}
