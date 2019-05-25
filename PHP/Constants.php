<?php

define('VALOR', 500);

print "Exemplo de constante:\n";
print "VALOR é igual a ". VALOR;

if(defined('VALOR')) {
    print "\n\n(defined) A constante VALOR foi declarada\n";
} else {
    print "\n\n(defined) A constante VALOR não foi declarada\n";
}

print "\nAlgumas constantes mágicas:\n";

print "\nA linha atual do arquivo é ". __LINE__;
print "\nO caminho completo e o nome do arquivo é ". __FILE__;

function magicConst()
{
    return __FUNCTION__;
}

print "\nO nome da função é ". magicConst();
