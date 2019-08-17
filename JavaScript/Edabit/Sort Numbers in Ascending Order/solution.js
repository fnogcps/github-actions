/*
 * Sort Numbers in Ascending Order - Edabit
 *
 * Create a function that takes an array of numbers and returns
 * a new array, sorted in ascending order (smallest to biggest).
 *
 * https://edabit.com/challenge/SS23vniCZ6ssGwsQP
 * github.com/fnogcps
 */

sortNumsAscending = a => (a != null ? a.sort((a, b) => a - b) : []);
