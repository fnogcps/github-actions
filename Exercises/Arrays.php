<?php

/*
  * [PHP] Arrays (exercício)
  * github.com/contatofnog
*/

// Array numérico
echo "<h2>Array numérico</h2>";

$arrNum = array(1, 2, 3, 4);
foreach($arrNum as $indice => $valor) {
   echo "[$indice] $valor <br>";
}

// Array associativo
echo "<h2>Array associativo</h2>";

$arrAssoc = array('a' => 5, 'b' => 6, 'c' => 7, 'd' => 8);
foreach($arrAssoc as $indice => $valor) {
   echo "[$indice] $valor <br>";
}

// Array multidimensional 
echo "<h2>Array multidimensional</h2>";

$arrMulti = array(
  'frutas' => array(
    'maçã', 'banana', 'abacaxi'
),

  'sucos' => array(
    'laranja', 'uva', 'morango'
)
);

foreach($arrMulti['frutas'] as $indice => $valor) {
  echo "[$indice] $valor <br>";
}

foreach($arrMulti['sucos'] as $indice => $valor) {
  echo "<br>[$indice] $valor";
}