/*
 * Largest Swap - Edabit
 *
 * Write a function that takes a two-digit number
 * and determines if it's the largest of two possible digit swaps.
 *
 * https://edabit.com/challenge/hD3euqPHM82Cbr7R8
 * github.com/fnogcps
 */

largestSwap = a => a / 10 > a % 10;
module.exports = { largestSwap };
