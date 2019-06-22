/* 
  * Fix the Error: Vowel Edition - Edabit
  *
  * Write a function that removes all vowels from a string.
  *
  * https://edabit.com/challenge/KgNMGbXXst7ZdWchR
  * github.com/fnogcps
*/

removeVowels = a => a.replace(/[aeiou]/gi, "")
module.exports = { removeVowels }
