<?php

/*
  * [PHP] Getters e Setters (exercício)
  * github.com/contatofnog
*/

class Login {

  public $email;
  public $pass;

  public function setLogin($e) {
    $this->email = $e;
  }

  public function getLogin() {
    echo $this->email;
  }
}

$usuario = new Login();
$usuario->setLogin('teste@exemplo.com');
$usuario->getLogin();