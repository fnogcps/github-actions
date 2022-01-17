<?php

/*
  * [PHP] Simple Calculator (exercise)
  * github.com/fnogcps
*/

function Addition($a, $b) {
  return ($a + $b);
}

function Subtraction($a, $b) {
  return ($a - $b);
}

function Multiplication($a, $b) {
  return ($a * $b);
}

function Division($a, $b) {
  return ($a / $b);
}

echo '<br><b>Addition: </b>'. Addition(10, 5);
echo '<br><b>Subtraction: </b>'. Subtraction(10, 5);
echo '<br><b>Multiplication: </b>'. Multiplication(10, 5);
echo '<br><b>Division: </b>'. Division(10, 5);