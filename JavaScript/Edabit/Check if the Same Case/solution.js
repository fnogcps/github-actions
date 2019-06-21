/* 
  * Check if the Same Case - Edabit
  *
  * Create a function that returns true if an input string contains 
  * only uppercase or only lowercase letters.
  *
  * https://edabit.com/challenge/TDpT9tvwJK5uLn98h
  * github.com/fnogcps
*/

sameCase = a => a.toUpperCase() == a || a.toLowerCase() == a
module.exports = { sameCase }
