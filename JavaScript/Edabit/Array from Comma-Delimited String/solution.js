/*
 * Array from Comma-Delimited String - Edabit
 *
 * Write a function that turns a comma-delimited list into an array of strings.
 *
 * https://edabit.com/challenge/LHTF9ij2FtvwhnzQF
 * github.com/fnogcps
 */

toArray = a => (a ? a.split(', ') : []);
module.exports = {toArray};
