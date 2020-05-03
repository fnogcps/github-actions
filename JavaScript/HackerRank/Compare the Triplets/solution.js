/*
 * Compare the Triplets - HackerRank
 *
 * hackerrank.com/challenges/compare-the-triplets
 * github.com/fnogcps
 */

function compareTriplets(a, b) {
  let anaPoints = 0,
    bobPoints = 0;

  for (let i = 0; i <= 3; i++) {
    a[i] > b[i] && anaPoints++;
    a[i] < b[i] && bobPoints++;
  }

  return [anaPoints, bobPoints];
}

module.exports = {compareTriplets};
