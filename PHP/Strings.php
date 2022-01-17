<?php

/*
  * [PHP] Strings (exercise)
  * github.com/fnogcps
*/

$str = "word";

// Single quoted
echo '<b>Single quoted:</b> $str';

// Double quoted
echo "<br><b>Double quoted:</b> $str <br>";

echo "<br><b>Upper (strtoupper): </b>". strtoupper($str);
echo "<br><b>Lower (strtolower): </b>". strtolower($str);
echo "<br><b>Reverse (strrev): </b>". strrev($str);
echo "<br><b>Shuffle (str_shuffle): </b>". str_shuffle($str);
echo "<br><b>Part (substr): </b>". substr($str, 3);
echo "<br><b>Pad (str_pad): </b>". str_pad($str, 5, '_', STR_PAD_BOTH);
echo "<br><b>Repeat (str_repeat): </b>". str_repeat($str, 3);
echo "<br><b>Length (strlen): </b>". strlen($str);