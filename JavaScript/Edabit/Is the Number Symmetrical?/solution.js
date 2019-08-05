/*
 * Is the Number Less than or Equal to Zero? - Edabit
 *
 * Create a function that takes a number as an argument and returns
 * true or false depending on whether the number is symmetrical or not.
 * A number is symmetrical when it is the same as its reverse.
 *
 * https://edabit.com/challenge/at7jF9Y7SmPGyD92u
 * github.com/fnogcps
 */

isSymmetrical = a =>
  (a + '')
    .split('')
    .reverse()
    .join('') == a;

module.exports = {isSymmetrical};
