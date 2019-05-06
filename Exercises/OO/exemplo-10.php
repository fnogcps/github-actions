<?php

/*
  * [PHP] Composição (exercício)
  * github.com/contatofnog
*/

class Cavalo {
  public $nome;
  public $cor;

  public function setNome($nome) {
    $this->nome = $nome;
  }

  public function setCor($cor) {
    $this->cor = $cor;
  }
}

class outraClasse {
  public $cavalo;

  function __construct($nome, $cor) {
    $this->cavalo = new Cavalo();
    $this->cavalo->setNome($nome);
    $this->cavalo->setCor($cor);
  }

  public function exibirCavalo() {
    echo "O cavalo ", $this->cavalo->nome, " é ", $this->cavalo->cor;
  }
}

$cavalo = new outraClasse("Max", "preto");
$cavalo->exibirCavalo();