/*
 * Strange Pair - Edabit
 *
 * Create a function that returns true if a pair of strings
 * constitutes a strange pair, and false otherwise.
 *
 * https://edabit.com/challenge/WBdjg7zgiqi6L5zsL
 * github.com/fnogcps
 */

isStrangePair = (a, b) => a[--a.length] == b[0] && b[--b.length] == a[0];
module.exports = {isStrangePair};
