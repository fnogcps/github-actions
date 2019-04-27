<?php

/*
  * [PHP] Diretory Functions (exercise)
  * github.com/contatofnog
*/

$dir = 'exemplo';

if(mkdir($dir, 0777)) {
  echo "<b>(mkdir)</b> O diretório $dir/ foi criado com sucesso!";
}
else {
  echo "<b>(mkdir)</b> Erro, o diretório $dir/ não foi criado"; 
}

echo '<br> <b>(getcwd)</b> '. getcwd();
chdir('..');
echo '<br> <b>(getcwd) ..</b> '. getcwd();

if(rmdir('exemplo')) {
  echo "<br> <b>(rmdir)</b> O diretório $dir/ foi removido com sucesso!";
}
else {
  echo "<br> <b>(rmdir)</b> Erro, o diretório $dir/ não foi removido";
}