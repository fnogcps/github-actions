<?php

/*
  * [PHP] Getters e setters (exercício)
  * github.com/fnogcps
*/

class Login {

  public $email;
  public $pass;

  public function atribuirLogin($e) {
    $this->email = $e;
  }

  public function getLogin() {
    echo $this->email;
  }
}

$usuario = new Login();
$usuario->atribuirLogin('teste@exemplo.com');
$usuario->getLogin();