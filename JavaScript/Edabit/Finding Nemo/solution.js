/*
 * Finding Nemo - Edabit
 *
 * You're given a string of words. You need to find the word "Nemo",
 * and return a string like this:
 * "I found Nemo at [the order of the word you find nemo]!".
 *
 * If you can't find Nemo, return "I can't find Nemo :(".
 *
 * https://edabit.com/challenge/c23dFfNiKbnguSQtq
 * github.com/fnogcps
 */

findNemo = a => {
  b = a.split(' ').indexOf('Nemo') + 1;
  return b ? `I found Nemo at ${b}!` : "I can't find Nemo :(";
};

module.exports = {findNemo};
