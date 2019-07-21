/*
 * Fibonacci Sequence - Edabit
 *
 * The Fibonacci Sequence is the sequence of numbers (Fibonacci Numbers)
 * whose sum is the two preceding numbers (e.g. 0, 1, 1, 2, 3, etc).
 * Using 0 and 1 as the starting values, create a function that returns an
 * array containing all of the Fibonacci numbers less than 255.
 *
 * https://edabit.com/challenge/eYBNcjib3xHHrktZm
 * github.com/fnogcps
 */

fibonacciSequence = (a = 0, b = 1, c = [0, 1]) => {
  for (i = 0; i < 6; i++) c.push((a += b), (b += a));
  return c;
};

module.exports = {fibonacciSequence}
