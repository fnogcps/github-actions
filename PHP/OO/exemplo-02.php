<?php

/*
  * [PHP] Modificadores de acesso - Visibilidade (exercício)
  * github.com/fnogcps
*/

class Cachorro {
  public $nome = "Rex";
  private $raca = "Bull terrier";
  protected $cor = "Branco";

  public function exibirRaca() {
    echo "<br> <b>[Raça]</b> $this->raca";
  }
}

class outraClasse extends Cachorro {
  public function exibirCor() {
    echo "<br> <b>[Cor]</b> $this->cor";
  }
}

$cachorro = new Cachorro();
echo "<b>[Nome]</b> $cachorro->nome";
$cachorro->exibirRaca();

$cor = new outraClasse;
$cor->exibirCor();