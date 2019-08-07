/*
 * Hitting the Jackpot - Edabit
 *
 * Create a function that takes in an array (slot machine outcome)
 * and returns true if all elements in the array are identical,
 * and false otherwise. The array will contain 4 elements.
 *
 * https://edabit.com/challenge/hxyvTffvdT4E238CY
 * github.com/fnogcps
 */

testJackpot = a => new Set(a).size < 2;
module.exports = {testJackpot};
