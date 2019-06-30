/*
 * Shuffle the Name - Edabit
 *
 * Create a function that accepts a string (of a persons first and last name)
 * and returns a string with the first and last name swapped.
 *
 * https://edabit.com/challenge/eitMRpuJR3Ls4zQsn
 * github.com/fnogcps
 */

nameShuffle = a =>
  a
    .split(' ')
    .reverse()
    .join(' ');

module.exports = {nameShuffle};
