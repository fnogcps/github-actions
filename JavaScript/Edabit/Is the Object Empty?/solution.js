/*
 * Is the Object Empty? - Edabit
 *
 * Write a function that returns true if an object is empty,
 * and false otherwise.
 *
 * https://edabit.com/challenge/nGybgqB9agSqvBszF
 * github.com/fnogcps
 */

isEmpty = a => Object.keys(a) < 1;
module.exports = {isEmpty};
