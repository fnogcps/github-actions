/*
 * Absolute Sum - Edabit
 *
 * Take an array of integers (positive or negative or both)
 * and return the sum of the absolute value of each element.
 *
 * https://edabit.com/challenge/rCmEy2AQYLbRGgKyL
 * github.com/fnogcps
 */

getAbsSum = a => Math.abs(a.reduce((a, b) => Math.abs(a) + Math.abs(b)));
