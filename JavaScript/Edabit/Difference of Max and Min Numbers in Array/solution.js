/* 
  * Difference of Max and Min Numbers in Array - Edabit
  *
  * Create a function that takes an array and returns the difference 
  * between the smallest and biggest numbers.
  *
  * https://edabit.com/challenge/FsxxkqGi7uepZ4g59
  * github.com/fnogcps
*/

differenceMaxMin = a => Math.max(...a) - Math.min(...a)
module.exports = { differenceMaxMin }
