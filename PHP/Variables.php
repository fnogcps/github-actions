<?php

// Tipos de dados

$int = 10;                // Inteiro
$float = 2.0;             // Ponto flutuante
$bool = false;            // Lógico
$null = null;             // Nulo
$string = 'Olá, Mundo!';  // String
$array = array(1, 2, 3);  // Array

// Variáveis variáveis

$foo = 'baz';
$$foo = 'bar'; 

echo '$foo: '. $foo;
echo PHP_EOL;
echo '$$foo ($baz): '. $baz;

// Atribuição por referência

$foo = 25;
$bar = &$foo; 

echo PHP_EOL;

echo PHP_EOL .'$foo: '. $foo;
echo PHP_EOL .'$bar: '. $bar;

echo PHP_EOL;

$foo = 30;

echo PHP_EOL .'$foo: '. $foo;
echo PHP_EOL .'$bar: '. $bar;

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
echo "\n\nNome: ", $nome;
