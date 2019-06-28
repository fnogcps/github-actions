/*
 * Missing Third Angle - Edabit
 *
 * Write a function that classifies the missing angle as either
 * "acute", "right", or "obtuse" based on its degrees.
 *
 * https://edabit.com/challenge/djyXcJZAuezrSXJ4j
 * github.com/fnogcps
 */

missingAngle = (a, b) =>
  a + b == 90 ? 'right' : a + b < 90 ? 'obtuse' : 'acute';

module.exports = {missingAngle};
