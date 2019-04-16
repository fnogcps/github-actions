<?php

/*	Control Structures - PHP (exercise)
	github.com/contatofnog */

$a = 10;
$b = 25;

echo "Value (a): $a";
echo "<br>Value (b): $b";

echo "<h2>If, else & elseif statements</h2>";

// If statement

if ($a > $b) {
	echo '$a is greater than $b';
}

// Else if statement

else if ($a < $b) {
	echo '$a is less than $b';
}

// Else if statement

else {
	echo '$a is equal to $b';
}

// While statement

echo "<h2>While statement</h2>";

$i = 0;

while ($i <= 10) {
	echo "<b>[While]</b> $i <br>";
	$i++;
}

// do-while statement

echo "<h2>do-while statement</h2>";

$i = 0;

do {
	$i++;
	echo "<b>[do-while]</b> $i <br>";
} while ($i >= 10);

// For statement

echo "<h2>For statement</h2>";

for ($i=0; $i <= 5; $i++) { 
	echo "<b>[For]</b> $i <br>";
}

// Foreach statement

echo "<h2>Foreach statement</h2>";

$arr = array(1, 2, 3, 4);

foreach ($arr as $key => $value) {
	echo "<b>[Foreach]</b> $key | $value <br>";
}

// Switch statement

echo "<h2>Switch statement</h2>";

$i = 3;

switch ($i) {
	case '1':
		echo "<b>[Case]</b> 1";
		break;
	case '2':
		echo "<b>[Case]</b> 2";
		break;
	case '3':
		echo "<b>[Case]</b> 3";
		break;
	default:
		echo "<b>[Case]</b> ?";
		break;
}

// Continue statement

echo '<h2>Continue statement</h2>';

$i = 0;

while ($i < 5) {
	$i++;
	if ($i == 3) { continue; }
	echo "<b>[Continue]</b> $i <br>";
}

// Break statement

echo '<h2>Break statement</h2>';

$i = 0;

while ($i < 5) {
	$i++;
	echo "<b>[Break]</b> $i <br>";
	if ($i == 3) { break; }
}

// Goto statement

echo '<h2>Goto statement</h2>';

goto example;
echo '<b>Hello,</b>';

example:
echo '<b>World!</b>';