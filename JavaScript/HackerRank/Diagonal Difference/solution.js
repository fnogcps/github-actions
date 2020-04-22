/*
 * Diagonal Difference - HackerRank
 *
 * hackerrank.com/challenges/diagonal-difference
 * github.com/fnogcps
 */

function diagonalDifference(arr) {
  let m1 = [],
    m2 = [],
    n = arr.length - 1;

  for (let k = n, i = 0; i <= n; i++) {
    m1.push(arr[i][i]);
    m2.push(arr[k][i]);
    k--;
  }

  let x = m1.reduce((a, b) => a + b, 0);
  let y = m2.reduce((a, b) => a + b, 0);
  return Math.abs(x - y);
}

module.exports = {diagonalDifference};
