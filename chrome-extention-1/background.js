console.log('Расширение EZI рботает))');

var ezi = {
    post: function(url, data, cb){
        var xhr = new XMLHttpRequest();
        var json = JSON.stringify(data);
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 200) {
                cb();
            } else {
                console.error('Ошибка отправки запроса!');
            }
        };
        xhr.send(json);
    }
};


document.body.addEventListener('click', function(e){
    console.log(e.target);
});

// console.log(document.querySelectorAll('[type="password"]'));