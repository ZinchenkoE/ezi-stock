<?php

file_exists('file.file');
unlink('file.file'); // удаление файла
scandir(__DIR__.'/dir'); // Получает список файлов и каталогов, расположенных по указанному пути
require_once('file.file');

