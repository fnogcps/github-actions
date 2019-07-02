/*
 * Lexicographically First and Last - Edabit
 *
 * Write a function that returns the lexicographically first
 * and lexicographically last rearrangements of a string.
 *
 * https://edabit.com/challenge/m6GYKsereS6JdARGW
 * github.com/fnogcps
 */

firstAndLast = a => [
  [...a].sort().join(''),
  [...a]
    .sort()
    .reverse()
    .join(''),
];

module.exports = {firstAndLast};
