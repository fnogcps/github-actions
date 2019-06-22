/* 
  * Testing K^K == N? - Edabit
  *
  * Write a function that returns true if k^k == n for input (n, k).
  *
  * https://edabit.com/challenge/giAxQu4vjMRc7dJ2u
  * github.com/fnogcps
*/

kToK = (a, b) => a == Math.pow(b, b)
module.exports = { kToK }
