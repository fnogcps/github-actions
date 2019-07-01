/*
 * Filter out Strings from a List - Edabit
 *
 * Create a function which filters out strings from an array
 * and returns a new array containing only integers.
 *
 * https://edabit.com/challenge/KpqeNMpWyrA8rT3Xx
 * github.com/fnogcps
 */

filterList = a => a.filter(a => Number.isInteger(a));
