/*
 * Reverse the Order of Words with Five Letters or More - Edabit
 *
 * Write a function that takes a string of one or more words as an
 * argument and returns the same string, but with all five or more
 * letter words reversed. Strings passed in will consist of only
 * letters and spaces. Spaces will be included only when more than one
 * word is present.
 *
 * https://edabit.com/challenge/wPNzJEJebN2mewcqY
 * github.com/fnogcps
 */

reverse = a =>
  a
    .split(' ')
    .map(a =>
      a.split('').length >= 5
        ? a
            .split('')
            .reverse()
            .join('')
        : a,
    )
    .join(' ');

module.exports = {reverse};
