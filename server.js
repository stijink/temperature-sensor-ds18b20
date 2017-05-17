const sensor    = require('ds18b20-raspi');
const http      = require('http');
const accesslog = require('access-log');
const port      = 9321;

console.log('started temperature sensor server at port ' + port);

http.createServer(function(request, response) {

  var temperature  = sensor.readSimpleC(2);

  response.writeHead(200);
  response.write(temperature.toString());

  accesslog(request, response);
  response.end();

}).listen(port);
