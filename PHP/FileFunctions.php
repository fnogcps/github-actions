<?php

/*
  * [PHP] File Functions (exercício)
  * github.com/fnogcps
*/

$arquivo = '/srv/www/apache/php/FileFunctions.php';

// Verifica se o arquivo existe

if(file_exists($arquivo)) {
    echo "$arquivo existe";
} else {
    echo "$arquivo não existe";
}

// Verifica se o arquivo existe

if(is_file($arquivo)) {
    echo "<br>$arquivo é um arquivo";
} else {
    echo "<br>$arquivo não é um arquivo";
}

echo "<br>Nome do arquivo: ". basename($arquivo);
echo "<br>Diretório (com nome do arquivo): ". dirname($arquivo);

echo "<br> Caminho: <pre>";
var_dump(pathinfo($arquivo));
echo "</pre>";
