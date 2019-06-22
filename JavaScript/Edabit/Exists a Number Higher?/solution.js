/*
 * Exists a Number Higher? - Edabit
 *
 * Write a function that returns true if there exists at least one number
 * that is larger than or equal to n.
 *
 * https://edabit.com/challenge/77zq4RhMgWup22H6d
 * github.com/fnogcps
 */

existsHigher = (a, b) => Math.max(...a) >= b;
module.exports = { existsHigher };
