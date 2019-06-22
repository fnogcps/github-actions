/* 
  * Return First and Last Parameter - Edabit
  *
  * Write two functions:
  * firstArg() should return the first parameter passed in.
  * lastArg() should return the last parameter passed in.
  *
  * Return undefined if the function takes no parameters.
  *
  * https://edabit.com/challenge/ypgJXTXaaSwrFyoTk
  * github.com/fnogcps
*/

firstArg = (...a) => a.shift()
lastArg = (...a) => a.pop()
module.exports = { firstArg, lastArg }
