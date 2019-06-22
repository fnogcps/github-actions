/* 
  * Odd Up, Even Down - Edabit
  *
  * Create a function that goes through the array, incrementing (+1) 
  * for each odd number and decrementing (-1) for each even number.
  *
  * https://edabit.com/challenge/dWNPtNeQgyn6mS8FA
  * github.com/fnogcps
*/

transform = a => a.map(a => a % 2 ? ++a : --a)
module.exports = { transform }
