/*
 * Product of All Odd Integers - Edabit
 *
 * Create a function that returns the product of all odd integers in an array.
 *
 * https://edabit.com/challenge/4LnwAC3kgTctc7r3k
 * github.com/fnogcps
 */

oddProduct = a => a.filter(a => a % 2).reduce((a, b) => a * b);
module.exports = {oddProduct};
