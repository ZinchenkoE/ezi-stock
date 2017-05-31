var	fs = require('fs');
var read = require('read');

// function readConsole() {
//     read({ prompt : ':: ' }, function (err, data) {
//         console.log(data);
//         if(data == 'exit') process.stdin.destroy();
//         else readConsole();
//     });
// }
// readConsole();

// fs.readdir(__dirname, function(err, items) {
//     if (err) {	console.log('Error loading file');	}
//     console.log(items);
// });
// console.log(__dirname);

fs.readFile(__dirname + '/data/_sections.scss', 'utf8', function (err, data) {
    if (err) {	console.log('Error loading file');	}
    // data += "";
    // var j  = JSON.parse(data);
    // console.log(j[0]);
    // console.log(data);

    // var ss = data.replace(/[\r\n\t]*/gm, "").replace(/\{/g, "{\n").replace(/}/g, "\n}");
    // var ss = data.replace(/[\r\n\t\s]*/gm, "");
    var regArr = data.match( /{[\n\t\s\w:;%,())\-.$#'+*]*}/gm );
    regArr.forEach(function(oldBlock) {
        var newBlock = oldBlock.replace(/[\r\n\t]*/g, "");
        data = data.replace(oldBlock, newBlock)
    });

    // var r=new RegExp('(?:;)\n\t*(?!.+})', 'gim')
    // // console.log(r.exec(data[0]));
    // var res;
    // // while (r.exec(data) != null) {
    //     console.log(r.exec(data)[0]);
    // // }

    // fs.writeFile(__dirname + '/data/_sections.min.scss', data, function (err) {
    //     if (err) throw err;
    //     console.log('The file has been saved!');
    // });



    // console.log(data.match( /{[\n\t\s\w:;%,())]*})/gm )[10]);
});
