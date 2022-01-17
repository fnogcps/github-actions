<?php

/*
  * [PHP] Funções de diretório (exercício)
  * github.com/fnogcps
*/

$dir = 'exemplo';

if(mkdir($dir, 0777)) {
    echo "<b>(mkdir)</b> O diretório $dir/ foi criado com sucesso!</p>";
} else {
    echo "<b>(mkdir)</b> Erro, o diretório $dir/ não foi criado</p>"; 
}

echo '<p> <b>(getcwd)</b> Diretório atual: '. getcwd() .'</p>';
chdir('..');
echo '<p> <b>(getcwd)</b> Diretório atual: '. getcwd() .'</p>';

if(rmdir('exemplo')) {
    echo "<p> <b>(rmdir)</b> O diretório $dir/ foi removido com sucesso!</p>";
} else {
    echo "<p> <b>(rmdir)</b> Erro, o diretório $dir/ não foi removido</p>";
}