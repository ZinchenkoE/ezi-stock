var http = require('http');
var server = new http.Server();
server.listen(333, '127.0.0.1');
	console.log('server run');
server.on('request', function(req, res) {
 console.log(req);
  res.end();
  }); 
