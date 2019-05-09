<?php

/*
  * [PHP] Operadores (exercício)
  * github.com/contatofnog
*/

$x = 45;
$y = 15;

echo "Valor (x): $x";
echo "<br>Valor (y): $y";

// Operadores aritméticos
echo "<h2>Operadores aritméticos</h2>";

echo "Adição: ". ($x + $y);
echo "<br>Subtração: ". ($x - $y);
echo "<br>Multiplicação: ". ($x * $y);
echo "<br>Divisão: ". ($x / $y);
echo "<br>Módulo: ". ($x % $y);
echo "<br>Exponenciação: ". ($x ** $y);

// Operadores de comparação
echo "<h2>Operadores de comparação</h2>";

# Igual
if($x == $y) echo "$x é igual a $y <br>";

# Idêntico
if($x === $y) echo "$x e $y são iguais e são do mesmo tipo <br>";

# Não igual
if($x != $y) echo "$x não é igual a $y <br>";

# Não idêntico
if($x !== $y) echo "$x e $y não são iguais ou não são tipo <br>";

# Maior que
if($x > $y) echo "$x é maior que $y <br>";

# Maior ou igual
if($x >= $y) echo "$x é maior ou igual a $y <br>";

# Menor que
if($x < $y) echo "$x é menor que $y <br>";

# Menor ou igual
if($x <= $y) echo "$x é menor ou igual a $y <br>";

// Incremento/Decremento
echo "<br> Valor (x): $x";
echo "<br> Valor (y): $y <br>";

echo "<br> <b>[ X ] [Pós-incremento]</b> ". $x++;
echo "<br> <b>[ X ] [Resultado]</b> $x<br>";

echo "<br> <b>[ Y ] [Pós-decremento]</b> ". $y--;
echo "<br> <b>[ Y ] [Resultado]</b> $y<br>";

echo "<br> <b>[ X ] [Pré-decremento/Resultado]</b> ". --$x;
echo "<br> <b>[ Y ] [Pré-incremento/Resultado]</b> ". ++$y;

// Operadores lógicos
echo "<h2>Operadores lógicos (com operador ternário)</h2>";

echo "$x > 10 and $x < 50: ", ($x > 10 and $x < 50) ? "<b>Verdadeiro</b>" : "<b>Falso</b>";
echo "<br> $x > 10 or $x < 50: ", ($x > 10 or $x < 50) ? "<b>Verdadeiro</b>" : "<b>Falso</b>";
echo "<br> $x > 10 xor $x < 50: ", ($x > 10 xor $x < 50) ? "<b>Verdadeiro</b>" : "<b>Falso</b>";

// Operadores de atribuição
echo "<h2>Operadores de atribuição</h2>";

echo "$x += 5: <b>". ($x += 5) ."</b>";
echo "<br> $x -= 5: <b>". ($x -= 5) ."</b>";
echo "<br> $x .= 10: <b>". ($x .= 10) ."</b>";