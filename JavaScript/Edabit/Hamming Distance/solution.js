/*
 * Hamming Distance - Edabit
 *
 * Create a function that computes the hamming distance between two strings.
 *
 * https://edabit.com/challenge/vCtepsfrE7Nts2a9j
 * github.com/fnogcps
 */

hammingDistance = (a, b, c = 0) => {
  for (i in a) [...a][i] != [...b][i] && c++;
  return c;
};

module.exports = {hammingDistance};
