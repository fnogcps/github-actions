<?php

/*
  * [PHP] Agregação (exercício)
  * github.com/fnogcps
*/

class Animal {
  public $animal;
  public $raca;

  function __construct($animal, $raca) {
    $this->animal = $animal;
    $this->raca = $raca;
  }
}

class Loja {
  public $animais;

  public function Adicionar(Animal $animal) {
    $this->animais[] = $animal;
  }

  public function Exibir() {
    foreach ($this->animais as $animal) {
      echo "$animal->animal da raça $animal->raca <br>"; }
  }
}

$gato = new Animal("Gato", "Siamês");
$cachorro = new Animal("Cachorro", "Bulldog");

$loja = new Loja();
$loja->Adicionar($gato);
$loja->Adicionar($cachorro);
$loja->Exibir();