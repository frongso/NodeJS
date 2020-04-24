module.exports = function (app) {
  var service = require('../service/user_service');

  console.log('select routes'); // debug

  // todoList with Routes /getdata
  app.route('/getdata')
    .get(service.getData)
}