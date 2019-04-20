<?php

/*
  * [PHP] Constants (exercise)
  * github.com/contatofnog
*/

// Constant example

define(NUMBER, 500);
echo "NUMBER is equal to ". NUMBER;

if(defined('NUMBER')) {
  echo "<br>NUMBER was declared";
}

// PHP Magic constants

echo "<h2>PHP Magic constants</h2>";

echo "The current line number of the file is ". __LINE__;
echo "<br>The full path and filename of the file is ". __FILE__;

function magicConst() {
	return __FUNCTION__;
}

echo "<br>The function name is ". magicConst();