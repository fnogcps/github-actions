<?php

/*
  * [PHP] Métodos e atributos estáticos (exercício)
  * github.com/fnogcps
*/

class Pessoa {
  public static $nome;
  
  public static function exibirNome() {
    echo self::$nome;
  }
}

Pessoa::$nome = "Felipe";
Pessoa::exibirNome();