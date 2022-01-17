<?php

/*
  * [PHP] Const, self e parent (exercício)
  * github.com/fnogcps
*/

class Pessoa {
  const nome = "Felipe";

  public function exibirNome() {
    echo self::nome;
  }
}

class Felipe extends Pessoa {
  const nome = "Nogueira";

  public function exibirNome() {
    echo '<br>'. parent::nome;
  }
}

$pessoa = new Pessoa();
$pessoa->exibirNome();

$felipe = new Felipe();
$felipe->exibirNome();