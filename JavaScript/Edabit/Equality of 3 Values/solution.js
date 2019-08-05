/*
 * Equality of 3 Values - Edabit
 *
 * Create a function that takes three integer arguments (a, b, c)
 * and returns the number of equal values.
 *
 * https://edabit.com/challenge/PKiTjA7SLK99ZZ8GK
 * github.com/fnogcps
 */

equal = (a, b, c, d = new Set([a, b, c]).size) => (d == 1 ? 3 : d == 3 ? 0 : 2);
module.exports = {equal};
