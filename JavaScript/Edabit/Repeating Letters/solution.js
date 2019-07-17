/*
 * Repeating Letters - Edabit
 *
 * Create a function that takes a string and returns a string
 * in which each character is repeated once.
 *
 * https://edabit.com/challenge/Mc6Xi4PRw7fDzeMDB
 * github.com/fnogcps
 */

doubleChar = a => [...a].map(b => b.repeat(2)).join('');
