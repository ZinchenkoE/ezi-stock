var http = require('http');
var https = require('https');

var server = http.createServer(function(request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    var urlImg = request.url.slice(1);
    var protocol = urlImg.slice(0,5);
    if(protocol == 'https'){
    var proxy = https.get(urlImg, function(res) {
        var dataImg;
            res.on('data', function(chunk) {
                response.write(chunk);
            });
            
            res.on('end', function() { 
                response.end(); 
            });
    });
    }else if(protocol == 'http:'){
        var proxy = http.get(urlImg, function(res) {
        var dataImg;
            res.on('data', function(chunk) {
                response.write(chunk);
            });
            
            res.on('end', function() { 
                response.end(); 
            });
    });
    }
}).listen(8080, '192.168.1.90');
