<?php

function Incrementa(&$a)
{
    $a += 10;
}

$a = 90;
Incrementa($a);
print "Incrementa(): $a \n";

function Ola()
{
    $argumentos = func_get_args();
    $quantidade = func_num_args();

    for($i = 0; $i < $quantidade; $i++) {
        print "\nOlá ". $argumentos[$i] ."!";
    }
}

Ola('João', 'Maria', 'José', 'Pedro');
print "\n";

function Fatorial($numero)
{
    if ($numero == 1) {
        return $numero;
    } else {
        return $numero * Fatorial($numero - 1);
    }
}

print "\nFatorial (5): ". Fatorial(5);
print "\nFatorial (7): ". Fatorial(7);
