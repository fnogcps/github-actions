<?php

/*
  * [PHP] Interfaces (exercício)
  * github.com/fnogcps
*/

interface Animal {
  public function Comer();
  public function Andar();
  public function Correr();
  public function Dormir();
}

class Cachorro implements Animal {
  public function Comer() {
    echo "O cachorro está comendo";
  }

  public function Andar() {
    echo "O cachorro está andando";
  }

  public function Correr() {
    echo "O cachorro está correndo";
  }

  public function Dormir() {
    echo "O cachorro está dormindo";
  }
}

$cachorro = new Cachorro;
$cachorro->Comer();