<?php
header('Access-Control-Allow-Origin: *');

$g = !empty($_GET) ? '_GET: '.json_encode($_GET).";\n" : '';
$p = isset($_POST['data']) ? '_POST: '.$_POST['data'].";\n" : '';


file_put_contents(
    "save.txt",
    date('d.m.y H:i')."\n{$g}{$p}_____"."\n",
    FILE_APPEND | LOCK_EX
);


