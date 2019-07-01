/*
 * Little Dictionary - Edabit
 *
 * Create a function that takes in an initial word and filters out an array
 * to contain words that start with the same letters as the initial word.
 *
 * https://edabit.com/challenge/p5xNwq2v9ZX7vo3mb
 * github.com/fnogcps
 */

dictionary = (a, b) => b.filter(b => b.startsWith(a));
module.exports = {dictionary};
