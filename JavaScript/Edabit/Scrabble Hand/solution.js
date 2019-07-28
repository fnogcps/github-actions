/*
 * Scrabble Hand - Edabit
 *
 * Given an array of scrabble tiles, create a function that outputs
 * the maximum possible score a player can achieve by summing up the
 * total number of points for all the tiles in their hand.
 * Each hand contains 7 scrabble tiles.
 *
 * https://edabit.com/challenge/i6YqzHcSiPiEQKjeX
 * github.com/fnogcps
 */

maximumScore = a => a.map(a => a.score).reduce((a, b) => a + b)
