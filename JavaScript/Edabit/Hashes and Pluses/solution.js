/*
 * Hashes and Pluses - Edabit
 *
 * Create a function that returns the number of hashes and pluses in a string.
 *
 * https://edabit.com/challenge/ydBcGvv3n447nbxCy
 * github.com/fnogcps
 */

hashPlusCount = a => [
  a.split("").filter(a => a.match(/[#]/g)).length,
  a.split("").filter(a => a.match(/[+]/g)).length
];
