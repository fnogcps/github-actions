/*
 * Alphabet Soup - Edabit
 *
 * Create a function that takes a string
 * and returns a string with its letters in alphabetical order.
 *
 * https://edabit.com/challenge/bHDbMWpdeNaw23jqT
 * github.com/fnogcps
 */

AlphabetSoup = a => [...a].sort().join('');
module.exports = {AlphabetSoup};
