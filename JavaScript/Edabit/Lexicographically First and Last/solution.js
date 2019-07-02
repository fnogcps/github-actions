/*
 * Lexicographically First and Last - Edabit
 *
 * Create a function replaces all the vowels in
 * a string with a specified character.
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
