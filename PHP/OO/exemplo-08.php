<?php

/*
  * [PHP] Tratamento de exceções (exercício)
  * github.com/fnogcps
*/

class Mercado {
  public $saldo;
 
  public function verificarSaldo() {
    if($this->saldo < 5.0) {
      throw new Exception("Saldo insuficiente!", 1);
    }
    else {
      echo "Você possui saldo!";
    }
  }
}

$compra = new Mercado();
$compra->saldo = 3.5;

try {$compra->verificarSaldo();}
catch (Exception $e) {
  echo $e->getMessage();
}