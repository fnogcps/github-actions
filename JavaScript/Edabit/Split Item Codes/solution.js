/*
 * Split Item Codes - Edabit
 *
 * Create a function that splits these strings into their alphabetic
 * and numeric parts.
 *
 * https://edabit.com/challenge/Trog78Qz4bGNLFh6M
 * github.com/fnogcps
 */

splitCode = a => [
  a
    .split('')
    .filter(a => !Number.isInteger(+a))
    .join(''),
  +a
    .split('')
    .filter(a => Number.isInteger(+a))
    .join(''),
];
