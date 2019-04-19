<?php

/*
  * [PHP] Arrays (exercise)
  * github.com/contatofnog
*/

// Numeric array

echo "<h2>Numeric array</h2>";

$numeric = array(1, 2, 3, 4);

foreach($numeric as $key => $value) {
   	echo "[$key] $value <br>";
}

// Associative array

echo "<h2>Associative array</h2>";

$assoc = array('a' => 5, 'b' => 6, 'c' => 7, 'd' => 8);

foreach($assoc as $key => $value) {
   	echo "[$key] $value <br>";
}

// Multidimensional array

echo "<h2>Multidimensional array</h2>";

$multi = array(
	'fruits' => array(
		'apple', 'banana', 'pineapple'
	),

	'juices' => array(
		'orange', 'grape', 'strawberry'
	)
);

foreach($multi['fruits'] as $key => $value) {
	echo "[$key] $value <br>";
}

foreach($multi['juices'] as $key => $value) {
	echo "<br>[$key] $value";
}