/*
 * Find Unique Positive Numbers from Array - Edabit
 *
 * Write a function that takes an array and returns
 * a new array with unique positive (more than 0) numbers.
 *
 * https://edabit.com/challenge/Fx2NdxGzayHpfu8pS
 * github.com/fnogcps
 */

uniqueArr = a => [...new Set(a.filter(a => a > 0))];
module.exports = {uniqueArr};
