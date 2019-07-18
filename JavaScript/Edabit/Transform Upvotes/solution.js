/*
 * Transform Upvotes - Edabit
 *
 * Create a function that transforms a string of upvote counts
 * into an array of numbers. Each k represents a thousand.
 *
 * https://edabit.com/challenge/niTEsddTdE4gs4YGX
 * github.com/fnogcps
 */

transformUpvotes = a =>
  a
    .split(' ')
    .map(a => (a.endsWith('k') ? parseFloat(a.slice(0, 5)) * 1000 : a * 1));

module.exports = {transformUpvotes};
