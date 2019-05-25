<?php

/*
  * [PHP] Funções (exercício)
  * github.com/contatofnog
*/

function Incrementa(&$a)
{
    $a += 10;
}

$a = 90;
Incrementa($a);
echo "<b>Incrementa():</b> $a <br>";

function Ola()
{
    $argumentos = func_get_args();
    $quantidade = func_num_args();

    for($i = 0; $i < $quantidade; $i++) {
        echo '<br>Olá '. $argumentos[$i] .'!';
    }
}

Ola('João', 'Maria', 'José', 'Pedro');
echo '<br>';

function Fatorial($numero)
{
    if ($numero == 1) {
        return $numero;
    } else {
        return $numero * Fatorial($numero - 1);
    }
}

echo '<br> <b>Fatorial (5):</b>'. Fatorial(5);
echo '<br> <b>Fatorial (7):</b> '. Fatorial(7);
