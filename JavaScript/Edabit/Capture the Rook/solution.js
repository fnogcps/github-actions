/*
 * Capture the Rook - Edabit
 *
 * Write a function that returns true if two rooks can attack each other, and
 * false otherwise.
 *
 * https://edabit.com/challenge/H7cs3TS87sFX72mjF
 * github.com/fnogcps
 */

canCapture = ([a, b]) => a[0] == b[0] || a[1] == b[1];
module.exports = { canCapture };
