/*
 * Product Divisible By Sum? - Edabit
 *
 * Write a function that returns true if the product
 * of an array is divisible by the sum of that same array.
 *
 * https://edabit.com/challenge/aJzvBZgp8nzwSk94A
 * github.com/fnogcps
 */

divisible = a => !(a.reduce(a => a * a) % a.reduce(a => a + a));
module.exports = {divisible};
