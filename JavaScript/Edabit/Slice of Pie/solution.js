/*
 * Slice of Pie - Edabit
 *
 * Create a function that determines whether
 * or not it's possible to split a pie fairly given these three parameters:
 * - Total number of slices.
 * - Number of recipients.
 * - How many slices each person gets.
 *
 * https://edabit.com/challenge/qkNvH9BZLTNtKQvae
 * github.com/fnogcps
 */

equalSlices = (a, b, c) => b * c <= a;
module.exports = {equalSlices};
