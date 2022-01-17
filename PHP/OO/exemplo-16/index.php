<?php

/*
  * [PHP] Namespaces (exercício)
  * github.com/fnogcps
*/

require_once 'soma/calcular.php';
require_once 'subtracao/calcular.php';

use soma\Calculo as classSoma;
use subtracao\Calculo as classSubtracao;

$soma = new classSoma();
echo $soma->Soma(10, 10);

echo "<br>";

$subtr = new classSubtracao();
echo $subtr->Subtracao(10, 5);