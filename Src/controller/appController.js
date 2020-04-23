module.exports = function (app) {
  var service = require('../service/appService');

  // todoList with Routes /getdata
  app.route('/getdata')
    .get(service.getData)

  // app.get('/getdata', service.getData());

