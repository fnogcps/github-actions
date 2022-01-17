<?php

/*
  * [PHP] Composição (exercício)
  * github.com/fnogcps
*/

class Cavalo {
  public $nome;
  public $cor;

  public function atribuirNome($nome) {
    $this->nome = $nome;
  }

  public function atribuirCor($cor) {
    $this->cor = $cor;
  }
}

class outraClasse {
  public $cavalo;

  function __construct($nome, $cor) {
    $this->cavalo = new Cavalo();
    $this->cavalo->atribuirNome($nome);
    $this->cavalo->atribuirCor($cor);
  }

  public function exibirCavalo() {
    echo "O cavalo ", $this->cavalo->nome, " é ", $this->cavalo->cor;
  }
}

$cavalo = new outraClasse("Max", "preto");
$cavalo->exibirCavalo();