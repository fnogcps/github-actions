/*
 * Calculate the Mean - Edabit
 *
 * Create a function that takes an array of numbers
 * and returns the mean value.
 *
 * https://edabit.com/challenge/8zBhNfrQv7CWKvcx3
 * github.com/fnogcps
 */

mean = a => +(a.reduce((a, b) => a + b) / a.length).toFixed(2);
