/* 
  * Remove the First and Last Characters - Edabit
  *
  * Create a function that removes the first and last characters from a string.
  *
  * https://edabit.com/challenge/Wq3Q5ewau9Fu2GN9i
  * github.com/fnogcps
*/

removeFirstLast = a => a.length > 2 ? a.slice(1, -1) : a
module.exports = { removeFirstLast }
