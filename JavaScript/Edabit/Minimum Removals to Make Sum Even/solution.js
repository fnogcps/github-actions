/*
 * Minimum Removals to Make Sum Even - Edabit
 *
 * Create a function that returns the minimum number of removals
 * to make the sum of all elements in an array even.
 *
 * https://edabit.com/challenge/exMRkWdmmc6hccYiS
 * github.com/fnogcps
 */

minimumRemovals = a => a.reduce((a, b) => a + b) % 2;
