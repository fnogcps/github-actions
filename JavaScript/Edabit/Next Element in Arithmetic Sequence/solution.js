/* 
  * Next Element in Arithmetic Sequence - Edabit
  *
  * Create a function that returns the next element in an arithmetic sequence.
  * In an arithmetic sequence, each element is formed by adding the same
  * constant to the previous element.
  *
  * https://edabit.com/challenge/dzdoYrTL5vws4dFud
  * github.com/fnogcps
*/

nextElement = a => a.pop() + a[1] - a[0]
module.exports = { nextElement }
