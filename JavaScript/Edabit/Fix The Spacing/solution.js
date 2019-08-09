/*
 * Fix The Spacing - Edabit
 *
 * Additional spaces have been added to a sentence.
 * Return the correct sentence by removing them.
 * All words should be separated by one space, and there
 * should be no spaces at the beginning or end of the sentence.
 *
 * https://edabit.com/challenge/YkKJN9ngARPrpD9gL
 * github.com/fnogcps
 */

correctSpacing = a =>
  a
    .split(' ')
    .filter(a => a.trim())
    .join(' ');
