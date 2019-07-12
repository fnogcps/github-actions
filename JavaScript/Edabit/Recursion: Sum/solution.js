/*
 * Recursion: Sum - Edabit
 *
 * Write a function that recursively
 * finds the sum of the first n natural numbers.
 *
 * https://edabit.com/challenge/uYQs3cBqPEsk9mdZB
 * github.com/fnogcps
 */

sum = (a, c = []) => {
  for (b = a; b > 0; b--) {
    c.push(b);
  }

  return c.reduce((a, b) => a + b);
};

module.exports = {sum};
