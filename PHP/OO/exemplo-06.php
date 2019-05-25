<?php

/*
  * [PHP] Polimorfismo (exercício)
  * github.com/contatofnog
*/

class Veiculo {
  public function Parar() {
    echo "O veículo parou!";
  }
}

class Carro extends Veiculo {
  public function Parar() {
    echo "O carro parou!";
  }
}

$veiculo = new Carro();
$veiculo->Parar();