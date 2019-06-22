/*
 * Profitable Gamble - Edabit
 *
 * Create a function that takes in three arguments (prob, prize, pay)
 * and returns true if prob * prize > pay; otherwise return false.
 *
 * https://edabit.com/challenge/ghbHrRnRiDz9fvQNF
 * github.com/fnogcps
 */

profitableGamble = (a, b, c) => a * b > c;
module.exports = { profitableGamble };
