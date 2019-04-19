<?php

/*
  * [PHP] Operators (exercise)
  * github.com/contatofnog
*/

$x = 45;
$y = 15;

echo "Value (x): $x";
echo "<br>Value (y): $y";

// Arithmetic operators

echo "<h2>Arithmetic operators</h2>";

echo "Addition: ". ($x + $y);
echo "<br>Subtraction: ". ($x - $ys);
echo "<br>Multiplication: ". ($x * $y);
echo "<br>Division: ". ($x / $y);
echo "<br>Module: ". ($x % $y);
echo "<br>Exponentiation: ". ($x ** $y);

// Comparison operators

echo "<h2>Comparison operators</h2>";

# Equal/Identical

if($x == $y) echo "$x is equal to $y <br>";
if($x === $y) echo "$x is equal to $y, and they are of the same type <br>";

# Not equal/Not identical

if($x != $y) echo "$x is not equal to $y <br>";
if($x !== $y) echo "$x is not equal to $y, or they are not of the same type <br>";

# Greater than

if($x > $y) echo "$x is greater than $y <br>";
if($x >= $y) echo "$x is greater than or equal to $y <br>";

# Less than

if($x < $y) echo "$x is less than $y <br>";
if($x <= $y) echo "$x is less than or equal to $y <br>";

// Increment/Decrement operators

echo "<br>Value (x): $x";
echo "<br>Value (y): $y <br>";

echo "<br><b>[ X ] [Post-increment]</b> ". $x++;
echo "<br><b>[ X ] [Result]</b> $x<br>";

echo "<br><b>[ Y ] [Post-decrement]</b> ". $y--;
echo "<br><b>[ Y ] [Result]</b> $y<br>";

echo "<br><b>[ X ] [Pre-decrement/Result]</b> ". --$x;
echo "<br><b>[ Y ] [Pre-increment/Result]</b> ". ++$y;

// Logical operators

echo "<h2>Logical operators (with Ternary operator)</h2>";

echo "$x > 10 and $x < 50: ", ($x > 10 and $x < 50) ? "<b>True</b>" : "<b>False</b>";
echo "<br>$x > 10 or $x < 50: ", ($x > 10 or $x < 50) ? "<b>True</b>" : "<b>False</b>";
echo "<br>$x > 10 xor $x < 50: ", ($x > 10 xor $x < 50) ? "<b>True</b>" : "<b>False</b>";

// String operators

echo "<h2>String operators</h2>";

# Concatenation assignment

echo "($x .= $y) = ". ($x .= $y);