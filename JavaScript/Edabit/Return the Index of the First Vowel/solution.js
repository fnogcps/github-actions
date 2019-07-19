/*
 * Return the Index of the First Vowel - Edabit
 *
 * Create a function that returns the index
 * of the first vowel in a string.
 *
 * https://edabit.com/challenge/ppBDRwSoqZYcR95Aq
 * github.com/fnogcps
 */

firstVowel = a => a.indexOf(...a.match(/[aeiou]/gi));
