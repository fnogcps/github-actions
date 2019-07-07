/*
 * Reverse the Order of a String - Edabit
 *
 * Create a function that takes a string as its argument
 * and returns the string in reversed order.
 *
 * https://edabit.com/challenge/oS3wCwLWsDqvs7XKd
 * github.com/fnogcps
 */

reverse = a =>
  a
    .split('')
    .reverse()
    .join('');

module.exports = {reverse};
