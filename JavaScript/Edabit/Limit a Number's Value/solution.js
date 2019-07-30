/*
 * Limit a Number's Value - Edabit
 *
 * Create a function that takes three number arguments — one number as an
 * input and two additional numbers representing the endpoints of a closed
 * range — and return the number limited to this range.
 *
 * https://edabit.com/challenge/ZwQJM6FsRsWd3Bm6g
 * github.com/fnogcps
 */

limitNumber = (a, b, c) => (a > b && a < c ? a : a > b && a > c ? c : b);
module.exports = {limitNumber};
