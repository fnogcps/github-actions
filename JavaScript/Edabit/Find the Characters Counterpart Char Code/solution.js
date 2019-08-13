/*
 * Find the Characters Counterpart Char Code - Edabit
 *
 * Create a function that takes a single character as an argument and
 * returns the char code of its lowercased / uppercased counterpart.
 *
 * https://edabit.com/challenge/fbaLZPNjTvYtY444B
 * github.com/fnogcps
 */

counterpartCharCode = a =>
  a == a.toLowerCase()
    ? a.toUpperCase().charCodeAt()
    : a.toLowerCase().charCodeAt();

module.exports = {counterpartCharCode};
