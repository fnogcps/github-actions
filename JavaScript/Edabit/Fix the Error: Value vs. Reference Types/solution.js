/*
 * Fix the Error: Value vs. Reference Types - Edabit
 *
 * Create a function that returns true if two arrays
 * contain identical values, and false otherwise.
 *
 * https://edabit.com/challenge/3jZyJTfsXTXXwAQkA
 * github.com/fnogcps
 */

checkEquals = (a, b) => a + 0 == b + 0;
module.exports = {checkEquals};
