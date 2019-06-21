/* 
  * Check Factors - Edabit
  *
  * Write a function that returns true if all integers in an array are factors
  * of a number, and false otherwise.
  *
  * https://edabit.com/challenge/k5k3aXWp7aibft74n
  * github.com/fnogcps
*/

checkFactors = (a, b) => !(b % a.pop())
module.exports = { checkFactors }
