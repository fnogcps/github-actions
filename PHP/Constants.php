<?php

/*
  * [PHP] Constantes (exercício)
  * github.com/contatofnog
*/

define(VALUE, 500);

// Exemplo de constante
echo "<h2>Exemplo de constante</h2>";

echo "VALUE é igual a ". VALUE;

if(defined('VALUE')) {
    echo "<p>A constante VALUE foi declarada</p>";
}

// Constantes mágicas
echo "<h2>Constantes mágicas</h2>";

echo "A linha atual do arquivo é ". __LINE__;
echo "<br>O caminho completo e o nome do arquivo é ". __FILE__;

function magicConst()
{
    return __FUNCTION__;
}

echo "<br>O nome da função é ". magicConst();