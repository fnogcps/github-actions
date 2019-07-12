/*
 * Recursion: Array Sum - Edabit
 *
 * Write a function that recursively finds the sum of an array.
 *
 * https://edabit.com/challenge/reR3jdfJnREauJj8d
 * github.com/fnogcps
 */

sum = a => (a.length ? a.reduce((a, b) => a + b) : 0);
