$.getJSON("http://ip-api.com/json/?callback=?", function(data) {
    console.log(data);
});

//_________подклюпние jquery____
var s = document.createElement('script');
s.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js";
document.body.appendChild(s);

//_________парсер таблиц_____
var a = [];
$('table:eq(6) tr:not(:first) td:nth-child(6n+2)').each(function(){
    var ww = [this.innerText, $(this).next().text()];
    a.push(ww);
});
$('table:eq(6) tr:not(:first) td:nth-child(6n+5)').each(function(){
    var ww = [this.innerText, $(this).next().text()];
    a.push(ww);
});
$.post('http://ezi.co.ua/newtab/save.php',{qq: a}, function(r){console.log(r);});