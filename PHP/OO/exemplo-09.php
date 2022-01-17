<?php

/*
  * [PHP] Referência e clonagem de objetos (exercício)
  * github.com/fnogcps
*/

class Gato {
  public $cor;

  public function __clone() {
    $this->cor = $this->cor ." (clone)";
  }
}

$animal = new Gato();
$animal->cor = "cinza";

$clone = clone $animal;

echo "O animal é $animal->cor";
echo "<br>O animal é $clone->cor";