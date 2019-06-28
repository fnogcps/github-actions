/*
 * The Farm Problem - Edabit
 *
 * You've got chickens (2 legs), cows (4 legs) and pigs (4 legs) on your farm.
 * Return the total number of legs on your farm.
 *
 * https://edabit.com/challenge/8Qg78sf5SNDEANKti
 * github.com/fnogcps
 */

animals = (a, b, c) => (a *= 2) + (b + c) * 4;
module.exports = {animals};
