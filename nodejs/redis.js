var redis = require('redis'),    
    client = redis.createClient(6379, '192.168.1.175', {password: 'su4Y3I77voCY'});
    client.on("error", function (err) {console.log("Error: " + err);});

// Попробуем записать и прочитать
client.set('myKey', 'Hello Redis', function (err, repl) {
    if (err) {
           // Оо что то случилось при записи
           console.log('Что то случилось при записи: ' + err);
           client.quit();
    } else {
           // Прочтем записанное
           
    };
});

// client.get('keys', function (err, repl) {
//    client.quit();
//    if (err) { console.log('Что то случилось при чтении: ' + err);
//    }else if (repl) {console.log('Ключ: ' + repl);
//    }else {console.log('Ключ ненайден.');}
// });    


client.keys('*', function (err, keys) {
  if (err) return console.log(err);

  for(var i = 0, len = keys.length; i < len; i++) {
    console.log(keys[i]);
  }
}); 