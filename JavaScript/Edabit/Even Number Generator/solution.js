/* 
  * Even Number Generator - Edabit
  *
  * Create a function that finds all even numbers from 1 to the given number.
  *
  * https://edabit.com/challenge/dNZmjoi3Lip2j4emx
  * github.com/fnogcps
*/

findEvenNums = a => [...Array(++a).keys()].filter(b => b && !(b % 2))
module.exports = { findEvenNums }
