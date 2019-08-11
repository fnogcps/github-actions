/*
 * Switcharoo - Edabit
 *
 * Create a function that takes a string and returns a new string with its
 * first and last characters swapped, except under three conditions:
 *
 *  1. If the length of the string is less than two, return "Incompatible.".
 *  2. If the argument is not a string, return "Incompatible.".
 *  3. If the first and last characters are the same, return "Two's a pair.".
 *
 * https://edabit.com/challenge/2dcXsuTD68iRK5MiT
 * github.com/fnogcps
 */

flipEndChars = a =>
  a.length < 2 || typeof a != typeof ''
    ? 'Incompatible.'
    : a[0] == a.slice(-1)
    ? "Two's a pair."
    : a.slice(-1) + a.slice(1, -1) + a[0];

module.exports = {flipEndChars};
