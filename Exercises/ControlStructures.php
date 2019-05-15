<?php

/*
  * [PHP] Estruturas de controle (exercício)
  * github.com/contatofnog
*/

$a = 10;
$b = 25;

echo "Valor (a): $a";
echo "<br>Valor (b): $b";

echo "<h1>Estruturas de condição</h1>";

// If, else if, else
echo "<h2>If, else if, else</h2>";

if ($a > $b) {
    echo "$a é maior que $b";
} else if ($a < $b) {
    echo "$a é menor que $b";
} else {
    echo "$a é igual a $b";
}

// Switch
echo "<h2>Switch</h2>";

$i = 3;

switch ($i) {
case '1':
    echo "<b>[Caso]</b> 1";
    break;
case '2':
    echo "<b>[Caso]</b> 2";
    break;
case '3':
    echo "<b>[Caso]</b> 3";
    break;
default:
    echo "<b>[Caso]</b> ?";
    break;
}

echo "<h1>Estruturas de repetição</h1>";

$i = 0;

// While
while ($i <= 10) {
    echo "<b>[While]</b> $i <br>";
    $i++;
}

// do-while
echo "<h2>do-while</h2>";

$i = 0;

do {
    $i++;
    echo "<b>[do-while]</b> $i <br>";
} while ($i >= 10);

// For
echo "<h2>For</h2>";

for ($i=0; $i <= 5; $i++) { 
    echo "<b>[For]</b> $i <br>";
}

// Foreach
echo "<h2>Foreach</h2>";

$arr = array(1, 2, 3, 4);

foreach ($arr as $indice => $valor) {
    echo "<b>[Foreach]</b> $indice | $valor <br>";
}

echo "<h1>Outras estruturas de controle</h1>";

// Continue
echo '<h2>Continue</h2>';

$i = 0;

while ($i < 5) {
    $i++;
    if ($i == 3) { continue; 
    }
    echo "<b>[Continue]</b> $i <br>";
}

// Break
echo '<h2>Break</h2>';

$i = 0;

while ($i < 5) {
    $i++;
    echo "<b>[Break]</b> $i <br>";
    if ($i == 3) { break; 
    }
}

// Goto
echo '<h2>Goto</h2>';

goto exemplo;
echo '<b>Hello,</b>';

exemplo:
echo '<b>World!</b>';