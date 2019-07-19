/*
 * Sort an Array by String Length - Edabit
 *
 * Create a function that takes an array of strings and return an array,
 * sorted from shortest to longest.
 *
 * https://edabit.com/challenge/Gz27eKkMcLarzE5Rj
 * github.com/fnogcps
 */

sortByLength = a => a.sort((a, b) => a.length - b.length);
module.exports = {sortByLength};
