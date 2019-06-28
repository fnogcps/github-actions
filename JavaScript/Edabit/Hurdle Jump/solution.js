/*
 * Hurdle Jump - Edabit
 *
 * Create a function that takes an array of hurdle heights
 * and a jumper's jump height, and determine whether
 * or not the hurdler can clear all the hurdles.
 *
 * https://edabit.com/challenge/Hp9FitGXpKqdCW6Fd
 * github.com/fnogcps
 */

hurdleJump = (a, b) => a.every(a => a <= b);
module.exports = {hurdleJump};
