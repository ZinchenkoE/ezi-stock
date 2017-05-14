<?
function removeAllFiles($dir){
    if ($objs = glob($dir . "/*")) {
        foreach($objs as $obj) {

            is_dir($obj) ? removeAllFiles($obj) : unlink($obj);
        }
    }
    if(is_dir($dir)) rmdir($dir);
}

removeAllFiles(__DIR__.'/../aquasmart/psd');
echo '<pre>'; var_dump(scandir(__DIR__.'/../aquasmart/')); die;
