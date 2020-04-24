const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
var controller = require('./controller/user_controller'); //importing controller
controller(app); //register the route

app.listen(port);
console.log('API server started on: ' + port);


// // ตรงนี้ทำอะไร
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());