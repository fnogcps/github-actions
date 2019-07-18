/*
 * Numbers to Arrays and Vice Versa - Edabit
 *
 * Write two functions:
 * toArray(), which converts a number to an array of its digits.
 * toNumber(), which converts an array of digits back to its number.
 *
 * https://edabit.com/challenge/rufYqKzTLvDefFmKa
 * github.com/fnogcps
 */

toArray = a => (a + '').split('').map(a => a * 1);
toNumber = a => a.join('') * 1;
