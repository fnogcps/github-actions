/*
 * Unlucky 13 - Edabit
 *
 * Given a sorted array of numbers, remove any numbers that
 * are divisible by 13. Return the amended array.
 *
 * https://edabit.com/challenge/5232asan2yFuMGnHq
 * github.com/fnogcps
 */

unlucky13 = a => a.filter(a => a % 13);
module.exports = {unlucky13};
