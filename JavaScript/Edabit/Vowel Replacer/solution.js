/*
 * Vowel Replacer - Edabit
 *
 * Create a function replaces all the vowels in
 * a string with a specified character.
 *
 * https://edabit.com/challenge/5FhabpvT3FF75kgCi
 * github.com/fnogcps
 */

replaceVowels = (a, b) => a.replace(/[aeiou]/g, b);
module.exports = { replaceVowels };
