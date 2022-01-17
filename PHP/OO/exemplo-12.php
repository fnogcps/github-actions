<?php

/*
  * [PHP] Associação (exercício)
  * github.com/fnogcps
*/

class Usuario {
  public $nome;
  public $email;
}

class Newsletter {
  public $numero;
  public $freq;
}

$usuario = new Usuario();
$usuario->nome = "Felipe";
$usuario->email = "exemplo@exemplo.com";

$newsletter = new Newsletter();
$newsletter->usuario = $usuario;
$newsletter->freq = 7;

$dados = array(
  'usuario' => $newsletter->usuario->nome,
  'email' => $newsletter->usuario->email,
  'freq' => $newsletter->freq
);

var_dump($dados);