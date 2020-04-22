/*
 * Plus Minus - HackerRank
 *
 * hackerrank.com/challenges/plus-minus
 * github.com/fnogcps
 */

function plusMinus(arr) {
  let elements = [],
    fr = [];
  elements.push(arr.filter(i => i > 0));
  elements.push(arr.filter(i => i < 0));
  elements.push(arr.filter(i => !i));
  elements.forEach(e => fr.push(+(e.length / arr.length).toFixed(6)));
  return fr;
}

module.exports = {plusMinus};
