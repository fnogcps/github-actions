/* 
  * Palindrome? - Edabit
  *
  * Given a word, create a function that checks whether it is a palindrome.
  *
  * https://edabit.com/challenge/zvFri3sia4iNPTeqC
  * github.com/fnogcps
*/

checkPalindrome = a => a == a.split("").reverse().join(""), ""
module.exports = { checkPalindrome }
