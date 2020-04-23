/*
 * Breaking the Records - HackerRank
 *
 * hackerrank.com/challenges/breaking-best-and-worst-records
 * github.com/fnogcps
 */

function breakingRecords(scores) {
  let hScore = scores[0],
    lScore = scores[0],
    bestRecord = 0,
    worstRecord = 0;

  scores.forEach(e => {
    if (e > hScore) {
      hScore = e;
      bestRecord++;
    } else if (e < lScore) {
      lScore = e;
      worstRecord++;
    }
  });

  return [bestRecord, worstRecord];
}

module.exports = {breakingRecords};
