<?php

/*
  * [PHP] File Functions (exercise)
  * github.com/contatofnog
*/

$filename = '/srv/www/apache/php/FileFunctions.php';

// file_exists()

if(file_exists($filename)) {echo "$filename existe";}
else {echo "$filename não existe";}

// is_file()

if(is_file($filename)) {echo "<br>$filename é um arquivo";}
else {echo "<br>$filename não é um arquivo";}

// mime_content_type()

echo "<br>MIME: ". mime_content_type($filename);

// basename()

echo "<br>Nome do arquivo: ". basename($filename);

// dirname()

echo "<br>Diretório: ". dirname($filename);

// pathinfo()

echo "<br> Caminho: <pre>";
var_dump(pathinfo($filename));
echo "</pre>";
