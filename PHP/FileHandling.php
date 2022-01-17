<?php

/*
  * [PHP] File Handling (exercise)
  * github.com/fnogcps
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

echo '<br>(file_get_contents) '. file_get_contents('test.txt') .'<br>';

copy('test.txt', 'copy.txt');
rename('copy.txt', 'example.txt');

if(file_exists('example.txt')) {
  echo "<br>example.txt was found!";
}

unlink('example.txt');

if(!file_exists('example.txt')) {
  echo "<br>example.txt was deleted!";
}