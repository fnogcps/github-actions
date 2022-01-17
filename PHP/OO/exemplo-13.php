<?php

/*
  * [PHP] Abstração (exercício)
  * github.com/fnogcps
*/

abstract class Motor {
    abstract protected function ligarMotor();
    abstract protected function desligarMotor();
    public function trocarPneus() {
        echo "Trocando pneus ...<br>";
    }
}

class motorCarro extends Motor {
    public function ligarMotor() { echo "Ligando o motor do carro ...<br>"; }
    public function desligarMotor() { echo "Desligando o motor do carro ...<br>"; }
}

$carro = new motorCarro();
$carro->ligarMotor();
$carro->desligarMotor();
$carro->trocarPneus();
