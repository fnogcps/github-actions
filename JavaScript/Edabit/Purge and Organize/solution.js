/*
 * Purge and Organize - Edabit
 *
 * Given an array of numbers, write a function that returns an array that...
 *
 * Has all duplicate elements removed.
 * Is sorted from least to greatest value.
 *
 * https://edabit.com/challenge/CvPCBc9FtTLix9zov
 * github.com/fnogcps
 */

uniqueSort = a => [...new Set(a).values()].sort((a, b) => a - b);
