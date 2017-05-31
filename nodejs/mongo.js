var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/ezi_db', function (err, db) {
    if (err) throw err; 
    else {
        console.log("successfully connected to the database");
        
        var col = db.collection('test_insert');
        
        // Поиск
        col.find().each(function(err, doc) {
            if (doc != null) {console.log(doc);}
            else db.close();
        });

        // Вставка
        // col.insert({hello:{ff:123}}, function(err, docs) { console.log('Все норм, вставили', docs); });
        // db.close();
    }
});