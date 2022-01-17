<?php

/*
  * [HackerRank] Compare the Triplets (exercise)
  * hackerrank.com/challenges/compare-the-triplets
  * github.com/fnogcps
*/

$a = [5, 6, 7];
$b = [3, 6, 10];

function compareTriplets($a, $b) {

    $pointsA = 0;
    $pointsB = 0;

    for($i = 0; $i <= 2; $i++) {
	    if ($a[$i] > $b[$i]) {
	    	$pointsA++;
	    }
	    else if ($a[$i] < $b[$i]) {
	    	$pointsB++;
	    }
	}
    return [$pointsA, $pointsB];
}