var app = require('http').createServer(handler);
var	io = require('socket.io').listen(app);
var	fs = require('fs');
var url = require("url");
app.listen(83);

function handler (req, res) {
	if(req.url=='/get'){
        res.end();
	}else if(req.url.slice(0,9) == '/send_all'){
        req.on('data', function(chunk) {
            console.log(decodeURIComponent(decodeURIComponent(chunk.toString())));
            var postStr = decodeURIComponent(decodeURIComponent(chunk.toString()));
            var arrPost = postStr.split('&');
            var obj = {};
            arrPost.forEach(function(i) {
                var temp = i.split('=');
                var name = temp[0];
                var value = temp[1];
                console.log("Received post:", name, value);
                obj[name] = value;
            });
            io.sockets.send(obj);
            res.end();
        });
	}else{
		res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
		res.end('Непонятно, кто ты...');
	} 
}
io.sockets.on('connection', function (socket) {
	console.log('Подключился ' , socket.id);
	socket.on('message', function (data) { console.log('Прилетело', data.msg); });
});
console.log('Слушаю 83');
