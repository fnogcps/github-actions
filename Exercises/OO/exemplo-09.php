<?php

/*
  * [PHP] Referência e clonagem de objetos (exercício)
  * github.com/contatofnog
*/

class Gato {
  public $cor;

  public function __clone() {
    $this->cor = $this->cor ." (clone)";
  }
}

$animal = new Gato();
$animal->cor = "Cinza";

$clone = clone $animal;

echo '$animal: '. $animal->cor;
echo '<br>$clone: '. $clone->cor;