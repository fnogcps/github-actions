<?php

$x = 45;
$y = 15;

print "Valor (x): $x \n";
print "Valor (y): $y \n";

// Operadores aritméticos
echo "\n Adição: ". ($x + $y);
echo "\n Subtração: ". ($x - $y);
echo "\n Multiplicação: ". ($x * $y);
echo "\n Divisão: ". ($x / $y);
echo "\n Módulo: ". ($x % $y);
echo "\n Exponenciação: ". ($x ** $y) ."\n";

// Operadores de comparação
if($x == $y) {
    echo "\n $x é igual a $y";
}
if($x === $y) {
    echo "\n $x e $y são iguais e são do mesmo tipo";
}
if($x != $y) {
    echo "\n $x não é igual a $y";
}
if($x !== $y) {
    echo "\n $x e $y não são iguais ou não são tipo";
}
if($x > $y) {
    echo "\n $x é maior que $y";
}
if($x >= $y) {
    echo "\n $x é maior ou igual a $y";
}
if($x < $y) {
    echo "\n $x é menor que $y";
}
if($x <= $y) {
    echo "\n $x é menor ou igual a $y";
}

// Incremento/Decremento
echo "\n\n Valor (x): $x";
echo "\n Valor (y): $y \n";

echo "\n [ X ] [Pós-incremento] ". $x++;
echo "\n [ X ] [Resultado] $x \n";

echo "\n [ Y ] [Pós-decremento] ". $y--;
echo "\n [ Y ] [Resultado] $y \n";

echo "\n [ X ] [Pré-decremento/Resultado] ". --$x;
echo "\n [ Y ] [Pré-incremento/Resultado] ". ++$y;

// Operadores lógicos (com operador ternário)
echo "\n\n $x > 10 and $x < 50: ", ($x > 10 and $x < 50) ? "Verdadeiro" : "Falso";
echo "\n $x > 10 or $x < 50: ", ($x > 10 or $x < 50) ? "Verdadeiro" : "Falso";
echo "\n $x > 10 xor $x < 50: ", ($x > 10 xor $x < 50) ? "Verdadeiro" : "Falso";

// Operadores de atribuição
echo "\n $x += 5: ". ($x += 5) ."";
echo "\n $x -= 5: ". ($x -= 5) ."";
echo "\n $x .= 10: ". ($x .= 10) ."";