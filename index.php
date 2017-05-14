<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<script>
    var ezi = {
        post: function(url, data, cb){
            var xhr = new XMLHttpRequest();
            var json = JSON.stringify(data);
            var fd = new FormData;
            fd.append('data', json);
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
</script>
ы</body>
</html>
