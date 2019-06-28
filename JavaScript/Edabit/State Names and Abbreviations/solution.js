/*
 * State Names and Abbreviations - Edabit
 *
 * Create a function that filters out an array of state names into two
 * categories based on the second parameter.
 *
 * https://edabit.com/challenge/8fnEAEj5vKNqAXNYA
 * github.com/fnogcps
 */

filterStateNames = (a, b) =>
  b == 'abb' ? a.filter(a => a.length == 2) : a.filter(a => a.length > 2);

module.exports = {filterStateNames};
