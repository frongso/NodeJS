module.exports = function (app) {
  var service = require('../service/appService');

  console.log('select routes'); // debug

  // todoList with Routes /getdata
  app.route('/getdata')
    .get(service.getData)
}