/*
 * Fix the Error: Filtering out Empty Arrays - Edabit
 *
 * Fix this incorrect code to remove the empty arrays.
 *
 * https://edabit.com/challenge/4weFPnpgS2S5aw4aN
 * github.com/fnogcps
 */

removeEmptyArrays = a => a.filter(a => (a + '').length);
