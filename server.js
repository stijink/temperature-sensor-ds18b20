const sensor = require('ds18b20-raspi');
const http   = require('http');
const port   = 9321;

http.createServer(function(request, response) {

  response
    .writeHead(200)
    .write('bla')
    .end();

}).listen(port);
