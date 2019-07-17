/*
 * How Many Vowels? - Edabit
 *
 * Create a function that takes a string and returns the number (count)
 * of vowels contained within it.
 *
 * https://edabit.com/challenge/3EQGHyiYTNc9LPmhF
 * github.com/fnogcps
 */

countVowels = a => a.match(/[aeiou]/gi).length;
module.exports = {countVowels};
