<?php

/*
  * [PHP] Construtor (exercício)
  * github.com/fnogcps
*/

class Login {
  private $email, $senha, $nome;

  public function __construct($email, $senha, $nome) {
    $this->email = $email;
    $this->senha = $senha;
    $this->nome = $nome;
  }

  public function fazerLogin() {
    if($this->email == "teste@teste.com" && $this->senha == "teste") {
      echo "Olá $this->nome!";
    }
    else { echo "Dados inválidos!"; }
  }
}

$usuario = new Login("teste@teste.com", "teste", "Felipe");
$usuario->fazerLogin();