/*
 * Filter by Digit Length - Edabit
 *
 * Create a function that filters out an array to include numbers
 * who only have a certain number of digits.
 *
 * https://edabit.com/challenge/RXNybvGHLuvFiWKvq
 * github.com/fnogcps
 */

filterDigitLength = (a, b) => a.filter(a => (a + '').length == b);
module.exports = {filterDigitLength};
