/*
 * Total Volume - Edabit
 *
 * Given an array of boxes, create a function that returns
 * the total volume of all those boxes combined together.
 * A box is represented by an array with three elements:
 * length, width and height.
 *
 * https://edabit.com/challenge/Dq8kbbsLYyG9are5Z
 * github.com/fnogcps
 */

totalVolume = (...a) =>
  a.map(a => a.reduce((a, b) => a * b)).reduce((a, b) => a + b);
