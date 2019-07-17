/*
 * Convert to Decimal Notation - Edabit
 *
 * Create a function to convert an array of percentages
 * to their decimal equivalents.
 *
 * https://edabit.com/challenge/4tLabih2cr5Haw7xo
 * github.com/fnogcps
 */

convertToDecimal = a => a.map(a => parseFloat(a.substring(0, 5)) * 0.01);
