/* 
  * Generate a Countdown of Numbers in an Array - Edabit
  *
  * Create a function that takes a number as an argument 
  * and returns an array of numbers counting down from this number to zero.
  *
  * https://edabit.com/challenge/xr4Xf28xeSrc7XmCF
  * github.com/fnogcps
*/

countdown = a => [...Array(++a).keys()].reverse()
module.exports = { countdown }
