<?php

/*
  * [PHP] Classes, atributos e métodos (exercício)
  * github.com/fnogcps
*/

class Cachorro {
  public $raca;
  public $cor;

  public function Latir() {
    echo "O cão $this->raca de cor $this->cor, latiu!";
  }
}

$rex = new Cachorro();

$rex->raca = "Yorkshire";
$rex->cor = "Marrom";

$rex->Latir();