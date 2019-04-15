<?php

/*	Variables - PHP (exercise)
	github.com/contatofnog */

// Data types

echo "<h2>Data types</h2>";

$int = 10;                # Integer
$float = 2.0;             # Float
$bool = false;            # Boolean
$null = null;             # Null
$str = 'Hello, world!';   # String
$arr = array();           # Array

echo '<b>($i)</b> ', var_dump($int);
echo '<br><b>($float)</b> ', var_dump($float);
echo '<br><b>($bool)</b> ', var_dump($bool);
echo '<br><b>($null)</b> ', var_dump($null);
echo '<br><b>($str)</b> ', var_dump($str);
echo '<br><b>($arr)</b> ', var_dump($arr);

// Variable variables

echo "<h2>Variable variables</h2>";

$foo = 'baz';
$$foo = 'bar'; 

echo '$foo: '. $foo;
echo '<br>$$foo ($baz): '. $baz;

// Assign by reference

echo "<h2>Assign by reference</h2>";

$foo = 25;
$bar = &$foo; 

echo '$foo: '. $foo;
echo '<br>$bar: '. $bar .
'<br>';

$foo = 30;

echo '<br>$foo: '. $foo;
echo '<br>$bar: '. $bar;

# Resource -> Resources.php
# Object -> Objects.php

// Variable Scope

echo "<h2>Variable Scope</h2>";

// Global scope
$lastname = 'Does';

function setName() {
	// Local scope
	
	global $lastname;
	global $name;

	$name = 'John '. $lastname;
}

setName();
echo 'Name: ', $name;