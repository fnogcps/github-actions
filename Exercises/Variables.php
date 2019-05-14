<?php

/*
  * [PHP] Variáveis (exercício)
  * github.com/contatofnog
*/

// Tipos de dados
echo "<h2>Tipos de dados</h2>";

$int = 10;                // Inteiro
$float = 2.0;             // Ponto flutuante
$bool = false;            // Lógico
$null = null;             // Nulo
$str = 'Hello, World!';   // String
$arr = array(1, 2, 3);    // Array

echo '<b>Inteiro:</b> ', var_dump($int);
echo '<br> <b>Ponto flutuante:</b> ', var_dump($float);
echo '<br> <b>Lógico:</b> ', var_dump($bool);
echo '<br> <b>Nulo:</b> ', var_dump($null);
echo '<br> <b>String:</b> ', var_dump($str);
echo '<br> <b>Array:</b> ', var_dump($arr);

// Variáveis variáveis
echo "<h2>Variáveis variáveis</h2>";

$foo = 'baz';
$$foo = 'bar'; 

echo '$foo: '. $foo;
echo '<br>$$foo ($baz): '. $baz;

// Atribuição por referência
echo "<h2>Atribuição por referência</h2>";

$foo = 25;
$bar = &$foo; 

echo '$foo: '. $foo;
echo '<br>$bar: '. $bar .
'<br>';

$foo = 30;

echo '<br>$foo: '. $foo;
echo '<br>$bar: '. $bar;

// tipo Resource -> Resources.php
// tipo Object -> Objects.php

// Escopo das variáveis
echo "<h2>Escopo das variáveis</h2>";

// Escopo global
$sobrenome = 'Silva';

function atribuirNome()
{
    
    // Escopo local
    global $sobrenome;
    global $nome;

    $nome = 'João '. $sobrenome;
}

atribuirNome();
echo 'Nome: ', $nome;