/*
 * Birthday Cake Candles - HackerRank
 *
 * hackerrank.com/challenges/birthday-cake-candles
 * github.com/fnogcps
 */

function birthdayCakeCandles(ar) {
  let tcandles = Math.max(...ar);
  return ar.filter(i => i == tcandles).length;
}

module.exports = {birthdayCakeCandles};
