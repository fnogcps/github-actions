/*
 * Positive Count / Negative Sum - Edabit
 *
 * Create a function that takes an array of positive and negative numbers.
 * Return an array where the first element is the count of positive numbers
 * and the second element is the sum of negative numbers.
 *
 * https://edabit.com/challenge/xXJLZry3vYd4erPct
 * github.com/fnogcps
 */

countPosSumNeg = a =>
  Array.isArray(a) && a.length
    ? [
        a.filter(a => a > 0).length,
        a.filter(a => a < 0).reduce((a, b) => a + b),
      ]
    : [];

module.exports = {countPosSumNeg};
