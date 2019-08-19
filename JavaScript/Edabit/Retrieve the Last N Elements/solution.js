/*
 * Retrieve the Last N Elements - Edabit
 *
 * Write a function that retrieves the last n elements from an array.
 *
 * https://edabit.com/challenge/S6zpG8RwDrxaFEQLE
 * github.com/fnogcps
 */

last = (a, b) => (b > a.length ? 'invalid' : a.slice(a.length - b));
module.exports = {last};
