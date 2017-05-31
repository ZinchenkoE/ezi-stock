var NodeJS = {
    socket: io.connect('http://192.168.1.90:8088/'),
    userId: $('#metaForNodejs').attr('user-id'),
    authKey: $('#metaForNodejs').attr('auth-key'),
    init: function() {
        NodeJS.socket.on('connect', function (data) {
            NodeJS.socket.emit('checkAuthKey', { userId: NodeJS.userId, authKey: NodeJS.authKey});
        });
        NodeJS.socket.on('message', function (data) {
            NodeJS.showMessage(data.userId + ' каже: ' + data.msg);
        });
    },
    sendMessage: function() {
        var msg = $('#message').val();
        NodeJS.socket.json.send({ msg: msg , userId: NodeJS.userId});
    },
    showMessage: function(msg) {
        $('#subscribe').append('<p>'+msg+'</p>');
    }
};
NodeJS.init();