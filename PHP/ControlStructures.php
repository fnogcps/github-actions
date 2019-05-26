<?php

$a = 10;
$b = 25;

print "Valor (a): $a\n";
print "Valor (b): $b\n";

// Estruturas de controle

print "\nExemplo de If, else if, else:\n\n";

if ($a > $b) {
    print "$a é maior que $b";
} else if ($a < $b) {
    print "$a é menor que $b";
} else {
    print "$a é igual a $b";
}

print "\n\nExemplo de switch:\n\n";

$i = 3;

switch ($i) {
case '1':
    print "(caso) 1";
    break;
case '2':
    print "(caso) 2";
    break;
case '3':
    print "(caso) 3";
    break;
default:
    print "(caso) default";
    break;
}

// Estruturas de repetição

$i = 0;

print "\n\nExemplo de while:\n\n";

while ($i <= 10) {
    print "(while) $i \n";
    $i++;
}

print "\nExemplo de do-while:\n\n";

$i = 0;

do {
    $i++;
    print "(do-while) $i \n";
} while ($i <= 3);

print "\nExemplo de for:\n\n";

for ($i=0; $i <= 5; $i++) { 
    print "(for) $i \n";
}

print "\nExemplo de foreach:\n\n";

$arr = array(1, 2, 3, 4);

foreach ($arr as $indice => $valor) {
    print "(foreach) $indice | $valor \n";
}

// Outras estruturas de controle

print "\nExemplo de continue:\n\n";

$i = 0;

while ($i < 5) {
    $i++;
    if ($i == 3) { continue; 
    }
    print "(continue) $i \n";
}

print "\nExemplo de break:\n\n";

$i = 0;

while ($i < 5) {
    $i++;
    print "(break) $i \n";
    if ($i == 3) { break; 
    }
}

print "\nExemplo de goto:\n\n";

goto exemplo;
print 'Olá,';

exemplo:
print 'Mundo!';