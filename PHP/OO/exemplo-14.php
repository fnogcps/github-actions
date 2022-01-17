<?php

/*
  * [PHP] Herança (exercício)
  * github.com/fnogcps
*/

class Pessoa {
  protected $nome;

  public function atribuirNome($nome) {
    $this->nome = $nome;
    echo "Um nome foi atribuído!<br>";
  }

  protected function fazerIntervalo() {
    echo "$this->nome fez uma pausa!<br>";
  }
}

class Aluno extends Pessoa {
  public function iniciarEstudos() {
    echo "$this->nome começou a estudar!<br>";
    $this->fazerIntervalo();
  }
}

$aluno = new Aluno();
$aluno->atribuirNome("Felipe");
$aluno->iniciarEstudos();