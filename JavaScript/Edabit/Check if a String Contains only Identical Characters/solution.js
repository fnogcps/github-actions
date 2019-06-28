/*
 * Check if a String Contains only Identical Characters - Edabit
 *
 * Write a function that returns true if all characters in a string are
 * identical and false otherwise.
 *
 * https://edabit.com/challenge/bnZzPk2QuWr4w5HuZ
 * github.com/fnogcps
 */

isIdentical = a => a.split('').every(b => b == a[0]);
module.exports = {isIdentical};
