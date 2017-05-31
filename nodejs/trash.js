res.writeHead(200,{ 'content-type': 'application/json' });
for(one in io.sockets.sockets){
    // console.log(io.sockets.sockets[one].handshake.headers.referer.split('/')[3]);
    console.log(one);
} 
console.log('Сейчас в системе: ');
io.sockets.send({msg:55})
else if(req.url == '/chrome' || req.url == '/opera'|| req.url == '/mozilla'){
    fs.readFile(__dirname + '/index.html', function (err, data) {
        if (err) {	res.writeHead(500);	return res.end('Error loading index.html');	}
        res.writeHead(200);
        res.end(data);
    });
}
socket.on('privat', function (o) {
    for(one in io.sockets.sockets){
        var chel = io.sockets.sockets[one].handshake.headers.referer.split('/')[3];
        if(o.whom == chel){
            socket.broadcast.to(one).json.send({
                msg: o.msg,
                who: socket.handshake.headers.referer.split('/')[3],
            });
        }
    }
});
socket.on('setId', function (data) {
    socket.id = data.id;
    console.log('socket.id', socket.id);
});
socket.broadcast.json.send({
    msg: data.msg,
    who: socket.id,
});
var redis = require('redis');
var client = redis.createClient();

