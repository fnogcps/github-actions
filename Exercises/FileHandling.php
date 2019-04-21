<?php

/*
  * [PHP] File Handling (exercise)
  * github.com/contatofnog
*/

$fp = fopen('test.txt', 'ab');
fwrite($fp, "\nHello, world!");
fclose($fp);

$fp = fopen("test.txt", "r");

while (!feof ($fp)) {
  echo fgets($fp) .'<br>';
} 

fclose($fp);

file_put_contents('test.txt', "1\n2\n3");

$content = file('test.txt');
echo '<br>(file) Line 0> '. $content[0];
echo '<br>(file) Line 2> '. $content[1];
echo '<br>(file) Line 3> '. $content[2];

echo '<br>(file_get_contents) '. file_get_contents('test.txt');