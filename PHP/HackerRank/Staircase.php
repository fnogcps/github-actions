<?php

/*
  * [HackerRank] Staircase (exercise)
  * hackerrank.com/challenges/staircase
  * github.com/fnogcps
*/

function staircase($n) {
    $i = 1;
    $j = $n;

    while($i <= $n) {
        $j--;
        echo str_repeat(" ", $j) . str_repeat("#", $i) ."\n";
        $i++;
    }
}