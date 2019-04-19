<?php

/*	Array Functions - PHP (exercise)
	github.com/contatofnog */

$arr = ["strawberry", "blackberry", "raspberry"];
$arr2 = ["pineapple", "lemon", "melon"];

echo '<b>Values ($arr):</b>';
echo "<pre>", print_r($arr), "</pre>";
echo '<b>Values ($arr2):</b>';
echo "<pre>", print_r($arr2), "</pre>";

// Checks if a value exists in an array
echo "<b>Checks if the value 'lemon' exists (in_array): </b>", var_dump(in_array("lemon", $arr)), "<br>";

// Return all the keys or a subset of the keys of an array
echo "<br><b>array_keys: </b>";
echo "<pre>", print_r(array_keys($arr)), "</pre>";

// Return all the values of an array
echo "<b>array_values: </b>";
echo "<pre>", print_r(array_values($arr)), "</pre>";

// Creates an array by using one array for keys and another for its values
$combine = array_combine($arr, $arr2);
echo "<br><b>array_combine: </b>";
echo "<pre>", print_r($combine), "</pre>";

// Fill an array with values
echo "<b>array_fill: </b>";
echo "<pre>", print_r(array_fill(0, 3, $arr[0])), "</pre>";

// Merge one or more arrays
echo "<b>array_merge: </b>";
echo "<pre>", print_r(array_merge($arr, $arr2)), "</pre>";

// Pop the element off the end of array
echo "<b>array_pop: </b>";
echo "<pre>", print_r(array_pop($arr)), "</pre>";

// Shift an element off the beginning of array
echo "<b>array_shift: </b>";
echo "<pre>", print_r(array_shift($arr)), "</pre>";

// Prepend one or more elements to the beginning of an array
array_unshift($arr, "cherry", "apple", "orange", "banana");
echo "<b>array_unshift: </b>";
echo "<pre>", print_r($arr), "</pre>";

// Push one or more elements onto the end of array
array_push($arr2, "cherry", "apple", "orange", "banana");
echo "<b>array_push: </b>";
echo "<pre>", print_r($arr2), "</pre>";

// Creates an array by using one array for keys and another for its values
$numbers = [1, 5, 10];
echo "<br><b>array_sum: </b>", array_sum($numbers), "<br>";

// Counts all the values of an array
echo "<br><b>count: </b>", print_r(count($arr));