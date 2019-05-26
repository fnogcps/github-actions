<?php

$frutas = ["morango", "acerola", "framboesa"];
$frutas2 = ["abacaxi", "limão", "melão"];

print "Valores de frutas (primeiro array):\n\n";
print_r($frutas);

print "\nValores de frutas (segundo array):\n\n";
print_r($frutas2); 

print "\nCheca se o valor 'limão' existe no array:\n\n";
var_dump(in_array("limão", $frutas2));

print "\nTodos os índices de frutas (primeiro array):\n\n";
print_r(array_keys($frutas));

print "\nTodos os valores de frutas (primeiro array):\n\n";
print_r(array_values($frutas));

print "\nExemplo de um array combinado:\n\n";
$combine = array_combine($frutas, $frutas2);
print_r($combine);

print "\nExemplo de um array preenchido:\n\n";
print_r(array_fill(0, 3, $frutas[0]));

print "\nExemplo de um array fundido:\n\n";
print_r(array_merge($frutas, $frutas2));

echo "\nRetirando o primeiro valor do array (primeiro array): ", array_shift($frutas);
echo "\nRetirando o último valor do array (segundo array): ", array_pop($frutas2);


array_push($frutas, "pão", "queijo", "farinha", "ovo");
echo "\n\nAdicionando outros produtos ao array (primeiro array):\n\n";
print_r($frutas);

array_unshift($frutas2, "cereja", "maçã", "laranja", "banana");
echo "\nAdicionando mais frutas ao array (segundo array):\n\n";
print_r($frutas2);

echo "\nSomando os índices do array (primeiro array): ", array_sum(array_keys($frutas));
echo "\nContando os valores do array (segundo array): ", count($frutas2);