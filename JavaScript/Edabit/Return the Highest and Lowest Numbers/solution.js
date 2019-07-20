/*
 * Return the Highest and Lowest Numbers - Edabit
 *
 * Create a function that accepts a string of space separated numbers
 * and returns the highest and lowest number (as a string).
 *
 * https://edabit.com/challenge/PBXe4hLP3mbbMEFt8
 * github.com/fnogcps
 */

highLow = a => `${Math.max(...a.split(' '))} ${Math.min(...a.split(' '))}`;
module.exports = {highLow};
