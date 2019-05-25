<?php

print "Exemplo de array numérico:\n";

$arrNum = array(1, 2, 3, 4);
foreach($arrNum as $indice => $valor) {
   print "\n[$indice] $valor";
}

print "\n\nExemplo de array associativo:\n";

$arrAssoc = array('a' => 5, 'b' => 6, 'c' => 7, 'd' => 8);
foreach($arrAssoc as $indice => $valor) {
    print "\n[$indice] $valor";
}

print "\n\nExemplo de array multidimensional:\n\n";

$arrMulti = array(
    'frutas' => array(
        'maçã', 'banana', 'abacaxi'
    ),

    'sucos' => array(
        'laranja', 'uva', 'morango'
    )
);

foreach($arrMulti['frutas'] as $indice => $valor) {
  print "[$indice] $valor \n";
}

foreach($arrMulti['sucos'] as $indice => $valor) {
  print "\n[$indice] $valor";
}
