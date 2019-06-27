/*
 * Reverse the Case - Edabit
 *
 * Given a string, create a function to reverse the case.
 * All lower-cased letters should be upper-cased, and vice versa.
 *
 * https://edabit.com/challenge/PTvYKkvf7oytHmJFm
 * github.com/fnogcps
 */

reverseCase = a =>
  [...a]
    .map(a => (a == a.toLowerCase() ? a.toUpperCase() : a.toLowerCase()))
    .join("");

module.exports = { reverseCase };
